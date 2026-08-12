import Image from "next/image";
import { cn } from "@/lib/utils";

type TextureVariant = "hairline" | "image";

interface TextureAccentProps {
  /** "hairline" (default) draws a thin gold editorial rule that needs no asset.
   *  "image" overlays the Revelation Youth artwork at low opacity. */
  variant?: TextureVariant;
  /** Required for variant="image". Until the brand texture asset exists, leave
   *  unset and the image variant renders nothing (no broken image). */
  src?: string;
  /** Overlay opacity for variant="image" (0–1). Keep subtle. */
  opacity?: number;
  className?: string;
}

/**
 * Subtle, purely-decorative brand accent (aria-hidden). Never a full-page dark
 * wash — see docs/BRAND_GUIDE.md §6. The image variant must be placed inside a
 * relatively-positioned, sized parent.
 */
export default function TextureAccent({
  variant = "hairline",
  src,
  opacity = 0.06,
  className,
}: TextureAccentProps) {
  if (variant === "hairline") {
    return (
      <span
        aria-hidden
        className={cn(
          "block h-px w-full bg-gradient-to-r from-transparent via-revy-gold to-transparent",
          className,
        )}
      />
    );
  }

  // variant === "image" — render only when an asset is provided.
  if (!src) return null;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        style={{ opacity }}
        priority={false}
      />
    </div>
  );
}
