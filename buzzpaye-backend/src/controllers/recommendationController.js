const axios = require("axios");
const InfluencerProfile = require("../models/InfluencerProfile");

exports.getRecommendations = async (req, res) => {
  try {
    const campaignId = req.params.id;

    // Call ML API
    const mlRes = await axios.get(
      `http://127.0.0.1:5001/recommend/${campaignId}`
    );

    const results = mlRes.data;

    const influencerIds = results.map((r) => r.influencerId);

    const influencers = await InfluencerProfile.find({
      _id: { $in: influencerIds },
    }).populate("user", "name email");

    const finalResults = influencers.map((inf) => {
      const match = results.find(
        (r) => r.influencerId === inf._id.toString()
      );

      return {
        ...inf.toObject(),
        score: match ? match.score : 0,
      };
    });

    finalResults.sort((a, b) => b.score - a.score);
    res.json(finalResults);
  } catch (err) {
    console.error("Recommendation error:", err.message);
    res.status(500).json({ message: "Failed to get recommendations" });
  }
};
