import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { tag: "Engineering", title: "How we built sub-100ms collaboration at planet scale", date: "Mar 12" },
  { tag: "Product", title: "Introducing Nebula 4.0 — AI-native dashboards", date: "Feb 28" },
  { tag: "Customers", title: "Lumen cut reporting time by 94% with Nebula", date: "Feb 14" },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neon-cyan">Insights</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              From the <span className="text-gradient">Nebula blog</span>.
            </h2>
          </motion.div>
          <a href="#" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
            View all posts →
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass hover-glow group flex flex-col overflow-hidden rounded-3xl"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-aurora">
                <div className="absolute inset-0 bg-gradient-radial opacity-80" />
                <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass-strong">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-secondary/40 px-2 py-0.5 ring-1 ring-border">{p.tag}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
