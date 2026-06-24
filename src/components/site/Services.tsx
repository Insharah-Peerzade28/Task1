import { motion } from "framer-motion";
import { Cpu, Layers, MessageSquare, LineChart } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "AI Engineering",
    desc: "Custom LLM pipelines, RAG systems, and fine-tuned models built for your domain.",
    items: ["Model evaluation", "Vector search", "Agent orchestration"],
  },
  {
    icon: Layers,
    title: "Data Platform",
    desc: "Modern lakehouse with streaming ingestion, governance, and semantic modeling.",
    items: ["Streaming ETL", "dbt + Iceberg", "Data contracts"],
  },
  {
    icon: MessageSquare,
    title: "Customer Intelligence",
    desc: "Unified customer 360 with predictive scoring and intent signals built-in.",
    items: ["Identity resolution", "Churn modeling", "Journey analytics"],
  },
  {
    icon: LineChart,
    title: "Growth Analytics",
    desc: "Experimentation, funnels, and revenue attribution in one connected suite.",
    items: ["A/B testing", "Cohorts", "Multi-touch attribution"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neon-cyan">Services</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Four pillars, <span className="text-gradient">one platform</span>.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass border-gradient hover-glow relative overflow-hidden rounded-3xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-primary shadow-glow">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-full bg-secondary/40 px-3 py-1 text-xs text-muted-foreground ring-1 ring-border"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
