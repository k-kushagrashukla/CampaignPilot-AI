import Groq from "groq-sdk";

export async function generateCampaign(prompt) {
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.7,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.choices[0].message.content;
}