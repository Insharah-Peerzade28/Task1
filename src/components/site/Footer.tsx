import { Github, Twitter, Linkedin, Sparkles } from "lucide-react";

const cols = [
  { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Customers", "Contact"] },
  { title: "Resources", links: ["Docs", "API", "Community", "Status", "Security"] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="text-gradient">Nebula</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The operating system for intelligent teams. Built for the next era of enterprise software.
            </p>
            <div className="mt-6 flex gap-2">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="glass grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-sm font-semibold">{c.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Nebula Labs, Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
