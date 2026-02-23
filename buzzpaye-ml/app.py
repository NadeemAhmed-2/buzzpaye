from flask import Flask, jsonify
from pymongo import MongoClient
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from bson import ObjectId

app = Flask(__name__)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["buzzpaye"]

@app.route("/recommend/<campaign_id>", methods=["GET"])
def recommend_influencers(campaign_id):
    try:
        campaign = db.campaigns.find_one({"_id": ObjectId(campaign_id)})
    except:
        return jsonify({"error": "Invalid campaign ID"}), 400

    if not campaign:
        return jsonify({"error": "Campaign not found"}), 404

    campaign_category = str(campaign.get("category", "")).lower()
    campaign_location = str(campaign.get("location", "")).lower()

    campaign_text = (
        campaign_category + " " +
        str(campaign.get("objective", "")).lower() + " " +
        campaign_location
    )

    # Get all influencers
    influencers = list(db.influencerprofiles.find())
    if not influencers:
        return jsonify({"error": "No influencers found"}), 404

    # -------- STRICT CATEGORY FILTER --------
    filtered_influencers = []
    for inf in influencers:
        inf_category = str(inf.get("category", "")).lower()
        if inf_category == campaign_category:
            filtered_influencers.append(inf)

    if not filtered_influencers:
        return jsonify({"error": "No influencers in this category"}), 404

    influencer_texts = []
    influencer_ids = []
    influencer_objects = []

    for inf in filtered_influencers:
        text = (
            str(inf.get("category", "")).lower() + " " +
            str(inf.get("bio", "")).lower() + " " +
            str(inf.get("location", "")).lower()
        )
        influencer_texts.append(text)
        influencer_ids.append(str(inf["_id"]))
        influencer_objects.append(inf)

    # -------- TEXT SIMILARITY --------
    vectorizer = TfidfVectorizer()
    vectors = vectorizer.fit_transform([campaign_text] + influencer_texts)
    similarities = cosine_similarity(vectors[0:1], vectors[1:]).flatten()

    results = []

    for i, inf in enumerate(influencer_objects):
        base_similarity = similarities[i]

        # -------- LOCATION MATCH --------
        inf_location = str(inf.get("location", "")).lower()
        location_match = 1 if inf_location == campaign_location else 0

        # -------- REVIEW SCORE --------
        ratings = list(db.ratings.find({
            "influencerId": inf["user"]
        }))

        category_ratings = []

        for r in ratings:
            rated_campaign = db.campaigns.find_one({
                "_id": r["campaignId"]
            })

            if not rated_campaign:
                continue

            rated_category = str(
                rated_campaign.get("category", "")
            ).lower()

            if rated_category == campaign_category:
                category_ratings.append(r["rating"])

        if category_ratings:
            avg_rating = sum(category_ratings) / len(category_ratings)
            review_score = avg_rating / 5.0  # normalize 1–5 → 0–1
        else:
            review_score = 0

        # -------- FINAL SCORE --------
        final_score = (
            0.6 * base_similarity +
            0.2 * location_match +
            0.2 * review_score
        )

        results.append({
            "influencerId": influencer_ids[i],
            "score": float(final_score)
        })

    results.sort(key=lambda x: x["score"], reverse=True)

    return jsonify(results[:10])


if __name__ == "__main__":
    app.run(port=5001, debug=True)
