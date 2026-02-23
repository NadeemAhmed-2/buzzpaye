// // import Campaign from "../models/Campaign.js";

// // // ✅ Create a new campaign
// // export const createCampaign = async (req, res) => {
// //   try {
// //     const { brandName, location, objective, category, type } = req.body;
// //     const userId = req.user?.id; // from auth middleware (token)

// //     if (!brandName || !location || !objective || !category || !type) {
// //       return res.status(400).json({ message: "All fields are required" });
// //     }

// //     const newCampaign = new Campaign({
// //       brandName,
// //       location,
// //       objective,
// //       category,
// //       type,
// //       createdBy: userId,
// //     });

// //     await newCampaign.save();
// //     res.status(201).json({ message: "Campaign created successfully", campaign: newCampaign });
// //   } catch (error) {
// //     console.error("Error creating campaign:", error);
// //     res.status(500).json({ message: "Server error creating campaign" });
// //   }
// // };

// // // ✅ Get all campaigns created by a brand
// // export const getBrandCampaigns = async (req, res) => {
// //   try {
// //     const userId = req.user.id;
// //     const campaigns = await Campaign.find({ createdBy: userId }).sort({ createdAt: -1 });
// //     res.status(200).json(campaigns);
// //   } catch (error) {
// //     console.error("Error fetching campaigns:", error);
// //     res.status(500).json({ message: "Server error fetching campaigns" });
// //   }
// // };

// // // ✅ Get a single campaign by ID
// // export const getCampaignById = async (req, res) => {
// //   try {
// //     const campaign = await Campaign.findById(req.params.id);
// //     if (!campaign) return res.status(404).json({ message: "Campaign not found" });
// //     res.status(200).json(campaign);
// //   } catch (error) {
// //     console.error("Error fetching campaign:", error);
// //     res.status(500).json({ message: "Server error fetching campaign" });
// //   }
// // };



// const Campaign = require("../models/Campaign");

// // ✅ Create a new campaign
// const createCampaign = async (req, res) => {
//   try {
//     const { brandName, location, objective, category, type } = req.body;
//     const userId = req.user?.id; // from auth middleware (token)

//     if (!brandName || !location || !objective || !category || !type) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const newCampaign = new Campaign({
//       brandName,
//       location,
//       objective,
//       category,
//       type,
//       createdBy: userId,
//     });

//     await newCampaign.save();
//     res.status(201).json({ message: "Campaign created successfully", campaign: newCampaign });
//   } catch (error) {
//     console.error("Error creating campaign:", error);
//     res.status(500).json({ message: "Server error creating campaign" });
//   }
// };

// // ✅ Get all campaigns created by a brand
// const getBrandCampaigns = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const campaigns = await Campaign.find({ createdBy: userId }).sort({ createdAt: -1 });
//     res.status(200).json(campaigns);
//   } catch (error) {
//     console.error("Error fetching campaigns:", error);
//     res.status(500).json({ message: "Server error fetching campaigns" });
//   }
// };

// // ✅ Get a single campaign by ID
// const getCampaignById = async (req, res) => {
//   try {
//     const campaign = await Campaign.findById(req.params.id);
//     if (!campaign) return res.status(404).json({ message: "Campaign not found" });
//     res.status(200).json(campaign);
//   } catch (error) {
//     console.error("Error fetching campaign:", error);
//     res.status(500).json({ message: "Server error fetching campaign" });
//   }
// };

// // controllers/campaignController.js
// const updateCampaign = async (req, res) => {
//   try {
//     const campaign = await Campaign.findById(req.params.id);
//     if (!campaign) return res.status(404).json({ message: "Campaign not found" });

//     // Only allow the creator to update
//     if (campaign.createdBy.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Not authorized to edit this campaign" });
//     }

//     // Update campaign fields
//     const { brandName, location, objective, category, type } = req.body;
//     campaign.brandName = brandName || campaign.brandName;
//     campaign.location = location || campaign.location;
//     campaign.objective = objective || campaign.objective;
//     campaign.category = category || campaign.category;
//     campaign.type = type || campaign.type;

//     await campaign.save();
//     res.status(200).json({ message: "Campaign updated successfully", campaign });
//   } catch (error) {
//     console.error("Error updating campaign:", error);
//     res.status(500).json({ message: "Server error updating campaign" });
//   }
// };

// // Delete a campaign
// const deleteCampaign = async (req, res) => {
//   try {
//     const campaign = await Campaign.findById(req.params.id);
//     if (!campaign) return res.status(404).json({ message: "Campaign not found" });

//     // Only the creator can delete
//     if (campaign.createdBy.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Not authorized to delete this campaign" });
//     }

//     await campaign.deleteOne(); // or campaign.remove()
//     res.status(200).json({ message: "Campaign deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting campaign:", error);
//     res.status(500).json({ message: "Server error deleting campaign" });
//   }
// };

// module.exports = {
//   createCampaign,
//   getBrandCampaigns,
//   getCampaignById,
//   updateCampaign,
//   deleteCampaign,
// };




// const Campaign = require("../models/Campaign");

// // ✅ Create a new campaign
// const createCampaign = async (req, res) => {
//   try {
//     const { campaignName, brandName, location, objective, category, type } = req.body;
//     const userId = req.user._id; // from auth middleware (token)

//     // Validate fields
//     if (!campaignName || !brandName || !location || !objective || !category || !type) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     // const newCampaign = new Campaign({
//     //   campaignName,
//     //   brandName,
//     //   location,
//     //   objective,
//     //   category,
//     //   type,
//     //   createdBy: userId,
//     // });

//   const newCampaign = new Campaign({
//   campaignName,
//   brandName,
//   location,
//   objective,
//   category,
//   type,
//   createdBy: req.user._id, // must be from auth middleware
// });


//     await newCampaign.save();
//     res.status(201).json({
//       message: "Campaign created successfully",
//       campaign: newCampaign,
//     });
//   } catch (error) {
//     console.error("Error creating campaign:", error);
//     res.status(500).json({ message: "Server error creating campaign" });
//   }
// };

// // ✅ Get all campaigns created by a brand
// const getBrandCampaigns = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const campaigns = await Campaign.find({ createdBy: userId }).sort({ createdAt: -1 });
//     res.status(200).json(campaigns);
//   } catch (error) {
//     console.error("Error fetching campaigns:", error);
//     res.status(500).json({ message: "Server error fetching campaigns" });
//   }
// };

// // ✅ Get a single campaign by ID
// const getCampaignById = async (req, res) => {
//   try {
//     const campaign = await Campaign.findById(req.params.id);
//     if (!campaign) return res.status(404).json({ message: "Campaign not found" });
//     res.status(200).json(campaign);
//   } catch (error) {
//     console.error("Error fetching campaign:", error);
//     res.status(500).json({ message: "Server error fetching campaign" });
//   }
// };

// // ✅ Update a campaign
// const updateCampaign = async (req, res) => {
//   try {
//     const campaign = await Campaign.findById(req.params.id);
//     if (!campaign) return res.status(404).json({ message: "Campaign not found" });

//     // Only allow the creator to update
//     if (campaign.createdBy.toString() !== req.user._id) {
//       return res.status(403).json({ message: "Not authorized to edit this campaign" });
//     }

//     const { campaignName, brandName, location, objective, category, type } = req.body;

//     // Update fields
//     campaign.campaignName = campaignName || campaign.campaignName;
//     campaign.brandName = brandName || campaign.brandName;
//     campaign.location = location || campaign.location;
//     campaign.objective = objective || campaign.objective;
//     campaign.category = category || campaign.category;
//     campaign.type = type || campaign.type;

//     await campaign.save();
//     res.status(200).json({
//       message: "Campaign updated successfully",
//       campaign,
//     });
//   } catch (error) {
//     console.error("Error updating campaign:", error);
//     res.status(500).json({ message: "Server error updating campaign" });
//   }
// };

// // ✅ Delete a campaign
// const deleteCampaign = async (req, res) => {
//   try {
//     const campaign = await Campaign.findById(req.params.id);
//     if (!campaign) return res.status(404).json({ message: "Campaign not found" });

//     // Only the creator can delete
//     if (campaign.createdBy.toString() !== req.user._id) {
//       return res.status(403).json({ message: "Not authorized to delete this campaign" });
//     }

//     await campaign.deleteOne();
//     res.status(200).json({ message: "Campaign deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting campaign:", error);
//     res.status(500).json({ message: "Server error deleting campaign" });
//   }
// };

// module.exports = {
//   createCampaign,
//   getBrandCampaigns,
//   getCampaignById,
//   updateCampaign,
//   deleteCampaign,
// };



const Campaign = require("../models/Campaign");

// ✅ Create a new campaign
const createCampaign = async (req, res) => {
  try {
    const { campaignName, brandName, location, objective, category, type } = req.body;
    const userId = req.user._id; // from auth middleware

    if (!campaignName || !brandName || !location || !objective || !category || !type) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCampaign = new Campaign({
      campaignName,
      brandName,
      location,
      objective,
      category,
      type,
      createdBy: userId,
    });

    await newCampaign.save();
    res.status(201).json({
      message: "Campaign created successfully",
      campaign: newCampaign,
    });
  } catch (error) {
    console.error("Error creating campaign:", error);
    res.status(500).json({ message: "Server error creating campaign" });
  }
};

// ✅ Get all campaigns created by a brand
const getBrandCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({ createdBy: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(campaigns);
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    res.status(500).json({ message: "Server error fetching campaigns" });
  }
};

// ✅ Get single campaign by ID
const getCampaignById = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ message: "Campaign not found" });
    res.status(200).json(campaign);
  } catch (error) {
    console.error("Error fetching campaign:", error);
    res.status(500).json({ message: "Server error fetching campaign" });
  }
};

// ✅ Update campaign
const updateCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ message: "Campaign not found" });

    if (campaign.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to edit this campaign" });
    }

    const { campaignName, brandName, location, objective, category, type } = req.body;

    Object.assign(campaign, {
      campaignName: campaignName || campaign.campaignName,
      brandName: brandName || campaign.brandName,
      location: location || campaign.location,
      objective: objective || campaign.objective,
      category: category || campaign.category,
      type: type || campaign.type,
    });

    await campaign.save();
    res.status(200).json({ message: "Campaign updated successfully", campaign });
  } catch (error) {
    console.error("Error updating campaign:", error);
    res.status(500).json({ message: "Server error updating campaign" });
  }
};

// ✅ Delete campaign
const deleteCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ message: "Campaign not found" });

    if (campaign.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this campaign" });
    }

    await campaign.deleteOne();
    res.status(200).json({ message: "Campaign deleted successfully" });
  } catch (error) {
    console.error("Error deleting campaign:", error);
    res.status(500).json({ message: "Server error deleting campaign" });
  }
};

module.exports = {
  createCampaign,
  getBrandCampaigns,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
};
