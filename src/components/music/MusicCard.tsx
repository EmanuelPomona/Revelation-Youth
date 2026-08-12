import Image from "next/image";
import { Music } from "lucide-react";
import type { MusicRelease } from "@/data/music";
import CardShell from "@/components/common/CardShell";
import SectionLabel from "@/components/common/SectionLabel";

interface MusicCardProps {
  release: MusicRelease;
}

/**
 * Release card on the /music index page. Tapping/clicking navigates to the
 * release detail page. See docs/COMPONENT_SPEC.md §3.
 */
export default function MusicCard({ release }: MusicCardProps) {
  return (
    <CardShell
      href={`/music/${release.slug}`}
      aria-label={`${release.title} by ${release.artist} — view details`}
      className="group bg-revy-base"
    >
      {/* Cover image */}
      <div className="relative aspect-square overflow-hidden rounded-t-revy bg-gradient-to-br from-revy-forest to-revy-dark-green">
        <Image
          src={release.coverImage}
          alt={`${release.title} album cover by ${release.artist}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Visible only when image is absent */}
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center opacity-20"
        >
          <Music className="h-16 w-16 text-revy-base" />
        </span>
      </div>

      {/* Metadata */}
      <div className="p-5">
        <SectionLabel withMark={false} className="text-revy-ink-muted">
          {release.releaseType}
        </SectionLabel>
        <p className="mt-2 font-display text-2xl font-medium leading-snug text-revy-forest">
          {release.title}
        </p>
        <p className="mt-1 font-sans text-sm text-revy-ink-muted">
          {release.artist}
        </p>
      </div>
    </CardShell>
  );
}
