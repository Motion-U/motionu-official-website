import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Simulate network latency (300–800ms) so the UI loading states are testable
  const delay = Math.floor(Math.random() * 500) + 300;
  await new Promise((r) => setTimeout(r, delay));

  let userMessage = "";
  try {
    const body = await request.json();
    userMessage = body?.message ?? "";
  } catch {
    // If body parsing fails, still return the fallback reply
  }

  const now = new Date().toISOString();
  const processingTimeMs = Math.round(delay * 1.4);

  return NextResponse.json({
    success: true,
    reply: {
      role: "assistant",
      content:
        "Athena is not available right now.\n\nPlease visit **[athena.motionukict.com](https://athena.motionukict.com)** to chat with Athena.",
    },
    timestamp: now,
    metadata: {
      model: "athena-mock-v1",
      processingTimeMs,
      requestLength: userMessage.length,
    },
  });
}
