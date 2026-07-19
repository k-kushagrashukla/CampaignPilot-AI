export function buildPrompt({
  productName,
  description,
  audience,
  goal,
  tone,
}) {
  return `
You are an expert marketing strategist.

Generate a complete marketing campaign for the following product.

Product Name:
${productName}

Description:
${description}

Target Audience:
${audience}

Campaign Goal:
${goal}

Tone:
${tone}

Return ONLY valid JSON.

Use exactly this format:

{
  "linkedin": "",
  "instagram": "",
  "twitter": "",
  "whatsapp": "",
  "hooks": [
    "",
    "",
    ""
  ],
  "headlines": [
    "",
    "",
    ""
  ],
  "outreach": ""
}

Rules:
- Do NOT write markdown.
- Do NOT wrap JSON inside \`\`\`.
- Return ONLY JSON.
- LinkedIn should be 150-250 words.
- Instagram should contain emojis and hashtags.
- Twitter should be a thread.
- WhatsApp should be short and persuasive.
- Hooks should be catchy.
- Headlines should be click-worthy.
- Outreach should be personalized.
`;
}