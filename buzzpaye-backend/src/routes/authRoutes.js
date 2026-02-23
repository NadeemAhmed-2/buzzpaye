// const express = require("express");
// const { registerUser, loginUser } = require("../controllers/authController");
// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);


// module.exports = router;


const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { registerUser, loginUser, getCurrentUser } = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);

// ✅ Get current logged-in user
router.get("/me", protect, getCurrentUser);

module.exports = router;
