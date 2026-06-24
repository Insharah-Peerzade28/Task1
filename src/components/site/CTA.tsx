import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="cta" className="relative py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong relative overflow-hidden rounded-[2rem] p-10 text-center shadow-elegant sm:p-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-60" />
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-neon-violet/30 blur-3xl animate-pulse-glow" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-neon-cyan/30 blur-3xl animate-pulse-glow [animation-delay:2s]" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to build with <span className="text-gradient">Nebula</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Join the newsletter for product updates, engineering deep-dives, and early access to new features.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row"
            >
              <div className="glass flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                {sent ? "Subscribed ✓" : "Subscribe"}
                {!sent && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
              </button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
