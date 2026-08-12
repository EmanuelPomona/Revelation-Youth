import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  /** Show the small champagne-gold tick before the label. */
  withMark?: boolean;
}

/**
 * Small uppercase editorial eyebrow/label. Pairs with EditorialHeading in
 * PageIntro and at the top of sections.
 */
export default function SectionLabel({
  children,
  className,
  withMark = true,
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-sans text-xs font-medium uppercase tracking-label text-revy-ink-muted",
        className,
      )}
    >
      {withMark && (
        <span aria-hidden className="h-px w-6 bg-revy-gold" />
      )}
      {children}
    </span>
  );
}
