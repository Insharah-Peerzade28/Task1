import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) animate(value, to, { duration: 2, ease: "easeOut" });
  }, [inView, to, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 99.99, suffix: "%", label: "Uptime SLA" },
  { value: 240, suffix: "M+", label: "Events / day" },
  { value: 18000, suffix: "+", label: "Teams onboard" },
  { value: 42, suffix: "ms", label: "Median latency" },
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-12 shadow-elegant sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-50" />
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  <span className="text-gradient">
                    {s.value < 100 ? s.value : <Counter to={s.value} suffix={s.suffix} />}
                    {s.value < 100 && s.suffix}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
