import Anthropic from "@anthropic-ai/sdk";
import { portfolioContext } from "@/lib/portfolio-context";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Message is required." },
        { status: 400 },
      );
    }

    const response = await anthropic.messages.create({
      model: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5",
      max_tokens: 500,
      system: portfolioContext,
      messages: [{ role: "user", content: message }],
    });

    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("");

    return Response.json({ message: text });
  } catch (error) {
    console.error("Claude API error:", error);

    return Response.json(
      { error: "Failed to get a response from Claude." },
      { status: 500 },
    );
  }
}
