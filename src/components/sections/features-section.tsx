import { motion } from "framer-motion";
import { Layers, Rocket, WandSparkles } from "lucide-react";

const items = [
  {
    title: "Interface Systems",
    description:
      "Reusable UI patterns with consistent spacing, typography, and interaction states.",
    icon: Layers
  },
  {
    title: "Motion Direction",
    description:
      "Transitions that guide attention and reinforce hierarchy without adding friction.",
    icon: WandSparkles
  },
  {
    title: "Launch Quality",
    description:
      "Production-focused implementation with performance, accessibility, and clean structure.",
    icon: Rocket
  }
];

export function FeaturesSection() {
  return (
    <section className="mx-auto w-[min(1100px,92%)] pb-24 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Core Strengths
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          A focused stack for polished, modern web experiences.
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-5 h-1 w-12 rounded-full bg-primary/45 transition-all duration-300 group-hover:w-20" />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
