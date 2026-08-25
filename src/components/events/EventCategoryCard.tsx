import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { EventCategory } from "@/data/events";
import { cn } from "@/lib/utils";
import { publicAssetExists } from "@/lib/publicAsset";

interface EventCategoryCardProps {
  category: EventCategory;
  className?: string;
}

/**
 * Full-bleed event category panel for the /events index page.
 * Height is controlled by the parent (flex-1 on desktop, min-h on mobile).
 * Uses a brand-gradient background so the panel looks intentional even before
 * real event photos are supplied. When a photo is added, it appears on top.
 * See docs/COMPONENT_SPEC.md §5.
 */
export default function EventCategoryCard({
  category,
  className,
}: EventCategoryCardProps) {
  return (
    <Link
      href={`/events/${category.slug}`}
      aria-label={`${category.title} — view ${category.title.toLowerCase()} events`}
      className={cn(
        "group relative flex flex-col items-center justify-center overflow-hidden",
        className,
      )}
    >
      {/* Brand gradient background — always present, image overlays on top */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${category.gradientFrom}, ${category.gradientTo})`,
        }}
      />

      {/* Photo. Only mounted when the file is actually present, otherwise the
          browser paints a broken-image icon over the gradient fallback. */}
      {publicAssetExists(category.image) && (
        <Image
          src={category.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-revy-out [@media(hover:hover)]:group-hover:scale-[1.04]"
        />
      )}

      {/* Full-panel scrim — ensures text stays legible over photos and gradients */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"
      />

      {/* Centered editorial text */}
      <div className="relative z-10 flex flex-col items-center px-8 py-16 text-center">
        <p className="font-sans text-[0.65rem] font-medium uppercase tracking-label text-white/50">
          Events
        </p>
        <p className="mt-5 font-display text-5xl font-medium leading-none text-white sm:text-6xl lg:text-5xl xl:text-[4.5rem]">
          {category.title}
        </p>
        <p className="mt-5 max-w-[22ch] font-sans text-sm leading-relaxed text-white/65">
          {category.description}
        </p>
        <div className="mt-7 flex items-center gap-2 text-white/55 transition-colors duration-300 group-hover:text-white/90">
          <span className="font-sans text-[0.65rem] uppercase tracking-label">
            View {category.title.toLowerCase()}
          </span>
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}
