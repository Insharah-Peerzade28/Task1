import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "How does the 14-day trial work?", a: "Sign up with any email — no credit card required. You'll have full access to Growth-tier features for two weeks. No surprise charges." },
  { q: "Can I bring my own AI models?", a: "Yes. Nebula supports OpenAI, Anthropic, Gemini, and self-hosted models via our model gateway. You can route by cost, latency, or capability." },
  { q: "Is Nebula SOC 2 compliant?", a: "We're SOC 2 Type II, HIPAA, and GDPR ready. Our latest reports are available in the trust center under NDA." },
  { q: "Do you offer on-prem deployment?", a: "Enterprise customers can deploy Nebula in their own VPC on AWS, GCP, or Azure. We also support air-gapped installs." },
  { q: "What integrations are supported?", a: "200+ out of the box — Snowflake, BigQuery, Postgres, Salesforce, HubSpot, Stripe, Segment, and more. Custom connectors take an afternoon." },
  { q: "How is pricing calculated?", a: "Per seat per month, with generous event quotas included. Enterprise plans are custom-priced based on volume and support tier." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neon-cyan">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Questions, <span className="text-gradient">answered</span>.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass overflow-hidden rounded-2xl"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold">{f.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-45 text-neon-cyan" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
