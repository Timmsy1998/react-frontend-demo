import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  Gauge,
  Layers,
  Rocket,
  Shield,
  WandSparkles,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "Loadout", href: "#features" },
  { label: "Ops", href: "#operations" },
  { label: "Arsenal", href: "#arsenal" },
  { label: "Pipeline", href: "#pipeline" },
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

export type OperationMode = {
  id: string;
  label: string;
  description: string;
  queueTime: string;
  squadSync: string;
  confidence: number;
  loadout: string[];
  heatmap: number[];
};

export const operationModes: OperationMode[] = [
  {
    id: "ranked",
    label: "Ranked Sprint",
    description:
      "High-pressure release mode focused on rapid delivery and strict quality gates.",
    queueTime: "22m",
    squadSync: "4 devs",
    confidence: 94,
    loadout: ["Typed API contracts", "Component snapshots", "Perf budget monitor"],
    heatmap: [34, 56, 72, 58, 63, 79, 66],
  },
  {
    id: "raid",
    label: "Raid Night",
    description:
      "Large feature drop with coordinated frontend, backend, and design system updates.",
    queueTime: "46m",
    squadSync: "7 devs",
    confidence: 91,
    loadout: ["Cross-team PR lanes", "Release branch staging", "Visual diff checks"],
    heatmap: [40, 62, 70, 84, 76, 68, 81],
  },
  {
    id: "scrim",
    label: "Scrim Build",
    description:
      "Fast prototyping mode for experimental UX loops and interaction tuning.",
    queueTime: "11m",
    squadSync: "3 devs",
    confidence: 96,
    loadout: ["Storybook playground", "Interaction probes", "A/B telemetry hooks"],
    heatmap: [22, 35, 54, 61, 47, 58, 42],
  },
];

export const liveOpsFeed = [
  { event: "Latency guard enabled", time: "09:12" },
  { event: "Ship gate passed on UI package", time: "09:27" },
  { event: "Motion profile recalibrated", time: "09:35" },
  { event: "Accessibility sweep complete", time: "09:44" },
];

export type PipelineStep = {
  title: string;
  owner: string;
  duration: string;
  status: "Complete" | "Active" | "Queued";
  checklist: string[];
};

export const pipelineSteps: PipelineStep[] = [
  {
    title: "Concept Capture",
    owner: "Design Ops",
    duration: "2d",
    status: "Complete",
    checklist: ["UX objective lock", "Interaction references", "Content scaffolding"],
  },
  {
    title: "System Build",
    owner: "Frontend Guild",
    duration: "4d",
    status: "Active",
    checklist: ["Typed component APIs", "Animation variants", "Responsive QA"],
  },
  {
    title: "Load Test",
    owner: "Platform Team",
    duration: "1d",
    status: "Queued",
    checklist: ["Runtime profiling", "Hydration check", "Bundle diff audit"],
  },
  {
    title: "Launch Window",
    owner: "Mission Control",
    duration: "6h",
    status: "Queued",
    checklist: ["Release notes", "Rollback hooks", "Post-launch monitoring"],
  },
];

export type ArsenalTool = {
  name: string;
  category: "Rendering" | "State" | "Tooling";
  icon: LucideIcon;
  proficiency: number;
  perk: string;
};

export const arsenalTools: ArsenalTool[] = [
  {
    name: "Framer Motion",
    category: "Rendering",
    icon: Gauge,
    proficiency: 94,
    perk: "Expressive motion with predictable performance.",
  },
  {
    name: "Component Architecture",
    category: "State",
    icon: BrainCircuit,
    proficiency: 91,
    perk: "Clear composition boundaries and controlled complexity.",
  },
  {
    name: "Release Automation",
    category: "Tooling",
    icon: Workflow,
    proficiency: 88,
    perk: "Stable pipelines and fast rollback confidence.",
  },
  {
    name: "Design Systems",
    category: "Rendering",
    icon: Shield,
    proficiency: 93,
    perk: "Cohesive visual language with scalable tokens.",
  },
  {
    name: "State Orchestration",
    category: "State",
    icon: Bot,
    proficiency: 89,
    perk: "Deterministic UI behavior under heavy interaction.",
  },
];
