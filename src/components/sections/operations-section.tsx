import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { liveOpsFeed, operationModes } from "@/content/game-content";
import { revealScale, revealSoft, viewportDefaults } from "@/lib/motion";

export function OperationsSection() {
  const [activeModeId, setActiveModeId] = useState(operationModes[0].id);

  const activeMode = useMemo(
    () => operationModes.find((mode) => mode.id === activeModeId) ?? operationModes[0],
    [activeModeId],
  );

  return (
    <section id="operations" className="mx-auto w-[min(1100px,92%)] pb-24">
      <motion.div
        variants={revealSoft}
        initial="hidden"
        whileInView="visible"
        viewport={{ ...viewportDefaults, amount: 0.45 }}
        transition={{ duration: 0.45 }}
        className="max-w-2xl"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Operations Deck
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Switch live mission modes and inspect real-time frontend behavior.
        </h2>
      </motion.div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          variants={revealScale}
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefaults}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-sm"
        >
          <div className="flex flex-wrap gap-2">
            {operationModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveModeId(mode.id)}
                className={`rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.12em] transition-colors ${
                  activeMode.id === mode.id
                    ? "border-primary/60 bg-primary/20 text-primary"
                    : "border-border/70 bg-background/35 text-muted-foreground hover:text-foreground"
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border/70 bg-background/35 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Queue Time
              </p>
              <p className="mt-2 text-2xl font-semibold">{activeMode.queueTime}</p>
            </div>
            <div className="rounded-lg border border-border/70 bg-background/35 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Squad Sync
              </p>
              <p className="mt-2 text-2xl font-semibold">{activeMode.squadSync}</p>
            </div>
            <div className="rounded-lg border border-border/70 bg-background/35 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Confidence
              </p>
              <p className="mt-2 text-2xl font-semibold">{activeMode.confidence}%</p>
            </div>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">{activeMode.description}</p>

          <div className="mt-5 space-y-2">
            {activeMode.heatmap.map((point, idx) => (
              <div key={`${activeMode.id}-${idx}`} className="grid grid-cols-[80px_1fr] items-center gap-3">
                <p className="text-xs text-muted-foreground">Sector {idx + 1}</p>
                <div className="h-2 overflow-hidden rounded-full bg-background/70">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${point}%` }}
                    transition={{ duration: 0.45, delay: idx * 0.05 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-300"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {activeMode.loadout.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/35 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-cyan-100"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          variants={revealScale}
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefaults}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-sm"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Live Ops Feed
          </p>
          <div className="mt-5 space-y-3">
            {liveOpsFeed.map((item, idx) => (
              <motion.div
                key={item.event}
                variants={revealSoft}
                initial="hidden"
                whileInView="visible"
                viewport={{ ...viewportDefaults, amount: 0.7 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="rounded-lg border border-border/70 bg-background/35 p-3"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {item.time}
                </p>
                <p className="mt-1 text-sm">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
