// const BrandProfile = require("../models/BrandProfile");

// // Create or update profile
// exports.upsertProfile = async (req, res) => {
//   try {
//     const { user, name, company, website, location, images } = req.body;

//     let profile = await BrandProfile.findOne({ user });
//     if (profile) {
//       profile.name = name || profile.name;
//       profile.company = company || profile.company;
//       profile.website = website || profile.website;
//       profile.location = location || profile.location;
//       profile.images = images || profile.images;
//       await profile.save();
//       return res.json(profile);
//     }

//     profile = new BrandProfile({ user, name, company, website, location, images });
//     await profile.save();
//     res.status(201).json(profile);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get profile by user ID
// exports.getProfile = async (req, res) => {
//   try {
//     const profile = await BrandProfile.findOne({ user: req.params.userId });
//     if (!profile) return res.status(404).json({ message: "Profile not found" });
//     res.json(profile);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



const BrandProfile = require("../models/BrandProfile");

// Create or update logged-in user's profile
exports.upsertProfile = async (req, res) => {
  try {
    const { name, company, website, location, images } = req.body;
    const userId = req.user._id;

    let profile = await BrandProfile.findOne({ user: userId });
    if (profile) {
      // update existing
      profile.name = name || profile.name;
      profile.company = company || profile.company;
      profile.website = website || profile.website;
      profile.location = location || profile.location;
      profile.images = images || profile.images;
      await profile.save();
      return res.json(profile);
    }

    // create new
    profile = new BrandProfile({ user: userId, name, company, website, location, images });
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    console.error("🔥 Brand profile error:", err);
    res.status(500).json({ message: err.message });
  }
};

// Get logged-in user's profile
exports.getMyProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const profile = await BrandProfile.findOne({ user: userId });
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get any user's profile by userId
exports.getProfile = async (req, res) => {
  try {
    const profile = await BrandProfile.findOne({ user: req.params.userId });
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// exports.deleteImage = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const index = parseInt(req.params.index);

//     const profile = await BrandProfile.findOne({ user: userId });
//     if (!profile) return res.status(404).json({ message: "Profile not found" });

//     profile.images.splice(index, 1); // remove image
//     await profile.save();

//     res.json(profile); // return updated profile
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };




exports.deleteImage = async (req, res) => {
  try {
    const userId = req.user._id;
    const imageId = req.params.id;

    const profile = await BrandProfile.findOne({ user: userId });
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    // Remove image by ID
    profile.images = profile.images.filter(img => img.id !== imageId);

    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
