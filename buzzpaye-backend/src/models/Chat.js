const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    influencerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    campaignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
      required: true,
    },
    messages: [
      {
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);

// const mongoose = require("mongoose");

// const chatSchema = new mongoose.Schema(
//   {
//     brandId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     influencerId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     // Store all related campaigns inside a list
//     campaigns: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Campaign",
//       },
//     ],

//     messages: [
//       {
//         sender: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "User",
//         },
//         text: String,
//         createdAt: {
//           type: Date,
//           default: Date.now,
//         },
//       },
//     ],
//   },
//   { timestamps: true }
// );

// // ❗ Ensure ONE chat per brand-influencer pair
// chatSchema.index({ brandId: 1, influencerId: 1 }, { unique: true });

// module.exports = mongoose.model("Chat", chatSchema);


// // models/Chat.js
// const mongoose = require("mongoose");

// const messageSubSchema = new mongoose.Schema(
//   {
//     sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     text: { type: String, required: true },
//     isSeen: { type: Boolean, default: false },
//     isEdited: { type: Boolean, default: false },
//     createdAt: { type: Date, default: Date.now },
//   },
//   { _id: true }
// );

// const chatSchema = new mongoose.Schema(
//   {
//     brandId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     influencerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

//     // keep a list of related campaigns (so one chat can reference many campaigns)
//     campaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],

//     // messages live here
//     messages: [messageSubSchema],
//   },
//   { timestamps: true }
// );

// // ensure uniqueness: only one chat per brand+influencer pair
// chatSchema.index({ brandId: 1, influencerId: 1 }, { unique: true });

// module.exports = mongoose.model("Chat", chatSchema);

