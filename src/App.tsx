import { FeaturesSection } from "@/components/sections/features-section";
import { LandingHeader } from "@/components/sections/landing-header";
import { StatsSection } from "@/components/sections/stats-section";
import { TopNav } from "@/components/sections/top-nav";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <LandingHeader />
      <div
        id="content-start"
        className="relative z-10 -mt-16 bg-gradient-to-b from-background/60 via-background to-background pt-16"
      >
        <TopNav />
        <FeaturesSection />
        <StatsSection />
      </div>
      <div className="fixed bottom-4 right-4 z-30 rounded-md border border-border/80 bg-card/80 px-3 py-2 text-xs text-muted-foreground shadow-lg backdrop-blur">
        Note: All metrics and client details shown are mock sample data.
      </div>
    </main>
  );
}
