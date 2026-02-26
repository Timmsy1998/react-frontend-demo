import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { TopNav } from "@/components/sections/top-nav";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.28),transparent_45%),radial-gradient(circle_at_80%_0%,hsl(var(--primary)/0.22),transparent_40%)]" />
      <div className="relative z-10">
        <TopNav />
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
      </div>
      <div className="fixed bottom-4 right-4 z-30 rounded-md border border-border/80 bg-card/80 px-3 py-2 text-xs text-muted-foreground shadow-lg backdrop-blur">
        Note: All metrics and client details shown are mock sample data.
      </div>
    </main>
  );
}
