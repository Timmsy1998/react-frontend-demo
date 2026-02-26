import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown, Crosshair, Gamepad2, Zap } from "lucide-react";
import { type MouseEvent } from "react";

import { Button } from "@/components/ui/button";

export function LandingHeader() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 22 });
  const smoothPointerX = useSpring(pointerX, { stiffness: 260, damping: 30 });
  const smoothPointerY = useSpring(pointerY, { stiffness: 260, damping: 30 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const orbX = useTransform(smoothX, [-0.5, 0.5], [-44, 44]);
  const orbY = useTransform(smoothY, [-0.5, 0.5], [-36, 36]);
  const gridX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const gridY = useTransform(smoothY, [-0.5, 0.5], [16, -16]);
  const headingX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const headingY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const panelGlowX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const panelGlowY = useTransform(smoothY, [-0.5, 0.5], [-24, 24]);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(event.clientY - bounds.top);
  };

  const resetTilt = (element: HTMLElement) => {
    const bounds = element.getBoundingClientRect();
    mouseX.set(0);
    mouseY.set(0);
    pointerX.set(bounds.width / 2);
    pointerY.set(bounds.height / 2);
  };

  const scrollToContent = () => {
    document.getElementById("content-start")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      onMouseMove={handleMove}
      onMouseEnter={(event) => resetTilt(event.currentTarget)}
      onMouseLeave={(event) => resetTilt(event.currentTarget)}
      className="relative grid min-h-screen place-items-center overflow-hidden px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,hsl(var(--primary)/0.34),transparent_38%),radial-gradient(circle_at_88%_10%,#00d4ff33,transparent_32%),linear-gradient(160deg,#060b14,#0a1321_52%,#091022)]" />
      <motion.div
        style={{ x: gridX, y: gridY }}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] opacity-25"
      />
      <motion.div
        style={{ left: smoothPointerX, top: smoothPointerY }}
        className="pointer-events-none absolute z-[1] hidden h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl mix-blend-screen md:block"
      />

      <motion.div
        style={{ x: orbX, y: orbY }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.55, 0.75, 0.55] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[12%] top-[25%] h-44 w-44 rounded-full bg-primary/30 blur-3xl"
      />
      <motion.div
        style={{ x: useTransform(orbX, (x) => -x), y: useTransform(orbY, (y) => -y) }}
        animate={{ scale: [1, 1.16, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[18%] right-[14%] h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <motion.div
          style={{ x: headingX, y: headingY }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-primary backdrop-blur"
        >
          <Gamepad2 className="h-4 w-4" />
          Timmsy Interactive Showcase
        </motion.div>

        <motion.h1
          style={{ x: headingX, y: headingY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-7xl"
        >
          Enter the next-level frontend arena.
        </motion.h1>

        <motion.p
          style={{ x: headingX, y: headingY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-slate-200/80"
        >
          Real-time motion, layered visuals, and a gameplay-inspired interface language
          built to feel alive from the first interaction.
        </motion.p>

        <motion.div
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="relative mt-12 w-full max-w-3xl overflow-hidden rounded-2xl border border-primary/35 bg-card/60 p-5 text-left shadow-[0_0_80px_rgba(0,212,255,0.12)] backdrop-blur-lg sm:p-7"
        >
          <motion.div
            style={{ x: panelGlowX, y: panelGlowY }}
            className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
          />
          <div className="flex items-center justify-between gap-4 border-b border-border/80 pb-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Timmsy OS
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-primary">
              <Crosshair className="h-4 w-4" />
              Session Ready
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border/70 bg-background/35 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Response
              </p>
              <p className="mt-2 text-2xl font-semibold">12ms</p>
            </div>
            <div className="rounded-lg border border-border/70 bg-background/35 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                FPS
              </p>
              <p className="mt-2 text-2xl font-semibold">120</p>
            </div>
            <div className="rounded-lg border border-border/70 bg-background/35 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Uptime
              </p>
              <p className="mt-2 text-2xl font-semibold">99.9%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button size="lg" onClick={scrollToContent}>
            Load Mission
            <Zap className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToContent}>
            Explore Stack
          </Button>
        </motion.div>
      </div>

      <button
        type="button"
        aria-label="Scroll to content"
        onClick={scrollToContent}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 text-sm"
        >
          Scroll
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-background/75 to-background" />
    </section>
  );
}
