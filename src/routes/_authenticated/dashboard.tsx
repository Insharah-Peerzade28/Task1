import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid,
  Bar, BarChart,
} from "recharts";
import { Sparkles, LogOut, Activity, Users, Zap, TrendingUp, Bell, Search } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/use-session";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Nebula" },
      { name: "description", content: "Your Nebula workspace overview." },
    ],
  }),
  component: Dashboard,
});

type Profile = { full_name: string | null; email: string | null; avatar_url: string | null };

const series = Array.from({ length: 14 }).map((_, i) => ({
  day: `D${i + 1}`,
  events: Math.round(2200 + Math.sin(i / 2) * 600 + Math.random() * 400),
  signals: Math.round(800 + Math.cos(i / 3) * 250 + Math.random() * 180),
}));

const usage = [
  { label: "API", value: 78 },
  { label: "Models", value: 64 },
  { label: "Storage", value: 41 },
  { label: "Compute", value: 88 },
  { label: "Edge", value: 53 },
];

const notifications = [
  { title: "New copilot deployed", time: "2m ago" },
  { title: "Weekly digest ready", time: "1h ago" },
  { title: "Team member joined", time: "Yesterday" },
];

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSession();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("full_name, email, avatar_url")
      .eq("id", user.id)
      .maybeSingle()
      .then(({ data }) => setProfile(data));
  }, [user]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({ to: "/auth" });
  }

  const displayName = profile?.full_name ?? user?.email?.split("@")[0] ?? "there";
  const initials = displayName.slice(0, 2).toUpperCase();

  return (
    <main className="relative min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0 bg-gradient-aurora opacity-30" />
      <div className="pointer-events-none fixed -top-40 right-0 h-96 w-96 rounded-full bg-neon-violet/20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-40 left-0 h-96 w-96 rounded-full bg-neon-cyan/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Top bar */}
        <header className="glass flex items-center justify-between gap-3 rounded-2xl px-4 py-2.5 shadow-elegant">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="text-gradient">Nebula</span>
          </Link>

          <div className="glass hidden flex-1 max-w-md items-center gap-2 rounded-xl px-3 py-2 md:flex">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search dashboards, copilots, docs…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="hidden rounded-md border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground md:inline">⌘K</kbd>
          </div>

          <div className="flex items-center gap-2">
            <button aria-label="Notifications" className="relative grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-neon-cyan" />
            </button>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary font-display text-xs font-bold text-primary-foreground">
              {initials}
            </div>
            <button
              onClick={handleSignOut}
              className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground sm:inline-flex"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </header>

        {/* Greeting */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neon-cyan">Workspace</p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome back, <span className="text-gradient">{displayName}</span>.
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Here's what's happening across your Nebula deployments today.</p>
        </motion.section>

        {/* Stat cards */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Activity, label: "Events", value: "1.24M", delta: "+12.4%" },
            { icon: Users, label: "Active users", value: "8,421", delta: "+3.1%" },
            { icon: Zap, label: "AI calls", value: "342K", delta: "+27.6%" },
            { icon: TrendingUp, label: "Revenue", value: "$48.7K", delta: "+8.2%" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass hover-glow group rounded-2xl p-5"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary/10 ring-1 ring-border">
                  <s.icon className="h-4 w-4 text-neon-cyan" />
                </div>
                <span className="rounded-full bg-neon-cyan/10 px-2 py-0.5 text-xs font-medium text-neon-cyan">{s.delta}</span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
              <p className="mt-1 font-display text-2xl font-bold">{s.value}</p>
            </motion.div>
          ))}
        </section>

        {/* Charts */}
        <section className="mt-6 grid gap-4 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-5 lg:col-span-2"
          >
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h3 className="font-display text-base font-semibold">Activity (14 days)</h3>
                <p className="text-xs text-muted-foreground">Events vs intent signals</p>
              </div>
              <div className="flex gap-3 text-xs">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-neon-cyan" />Events</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-neon-violet" />Signals</span>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={series}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="color-mix(in oklch, var(--neon-cyan) 60%, transparent)" />
                      <stop offset="100%" stopColor="color-mix(in oklch, var(--neon-cyan) 0%, transparent)" />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="color-mix(in oklch, var(--neon-violet) 50%, transparent)" />
                      <stop offset="100%" stopColor="color-mix(in oklch, var(--neon-violet) 0%, transparent)" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                  <Area type="monotone" dataKey="events" stroke="var(--neon-cyan)" strokeWidth={2} fill="url(#g1)" />
                  <Area type="monotone" dataKey="signals" stroke="var(--neon-violet)" strokeWidth={2} fill="url(#g2)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="glass rounded-2xl p-5"
          >
            <h3 className="font-display text-base font-semibold">Resource usage</h3>
            <p className="text-xs text-muted-foreground">% of monthly quota</p>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={usage} layout="vertical" margin={{ left: 8, right: 8 }}>
                  <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" hide domain={[0, 100]} />
                  <YAxis type="category" dataKey="label" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} width={70} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="value" fill="var(--neon-cyan)" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </section>

        {/* Bottom row */}
        <section className="mt-6 grid gap-4 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-5 lg:col-span-2"
          >
            <h3 className="font-display text-base font-semibold">Recent activity</h3>
            <ul className="mt-4 divide-y divide-border/60">
              {[
                ["Deployed copilot v2.1 to production", "API • 4m ago"],
                ["Synced Salesforce → Warehouse", "Pipeline • 22m ago"],
                ["Maya invited 3 teammates", "Workspace • 1h ago"],
                ["Quarterly report generated", "Analytics • 3h ago"],
                ["Model 'churn-v4' fine-tuned", "AI • Yesterday"],
              ].map(([title, meta]) => (
                <li key={title} className="flex items-center justify-between py-3 text-sm">
                  <span>{title}</span>
                  <span className="text-xs text-muted-foreground">{meta}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="glass rounded-2xl p-5"
          >
            <h3 className="font-display text-base font-semibold">Notifications</h3>
            <ul className="mt-4 space-y-3">
              {notifications.map((n) => (
                <li key={n.title} className="flex items-start gap-3 rounded-xl bg-secondary/30 p-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-neon-cyan" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{n.title}</p>
                    <p className="text-xs text-muted-foreground">{n.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-4 w-full rounded-xl bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01]">
              View all
            </button>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
