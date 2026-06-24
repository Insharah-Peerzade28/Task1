import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    desc: "For individuals and side projects.",
    features: ["1 workspace", "Up to 3 seats", "10k events/mo", "Community support"],
    cta: "Start free",
  },
  {
    name: "Growth",
    monthly: 49,
    yearly: 39,
    desc: "For growing teams shipping fast.",
    features: ["Unlimited workspaces", "Up to 25 seats", "10M events/mo", "AI copilots", "Priority support"],
    cta: "Start trial",
    featured: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    desc: "For organizations at scale.",
    features: ["SSO + SCIM", "Custom limits", "Dedicated region", "Audit logs", "Solutions engineer"],
    cta: "Contact sales",
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neon-cyan">Pricing</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, <span className="text-gradient">scalable</span> pricing.
          </h2>
          <div className="mt-8 inline-flex items-center gap-1 rounded-full glass p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${!yearly ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${yearly ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground"}`}
            >
              Yearly <span className="ml-1 text-xs opacity-80">−20%</span>
            </button>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((p, i) => {
            const price = yearly ? p.yearly : p.monthly;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-3xl p-8 ${
                  p.featured
                    ? "glass-strong border-gradient shadow-glow"
                    : "glass"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                    Most popular
                  </div>
                )}
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  {price === null ? (
                    <span className="font-display text-4xl font-bold">Custom</span>
                  ) : (
                    <>
                      <span className="font-display text-5xl font-bold tracking-tight">${price}</span>
                      <span className="text-sm text-muted-foreground">/seat /mo</span>
                    </>
                  )}
                </div>
                <a
                  href="#cta"
                  className={`mt-6 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    p.featured
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "glass hover:bg-secondary/40"
                  }`}
                >
                  {p.cta}
                </a>
                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
