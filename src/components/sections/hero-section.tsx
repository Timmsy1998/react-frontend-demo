import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  "Timmsy design language",
  "High-impact motion systems",
  "Production-ready React builds"
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
        Built by Timmsy
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
      >
        Timmsy crafts frontend products that feel sharp, fast, and unmistakably premium.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-muted-foreground"
      >
        From concept to launch, I combine strong visual direction, clean architecture,
        and purposeful animation to create experiences people remember.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <Button size="lg">
          View Timmsy Work
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
          Explore Services
        </Button>
      </motion.div>

      <div className="mt-12 grid gap-3 sm:grid-cols-3">
        {features.map((feature, idx) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 + idx * 0.1 }}
            className="rounded-xl border border-border/70 bg-card/50 p-4 backdrop-blur"
          >
            <p className="text-sm text-muted-foreground">{feature}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
