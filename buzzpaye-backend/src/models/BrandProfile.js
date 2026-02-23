const mongoose = require("mongoose");

const brandProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  company: { type: String },
  website: { type: String },
  location: { type: String },
  images: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model("BrandProfile", brandProfileSchema);
