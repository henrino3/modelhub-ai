type Props = {
  role: "user" | "assistant";
  model?: string;
  content: string;
};

export function MessageBubble({ role, model, content }: Props) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-3xl px-4 py-3 shadow-lg ${
          isUser
            ? "bg-cyan-500 text-slate-950"
            : "border border-white/10 bg-white/5 text-slate-100"
        }`}
      >
        {!isUser && model ? (
          <div className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
            {model}
          </div>
        ) : null}
        <p className="whitespace-pre-wrap text-sm leading-6">{content}</p>
      </div>
    </div>
  );
}
