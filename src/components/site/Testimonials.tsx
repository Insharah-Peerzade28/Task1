import { motion } from "framer-motion";
import { Star } from "lucide-react";

const quotes = [
  {
    body: "Nebula replaced four tools and cut our reporting cycle from days to minutes. It's the rare platform that feels like the future.",
    author: "Maya Chen",
    role: "VP Data, Lumen",
  },
  {
    body: "The AI copilots are genuinely useful. Our analysts now spend time on insights, not SQL plumbing.",
    author: "David Okafor",
    role: "Head of Analytics, Vertex",
  },
  {
    body: "Security review took 90 minutes. Onboarding the whole team took an afternoon. Magical.",
    author: "Priya Raman",
    role: "CTO, Orbital",
  },
  {
    body: "We benchmarked Nebula against three incumbents. It won on speed, price, and design.",
    author: "Jonas Weber",
    role: "Director, Helix",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neon-cyan">Loved by teams</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Hear it from the <span className="text-gradient">builders</span>.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass hover-glow rounded-3xl p-8"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-neon-cyan text-neon-cyan" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed">"{q.body}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground">
                  {q.author.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{q.author}</div>
                  <div className="text-xs text-muted-foreground">{q.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
