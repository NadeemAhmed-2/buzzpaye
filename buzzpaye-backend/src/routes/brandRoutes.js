// const express = require("express");
// const router = express.Router();
// const brandController = require("../controllers/brandController");

// // Create or update brand profile
// router.post("/", brandController.upsertProfile);

// // Get brand profile by userId
// router.get("/:userId", brandController.getProfile);

// module.exports = router;



const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brandController");
const protect = require("../middleware/authMiddleware"); // protect route if user must be logged in

// Create or update brand profile
router.post("/", protect, brandController.upsertProfile);

// Get logged-in user's profile
router.get("/me", protect, brandController.getMyProfile);

// Get brand profile by userId (optional, public)
router.get("/:userId", brandController.getProfile);

router.delete("/image/:index", protect, brandController.deleteImage);


module.exports = router;
