const express = require("express");
const router = express.Router();

const { getRecommendations } = require("../controllers/recommendationController");

// Add this line
router.get("/:id/recommend", getRecommendations);
router.get("/test", (req, res) => {
  res.send("Recommendation route working");
});


module.exports = router;


