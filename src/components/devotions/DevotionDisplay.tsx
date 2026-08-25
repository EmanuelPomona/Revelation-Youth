import Image from "next/image";
import type { Devotion } from "@/data/devotions";
import TextureAccent from "@/components/common/TextureAccent";
import { publicAssetExists } from "@/lib/publicAsset";

interface DevotionDisplayProps {
  devotion: Devotion;
}

/**
 * Single large weekly devotion visual + writer credit.
 * No card grid, no download, no reactions. One devotion, presented calmly.
 * See docs/COMPONENT_SPEC.md §6.
 */
export default function DevotionDisplay({ devotion }: DevotionDisplayProps) {
  const hasDate = devotion.date !== "[ADD DATE]";
  const hasImage = publicAssetExists(devotion.image);

  return (
    <article aria-label={devotion.title}>
      {/* Devotion visual — object-contain preserves designed/infographic content */}
      <div className="relative overflow-hidden rounded-revy bg-revy-ivory-deep">
        {hasImage ? (
          <Image
            src={devotion.image}
            alt={devotion.title}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-contain"
            priority
          />
        ) : (
          /* Empty state. Shown on its own: an image element pointed at a file
             that isn't there renders a broken-image icon over the top of it. */
          <div className="flex min-h-[420px] items-center justify-center sm:min-h-[540px]">
            <p className="font-display text-lg italic text-revy-ink-muted/60">
              This week&rsquo;s devotion is on its way.
            </p>
          </div>
        )}
      </div>

      {/* Writer credit */}
      <footer className="mt-8 flex items-center gap-4">
        <TextureAccent variant="hairline" className="w-8 shrink-0" />
        <p className="font-sans text-sm text-revy-ink-muted">
          Devotion by {devotion.writer}
          {hasDate && (
            <span className="ml-2 text-revy-stone">· {devotion.date}</span>
          )}
        </p>
      </footer>
    </article>
  );
}
