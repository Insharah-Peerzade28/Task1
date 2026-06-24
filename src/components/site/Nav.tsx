import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useSession } from "@/hooks/use-session";


const links = [
  { href: "#features", label: "Features" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Customers" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const { user } = useSession();


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`glass flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${scrolled ? "shadow-elegant" : ""}`}>
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="text-gradient">Nebula</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLight((v) => !v)}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
            >
              {light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            {user ? (
              <Link
                to="/dashboard"
                className="hidden rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 md:inline-block"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/auth"
                className="hidden rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 md:inline-block"
              >
                Sign in
              </Link>
            )}

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground hover:bg-secondary/50 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Link to={user ? "/dashboard" : "/auth"} onClick={() => setOpen(false)} className="mt-1 rounded-lg bg-gradient-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
              {user ? "Dashboard" : "Sign in"}
            </Link>

          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
