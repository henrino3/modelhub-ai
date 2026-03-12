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
    </main>
  );
}
