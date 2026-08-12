import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

interface BackLinkProps {
  href: string;
  children: ReactNode;
}

/**
 * Consistent "back" navigation link used on detail/sub-pages.
 * Extracted from music/encounter, events/*, etc. to avoid duplicating styles.
 */
export default function BackLink({ href, children }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="group mb-10 inline-flex items-center gap-1.5 font-sans text-sm text-revy-ink-muted transition-colors hover:text-revy-forest"
    >
      <ChevronLeft
        className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
        aria-hidden
      />
      {children}
    </Link>
  );
}
