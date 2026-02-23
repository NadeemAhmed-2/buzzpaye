const express = require("express");
const router = express.Router();
const BrandProfile = require("../models/BrandProfile");
const InfluencerProfile = require("../models/InfluencerProfile");

// 🏢 Get brand profile by userId
router.get("/brand/byUser/:userId", async (req, res) => {
  try {
    const profile = await BrandProfile.findOne({ user: req.params.userId });
    if (!profile)
      return res.status(404).json({ error: "Brand profile not found" });
    res.json(profile);
  } catch (err) {
    console.error("Error fetching brand profile:", err);
    res.status(500).json({ error: "Failed to fetch brand profile" });
  }
});

// 🎤 Get influencer profile by userId
router.get("/influencer/byUser/:userId", async (req, res) => {
  try {
    const profile = await InfluencerProfile.findOne({ user: req.params.userId });
    if (!profile)
      return res.status(404).json({ error: "Influencer profile not found" });
    res.json(profile);
  } catch (err) {
    console.error("Error fetching influencer profile:", err);
    res.status(500).json({ error: "Failed to fetch influencer profile" });
  }
});

module.exports = router;
