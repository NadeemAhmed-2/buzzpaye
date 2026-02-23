const Rating = require("../models/Rating");
const mongoose = require("mongoose");

// Save or update rating
exports.saveRating = async (req, res) => {
  try {
    const { brandId, influencerId, campaignId, rating } = req.body;

    if (!brandId || !influencerId || !campaignId || !rating) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // Check if rating already exists
    let existing = await Rating.findOne({
      brandId,
      influencerId,
      campaignId,
    });

    if (existing) {
      existing.rating = rating;
      await existing.save();
      return res.json(existing);
    }

    const newRating = await Rating.create({
      brandId,
      influencerId,
      campaignId,
      rating,
    });

    res.status(201).json(newRating);
  } catch (err) {
    console.error("Error saving rating:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get ratings for influencer
exports.getInfluencerRatings = async (req, res) => {
  try {
    const { influencerId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(influencerId)) {
      return res.status(400).json({ message: "Invalid influencerId" });
    }

    const ratings = await Rating.find({
      influencerId: new mongoose.Types.ObjectId(influencerId),
    })
      .populate("brandId", "name")
      .populate("campaignId", "campaignName brandName");

    console.log("Fetched ratings:", ratings);

    res.json(ratings);
  } catch (err) {
    console.error("Error fetching ratings:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getBrandRatings = async (req, res) => {
  try {
    const { brandId } = req.params;

    const ratings = await Rating.find({ brandId });
    res.json(ratings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
