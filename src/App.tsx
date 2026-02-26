import { FeaturesSection } from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TopNav } from "@/components/sections/top-nav";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.28),transparent_45%),radial-gradient(circle_at_80%_0%,hsl(var(--primary)/0.22),transparent_40%)]" />
      <div className="relative z-10">
        <TopNav />
        <HeroSection />
        <FeaturesSection />
      </div>
    </main>
  );
}
