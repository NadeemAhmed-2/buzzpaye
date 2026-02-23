const express = require("express");
const router = express.Router();
const {
  saveRating,
  getInfluencerRatings,
  getBrandRatings
} = require("../controllers/ratingController");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, saveRating);
router.get("/influencer/:influencerId", getInfluencerRatings);
router.get("/brand/:brandId", protect, getBrandRatings);

module.exports = router;
