import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardShellProps {
  children: ReactNode;
  className?: string;
  /** Wrap the card in a link. Internal hrefs use next/link. */
  href?: string;
  external?: boolean;
  /** Apply hover lift + shadow. Defaults to true when href is set. */
  interactive?: boolean;
  "aria-label"?: string;
}

/**
 * Reusable surface for cards across the site (music, merch, events). Provides a
 * consistent border, radius, and gentle hover lift so pages don't invent
 * one-off card styles (see docs/COMPONENT_SPEC.md §8).
 */
export default function CardShell({
  children,
  className,
  href,
  external = false,
  interactive,
  "aria-label": ariaLabel,
}: CardShellProps) {
  const isInteractive = interactive ?? Boolean(href);

  const classes = cn(
    "relative overflow-hidden rounded-revy border border-revy-stone/30 bg-revy-base",
    isInteractive &&
      "transition duration-300 ease-out hover:-translate-y-1 hover:border-revy-stone/50 hover:shadow-soft",
    className,
  );

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("block", classes)}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={cn("block", classes)} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
