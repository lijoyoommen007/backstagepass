"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-10 h-10 p-0 rounded-lg bg-white/50 dark:bg-white/10 border border-white/30 dark:border-white/10 backdrop-blur-sm flex items-center justify-center">
        <div className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      className="w-10 h-10 p-0 rounded-lg bg-white/50 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border border-white/30 dark:border-white/10 backdrop-blur-sm flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4" aria-hidden="true" />
      )}
    </button>
  );
};
