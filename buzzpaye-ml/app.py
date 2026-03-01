# from flask import Flask, jsonify
# from pymongo import MongoClient
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.metrics.pairwise import cosine_similarity
# from bson import ObjectId
# import os
# app = Flask(__name__)

# # MongoDB connection
# MONGO_URI = os.environ.get("MONGO_URI")
# client = MongoClient(MONGO_URI)
# db = client["buzzpaye"]

# @app.route("/test-db")
# def test_db():
#     try:
#         campaigns = list(db.campaigns.find())
#         return jsonify({
#             "campaign_count": len(campaigns),
#             "first_campaign": str(campaigns[0]["_id"]) if campaigns else None
#         })
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
    
# @app.route("/")
# def home():
#     return jsonify({"message": "BuzzPaye ML Service Running 🚀"})

# @app.route("/recommend/<campaign_id>", methods=["GET"])
# def recommend_influencers(campaign_id):
#     try:
#         campaign = db.campaigns.find_one({"_id": ObjectId(campaign_id)})
#         print("Campaign ID received:", campaign_id)
#         print("Campaign found:", campaign)

#         if not campaign:
#             return jsonify({"error": "Campaign not found"}), 404

#         # your remaining logic here...

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500
    
#     campaign_category = str(campaign.get("category", "")).lower()
#     campaign_location = str(campaign.get("location", "")).lower()

#     campaign_text = (
#         campaign_category + " " +
#         str(campaign.get("objective", "")).lower() + " " +
#         campaign_location
#     )

#     # Get all influencers
#     influencers = list(db.influencerprofiles.find())
#     if not influencers:
#         return jsonify({"error": "No influencers found"}), 404

#     # -------- STRICT CATEGORY FILTER --------
#     filtered_influencers = []
#     for inf in influencers:
#         inf_category = str(inf.get("category", "")).lower()
#         if inf_category == campaign_category:
#             filtered_influencers.append(inf)

#     if not filtered_influencers:
#         return jsonify({"error": "No influencers in this category"}), 404

#     influencer_texts = []
#     influencer_ids = []
#     influencer_objects = []

#     for inf in filtered_influencers:
#         text = (
#             str(inf.get("category", "")).lower() + " " +
#             str(inf.get("bio", "")).lower() + " " +
#             str(inf.get("location", "")).lower()
#         )
#         influencer_texts.append(text)
#         influencer_ids.append(str(inf["_id"]))
#         influencer_objects.append(inf)

#     # -------- TEXT SIMILARITY --------
#     vectorizer = TfidfVectorizer()
#     vectors = vectorizer.fit_transform([campaign_text] + influencer_texts)
#     similarities = cosine_similarity(vectors[0:1], vectors[1:]).flatten()

#     results = []

#     for i, inf in enumerate(influencer_objects):
#         base_similarity = similarities[i]

#         # -------- LOCATION MATCH --------
#         inf_location = str(inf.get("location", "")).lower()
#         location_match = 1 if inf_location == campaign_location else 0

#         # -------- REVIEW SCORE --------
#         ratings = list(db.ratings.find({
#             "influencerId": inf["user"]
#         }))

#         category_ratings = []

#         for r in ratings:
#             rated_campaign = db.campaigns.find_one({
#                 "_id": r["campaignId"]
#             })

#             if not rated_campaign:
#                 continue

#             rated_category = str(
#                 rated_campaign.get("category", "")
#             ).lower()

#             if rated_category == campaign_category:
#                 category_ratings.append(r["rating"])

#         if category_ratings:
#             avg_rating = sum(category_ratings) / len(category_ratings)
#             review_score = avg_rating / 5.0  # normalize 1–5 → 0–1
#         else:
#             review_score = 0

#         # -------- FINAL SCORE --------
#         final_score = (
#             0.6 * base_similarity +
#             0.2 * location_match +
#             0.2 * review_score
#         )

#         results.append({
#             "influencerId": influencer_ids[i],
#             "score": float(final_score)
#         })

#     results.sort(key=lambda x: x["score"], reverse=True)

#     return jsonify(results[:10])

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=10000)




from flask import Flask, jsonify
from pymongo import MongoClient
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from bson import ObjectId
from bson.errors import InvalidId
import os

app = Flask(__name__)

# ------------------ MongoDB Connection ------------------

MONGO_URI = os.environ.get("MONGO_URI")

if not MONGO_URI:
    raise Exception("MONGO_URI not set in environment variables")

client = MongoClient(MONGO_URI)
db = client["buzzpaye"]


# ------------------ Health Check ------------------

@app.route("/")
def home():
    return jsonify({"message": "BuzzPaye ML Service Running 🚀"})


@app.route("/test-db")
def test_db():
    try:
        campaigns = list(db.campaigns.find())
        return jsonify({
            "campaign_count": len(campaigns),
            "first_campaign": str(campaigns[0]["_id"]) if campaigns else None
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ------------------ Recommendation API ------------------

@app.route("/recommend/<campaign_id>", methods=["GET"])
def recommend_influencers(campaign_id):
    try:
        # ---------- Validate ObjectId ----------
        try:
            campaign = db.campaigns.find_one({"_id": ObjectId(campaign_id)})
        except InvalidId:
            return jsonify({"error": "Invalid campaign ID"}), 400

        if not campaign:
            return jsonify({"error": "Campaign not found"}), 404

        # ---------- Campaign Text ----------
        campaign_category = str(campaign.get("category", "")).lower()
        campaign_location = str(campaign.get("location", "")).lower()
        campaign_objective = str(campaign.get("objective", "")).lower()

        campaign_text = f"{campaign_category} {campaign_objective} {campaign_location}"

        # ---------- Get Influencers ----------
        influencers = list(db.influencerprofiles.find())

        if not influencers:
            return jsonify({"error": "No influencers found"}), 404

        # ---------- Strict Category Filter ----------
        filtered_influencers = [
            inf for inf in influencers
            if str(inf.get("category", "")).lower() == campaign_category
        ]

        if not filtered_influencers:
            return jsonify({"error": "No influencers in this category"}), 404

        # ---------- Prepare Text ----------
        influencer_texts = []
        influencer_objects = []

        for inf in filtered_influencers:
            text = (
                str(inf.get("category", "")).lower() + " " +
                str(inf.get("bio", "")).lower() + " " +
                str(inf.get("location", "")).lower()
            )
            influencer_texts.append(text)
            influencer_objects.append(inf)

        # Prevent empty vocabulary error
        if not campaign_text.strip():
            return jsonify({"error": "Campaign text empty"}), 400

        if not any(text.strip() for text in influencer_texts):
            return jsonify({"error": "Influencer text empty"}), 400

        # ---------- TF-IDF Similarity ----------
        vectorizer = TfidfVectorizer()
        vectors = vectorizer.fit_transform([campaign_text] + influencer_texts)
        similarities = cosine_similarity(vectors[0:1], vectors[1:]).flatten()

        results = []

        for i, inf in enumerate(influencer_objects):
            base_similarity = float(similarities[i])

            # Location boost
            inf_location = str(inf.get("location", "")).lower()
            location_match = 1 if inf_location == campaign_location else 0

            final_score = (
                0.8 * base_similarity +
                0.2 * location_match
            )

            results.append({
                "influencerId": str(inf["_id"]),
                "score": float(final_score)
            })

        results.sort(key=lambda x: x["score"], reverse=True)

        return jsonify(results[:10])

    except Exception as e:
        print("Recommendation ERROR:", str(e))
        return jsonify({"error": str(e)}), 500


# ------------------ Run Server ------------------

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)