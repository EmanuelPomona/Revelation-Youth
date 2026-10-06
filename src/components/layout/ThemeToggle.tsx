"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const modes = [
  { value: "light", label: "Light theme", icon: Sun },
  { value: "dark", label: "Dark theme", icon: Moon },
  { value: "system", label: "Match system theme", icon: Monitor },
] as const;

/** Track geometry: each control is 28px wide with a 2px gap between them. */
const STEP = 30;

export default function ThemeToggle({
  className,
  onArtwork = false,
}: {
  className?: string;
  /** Set when the toggle sits over hero artwork rather than a page surface. */
  onArtwork?: boolean;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid rendering theme-dependent state until after hydration, since the
  // server can't know the user's stored preference or system setting.
  useEffect(() => {
    setMounted(true);
  }, []);

  const active = mounted ? (theme ?? "system") : "system";
  const activeIndex = Math.max(
    0,
    modes.findIndex((m) => m.value === active),
  );

  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-0.5 rounded-full border p-0.5 transition-colors duration-300",
        onArtwork
          ? "border-white/25 bg-white/10"
          : "border-revy-stone/25 bg-revy-base/60",
        className,
      )}
      role="radiogroup"
      aria-label="Color theme"
    >
      {/* Sliding indicator. One element moving is legible; three backgrounds
          cross-fading is not. Held still until mount so the settled preference
          doesn't animate in from the wrong position. */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-0.5 top-0.5 h-7 w-7 rounded-full bg-revy-forest",
          mounted ? "transition-transform duration-[220ms] ease-revy-out" : "",
        )}
        style={{ transform: `translateX(${activeIndex * STEP}px)` }}
      />

      {modes.map(({ value, label, icon: Icon }) => {
        const isActive = active === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              "relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-200",
              isActive
                ? "text-revy-base"
                : onArtwork
                  ? "text-white/70 hover:text-white"
                  : "text-revy-ink-soft hover:text-revy-forest",
            )}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden />
          </button>
        );
      })}
    </div>
  );
}
