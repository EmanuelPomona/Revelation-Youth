import Image from "next/image";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import EditorialHeading from "@/components/common/EditorialHeading";
import SectionLabel from "@/components/common/SectionLabel";
import LinkButton from "@/components/common/LinkButton";
import Reveal from "@/components/common/Reveal";
import type { HomeFeature } from "@/data/home";

/**
 * Presents a finished piece of Revelation Youth artwork as what it is: a
 * poster. The image is shown whole inside a hairline frame with the caption
 * set beside it, rather than cropped full-bleed with a headline dropped on
 * top — the artwork already carries its own title.
 *
 * The frame is the same device the posters themselves use to box their panels,
 * so it organises real content instead of decorating the page.
 */
export default function PosterFeature({ feature }: { feature: HomeFeature }) {
  const { eyebrow, title, caption, image, alt, width, height, href, cta } =
    feature;

  return (
    <section aria-labelledby={`${feature.id}-title`} className="bg-revy-ivory py-24 sm:py-32">
      <ResponsiveContainer className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          {/* Hairline frame, matching the panel rules in the artwork itself. */}
          <div className="border border-revy-stone/35 p-2 sm:p-3">
            <Image
              src={image}
              alt={alt}
              width={width}
              height={height}
              sizes="(min-width: 1024px) 58vw, 92vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-5">
          {eyebrow && (
            <Reveal delay={80}>
              <SectionLabel>{eyebrow}</SectionLabel>
            </Reveal>
          )}

          <Reveal delay={160}>
            <EditorialHeading
              as="h2"
              id={`${feature.id}-title`}
              size="xl"
              className="mt-5"
            >
              {title}
            </EditorialHeading>
          </Reveal>

          {caption && (
            <Reveal delay={240}>
              <p className="mt-4 max-w-sm font-sans text-base leading-relaxed text-revy-ink-soft">
                {caption}
              </p>
            </Reveal>
          )}

          {href && cta && (
            <Reveal delay={320}>
              <div className="mt-8">
                <LinkButton href={href} showArrow>
                  {cta}
                </LinkButton>
              </div>
            </Reveal>
          )}
        </div>
      </ResponsiveContainer>
    </section>
  );
}
