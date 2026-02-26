import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { qualityBars, resultMetrics } from "@/content/game-content";
import { revealScale, revealSoft, viewportDefaults } from "@/lib/motion";

type Metric = {
  label: string;
  value: number;
  suffix?: string;
};

const metrics: Metric[] = resultMetrics;

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });

  useEffect(() => {
    if (!inView) return;

    const duration = 1100;
    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl font-semibold tracking-tight sm:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section
      id="results"
      className="mx-auto grid w-[min(1100px,92%)] gap-6 pb-28 md:grid-cols-[1.2fr_1fr]"
    >
      <div className="rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-sm sm:p-8">
        <motion.p
          variants={revealSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ ...viewportDefaults, amount: 0.65 }}
          transition={{ duration: 0.45 }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Match Results
        </motion.p>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              variants={revealScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ ...viewportDefaults, amount: 0.55 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-xl border border-border/60 bg-background/40 p-4"
            >
              <CountUp value={item.value} suffix={item.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {qualityBars.map((bar, idx) => (
            <motion.div
              key={bar.label}
              variants={revealSoft}
              initial="hidden"
              whileInView="visible"
              viewport={{ ...viewportDefaults, amount: 0.7 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
            >
              <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>{bar.label}</span>
                <span>{bar.percent}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-background/70">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar.percent}%` }}
                  viewport={{ ...viewportDefaults, amount: 0.75 }}
                  transition={{ duration: 0.7, delay: 0.2 + idx * 0.08 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.aside
        variants={revealScale}
        initial="hidden"
        whileInView="visible"
        viewport={{ ...viewportDefaults, amount: 0.45 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-sm sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_42%)]" />
        <Quote className="h-6 w-6 text-primary" />
        <p className="mt-4 text-lg leading-relaxed">
          Timmsy turned our UI from a static lobby into a live arena. Players feel the
          speed immediately, and our team ships updates without regressions.
        </p>
        <div className="mt-4 inline-flex gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, idx) => (
            <span key={idx}>★</span>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          Jordan Lee, Product Lead at Northline Interactive
        </p>
      </motion.aside>
    </section>
  );
}
