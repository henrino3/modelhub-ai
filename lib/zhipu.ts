const ZHIPU_ENDPOINT = "https://api.z.ai/api/coding/paas/v4/chat/completions";

export async function sendZhipuChat({
  model,
  prompt,
}: {
  model: string;
  prompt: string;
}) {
  const apiKey = process.env.ZAI_API_KEY;

  if (!apiKey) {
    throw new Error("Missing ZAI_API_KEY");
  }

  const response = await fetch(ZHIPU_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content:
            "You are ModelHub AI. Give clear, practical responses optimized for developers and knowledge workers.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Zhipu request failed: ${response.status} ${text}`);
  }

  const data = await response.json();
  return (
    data?.choices?.[0]?.message?.content ||
    "No response returned from ZhipuAI."
  );
}
