import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Metric = {
  label: string;
  value: number;
  suffix?: string;
};

const metrics: Metric[] = [
  { label: "Projects shipped", value: 24, suffix: "+" },
  { label: "Avg. Lighthouse score", value: 98, suffix: "%" },
  { label: "Performance gain", value: 42, suffix: "%" }
];

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
    <section className="mx-auto grid w-[min(1100px,92%)] gap-6 pb-28 md:grid-cols-[1.2fr_1fr]">
      <div className="rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-sm sm:p-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45 }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
        >
          Results
        </motion.p>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.65 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-xl border border-border/60 bg-background/40 p-4"
            >
              <CountUp value={item.value} suffix={item.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border/70 bg-card/55 p-6 backdrop-blur-sm sm:p-8"
      >
        <Quote className="h-6 w-6 text-primary" />
        <p className="mt-4 text-lg leading-relaxed">
          Timmsy transformed our frontend from a basic interface into a product that
          feels premium and performs better on every key metric.
        </p>
        <p className="mt-5 text-sm text-muted-foreground">
          Jordan Lee, Product Lead at Northline
        </p>
      </motion.aside>
    </section>
  );
}
