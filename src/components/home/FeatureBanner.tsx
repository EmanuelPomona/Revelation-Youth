import Image from "next/image";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import EditorialHeading from "@/components/common/EditorialHeading";
import LinkButton from "@/components/common/LinkButton";
import Reveal from "@/components/common/Reveal";
import type { HomeFeature } from "@/data/home";

/**
 * Full-bleed cinematic banner. The image is cropped to fill (never stretched)
 * and drifts against the scroll, which keeps a static square cover from
 * reading as a flat slab as it passes.
 *
 * Parallax runs on a CSS scroll-driven animation, so it costs no main-thread
 * work and simply does not apply on browsers without support or under reduced
 * motion — the image stays correctly framed either way (see globals.css).
 */
export default function FeatureBanner({
  feature,
  priority = false,
}: {
  feature: HomeFeature;
  priority?: boolean;
}) {
  const { title, caption, image, alt, href, cta } = feature;

  return (
    <section
      aria-labelledby={`${feature.id}-title`}
      className="relative flex min-h-[72vh] items-end overflow-hidden bg-revy-charcoal sm:min-h-[86vh]"
    >
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="revy-parallax object-cover object-center"
        />
      </div>

      {/* Bottom-up scrim keeps the text legible over any part of the artwork. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,20,16,0.86),rgba(14,20,16,0.30)_46%,rgba(14,20,16,0.10))]"
      />

      <div className="relative z-10 w-full pb-16 sm:pb-24">
        <ResponsiveContainer>
          <Reveal>
            <EditorialHeading
              as="h2"
              id={`${feature.id}-title`}
              size="xl"
              className="text-white"
            >
              {title}
            </EditorialHeading>
          </Reveal>

          {caption && (
            <Reveal delay={100}>
              <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-white/75">
                {caption}
              </p>
            </Reveal>
          )}

          {href && cta && (
            <Reveal delay={200}>
              <div className="mt-8">
                <LinkButton
                  href={href}
                  showArrow
                  className="text-revy-gold-soft hover:text-white"
                >
                  {cta}
                </LinkButton>
              </div>
            </Reveal>
          )}
        </ResponsiveContainer>
      </div>
    </section>
  );
}
