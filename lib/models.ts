export type ModelId =
  | "glm-5"
  | "glm-4"
  | "minimax"
  | "gpt-4.1"
  | "claude-3.7";

export type ModelOption = {
  id: ModelId;
  name: string;
  vendor: string;
  description: string;
  badge: string;
  available: boolean;
};

export const MODELS: ModelOption[] = [
  {
    id: "glm-5",
    name: "GLM-5",
    vendor: "ZhipuAI",
    description: "Best default for fast, affordable general chat.",
    badge: "Recommended",
    available: true,
  },
  {
    id: "glm-4",
    name: "GLM-4",
    vendor: "ZhipuAI",
    description: "Reliable alternative for structured answers and summaries.",
    badge: "Stable",
    available: true,
  },
  {
    id: "minimax",
    name: "MiniMax",
    vendor: "MiniMax",
    description: "Great value pick for longer creative responses.",
    badge: "Value",
    available: true,
  },
  {
    id: "gpt-4.1",
    name: "OpenAI",
    vendor: "OpenAI",
    description: "UI placeholder for MVP. Bring your own API later.",
    badge: "Soon",
    available: false,
  },
  {
    id: "claude-3.7",
    name: "Anthropic",
    vendor: "Anthropic",
    description: "UI placeholder for MVP. Bring your own API later.",
    badge: "Soon",
    available: false,
  },
];

export const DEFAULT_MODEL: ModelId = "glm-5";
