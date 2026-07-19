import { buildPrompt } from "../utils/promptBuilder.js";
import { generateCampaign } from "../services/groqService.js";

export const generateCampaignController = async (req, res) => {
  try {
    const { productName, description, audience, goal, tone } = req.body;

    // Build prompt
    const prompt = buildPrompt({
      productName,
      description,
      audience,
      goal,
      tone,
    });

    // Call Groq
    const aiResponse = await generateCampaign(prompt);

    // Parse JSON returned by AI
    const campaign = JSON.parse(aiResponse);

    res.status(200).json({
      success: true,
      campaign,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate campaign",
      error: error.message,
    });
  }
};