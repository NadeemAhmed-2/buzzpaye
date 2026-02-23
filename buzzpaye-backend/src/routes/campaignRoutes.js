// // import express from "express";
// // import { createCampaign, getBrandCampaigns, getCampaignById } from "../controllers/campaignController.js";
// // import { protect } from "../middleware/authMiddleware.js"; // JWT middleware

// // const router = express.Router();

// // // Protected routes — brand must be logged in
// // router.post("/create", protect, createCampaign);
// // router.get("/my-campaigns", protect, getBrandCampaigns);
// // router.get("/:id", protect, getCampaignById);

// // export default router;

// const express = require("express");
// const {
//   createCampaign,
//   getBrandCampaigns,
//   getCampaignById,
// } = require("../controllers/campaignController");
// const protect = require("../middleware/authMiddleware");
// router.post("/create", protect, createCampaign);


// const router = express.Router();

// // GET /api/campaigns/my-campaigns → Get all campaigns of logged-in brand
// router.get("/my-campaigns", protect, getBrandCampaigns);

// // GET /api/campaigns/:id → Get single campaign by ID
// router.get("/:id", protect, getCampaignById);

// module.exports = router;



const express = require("express");
const {
  createCampaign,
  getBrandCampaigns,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
} = require("../controllers/campaignController");
const protect = require("../middleware/authMiddleware");

const router = express.Router(); // MUST come before defining routes

// POST /api/campaigns/create → Create a campaign (protected)
router.post("/create", protect, createCampaign);

// GET /api/campaigns/my-campaigns → Get all campaigns of logged-in brand
router.get("/my-campaigns", protect, getBrandCampaigns);

// GET /api/campaigns/:id → Get single campaign by ID
router.get("/:id", protect, getCampaignById);

// PUT /api/campaigns/:id → Update campaign
router.put("/:id", protect, updateCampaign);


// DELETE /api/campaigns/:id → Delete campaign
router.delete("/:id", protect, deleteCampaign);


module.exports = router;
