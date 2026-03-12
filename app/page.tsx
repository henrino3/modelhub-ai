import Link from "next/link";
import { PricingCard } from "@/components/PricingCard";
import { MODELS } from "@/lib/models";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For testing prompts before you commit to another AI subscription.",
    features: ["10 messages per day", "GLM-5 access", "Saved local chat history"],
    cta: "Start free",
    href: "/chat",
  },
  {
    name: "Pro",
    price: "$15/mo",
    description: "The default plan for founders, operators, and indie hackers.",
    features: ["500 messages per month", "Compare mode", "Priority model routing"],
    cta: "Choose Pro",
    href: "https://buy.stripe.com/test_00g7sE3h0000000000",
    highlighted: true,
  },
  {
    name: "Power",
    price: "$39/mo",
    description: "Unlimited usage for teams that live inside AI all day.",
    features: ["Unlimited messages", "Fastest routing", "Early-access models"],
    cta: "Choose Power",
    href: "https://buy.stripe.com/test_3cs4gq2cW000000000",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
      <header className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="text-lg font-semibold tracking-wide text-white">
            ModelHub AI
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <Link href="/chat">Chat</Link>
            <Link href="/compare">Compare</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              One workspace for the best LLMs
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              Stop paying for five AI apps just to find the one good answer.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              ModelHub AI lets you chat with top models in one clean interface, switch mid-thread, and compare answers side by side before you ship.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/chat"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:opacity-90"
              >
                Launch chat
              </Link>
              <Link
                href="/compare"
                className="rounded-2xl border border-white/10 px-6 py-3 font-medium text-slate-100 transition hover:border-cyan-400"
              >
                Compare models
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Live models</p>
            <div className="mt-6 space-y-4">
              {MODELS.map((model) => (
                <div key={model.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{model.name}</h3>
                      <p className="text-sm text-slate-400">{model.vendor}</p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200">
                      {model.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          ["Switch models instantly", "Move from GLM-5 to MiniMax mid-conversation without losing context."],
          ["Compare before deciding", "Run the same prompt across two models and spot the strongest answer fast."],
          ["Save your chat history", "MVP uses localStorage so your past prompts stay close while you iterate."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Pricing</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Simple plans for real usage</h2>
          </div>
          <Link href="/pricing" className="text-sm text-slate-300 hover:text-white">
            View pricing page →
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>
    </main>
  );
}
