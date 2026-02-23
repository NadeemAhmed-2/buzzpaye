// // const mongoose = require("mongoose");

// // const influencerProfileSchema = new mongoose.Schema({
// //   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
// //   name: { type: String, required: true },
// //   username: { type: String, required: true, unique: true },
// //   bio: { type: String },
// //   category: { type: String },
// //   socialLinks: {
// //     instagram: { type: String },
// //     youtube: { type: String },
// //     twitter: { type: String },
// //     other: { type: String }
// //   },
// //   images: [{ type: String }],
// //   analytics: {
// //     campaignsParticipated: { type: Number, default: 0 },
// //     totalReach: { type: Number, default: 0 },
// //     totalEarnings: { type: Number, default: 0 }
// //   }
// // }, { timestamps: true });

// // module.exports = mongoose.model("InfluencerProfile", influencerProfileSchema);



// const mongoose = require("mongoose");

// const influencerProfileSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     name: { type: String, required: true },
//     username: { type: String, required: true, unique: true },
//     bio: { type: String },
//     category: { type: String },
//     socialLinks: {
//       instagram: { type: String },
//       youtube: { type: String },
//       twitter: { type: String },
//       other: { type: String },
//     },
//     images: [{ type: String }],

//     // ✅ New optional price field
//     price: {
//       type: {
//         type: String,
//         enum: ["Story", "Post", "In-Visit"],
//         default: "",
//       },
//       amount: { type: Number, default: 0 },
//     },

//     analytics: {
//       campaignsParticipated: { type: Number, default: 0 },
//       totalReach: { type: Number, default: 0 },
//       totalEarnings: { type: Number, default: 0 },
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model(
//   "InfluencerProfile",
//   influencerProfileSchema
// );






const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["Story", "Post", "In-Visit"],
      trim: true,
      default: "",
    },
    amount: { type: Number, default: 0 },
  },
  { _id: false } // no separate _id for price items (optional)
);

const influencerProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    bio: { type: String },
    category: { type: String },
    socialLinks: {
      instagram: { type: String },
      youtube: { type: String },
      twitter: { type: String },
      other: { type: String },
    },
    images: [{ type: String }],
    // ✅ Multiple pricing entries
    prices: { type: [priceSchema], default: [] },

    analytics: {
      campaignsParticipated: { type: Number, default: 0 },
      totalReach: { type: Number, default: 0 },
      totalEarnings: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InfluencerProfile", influencerProfileSchema);
