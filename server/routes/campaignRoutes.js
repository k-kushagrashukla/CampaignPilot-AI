import express from "express";
import { generateCampaignController } from "../controllers/campaignController.js";

const router = express.Router();

router.post("/generate", generateCampaignController);

export default router;