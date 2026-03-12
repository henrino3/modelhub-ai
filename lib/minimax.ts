const MINIMAX_ENDPOINT = "https://api.minimaxi.chat/v1/text/chatcompletion_v2";

export async function sendMiniMaxChat(prompt: string) {
  const apiKey = process.env.MINIMAX_API_KEY;

  if (!apiKey) {
    throw new Error("Missing MINIMAX_API_KEY");
  }

  const response = await fetch(MINIMAX_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "MiniMax-Text-01",
      messages: [
        {
          role: "system",
          content:
            "You are ModelHub AI. Give clear, practical responses optimized for developers and knowledge workers.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      tokens_to_generate: 1024,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`MiniMax request failed: ${response.status} ${text}`);
  }

  const data = await response.json();
  return (
    data?.reply ||
    data?.choices?.[0]?.message?.content ||
    data?.base_resp?.status_msg ||
    "No response returned from MiniMax."
  );
}
