import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { navItems } from "@/content/game-content";

export function TopNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-20 mx-auto mt-6 w-[min(1100px,92%)] rounded-2xl border border-border/60 bg-card/60 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-lg"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 text-sm font-medium">
          <Sparkles className="h-4 w-4 text-primary" />
          Timmsy Command
        </div>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-2 py-1 transition-colors hover:bg-background/35 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={buttonVariants({ size: "sm", className: "h-9" })}>
          Queue Match
        </a>
      </div>
    </motion.header>
  );
}
