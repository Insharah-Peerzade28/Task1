import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { Blog } from "@/components/site/Blog";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nebula — The OS for intelligent teams" },
      { name: "description", content: "Unify data, automate decisions, and ship faster with Nebula — the AI-native platform built for the next era of enterprise software." },
      { property: "og:title", content: "Nebula — The OS for intelligent teams" },
      { property: "og:description", content: "AI-native analytics, automation, and collaboration for modern teams." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Services />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
