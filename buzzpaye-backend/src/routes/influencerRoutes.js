// const express = require("express");
// const router = express.Router();
// const influencerController = require("../controllers/influencerController");

// // Create or update influencer profile
// router.post("/", influencerController.upsertProfile);

// // Get influencer profile by userId
// router.get("/:userId", influencerController.getProfile);

// module.exports = router;




// const express = require("express");
// const router = express.Router();
// const influencerController = require("../controllers/influencerController");
// const { protect } = require("../middleware/authMiddleware");

// // Create or update influencer profile
// router.post("/", protect, influencerController.upsertProfile);

// // Get influencer profile for logged-in user
// router.get("/me", protect, influencerController.getProfile);

// module.exports = router;



const express = require("express");
const router = express.Router();
const influencerController = require("../controllers/influencerController");
const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post("/", protect, upload.array("images", 5), influencerController.upsertProfile); // max 5 files
router.post("/", protect, influencerController.upsertProfile);
router.get("/me", protect, influencerController.getMyProfile);

router.get("/all", influencerController.getAllInfluencers); // Public
router.get("/:id", influencerController.getInfluencerById); // Public

module.exports = router;

