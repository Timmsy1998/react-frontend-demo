import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  "Arena-grade design language",
  "High-impact motion systems",
  "Production-ready React architecture",
];

export function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-[85vh] w-[min(1100px,92%)] flex-col justify-center pb-16 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm backdrop-blur"
      >
        <Sparkles className="h-4 w-4 text-primary" />
        Built for Game UI Demos
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl bg-gradient-to-r from-white via-cyan-100 to-slate-200 bg-clip-text text-balance text-4xl font-semibold tracking-tight text-transparent sm:text-6xl"
      >
        Build interfaces that feel like live game worlds, without sacrificing code quality.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-muted-foreground"
      >
        From prototype to ship, this React demo showcases reusable components, typed
        data models, and motion patterns that stay maintainable at scale.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <Button size="lg">
          View Arena Build
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
          Open Dev Notes
        </Button>
      </motion.div>

      <div className="mt-12 grid gap-3 sm:grid-cols-3">
        {features.map((feature, idx) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 + idx * 0.1 }}
            className="group rounded-xl border border-border/70 bg-card/50 p-4 backdrop-blur"
          >
            <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
              {feature}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
