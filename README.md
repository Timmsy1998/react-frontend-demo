# Timmsy Frontend Arena Demo

This is a React + TypeScript + Vite showcase I built to demonstrate how I approach modern frontend work when I want it to feel both high-impact and maintainable.

## Why I built it this way

I wanted this project to prove three things at once:

1. I can design visually ambitious interfaces (gaming-inspired, motion-heavy, layered UI).
2. I can keep the codebase clean and scalable while doing that.
3. I can treat this as a serious React demo, not just a one-off visual mock.

## My process

I built this in iterative passes:

1. Establish a visual direction:
I started with a bold arena-style hero and set a consistent visual language (glass panels, telemetry cards, tactical labels, neon accents).

2. Build interaction and motion systems:
I added pointer-reactive effects, viewport-based reveal transitions, and section-level motion rhythms so the whole page feels alive instead of static.

3. Scale the page structure:
I expanded from a few sections into a fuller showcase (`Loadout`, `Operations`, `Arsenal`, `Pipeline`, `Arena Stats`, and contact CTA), each with its own interaction model.

4. Refactor for sustainability:
I moved copy and section data into typed content models (`src/content/game-content.ts`) and reused shared motion variants (`src/lib/motion.ts`) to reduce duplication.

5. Polish UX details:
I fixed layout clipping edge cases, added smooth anchor scrolling, and preserved reduced-motion behavior for accessibility.

## Technical choices and why I made them

- **React + TypeScript**: I use this combo for maintainable component contracts and safer refactors.
- **Vite**: fast local iteration and simple production builds.
- **Tailwind CSS**: quick, consistent styling with clear utility-driven structure.
- **Framer Motion**: expressive animation system with reusable variants and controlled complexity.
- **Data-driven sections**: configuration arrays make it easy for Me to add/remove cards, nav items, and telemetry blocks without rewriting component logic.

## What this demo showcases

- interactive hero behavior and layered visual effects
- multiple complex content sections with local state and derived UI
- typed shared content models for consistency
- reusable motion primitives for viewport enter/leave transitions
- responsive, production-friendly component organization

## Run locally

```bash
npm install
npm run dev
```

## Build and checks

```bash
npm run lint
npm run build
```

## Notes

All player stats, telemetry, and client-style data in this repo are mock sample data used for demonstration purposes.
