import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type LinkButtonVariant = "link" | "solid" | "outline";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: LinkButtonVariant;
  /** External links open in a new tab with safe rel and an arrow affordance. */
  external?: boolean;
  /** Force-show the trailing arrow (always shown for external links). */
  showArrow?: boolean;
  className?: string;
  "aria-label"?: string;
}

const baseByVariant: Record<LinkButtonVariant, string> = {
  link: "group inline-flex items-center gap-1.5 font-sans text-sm font-medium text-revy-forest transition-colors hover:text-revy-moss",
  solid:
    "inline-flex items-center gap-2 rounded-full bg-revy-forest px-6 py-3 font-sans text-sm font-medium text-revy-base transition-colors hover:bg-revy-moss",
  outline:
    "inline-flex items-center gap-2 rounded-full border border-revy-forest/30 px-6 py-3 font-sans text-sm font-medium text-revy-forest transition-colors hover:border-revy-gold hover:text-revy-moss",
};

/**
 * A styled link (never a form submit). Default "link" variant is an editorial
 * text link with an animated champagne-gold underline. Use sparingly — the
 * homepage has no hero button (see docs/FEATURE_REQUIREMENTS.md §3.1).
 */
export default function LinkButton({
  href,
  children,
  variant = "link",
  external = false,
  showArrow,
  className,
  "aria-label": ariaLabel,
}: LinkButtonProps) {
  const withArrow = showArrow ?? external;

  const content = (
    <>
      {variant === "link" ? (
        <span className="relative">
          {children}
          <span
            aria-hidden
            className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-revy-gold transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
          />
        </span>
      ) : (
        children
      )}
      {withArrow && (
        <ArrowUpRight
          aria-hidden
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  const classes = cn(baseByVariant[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
