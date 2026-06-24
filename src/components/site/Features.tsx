import { motion } from "framer-motion";
import { Bot, Shield, Zap, BarChart3, Workflow, Globe } from "lucide-react";

const features = [
  { icon: Bot, title: "AI copilots", desc: "Natural-language interfaces that draft, summarize, and act on your data in seconds." },
  { icon: Zap, title: "Realtime sync", desc: "Sub-100ms collaboration across teams, regions, and devices — no refresh required." },
  { icon: Shield, title: "Enterprise security", desc: "SOC 2 Type II, HIPAA, GDPR. SSO, SCIM, audit logs — all on by default." },
  { icon: BarChart3, title: "Live analytics", desc: "Beautiful dashboards that update as your business breathes. No SQL needed." },
  { icon: Workflow, title: "Automations", desc: "Visual workflow builder with 200+ integrations and serverless triggers." },
  { icon: Globe, title: "Global edge", desc: "Deployed across 30 regions for fast, resilient experiences worldwide." },
];

export function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neon-cyan">Features</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need, <span className="text-gradient">nothing you don't</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A modular platform designed to scale from a side project to ten-thousand-seat deployments.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="glass hover-glow group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary/10 ring-1 ring-border">
                  <f.icon className="h-5 w-5 text-neon-cyan" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
