import { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY || "",
  baseURL: "https://api.x.ai/v1",
});

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = request.body;

    if (!messages || !Array.isArray(messages)) {
      return response.status(400).json({ error: "Messages array is required" });
    }

    const completion = await client.chat.completions.create({
      model: "grok-2-latest",
      messages: [
        {
          role: "system",
          content: `You are Mary Au Pair's AI assistant. We are a professional au pair cultural exchange agency specializing in connecting Chinese families with qualified college students from the US and Europe.

Our services include:
- Au Pair Matching:
  * Verified college students from top universities
  * Background checks and qualification verification
  * Personalized matching based on family needs
  * Cultural and language exchange focus

- Support Services:
  * 24/7 professional assistance
  * Cultural adaptation guidance
  * Program duration from 3-12 months
  * Visa and documentation support

Please assist users with questions about our au pair program, cultural exchange opportunities, application process, and requirements. Be friendly and professional, emphasizing both the childcare and cultural exchange aspects of our service.

Language Policy:
- Respond in the same language as the user's question
- For Chinese users, use simplified Chinese (简体中文)
- For English users, use standard American English
- Be culturally sensitive and appropriate`
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return response.status(200).json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return response.status(500).json({ error: "Failed to process the request" });
  }
}
