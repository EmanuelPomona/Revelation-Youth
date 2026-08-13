import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { siteInfo } from "@/data/siteInfo";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import EditorialHeading from "./EditorialHeading";
import SectionLabel from "./SectionLabel";
import TextureAccent from "./TextureAccent";

interface BrandHeroProps {
  /** Defaults to the Revelation Youth wordmark. */
  title?: string;
  /** Defaults to the ministry tagline. */
  tagline?: string;
  eyebrow?: string;
  /** Optional supporting content below the tagline (e.g. service info). */
  children?: ReactNode;
  className?: string;
}

/**
 * The brand moment: large editorial wordmark + tagline, calm and spacious, on a
 * mostly-white field. Deliberately has no hero button (see docs/FEATURE_
 * REQUIREMENTS.md §3.1). Reusable across Home and section intros.
 */
export default function BrandHero({
  title = siteInfo.name,
  tagline = siteInfo.tagline,
  eyebrow,
  children,
  className,
}: BrandHeroProps) {
  return (
    <section aria-label="Introduction" className={cn("relative overflow-hidden", className)}>
      <ResponsiveContainer className="flex flex-col items-center py-28 text-center sm:py-36">
        {eyebrow && (
          <SectionLabel className="mb-8 text-white drop-shadow-md">
            {eyebrow}
          </SectionLabel>
        )}

        <EditorialHeading as="h1" size="display" className="text-white drop-shadow-lg">
          {title}
        </EditorialHeading>

        {tagline && (
          <p className="mt-6 font-display text-2xl italic text-white drop-shadow-lg sm:text-3xl">
            {tagline}
          </p>
        )}

        <TextureAccent variant="hairline" className="mx-auto mt-10 w-24" />

        {children && (
          <div className="mt-10 font-sans font-medium text-white drop-shadow-md">
            {children}
          </div>
        )}
      </ResponsiveContainer>
    </section>
  );
}
