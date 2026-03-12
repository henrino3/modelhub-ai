import { NextResponse } from "next/server";
import { routeModelChat } from "@/lib/model-router";
import type { ModelId } from "@/lib/models";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { model?: ModelId; prompt?: string };

    if (!body.prompt?.trim()) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
    }

    const reply = await routeModelChat({
      model: body.model,
      prompt: body.prompt.trim(),
    });

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while calling the model.",
      },
      { status: 500 },
    );
  }
}
