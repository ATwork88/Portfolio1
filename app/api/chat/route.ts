import Anthropic from "@anthropic-ai/sdk";

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
      system:
        "You are Teresa Lin's portfolio assistant. Answer questions about Teresa's professional background, software engineering experience, projects, skills, and career interests. Be accurate and concise. If you don't have enough information to answer, say so rather than inventing details.",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
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