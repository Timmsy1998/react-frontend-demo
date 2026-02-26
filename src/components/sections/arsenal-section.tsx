import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { arsenalTools } from "@/content/game-content";
import { revealScale, revealSoft, viewportDefaults } from "@/lib/motion";

const categories = ["All", "Rendering", "State", "Tooling"] as const;
type Category = (typeof categories)[number];

export function ArsenalSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredTools = useMemo(
    () =>
      activeCategory === "All"
        ? arsenalTools
        : arsenalTools.filter((tool) => tool.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="arsenal" className="mx-auto w-[min(1100px,92%)] pb-24">
      <motion.div
        variants={revealSoft}
        initial="hidden"
        whileInView="visible"
        viewport={{ ...viewportDefaults, amount: 0.45 }}
        transition={{ duration: 0.45 }}
        className="max-w-2xl"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Tech Arsenal
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Filter the production toolkit that powers this frontend demo.
        </h2>
      </motion.div>

      <motion.div
        variants={revealScale}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefaults}
        transition={{ duration: 0.45 }}
        className="mt-7 rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-sm"
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.12em] transition-colors ${
                activeCategory === category
                  ? "border-primary/60 bg-primary/20 text-primary"
                  : "border-border/70 bg-background/35 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filteredTools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <motion.article
                key={tool.name}
                variants={revealScale}
                initial="hidden"
                whileInView="visible"
                viewport={{ ...viewportDefaults, amount: 0.5 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-border/70 bg-background/35 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {tool.category}
                  </span>
                </div>
                <p className="mt-4 text-lg font-medium">{tool.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{tool.perk}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-background/70">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.proficiency}%` }}
                    viewport={{ ...viewportDefaults, amount: 0.75 }}
                    transition={{ duration: 0.6, delay: 0.1 + idx * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-300"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
