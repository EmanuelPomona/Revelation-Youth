import Image from "next/image";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import SectionLabel from "@/components/common/SectionLabel";
import EditorialHeading from "@/components/common/EditorialHeading";
import LinkButton from "@/components/common/LinkButton";

interface HomeImageSectionProps {
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
  href?: string;
  cta?: string;
  /** True for the first below-fold image so the browser fetches it early. */
  priority?: boolean;
  /**
   * "cover" fills/crops the banner. "stretch" expands the whole image to the
   * full viewport width and at least the viewport height without cropping.
   */
  fit?: "cover" | "stretch";
  /** Intrinsic image dimensions, used by fit="stretch" to size the section. */
  width?: number;
  height?: number;
}

/**
 * Full-width cinematic image banner for the homepage scroll.
 * Images carry the design — text is minimal and anchored to the bottom.
 * Used for Latest Album, Meet the Team, and Theme of the Month sections.
 */
export default function HomeImageSection({
  eyebrow,
  title,
  image,
  alt,
  href,
  cta,
  priority = false,
  fit = "cover",
  width = 2048,
  height = 2048,
}: HomeImageSectionProps) {
  const stretch = fit === "stretch";
  const stretchedHeight = `max(100vh, calc(100vw * ${height} / ${width}))`;

  return (
    <section
      aria-label={title}
      className={
        stretch
          ? "relative flex w-screen items-end overflow-hidden bg-revy-ink"
          : "relative flex min-h-[60vh] items-end overflow-hidden sm:min-h-[72vh]"
      }
      style={stretch ? { minHeight: stretchedHeight } : undefined}
    >
      {/* Full-bleed image */}
      {stretch ? (
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-fill"
        />
      ) : (
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      )}

      {/* Bottom-up scrim keeps text legible over any image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
      />

      {/* Text anchored to bottom-left — editorial newspaper feel */}
      <div className="relative z-10 w-full pb-14 sm:pb-20">
        <ResponsiveContainer>
          <SectionLabel className="text-white/55">{eyebrow}</SectionLabel>
          <EditorialHeading as="h2" size="xl" className="mt-4 text-white">
            {title}
          </EditorialHeading>
          {href && cta && (
            <div className="mt-6">
              <LinkButton
                href={href}
                showArrow
                className="text-revy-gold hover:text-revy-gold-soft"
              >
                {cta}
              </LinkButton>
            </div>
          )}
        </ResponsiveContainer>
      </div>
    </section>
  );
}
