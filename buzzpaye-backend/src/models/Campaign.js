// const mongoose = require("mongoose");

// const campaignSchema = new mongoose.Schema(
//   {
//     brandName: {
//       type: String,
//       required: true,
//     },
//     location: {
//       type: String,
//       required: true,
//     },
//     objective: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//       enum: [
//         "Entertainment",
//         "Food & Beverages",
//         "Fashion & Lifestyle",
//         "Shopping & Retail",
//         "Travel & Tourism",
//       ],
//     },
//     type: {
//       type: String,
//       required: true,
//       enum: ["Social Media Post", "Story", "In-Visit"],
//     },
//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Campaign = mongoose.model("Campaign", campaignSchema);

// module.exports = Campaign;



const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema(
  {
    campaignName: {
      type: String,
      required: true,
      trim: true,
    },
    brandName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    objective: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Entertainment",
        "Food & Beverages",
        "Fashion & Lifestyle",
        "Shopping & Retail",
        "Travel & Tourism",
      ],
    },
    type: {
      type: String,
      required: true,
      enum: ["Social Media Post", "Story", "In-Visit"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;
