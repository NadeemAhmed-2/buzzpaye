const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const mongoose = require("mongoose");

const Invitation = require("../models/Invitation"); // ✅ Missing import fixed

const {
  sendInvitation,
  getInvitationsByBrand,
  getInvitationsByInfluencer,
  updateInvitationStatus,
} = require("../controllers/invitationController");

// Brand sends an invite
router.post("/send", protect, sendInvitation);

// Get all invites for a brand
router.get("/brand/:brandId", protect, getInvitationsByBrand);

// Get all invites for an influencer
router.get("/influencer/:influencerId", protect, getInvitationsByInfluencer);

// Update status (accept / decline)
router.patch("/:inviteId", protect, updateInvitationStatus);

// ✅ Get accepted invitations for chat system
router.get("/accepted/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    // Validate userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    // Find accepted invitations involving this user
    const invites = await Invitation.find({
      status: "accepted",
      $or: [{ brandId: userId }, { influencerId: userId }],
    })
      .populate("brandId", "name email")
      .populate("influencerId", "name email")
      .populate(
        "campaignId",
        "campaignName brandName location objective category type"
      );
    // match your Campaign model field

    res.status(200).json(invites);
  } catch (err) {
    console.error("❌ Error fetching accepted invitations:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

module.exports = router;
