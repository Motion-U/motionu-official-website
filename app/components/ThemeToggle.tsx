"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-10 h-10 rounded-sm border border-outline flex items-center justify-center text-base cursor-pointer transition-all duration-200 hover:bg-surface-card-hover hover:border-outline-accent hover:rotate-[15deg]"
      style={{ background: "var(--bg-card)" }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
