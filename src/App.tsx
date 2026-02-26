import { motion } from "framer-motion";

import { FeaturesSection } from "@/components/sections/features-section";
import { LandingHeader } from "@/components/sections/landing-header";
import { StatsSection } from "@/components/sections/stats-section";
import { TopNav } from "@/components/sections/top-nav";
import { revealScale, viewportDefaults } from "@/lib/motion";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/0.12),transparent_26%),radial-gradient(circle_at_88%_85%,rgba(34,211,238,0.10),transparent_28%)]" />
      <LandingHeader />
      <div
        id="content-start"
        className="relative z-10 -mt-16 bg-gradient-to-b from-background/60 via-background to-background pt-16"
      >
        <TopNav />
        <FeaturesSection />
        <StatsSection />
        <section id="contact" className="mx-auto w-[min(1100px,92%)] pb-28">
          <motion.div
            variants={revealScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ ...viewportDefaults, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border/70 bg-card/55 p-8 backdrop-blur-sm sm:p-10"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Join The Party
            </p>
            <h3 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to launch a frontend that feels like a live game world?
            </h3>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              This demo shows the core loop: reusable React components, typed content
              models, motion-driven UI, and production-friendly structure.
            </p>
            <a
              href="#content-start"
              className="mt-8 inline-flex rounded-lg border border-primary/40 bg-primary/15 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              Open Mission Brief
            </a>
          </motion.div>
        </section>
      </div>
      <div className="fixed bottom-4 right-4 z-30 rounded-md border border-border/80 bg-card/80 px-3 py-2 text-xs text-muted-foreground shadow-lg backdrop-blur">
        Demo note: telemetry and player stats shown are mock sample data.
      </div>
    </main>
  );
}
