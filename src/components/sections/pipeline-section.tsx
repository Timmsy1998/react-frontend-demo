import { motion } from "framer-motion";
import { useMemo } from "react";

import { pipelineSteps } from "@/content/game-content";
import { revealScale, revealSoft, viewportDefaults } from "@/lib/motion";

export function PipelineSection() {
  const completed = useMemo(
    () => pipelineSteps.filter((step) => step.status === "Complete").length,
    [],
  );
  const completion = Math.round((completed / pipelineSteps.length) * 100);

  return (
    <section id="pipeline" className="mx-auto w-[min(1100px,92%)] pb-24">
      <motion.div
        variants={revealSoft}
        initial="hidden"
        whileInView="visible"
        viewport={{ ...viewportDefaults, amount: 0.45 }}
        transition={{ duration: 0.45 }}
        className="max-w-2xl"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Campaign Pipeline
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Track delivery from concept lock to launch window with clear mission gates.
        </h2>
      </motion.div>

      <motion.div
        variants={revealScale}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefaults}
        transition={{ duration: 0.5 }}
        className="mt-8 rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-[0.12em] text-muted-foreground">
            Mission Completion
          </p>
          <p className="text-sm font-semibold">{completion}%</p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-background/70">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${completion}%` }}
            viewport={{ ...viewportDefaults, amount: 0.7 }}
            transition={{ duration: 0.7 }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-300"
          />
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {pipelineSteps.map((step, idx) => (
            <motion.article
              key={step.title}
              variants={revealScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ ...viewportDefaults, amount: 0.45 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="rounded-xl border border-border/70 bg-background/35 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-medium">{step.title}</p>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[11px] uppercase tracking-[0.12em] ${
                    step.status === "Complete"
                      ? "border-emerald-300/50 bg-emerald-300/10 text-emerald-200"
                      : step.status === "Active"
                        ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-200"
                        : "border-border/70 bg-background/40 text-muted-foreground"
                  }`}
                >
                  {step.status}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {step.owner} • {step.duration}
              </p>
              <div className="mt-4 space-y-2">
                {step.checklist.map((item) => (
                  <p key={item} className="text-sm text-muted-foreground">
                    {item}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
