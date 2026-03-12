import Link from "next/link";
import { ChatInterface } from "@/components/ChatInterface";

export default function ComparePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 md:px-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Compare</p>
          <h1 className="mt-2 text-4xl font-semibold text-white">Run the same prompt against two models.</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Ideal for coding prompts, rewriting, summaries, and decisions where quality matters more than speed.
          </p>
        </div>
        <div className="flex gap-3 text-sm text-slate-300">
          <Link href="/">Home</Link>
          <Link href="/chat">Chat</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
      </div>
      <ChatInterface compare />
    </main>
  );
}
