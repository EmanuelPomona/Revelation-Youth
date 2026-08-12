import type { ReactNode } from "react";
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

/**
 * Standardized page/section header: eyebrow + editorial title + optional lead.
 * Gives every page the same opening rhythm. See docs/COMPONENT_SPEC.md §2.
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
      {label && <SectionLabel>{label}</SectionLabel>}
      <EditorialHeading as={as} size="xl">
        {title}
      </EditorialHeading>
      {description && (
        <p
          className={cn(
            "max-w-2xl font-sans text-lg leading-relaxed text-revy-ink-soft",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
