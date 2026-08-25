import Image from "next/image";
import Link from "next/link";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import EditorialHeading from "@/components/common/EditorialHeading";
import LinkButton from "@/components/common/LinkButton";
import Reveal from "@/components/common/Reveal";
import type { HomeFeature } from "@/data/home";

/**
 * A record shown as a record: the square cover whole, at sleeve size, with the
 * type set underneath.
 *
 * Cropping a square cover to a full-bleed band always slices through the
 * lettering, which reads as a mistake rather than a detail crop, so the artwork
 * keeps its own proportions here.
 */
export default function SleeveFeature({ feature }: { feature: HomeFeature }) {
  const { title, caption, image, alt, width, height, href, cta } = feature;

  const sleeve = (
    <Image
      src={image}
      alt={alt}
      width={width}
      height={height}
      sizes="(min-width: 640px) 30rem, 88vw"
      className="h-auto w-full shadow-soft-lg transition-transform duration-500 ease-revy-out [@media(hover:hover)]:group-hover:scale-[1.02]"
    />
  );

  return (
    <section
      aria-labelledby={`${feature.id}-title`}
      className="bg-revy-base py-24 sm:py-32"
    >
      <ResponsiveContainer className="flex flex-col items-center text-center">
        <Reveal className="w-full max-w-[30rem]">
          {href ? (
            <Link href={href} className="revy-press group block" tabIndex={-1} aria-hidden>
              {sleeve}
            </Link>
          ) : (
            sleeve
          )}
        </Reveal>

        <Reveal delay={120}>
          <EditorialHeading
            as="h2"
            id={`${feature.id}-title`}
            size="xl"
            className="mt-12"
          >
            {title}
          </EditorialHeading>
        </Reveal>

        {caption && (
          <Reveal delay={200}>
            <p className="mt-4 font-sans text-base leading-relaxed text-revy-ink-soft">
              {caption}
            </p>
          </Reveal>
        )}

        {href && cta && (
          <Reveal delay={280}>
            <div className="mt-8">
              <LinkButton href={href} showArrow>
                {cta}
              </LinkButton>
            </div>
          </Reveal>
        )}
      </ResponsiveContainer>
    </section>
  );
}
