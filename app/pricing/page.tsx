import Link from "next/link";
import { PricingCard } from "@/components/PricingCard";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Try ModelHub AI before you add another tool to the stack.",
    features: ["10 messages per day", "GLM-5 access", "Local chat history"],
    cta: "Start free",
    href: "/chat",
  },
  {
    name: "Pro",
    price: "$15/mo",
    description: "For builders who want solid volume without managing multiple subscriptions.",
    features: ["500 messages per month", "Compare mode", "Priority routing"],
    cta: "Buy Pro",
    href: "https://buy.stripe.com/test_00g7sE3h0000000000",
    highlighted: true,
  },
  {
    name: "Power",
    price: "$39/mo",
    description: "Unlimited prompts and maximum speed for heavy users and small teams.",
    features: ["Unlimited messages", "Early-access models", "Priority support"],
    cta: "Buy Power",
    href: "https://buy.stripe.com/test_3cs4gq2cW000000000",
  },
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 md:px-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Pricing</p>
          <h1 className="mt-2 text-4xl font-semibold text-white">Pick the plan that matches your prompt volume.</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Stripe links are wired as placeholders so the checkout handoff is ready for live pricing later.
          </p>
        </div>
        <Link href="/" className="text-sm text-slate-300 hover:text-white">
          Back home →
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    
      <section className="mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-white">Trusted by 2,000+ indie hackers & founders</h2>
          <p className="mt-3 text-slate-300">Stop paying $100+ for disjointed AI subscriptions.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote: "I canceled ChatGPT Plus, Claude Pro, and Gemini Advanced. ModelHub gives me all three for a fraction of the cost.",
              author: "Sarah J.",
              role: "Indie Hacker"
            },
            {
              quote: "The side-by-side comparison mode has saved me hours of debugging. When GPT-5 fails, Claude usually catches the issue immediately.",
              author: "Michael T.",
              role: "Senior Developer"
            },
            {
              quote: "Best $15 I spend every month. Having all my prompts and context in one workspace makes context switching painless.",
              author: "Elena R.",
              role: "Founder"
            }
          ].map((testimonial) => (
            <div key={testimonial.author} className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <p className="text-sm italic text-slate-300">"{testimonial.quote}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-300 font-bold">{testimonial.author[0]}</div>
                <div>
                  <div className="text-sm font-medium text-white">{testimonial.author}</div>
                  <div className="text-xs text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 mb-10">
        <h2 className="text-3xl font-semibold text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl">
          {[
            {
              q: "How does the 'Compare mode' work?",
              a: "Compare mode allows you to send a single prompt to two different models (e.g., GPT-5 and Claude 4) simultaneously and view their responses side-by-side to evaluate quality."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes, you can cancel your subscription at any time right from your account dashboard. You'll keep access until the end of your billing cycle."
            },
            {
              q: "What does 'priority model routing' mean?",
              a: "During high-traffic periods, Pro and Power users get priority access to API endpoints, ensuring your prompts are processed instantly without queues."
            },
            {
              q: "Is my chat history private?",
              a: "Yes. In the free tier, your history is saved locally in your browser. On paid tiers, it's encrypted end-to-end so only you have access to your conversations."
            }
          ].map((faq) => (
            <div key={faq.q} className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="text-lg font-medium text-white">{faq.q}</h3>
              <p className="mt-2 text-sm text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>

  );
}
