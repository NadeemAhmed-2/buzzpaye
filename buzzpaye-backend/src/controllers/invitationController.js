// // // src/controllers/invitationController.js
// // const Invitation = require("../models/Invitation");
// // const Campaign = require("../models/Campaign");
// // const mongoose = require("mongoose");

// // const Influencer = require("../models/InfluencerProfile");

// // exports.sendInvitation = async (req, res) => {
// //   try {
// //     const { brandId, influencerId, campaignId } = req.body;

// //     // Prevent duplicates
// //     const existingInvite = await Invitation.findOne({
// //       brandId,
// //       influencerId,
// //       campaignId,
// //     });

// //     if (existingInvite)
// //       return res.status(400).json({ message: "Invitation already sent!" });

// //     // Create new invite
// //     const invite = await Invitation.create({
// //       brandId,
// //       influencerId,
// //       campaignId,
// //       status: "pending",
// //     });

// //     // ✅ Populate influencer and campaign details before sending response
// //     const populatedInvite = await invite.populate([
// //       { path: "campaignId", select: "campaignName" },
// //       {
// //         path: "influencerId",
// //         populate: { path: "influencerProfile", select: "name category bio" },
// //       },
// //     ]);

// //     res.status(201).json(populatedInvite);
// //   } catch (err) {
// //     console.error("Error sending invitation:", err);
// //     res.status(500).json({ message: "Server error", err });
// //   }
// // };

// // // ✅ Get all invitations for an influencer (by userId)
// // exports.getInvitationsByInfluencer = async (req, res) => {
// //   try {
// //     const influencerId = req.params.influencerId; // this is the User ID
// //     console.log("Fetching invitations for influencer (user) ID:", influencerId);

// //     if (!influencerId || !mongoose.Types.ObjectId.isValid(influencerId)) {
// //       return res.status(400).json({ message: "Invalid influencerId" });
// //     }

// //     const invites = await Invitation.find({ influencerId })
// //       .populate({
// //         path: "campaignId",
// //         select: "campaignName createdBy",
// //         populate: { path: "createdBy", select: "name" },
// //       })
// //       .populate("brandId", "name");

// //     console.log("Invitations found:", invites.length);
// //     res.status(200).json(invites);
// //   } catch (err) {
// //     console.error("Error fetching influencer invitations:", err);
// //     res.status(500).json({ message: "Error fetching influencer invitations", err });
// //   }
// // };

// // // ✅ For Brand Dashboard
// // exports.getInvitationsByBrand = async (req, res) => {
// //   try {
// //     const invites = await Invitation.find({ brandId: req.params.brandId })
// //       .populate("campaignId", "campaignName")
// //       .populate({
// //         path: "influencerId",
// //         populate: {
// //           path: "influencerProfile", // nested populate
// //           select: "name category bio",
// //         },
// //       });

// //     res.status(200).json(invites);
// //   } catch (err) {
// //     console.error("Error fetching brand invitations:", err);
// //     res.status(500).json({ message: "Error fetching brand invitations", err });
// //   }
// // };

// // exports.updateInvitationStatus = async (req, res) => {
// //   try {
// //     const { inviteId } = req.params;
// //     const { status } = req.body;

// //     const invite = await Invitation.findByIdAndUpdate(
// //       inviteId,
// //       { status },
// //       { new: true }
// //     )
// //     .populate("campaignId", "campaignName")
// //     .populate("brandId", "name");

// //     res.status(200).json(invite);
// //   } catch (err) {
// //     res.status(500).json({ message: "Error updating invitation status", err });
// //   }
// // };

// const Invitation = require("../models/Invitation");
// const Campaign = require("../models/Campaign");
// const mongoose = require("mongoose");
// const Influencer = require("../models/InfluencerProfile");

// // ✅ Brand sends an invite
// exports.sendInvitation = async (req, res) => {
//   try {
//     const { brandId, influencerId, campaignId } = req.body;

//     // Prevent duplicates
//     const existingInvite = await Invitation.findOne({
//       brandId,
//       influencerId,
//       campaignId,
//     });

//     if (existingInvite)
//       return res.status(400).json({ message: "Invitation already sent!" });

//     // Create new invite
//     const invite = await Invitation.create({
//       brandId,
//       influencerId,
//       campaignId,
//       status: "pending",
//     });

//     // Populate influencer and campaign details
//     const populatedInvite = await invite.populate([
//       { path: "campaignId", select: "campaignName" },
//       {
//         path: "influencerId",
//         populate: { path: "influencerProfile", select: "name category bio" },
//       },
//     ]);

//     res.status(201).json(populatedInvite);
//   } catch (err) {
//     console.error("❌ Error sending invitation:", err);
//     res.status(500).json({ message: "Server Error", error: err.message });
//   }
// };

// // ✅ Get all invitations for an influencer
// exports.getInvitationsByInfluencer = async (req, res) => {
//   try {
//     const influencerId = req.params.influencerId;
//     console.log("Fetching invitations for influencer:", influencerId);

//     if (!mongoose.Types.ObjectId.isValid(influencerId)) {
//       return res.status(400).json({ message: "Invalid influencerId" });
//     }

//     const invites = await Invitation.find({ influencerId })
//       .populate({
//         path: "campaignId",
//         select: "campaignName createdBy",
//         populate: { path: "createdBy", select: "name" },
//       })
//       .populate("brandId", "name");

//     console.log("✅ Invitations found:", invites.length);
//     res.status(200).json(invites);
//   } catch (err) {
//     console.error("❌ Error fetching influencer invitations:", err);
//     res
//       .status(500)
//       .json({ message: "Error fetching influencer invitations", error: err.message });
//   }
// };

// // ✅ Get all invitations for a brand
// exports.getInvitationsByBrand = async (req, res) => {
//   try {
//     const brandId = req.params.brandId;

//     if (!mongoose.Types.ObjectId.isValid(brandId)) {
//       return res.status(400).json({ message: "Invalid brandId" });
//     }

//     const invites = await Invitation.find({ brandId })
//       .populate("campaignId", "campaignName")
//       .populate({
//         path: "influencerId",
//         populate: {
//           path: "influencerProfile",
//           select: "name category bio",
//         },
//       });

//     res.status(200).json(invites);
//   } catch (err) {
//     console.error("❌ Error fetching brand invitations:", err);
//     res
//       .status(500)
//       .json({ message: "Error fetching brand invitations", error: err.message });
//   }
// };

// // ✅ Update status (accept/decline)
// exports.updateInvitationStatus = async (req, res) => {
//   try {
//     const { inviteId } = req.params;
//     const { status } = req.body;

//     if (!mongoose.Types.ObjectId.isValid(inviteId)) {
//       return res.status(400).json({ message: "Invalid inviteId" });
//     }

//     const invite = await Invitation.findByIdAndUpdate(
//       inviteId,
//       { status },
//       { new: true }
//     )
//       .populate("campaignId", "campaignName")
//       .populate("brandId", "name");

//     res.status(200).json(invite);
//   } catch (err) {
//     console.error("❌ Error updating invitation status:", err);
//     res
//       .status(500)
//       .json({ message: "Error updating invitation status", error: err.message });
//   }
// };

const mongoose = require("mongoose");
const Invitation = require("../models/Invitation");
const Campaign = require("../models/Campaign");
const Chat = require("../models/Chat"); // ✅ new import
const Influencer = require("../models/InfluencerProfile");

// ✅ Brand sends an invite
exports.sendInvitation = async (req, res) => {
  try {
    const { brandId, influencerId, campaignId } = req.body;

    // Prevent duplicates
    const existingInvite = await Invitation.findOne({
      brandId,
      influencerId,
      campaignId,
    });

    if (existingInvite) {
      return res.status(400).json({ message: "Invitation already sent!" });
    }

    // Create new invite
    const invite = await Invitation.create({
      brandId,
      influencerId,
      campaignId,
      status: "pending",
    });

    // Populate influencer and campaign details
    const populatedInvite = await invite.populate([
      { path: "campaignId", select: "campaignName" },
      {
        path: "influencerId",
        populate: { path: "influencerProfile", select: "name category bio" },
      },
    ]);

    res.status(201).json(populatedInvite);
  } catch (err) {
    console.error("❌ Error sending invitation:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// ✅ Get all invitations for an influencer
exports.getInvitationsByInfluencer = async (req, res) => {
  try {
    const influencerId = req.params.influencerId;
    console.log("Fetching invitations for influencer:", influencerId);

    if (!mongoose.Types.ObjectId.isValid(influencerId)) {
      return res.status(400).json({ message: "Invalid influencerId" });
    }

    // const invites = await Invitation.find({ influencerId })
    //   .populate({
    //     path: "campaignId",
    //     select: "campaignName createdBy",
    //     populate: { path: "createdBy", select: "name" },
    //   })
    //   .populate("brandId", "name");

    const invites = await Invitation.find({ influencerId })
      .populate({
        path: "campaignId",
        select:
          "campaignName brandName location objective category type createdBy",
        populate: { path: "createdBy", select: "name" },
      })
      .populate("brandId", "name");

    console.log("✅ Invitations found:", invites.length);
    res.status(200).json(invites);
  } catch (err) {
    console.error("❌ Error fetching influencer invitations:", err);
    res.status(500).json({
      message: "Error fetching influencer invitations",
      error: err.message,
    });
  }
};

// ✅ Get all invitations for a brand
exports.getInvitationsByBrand = async (req, res) => {
  try {
    const brandId = req.params.brandId;

    if (!mongoose.Types.ObjectId.isValid(brandId)) {
      return res.status(400).json({ message: "Invalid brandId" });
    }

    const invites = await Invitation.find({ brandId })
      .populate("campaignId", "campaignName")
      .populate({
        path: "influencerId",
        populate: {
          path: "influencerProfile",
          select: "name category bio",
        },
      });

    res.status(200).json(invites);
  } catch (err) {
    console.error("❌ Error fetching brand invitations:", err);
    res.status(500).json({
      message: "Error fetching brand invitations",
      error: err.message,
    });
  }
};

// ✅ Update status (accept/decline) and auto-create chat if accepted
exports.updateInvitationStatus = async (req, res) => {
  try {
    const { inviteId } = req.params;
    const { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(inviteId)) {
      return res.status(400).json({ message: "Invalid inviteId" });
    }

    // Update invitation status
    const invite = await Invitation.findByIdAndUpdate(
      inviteId,
      { status },
      { new: true }
    )
      // .populate("campaignId", "campaignName")
      .populate(
        "campaignId",
        "campaignName brandName location objective category type"
      )

      .populate("brandId", "name")
      .populate("influencerId", "name");

    if (!invite) {
      return res.status(404).json({ message: "Invitation not found" });
    }

    // ✅ When status becomes accepted → auto-create chat
    // if (status === "accepted") {
    //   const existingChat = await Chat.findOne({
    //     brandId: invite.brandId._id,
    //     influencerId: invite.influencerId._id,
    //     campaignId: invite.campaignId._id,
    //   });

    //   if (!existingChat) {
    //     const newChat = await Chat.create({
    //       brandId: invite.brandId._id,
    //       influencerId: invite.influencerId._id,
    //       campaignId: invite.campaignId._id,
    //       messages: [],
    //     });

    //     console.log("💬 New chat created:", newChat._id);
    //   } else {
    //     console.log("✅ Chat already exists for this invite.");
    //   }
    // }

    if (status === "accepted") {
      const brandId = invite.brandId._id;
      const influencerId = invite.influencerId._id;
      const campaignId = invite.campaignId._id;

      // Find chat for this brand + influencer pair
      let chat = await Chat.findOne({
        $or: [
          { brandId, influencerId },
          { brandId: influencerId, influencerId: brandId }, // handles reversed order
        ],
      });

      if (!chat) {
        // Create chat for first time
        chat = await Chat.create({
          brandId,
          influencerId,
          campaigns: [campaignId], // store campaign in array
          messages: [],
        });

        console.log("💬 New chat created:", chat._id);
      } else {
        // Add new campaign if not already inside chat
        if (!chat.campaigns.map(String).includes(String(campaignId))) {
          chat.campaigns.push(campaignId);
          await chat.save();
          console.log("➕ Campaign added to existing chat:", chat._id);
        } else {
          console.log("⚠️ Campaign already added earlier");
        }

        console.log("✅ Existing chat reused:", chat._id);
      }
    }

    res.status(200).json(invite);
  } catch (err) {
    console.error("❌ Error updating invitation status:", err);
    res.status(500).json({
      message: "Error updating invitation status",
      error: err.message,
    });
  }
};
