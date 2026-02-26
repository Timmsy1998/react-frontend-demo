import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  "React + TypeScript baseline",
  "shadcn-style component architecture",
  "Framer Motion interaction patterns"
];

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.28),transparent_45%),radial-gradient(circle_at_80%_0%,hsl(var(--primary)/0.22),transparent_40%)]" />

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm backdrop-blur"
        >
          <Sparkles className="h-4 w-4" />
          Frontend Demo Foundation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          Build a standout React experience with deliberate motion and reusable UI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          The project is now primed for rapid feature work using a modern stack that
          scales cleanly from demo to production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button size="lg">
            Start Building
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            View Components
          </Button>
        </motion.div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35 + idx * 0.1 }}
              className="rounded-xl border border-border/70 bg-card/50 p-4 backdrop-blur"
            >
              <p className="text-sm text-muted-foreground">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
