import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import EditorialHeading from "./EditorialHeading";
import SectionLabel from "./SectionLabel";

interface PageIntroProps {
  /** Small uppercase eyebrow above the title. */
  label?: string;
  title: string;
  /** Optional lead paragraph below the title. */
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Heading level — pages typically render this as the h1. */
  as?: "h1" | "h2";
}

const delay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

/**
 * Standardized page/section header: eyebrow + editorial title + optional lead.
 * Gives every page the same opening rhythm. See docs/COMPONENT_SPEC.md §2.
 *
 * This always sits at the top of a page, so it animates on load rather than on
 * scroll. A scroll reveal would start it at opacity 0 and leave the page's main
 * heading invisible until IntersectionObserver ran after hydration; the CSS
 * entrance paints from the very first frame and needs no JavaScript at all.
 */
export default function PageIntro({
  label,
  title,
  description,
  align = "left",
  className,
  as = "h1",
}: PageIntroProps) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        className,
      )}
    >
      {label && (
        <SectionLabel className="revy-enter" style={delay(0)}>
          {label}
        </SectionLabel>
      )}
      <EditorialHeading
        as={as}
        size="xl"
        className="revy-enter"
        style={delay(label ? 90 : 0)}
      >
        {title}
      </EditorialHeading>
      {description && (
        <p
          className={cn(
            "revy-enter max-w-2xl font-sans text-lg leading-relaxed text-revy-ink-soft",
            centered && "mx-auto",
          )}
          style={delay(label ? 180 : 90)}
        >
          {description}
        </p>
      )}
    </header>
  );
}
