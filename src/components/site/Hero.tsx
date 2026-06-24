import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Stars } from "lucide-react";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import orb from "@/assets/orb.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-24">
      {/* Background image with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </motion.div>

      {/* Animated aurora blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-neon-violet/30 blur-3xl animate-pulse-glow" />
        <div className="absolute top-40 right-10 h-80 w-80 rounded-full bg-neon-cyan/30 blur-3xl animate-pulse-glow [animation-delay:1.5s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-neon-magenta/20 blur-3xl animate-pulse-glow [animation-delay:3s]" />
      </div>

      {/* Floating orb */}
      <motion.img
        src={orb}
        alt=""
        width={520}
        height={520}
        style={{ y: orbY }}
        className="pointer-events-none absolute right-[-120px] top-32 hidden h-[520px] w-[520px] animate-float opacity-90 mix-blend-screen lg:block"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-16 pb-32 text-center sm:px-6 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Stars className="h-3.5 w-3.5 text-neon-cyan" />
          Now shipping Nebula 4.0 — AI-native analytics
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          The operating system for{" "}
          <span className="text-gradient">intelligent</span> teams.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          Unify data, automate decisions, and ship faster with a workspace that
          thinks alongside you. Built for the next era of enterprise software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Start free trial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary/40"
          >
            <Play className="h-4 w-4" />
            Watch demo
          </a>
        </motion.div>

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 w-full max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by teams at
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold text-muted-foreground/70">
            {["ACME", "Lumen", "Vertex", "Northwind", "Orbital", "Helix"].map((n) => (
              <span key={n} className="transition-colors hover:text-foreground">{n}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
