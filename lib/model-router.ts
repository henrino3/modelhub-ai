import { DEFAULT_MODEL, type ModelId } from "@/lib/models";
import { sendMiniMaxChat } from "@/lib/minimax";
import { sendZhipuChat } from "@/lib/zhipu";

export async function routeModelChat({
  model,
  prompt,
}: {
  model?: ModelId;
  prompt: string;
}) {
  const selectedModel = model || DEFAULT_MODEL;

  switch (selectedModel) {
    case "glm-5":
      return sendZhipuChat({ model: "glm-5", prompt });
    case "glm-4":
      return sendZhipuChat({ model: "glm-4", prompt });
    case "minimax":
      return sendMiniMaxChat(prompt);
    case "gpt-4.1":
      return "OpenAI support is coming soon in ModelHub AI. For the MVP, switch to GLM-5 or MiniMax to chat live.";
    case "claude-3.7":
      return "Anthropic support is coming soon in ModelHub AI. For the MVP, switch to GLM-5 or MiniMax to chat live.";
    default:
      return sendZhipuChat({ model: "glm-5", prompt });
  }
}
