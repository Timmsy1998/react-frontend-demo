import type { LucideIcon } from "lucide-react";
import { Layers, Rocket, WandSparkles } from "lucide-react";

export const navItems = [
  { label: "Loadout", href: "#features" },
  { label: "Arena Stats", href: "#results" },
  { label: "Join Party", href: "#contact" },
] as const;

export type FeatureCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  stat: string;
};

export const featureCards: FeatureCard[] = [
  {
    title: "HUD Systems",
    description:
      "Composable React UI blocks that keep spacing, state handling, and accessibility consistent.",
    icon: Layers,
    accent: "from-cyan-400/30 to-transparent",
    stat: "42 reusable modules",
  },
  {
    title: "Combat Motion",
    description:
      "Framer Motion choreography that guides player focus without hurting responsiveness.",
    icon: WandSparkles,
    accent: "from-primary/30 to-transparent",
    stat: "120fps target",
  },
  {
    title: "Ship Pipeline",
    description:
      "Production-ready frontend delivery with clear architecture, linted code, and testable patterns.",
    icon: Rocket,
    accent: "from-emerald-300/25 to-transparent",
    stat: "97+ Lighthouse baseline",
  },
];

export const resultMetrics = [
  { label: "Missions completed", value: 24, suffix: "+" },
  { label: "Frame stability", value: 98, suffix: "%" },
  { label: "Input speed gain", value: 42, suffix: "%" },
];

export const qualityBars = [
  { label: "HUD readability", percent: 92 },
  { label: "Motion smoothness", percent: 96 },
  { label: "Release reliability", percent: 90 },
];
