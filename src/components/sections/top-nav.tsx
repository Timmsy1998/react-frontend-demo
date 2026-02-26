import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = ["Projects", "Services", "Contact"];

export function TopNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-20 mx-auto mt-6 w-[min(1100px,92%)] rounded-2xl border border-border/60 bg-card/60 px-4 py-3 backdrop-blur-lg"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 text-sm font-medium">
          <Sparkles className="h-4 w-4 text-primary" />
          Timmsy
        </div>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="transition-colors hover:text-foreground">
              {item}
            </a>
          ))}
        </nav>

        <Button size="sm" className="h-9">
          Start a Project
        </Button>
      </div>
    </motion.header>
  );
}
