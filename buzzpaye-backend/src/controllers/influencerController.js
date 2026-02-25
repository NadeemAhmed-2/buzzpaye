// //const InfluencerProfile = require("../models/InfluencerProfile");

// // // Create or update profile
// // exports.upsertProfile = async (req, res) => {
// //   try {
// //     const { user, name, username, bio, category, socialLinks, images } = req.body;

// //     let profile = await InfluencerProfile.findOne({ user });
// //     if (profile) {
// //       // Update
// //       profile.name = name || profile.name;
// //       profile.username = username || profile.username;
// //       profile.bio = bio || profile.bio;
// //       profile.category = category || profile.category;
// //       profile.socialLinks = socialLinks || profile.socialLinks;
// //       profile.images = images || profile.images;
// //       await profile.save();
// //       return res.json(profile);
// //     }

// //     // Create new
// //     profile = new InfluencerProfile({ user, name, username, bio, category, socialLinks, images });
// //     await profile.save();
// //     res.status(201).json(profile);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // // Get profile by user ID
// // exports.getProfile = async (req, res) => {
// //   try {
// //     const profile = await InfluencerProfile.findOne({ user: req.params.userId });
// //     if (!profile) return res.status(404).json({ message: "Profile not found" });
// //     res.json(profile);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // Upsert profile
// // exports.upsertProfile = async (req, res) => {
// //   try {
// //     const userId = req.user._id; // from JWT
// //     const { name, username, bio, category, socialLinks, images } = req.body;

// //     let profile = await InfluencerProfile.findOne({ user: userId });
// //     if (profile) {
// //       profile.name = name || profile.name;
// //       profile.username = username || profile.username;
// //       profile.bio = bio || profile.bio;
// //       profile.category = category || profile.category;
// //       profile.socialLinks = socialLinks || profile.socialLinks;
// //       profile.images = images || profile.images;
// //       await profile.save();
// //       return res.json(profile);
// //     }

// //     profile = new InfluencerProfile({
// //       user: userId,
// //       name,
// //       username,
// //       bio,
// //       category,
// //       socialLinks,
// //       images,
// //     });
// //     await profile.save();
// //     res.status(201).json(profile);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // // Get profile
// // exports.getProfile = async (req, res) => {
// //   try {
// //     const profile = await InfluencerProfile.findOne({ user: req.user._id });
// //     if (!profile) return res.status(404).json({ message: "Profile not found" });
// //     res.json(profile);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // exports.upsertProfile = async (req, res) => {
// //   try {
// //     const { name, category, socialLinks, images } = req.body;
// //     const userId = req.user._id;

// //     // Check if profile exists
// //     let profile = await InfluencerProfile.findOne({ user: userId });

// //     if (!profile) {
// //       // Auto-generate username
// //       const username = name.toLowerCase().replace(/\s+/g, "") + Math.floor(Math.random() * 1000);

// //       profile = new InfluencerProfile({
// //         user: userId,
// //         name,
// //         username,
// //         category,
// //         socialLinks,
// //         images,
// //       });
// //       await profile.save();
// //       return res.status(201).json(profile);
// //     }

// //     // Update existing
// //     profile.name = name || profile.name;
// //     profile.category = category || profile.category;
// //     profile.socialLinks = socialLinks || profile.socialLinks;
// //     profile.images = images || profile.images;

// //     await profile.save();
// //     res.json(profile);
// //   } catch (err) {
// //     console.error("🔥 Error saving influencer profile:", err);
// //     res.status(500).json({ message: err.message });
// //   }
// // };

// // // Get profile of logged-in user
// // exports.getMyProfile = async (req, res) => {
// //   try {
// //     const userId = req.user._id; // assuming you have auth middleware
// //     const profile = await InfluencerProfile.findOne({ user: userId });
// //     if (!profile) return res.status(404).json({ message: "Profile not found" });
// //     res.json(profile);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // const InfluencerProfile = require("../models/InfluencerProfile");

// // // Create or update influencer profile
// // exports.upsertProfile = async (req, res) => {
// //   try {
// //     const { name, category, socialLinks, images, price } = req.body; // ✅ include price
// //     const userId = req.user._id;

// //     let profile = await InfluencerProfile.findOne({ user: userId });

// //     if (!profile) {
// //       const username =
// //         name.toLowerCase().replace(/\s+/g, "") +
// //         Math.floor(Math.random() * 1000);

// //       profile = new InfluencerProfile({
// //         user: userId,
// //         name,
// //         username,
// //         category,
// //         socialLinks,
// //         images,
// //         price, // ✅ save price if provided
// //       });

// //       await profile.save();
// //       return res.status(201).json(profile);
// //     }

// //     // ✅ Update existing
// //     if (name) profile.name = name;
// //     if (category) profile.category = category;
// //     if (socialLinks) profile.socialLinks = socialLinks;
// //     if (images) profile.images = images;
// //     if (price) profile.price = price; // ✅ update price only if provided

// //     await profile.save();
// //     res.json(profile);
// //   } catch (err) {
// //     console.error("🔥 Error saving influencer profile:", err);
// //     res.status(500).json({ message: err.message });
// //   }
// // };

// // // Get profile of logged-in user
// // exports.getMyProfile = async (req, res) => {
// //   try {
// //     const userId = req.user._id;
// //     const profile = await InfluencerProfile.findOne({ user: userId });

// //     if (!profile)
// //       return res.status(404).json({ message: "Profile not found" });

// //     res.json(profile);
// //   } catch (err) {
// //     console.error("🔥 Error fetching influencer profile:", err);
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // const InfluencerProfile = require("../models/InfluencerProfile");

// // // Create or Update Influencer Profile
// // exports.upsertProfile = async (req, res) => {
// //   try {
// //     const { name, category, bio, socialLinks, prices } = req.body;
// //     const userId = req.user._id;

// //     // Handle images uploaded via multer
// //     let images = [];
// //     if (req.files && req.files.length > 0) {
// //       images = req.files.map((file) => `/uploads/${file.filename}`);
// //     }

// //     let profile = await InfluencerProfile.findOne({ user: userId });

// //     if (!profile) {
// //       // Auto-generate username from name (ensure uniqueness lightly)
// //       const baseUsername = (name || "user").toLowerCase().replace(/\s+/g, "");
// //       const randomSuffix = Math.floor(Math.random() * 1000);
// //       const username = `${baseUsername}${randomSuffix}`;

// //       profile = new InfluencerProfile({
// //         user: userId,
// //         name,
// //         username,
// //         bio,
// //         category,
// //         socialLinks,
// //         images,
// //         prices: Array.isArray(prices) ? prices : [], // accept array or empty
// //       });

// //       await profile.save();
// //       return res.status(201).json(profile);
// //     }

// //     // Update existing profile
// //     if (name) profile.name = name;
// //     if (bio !== undefined) profile.bio = bio;
// //     if (category !== undefined) profile.category = category;
// //     if (socialLinks) profile.socialLinks = { ...profile.socialLinks, ...socialLinks };
// //     if (images.length > 0) profile.images = images; // replace with uploaded images
// //     if (Array.isArray(prices)) {
// //       const sanitized = prices
// //         .filter((p) => p && (p.type || p.amount !== undefined))
// //         .map((p) => ({
// //           type: p.type || "",
// //           amount: Number(p.amount) || 0,
// //         }));
// //       profile.prices = sanitized;
// //     }

// //     await profile.save();
// //     res.json(profile);
// //   } catch (err) {
// //     console.error("🔥 Error saving influencer profile:", err);
// //     res.status(500).json({ message: "Internal Server Error", error: err.message });
// //   }
// // };

// // // Get logged-in influencer profile
// // exports.getMyProfile = async (req, res) => {
// //   try {
// //     const userId = req.user._id;
// //     const profile = await InfluencerProfile.findOne({ user: userId });
// //     if (!profile) return res.status(404).json({ message: "Profile not found" });
// //     res.json(profile);
// //   } catch (err) {
// //     console.error("❌ Error fetching profile:", err);
// //     res.status(500).json({ message: "Internal Server Error", error: err.message });
// //   }
// // };

// // exports.getAllInfluencers = async (req, res) => {
// //   try {
// //     const influencers = await InfluencerProfile.find().select(
// //       "name category images socialLinks prices"
// //     );
// //     res.json(influencers);
// //   } catch (err) {
// //     console.error("Error fetching influencers:", err);
// //     res.status(500).json({ message: err.message });
// //   }
// // };

// // // Get single influencer by ID
// // exports.getInfluencerById = async (req, res) => {
// //   try {
// //     const influencer = await InfluencerProfile.findById(req.params.id);
// //     if (!influencer)
// //       return res.status(404).json({ message: "Influencer not found" });

// //     res.json(influencer);
// //   } catch (err) {
// //     console.error("Error fetching influencer:", err);
// //     res.status(500).json({ message: err.message });
// //   }
// // };

// // // const InfluencerProfile = require("../models/InfluencerProfile");

// // // // Create or Update Influencer Profile
// // // exports.upsertProfile = async (req, res) => {
// // //   try {
// // //     const { name, category, bio, socialLinks, images, prices } = req.body;
// // //     const userId = req.user._id;

// // //     let profile = await InfluencerProfile.findOne({ user: userId });

// // //     if (!profile) {
// // //       // Auto-generate username from name (ensure uniqueness lightly)
// // //       const baseUsername = (name || "user").toLowerCase().replace(/\s+/g, "");
// // //       const randomSuffix = Math.floor(Math.random() * 1000);
// // //       const username = `${baseUsername}${randomSuffix}`;

// // //       profile = new InfluencerProfile({
// // //         user: userId,
// // //         name,
// // //         username,
// // //         bio,
// // //         category,
// // //         socialLinks,
// // //         images,
// // //         prices: Array.isArray(prices) ? prices : [], // accept array or empty
// // //       });

// // //       await profile.save();
// // //       // return profile object directly so frontend can use res.data.prices
// // //       return res.status(201).json(profile);
// // //     }

// // //     // Update only if provided (preserve existing values otherwise)
// // //     if (name) profile.name = name;
// // //     if (bio !== undefined) profile.bio = bio;
// // //     if (category !== undefined) profile.category = category;
// // //     if (socialLinks) profile.socialLinks = { ...profile.socialLinks, ...socialLinks };
// // //     if (images && images.length > 0) profile.images = images;
// // //     // Replace prices only if client sent a valid array (so empty/no field won't wipe prices)
// // //     if (Array.isArray(prices)) {
// // //       // sanitize: ensure each price has allowed type and numeric amount
// // //       const sanitized = prices
// // //         .filter((p) => p && (p.type || p.amount !== undefined))
// // //         .map((p) => ({
// // //           type: p.type || "",
// // //           amount: Number(p.amount) || 0,
// // //         }));
// // //       profile.prices = sanitized;
// // //     }

// // //     await profile.save();
// // //     // return profile object directly
// // //     res.json(profile);
// // //   } catch (err) {
// // //     console.error("🔥 Error saving influencer profile:", err);
// // //     res.status(500).json({ message: "Internal Server Error", error: err.message });
// // //   }
// // // };

// // // // Get logged-in influencer profile
// // // exports.getMyProfile = async (req, res) => {
// // //   try {
// // //     const userId = req.user._id;
// // //     const profile = await InfluencerProfile.findOne({ user: userId });
// // //     if (!profile) return res.status(404).json({ message: "Profile not found" });
// // //     res.json(profile);
// // //   } catch (err) {
// // //     console.error("❌ Error fetching profile:", err);
// // //     res.status(500).json({ message: "Internal Server Error", error: err.message });
// // //   }
// // // };

// // // exports.getAllInfluencers = async (req, res) => {
// // //   try {
// // //     const influencers = await InfluencerProfile.find().select(
// // //       "name category images socialLinks prices"
// // //     );
// // //     res.json(influencers);
// // //   } catch (err) {
// // //     console.error("Error fetching influencers:", err);
// // //     res.status(500).json({ message: err.message });
// // //   }
// // // };

// // // // Get single influencer by ID
// // // exports.getInfluencerById = async (req, res) => {
// // //   try {
// // //     const influencer = await InfluencerProfile.findById(req.params.id);
// // //     if (!influencer)
// // //       return res.status(404).json({ message: "Influencer not found" });

// // //     res.json(influencer);
// // //   } catch (err) {
// // //     console.error("Error fetching influencer:", err);
// // //     res.status(500).json({ message: err.message });
// // //   }
// // // };

// // const InfluencerProfile = require("../models/InfluencerProfile");

// // // Create or Update Influencer Profile
// // exports.upsertProfile = async (req, res) => {
// //   try {
// //     const { name, category, bio, prices } = req.body;
// //     const socialLinks = req.body.socialLinks || {};
// //     const userId = req.user._id;

// //     // Handle uploaded images
// //     let uploadedImages = [];
// //     if (req.files && req.files.length > 0) {
// //       uploadedImages = req.files.map((file) => `/uploads/${file.filename}`);
// //     }

// //     // Find existing profile
// //     let profile = await InfluencerProfile.findOne({ user: userId });

// //     if (!profile) {
// //       // Generate username lightly
// //       const baseUsername = (name || "user").toLowerCase().replace(/\s+/g, "");
// //       const randomSuffix = Math.floor(Math.random() * 1000);
// //       const username = `${baseUsername}${randomSuffix}`;

// //       profile = new InfluencerProfile({
// //         user: userId,
// //         name,
// //         username,
// //         bio,
// //         category,
// //         socialLinks,
// //         images: uploadedImages,
// //         prices: Array.isArray(prices) ? prices.map(p => ({
// //           type: p.type || "",
// //           amount: Number(p.amount) || 0,
// //         })) : [],
// //       });

// //       await profile.save();
// //       return res.status(201).json(profile);
// //     }

// //     // Update existing profile
// //     if (name) profile.name = name;
// //     if (bio !== undefined) profile.bio = bio;
// //     if (category !== undefined) profile.category = category;

// //     // Merge socialLinks
// //     profile.socialLinks = { ...profile.socialLinks, ...socialLinks };

// //     // Append new uploaded images
// //     if (uploadedImages.length > 0) profile.images = [...profile.images, ...uploadedImages];

// //     // Update prices only if sent
// //     if (Array.isArray(prices)) {
// //       profile.prices = prices
// //         .filter((p) => p && (p.type || p.amount !== undefined))
// //         .map((p) => ({ type: p.type || "", amount: Number(p.amount) || 0 }));
// //     }

// //     await profile.save();
// //     res.json(profile);
// //   } catch (err) {
// //     console.error("🔥 Error saving influencer profile:", err);
// //     res.status(500).json({ message: "Internal Server Error", error: err.message });
// //   }
// // };

// // // Get logged-in influencer profile
// // exports.getMyProfile = async (req, res) => {
// //   try {
// //     const userId = req.user._id;
// //     const profile = await InfluencerProfile.findOne({ user: userId });
// //     if (!profile) return res.status(404).json({ message: "Profile not found" });
// //     res.json(profile);
// //   } catch (err) {
// //     console.error("❌ Error fetching profile:", err);
// //     res.status(500).json({ message: "Internal Server Error", error: err.message });
// //   }
// // };

// const InfluencerProfile = require("../models/InfluencerProfile");
// const path = require("path");

// // exports.upsertProfile = async (req, res) => {
// //   try {
// //     const { name, category, bio, prices } = req.body;
// //     const socialLinks =
// //       typeof req.body.socialLinks === "string"
// //         ? JSON.parse(req.body.socialLinks)
// //         : req.body.socialLinks || {};

// //     const userId = req.user._id;
// //     const baseUrl = `${req.protocol}://${req.get("host")}`;

// //     // ✅ Handle uploaded images with full URLs
// //     let uploadedImages = [];
// //     if (req.files && req.files.length > 0) {
// //       uploadedImages = req.files.map(
// //         (file) => `${baseUrl}/uploads/${file.filename}`
// //       );
// //     }

// //     // Find existing profile
// //     let profile = await InfluencerProfile.findOne({ user: userId });

// //     if (!profile) {
// //       // Generate a unique username
// //       const baseUsername = (name || "user").toLowerCase().replace(/\s+/g, "");
// //       const randomSuffix = Math.floor(Math.random() * 1000);
// //       const username = `${baseUsername}${randomSuffix}`;

// //       profile = new InfluencerProfile({
// //         user: userId,
// //         name,
// //         username,
// //         bio,
// //         category,
// //         socialLinks,
// //         images: uploadedImages,
// //         prices: Array.isArray(prices)
// //           ? prices.map((p) => ({
// //               type: p.type || "",
// //               amount: Number(p.amount) || 0,
// //             }))
// //           : [],
// //       });

// //       await profile.save();
// //       return res.status(201).json(profile);
// //     }

// //     // ✅ Update existing profile
// //     if (name) profile.name = name;
// //     if (bio !== undefined) profile.bio = bio;
// //     if (category !== undefined) profile.category = category;

// //     // Merge social links
// //     profile.socialLinks = { ...profile.socialLinks, ...socialLinks };

// //     // Append new uploaded images
// //     if (uploadedImages.length > 0)
// //       profile.images = [...profile.images, ...uploadedImages];

// //     // Update prices
// //     if (Array.isArray(prices)) {
// //       profile.prices = prices
// //         .filter((p) => p && (p.type || p.amount !== undefined))
// //         .map((p) => ({
// //           type: p.type || "",
// //           amount: Number(p.amount) || 0,
// //         }));
// //     }

// //     await profile.save();
// //     res.json(profile);
// //   } catch (err) {
// //     console.error("🔥 Error saving influencer profile:", err);
// //     res
// //       .status(500)
// //       .json({ message: "Internal Server Error", error: err.message });
// //   }
// // };

// // Create or Update Influencer Profile
// // exports.upsertProfile = async (req, res) => {
// //   try {
// //     const { name, category, bio, prices } = req.body;
// //     const socialLinks = req.body.socialLinks || {};
// //     const userId = req.user._id;

// //     // ✅ Full URL for uploaded images
// //     let uploadedImages = [];
// //     if (req.files && req.files.length > 0) {
// //       const baseUrl = `${req.protocol}://${req.get("host")}`;
// //       uploadedImages = req.files.map((file) => `${baseUrl}/uploads/${file.filename}`);
// //     }

// //     // Find existing profile
// //     let profile = await InfluencerProfile.findOne({ user: userId });

// //     if (!profile) {
// //       const baseUsername = (name || "user").toLowerCase().replace(/\s+/g, "");
// //       const randomSuffix = Math.floor(Math.random() * 1000);
// //       const username = `${baseUsername}${randomSuffix}`;

// //       profile = new InfluencerProfile({
// //         user: userId,
// //         name,
// //         username,
// //         bio,
// //         category,
// //         socialLinks,
// //         images: uploadedImages,
// //         prices: Array.isArray(prices)
// //           ? prices.map((p) => ({
// //               type: p.type || "",
// //               amount: Number(p.amount) || 0,
// //             }))
// //           : [],
// //       });

// //       await profile.save();
// //       return res.status(201).json(profile);
// //     }

// //     // Update existing profile
// //     if (name) profile.name = name;
// //     if (bio !== undefined) profile.bio = bio;
// //     if (category !== undefined) profile.category = category;

// //     profile.socialLinks = { ...profile.socialLinks, ...socialLinks };

// //     // ✅ Append new full URLs for images
// //     if (uploadedImages.length > 0)
// //       profile.images = [...profile.images, ...uploadedImages];

// //     if (Array.isArray(prices)) {
// //       profile.prices = prices
// //         .filter((p) => p && (p.type || p.amount !== undefined))
// //         .map((p) => ({ type: p.type || "", amount: Number(p.amount) || 0 }));
// //     }

// //     await profile.save();
// //     res.json(profile);
// //   } catch (err) {
// //     console.error("🔥 Error saving influencer profile:", err);
// //     res.status(500).json({ message: "Internal Server Error", error: err.message });
// //   }
// // };

// exports.upsertProfile = async (req, res) => {
//   try {
//     const { name, category, bio, prices } = req.body;

//     // ✅ Parse socialLinks if it's a JSON string
//     let socialLinks = {};
//     if (req.body.socialLinks) {
//       try {
//         socialLinks =
//           typeof req.body.socialLinks === "string"
//             ? JSON.parse(req.body.socialLinks)
//             : req.body.socialLinks;
//       } catch (err) {
//         console.error("❌ Error parsing socialLinks JSON:", err);
//         socialLinks = {};
//       }
//     }

//     const userId = req.user._id;

//     // ✅ Full URL for uploaded images
//     let uploadedImages = [];
//     if (req.files && req.files.length > 0) {
//       const baseUrl = `${req.protocol}://${req.get("host")}`;
//       uploadedImages = req.files.map(
//         (file) => `${baseUrl}/uploads/${file.filename}`
//       );
//     }

//     // Find existing profile
//     let profile = await InfluencerProfile.findOne({ user: userId });

//     if (!profile) {
//       const baseUsername = (name || "user").toLowerCase().replace(/\s+/g, "");
//       const randomSuffix = Math.floor(Math.random() * 1000);
//       const username = `${baseUsername}${randomSuffix}`;

//       profile = new InfluencerProfile({
//         user: userId,
//         name,
//         username,
//         bio,
//         category,
//         socialLinks, // ✅ Now parsed properly
//         images: uploadedImages,
//         prices: Array.isArray(prices)
//           ? prices.map((p) => ({
//               type: p.type || "",
//               amount: Number(p.amount) || 0,
//             }))
//           : [],
//       });

//       await profile.save();
//       return res.status(201).json(profile);
//     }

//     // Update existing profile
//     if (name) profile.name = name;
//     if (bio !== undefined) profile.bio = bio;
//     if (category !== undefined) profile.category = category;

//     // ✅ Merge parsed social links
//     profile.socialLinks = { ...profile.socialLinks, ...socialLinks };

//     // ✅ Append new full URLs for images
//     if (uploadedImages.length > 0)
//       profile.images = [...profile.images, ...uploadedImages];

//     if (Array.isArray(prices)) {
//       profile.prices = prices
//         .filter((p) => p && (p.type || p.amount !== undefined))
//         .map((p) => ({
//           type: p.type || "",
//           amount: Number(p.amount) || 0,
//         }));
//     }

//     await profile.save();
//     res.json(profile);
//   } catch (err) {
//     console.error("🔥 Error saving influencer profile:", err);
//     res
//       .status(500)
//       .json({ message: "Internal Server Error", error: err.message });
//   }
// };

// // ✅ Get logged-in influencer profile
// exports.getMyProfile = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const baseUrl = `${req.protocol}://${req.get("host")}`;

//     const profile = await InfluencerProfile.findOne({ user: userId });
//     if (!profile)
//       return res.status(404).json({ message: "Profile not found" });

//     // ✅ Make sure images are returned as full URLs
//     const imagesWithUrl = (profile.images || []).map((img) =>
//       img.startsWith("http") ? img : `${baseUrl}${img}`
//     );

//     res.json({ ...profile._doc, images: imagesWithUrl });
//   } catch (err) {
//     console.error("❌ Error fetching profile:", err);
//     res
//       .status(500)
//       .json({ message: "Internal Server Error", error: err.message });
//   }
// };

// // Get all influencers (public)
// exports.getAllInfluencers = async (req, res) => {
//   try {
//     const influencers = await InfluencerProfile.find().select(
//       "name category images socialLinks prices"
//     );
//     res.json(influencers);
//   } catch (err) {
//     console.error("Error fetching influencers:", err);
//     res.status(500).json({ message: err.message });
//   }
// };

// // Get single influencer by ID
// exports.getInfluencerById = async (req, res) => {
//   try {
//     const influencer = await InfluencerProfile.findById(req.params.id);
//     if (!influencer)
//       return res.status(404).json({ message: "Influencer not found" });
//     res.json(influencer);
//   } catch (err) {
//     console.error("Error fetching influencer:", err);
//     res.status(500).json({ message: err.message });
//   }
// };

const User = require("../models/User");
const InfluencerProfile = require("../models/InfluencerProfile");

exports.upsertProfile = async (req, res) => {
  try {
    const { name, category, bio, prices } = req.body;
    const userId = req.user._id;

    // ✅ Parse socialLinks safely
    let socialLinks = {};
    if (req.body.socialLinks) {
      try {
        socialLinks =
          typeof req.body.socialLinks === "string"
            ? JSON.parse(req.body.socialLinks)
            : req.body.socialLinks;
      } catch (err) {
        console.error("❌ Error parsing socialLinks JSON:", err);
        socialLinks = {};
      }
    }

    // ✅ Uploaded image URLs
    let uploadedImages = [];
    if (req.files && req.files.length > 0) {
      const baseUrl = `${req.protocol}://${req.get("host")}`;
      uploadedImages = req.files.map(
        (file) => `${baseUrl}/uploads/${file.filename}`,
      );
    }

    // ✅ Find existing profile
    let profile = await InfluencerProfile.findOne({ user: userId });

    if (!profile) {
      const baseUsername = (name || "user").toLowerCase().replace(/\s+/g, "");
      const randomSuffix = Math.floor(Math.random() * 1000);
      const username = `${baseUsername}${randomSuffix}`;

      profile = new InfluencerProfile({
        user: userId,
        name,
        username,
        bio,
        category,
        socialLinks,
        images: uploadedImages,
        prices: Array.isArray(prices)
          ? prices.map((p) => ({
              type: p.type || "",
              amount: Number(p.amount) || 0,
            }))
          : [],
      });

      await profile.save();

      // ✅ Link profile to User (important for nested populate)
      await User.findByIdAndUpdate(userId, { influencerProfile: profile._id });

      return res.status(201).json(profile);
    }

    // ✅ Update existing profile
    if (name) profile.name = name;
    if (bio !== undefined) profile.bio = bio;
    if (category !== undefined) profile.category = category;

    profile.socialLinks = { ...profile.socialLinks, ...socialLinks };

    if (uploadedImages.length > 0)
      profile.images = [...profile.images, ...uploadedImages];

    if (Array.isArray(prices)) {
      profile.prices = prices
        .filter((p) => p && (p.type || p.amount !== undefined))
        .map((p) => ({
          type: p.type || "",
          amount: Number(p.amount) || 0,
        }));
    }

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error("🔥 Error saving influencer profile:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

// ✅ Get logged-in influencer profile
exports.getMyProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const baseUrl = `${req.protocol}://${req.get("host")}`;

    const profile = await InfluencerProfile.findOne({ user: userId });
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    // ✅ Make sure images are returned as full URLs
    // const imagesWithUrl = (profile.images || []).map((img) =>
    //   img.startsWith("http") ? img : `${baseUrl}${img}`
    // );

    const imagesWithUrl = (profile.images || []).map((img) => {
      if (img.startsWith("http://")) {
        return img.replace("http://", "https://");
      }
      if (img.startsWith("https://")) {
        return img;
      }
      return `${baseUrl}${img}`;
    });

    res.json({ ...profile._doc, images: imagesWithUrl });
  } catch (err) {
    console.error("❌ Error fetching profile:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

// Get all influencers (public)
exports.getAllInfluencers = async (req, res) => {
  try {
    const influencers = await InfluencerProfile.find().select(
      "name category images socialLinks prices bio",
    );
    res.json(influencers);
  } catch (err) {
    console.error("Error fetching influencers:", err);
    res.status(500).json({ message: err.message });
  }
};

// Get single influencer by ID
exports.getInfluencerById = async (req, res) => {
  try {
    const influencer = await InfluencerProfile.findById(req.params.id);
    if (!influencer)
      return res.status(404).json({ message: "Influencer not found" });
    res.json(influencer);
  } catch (err) {
    console.error("Error fetching influencer:", err);
    res.status(500).json({ message: err.message });
  }
};
