import { motion } from "framer-motion";
import { featureCards } from "@/content/game-content";
import { revealScale, revealUp, viewportDefaults } from "@/lib/motion";

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto w-[min(1100px,92%)] pb-24 pt-10">
      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ ...viewportDefaults, amount: 0.45 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Loadout
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Equip a frontend stack built for speed, clarity, and spectacle.
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {featureCards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              variants={revealScale}
              initial="hidden"
              whileInView="visible"
              viewport={viewportDefaults}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-sm"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-primary/90">
                Track 0{idx + 1}
              </p>
              <h3 className="mt-2 text-xl font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div className="h-1 w-12 rounded-full bg-primary/45 transition-all duration-300 group-hover:w-20" />
                <p className="text-xs text-muted-foreground">{item.stat}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
