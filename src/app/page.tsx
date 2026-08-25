import type { Metadata } from "next";
import BrandHero from "@/components/common/BrandHero";
import SiteFooter from "@/components/layout/SiteFooter";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import EditorialHeading from "@/components/common/EditorialHeading";
import LinkButton from "@/components/common/LinkButton";
import Reveal from "@/components/common/Reveal";
import PosterFeature from "@/components/home/PosterFeature";
import FeatureBanner from "@/components/home/FeatureBanner";
import SleeveFeature from "@/components/home/SleeveFeature";
import { siteInfo } from "@/data/siteInfo";
import { homeFeatures } from "@/data/home";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: `${siteInfo.name} | ${siteInfo.churchName}`,
  description:
    "Revelation Youth is the youth ministry of International Miracle Makers Church, helping people encounter God, grow in faith, and connect through music, events, devotions, and community.",
};

export default function HomePage() {
  const nextService = events.find((e) => e.category === "youth-services");
  const theme = homeFeatures.find((f) => f.id === "theme");
  const album = homeFeatures.find((f) => f.id === "album");
  const team = homeFeatures.find((f) => f.id === "team");

  return (
    <>
      {/* 1 — The brand moment. Full viewport, no button, service details
             anchored to the frame corners. */}
      <BrandHero
        bleedUnderHeader
        meta={[
          { label: "Gathering", value: siteInfo.serviceTime },
          { label: "Where", value: siteInfo.address },
        ]}
      />

      {/* 2 — What this is. One statement, in the ministry's own voice. */}
      <section aria-labelledby="about-title" className="bg-revy-base py-24 sm:py-32">
        <ResponsiveContainer width="narrow">
          <Reveal>
            <span aria-hidden className="block h-px w-16 bg-revy-gold" />
          </Reveal>
          <Reveal delay={100}>
            <EditorialHeading as="h2" id="about-title" size="xl" className="mt-8">
              The youth ministry of {siteInfo.churchName}.
            </EditorialHeading>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-revy-ink-soft">
              We gather to encounter God, grow in faith, and stay connected
              through music, events, devotions, and community.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-9">
              <LinkButton href="/events" showArrow>
                Plan a visit
              </LinkButton>
            </div>
          </Reveal>
        </ResponsiveContainer>
      </section>

      {/* 3 — Theme of the Month, shown as the poster it is. */}
      {theme && <PosterFeature feature={theme} />}

      {/* 4 — The record, at sleeve size so the cover art stays intact. */}
      {album && <SleeveFeature feature={album} />}

      {/* 5 — The team, full bleed with scroll parallax. A wide photograph is
             what this treatment is for. */}
      {team && <FeatureBanner feature={team} />}

      {/* 6 — The next specific date, as the closing note. */}
      <section aria-labelledby="next-title" className="bg-revy-forest py-24 sm:py-32">
        <ResponsiveContainer>
          <Reveal>
            <p className="font-sans text-xs font-medium uppercase tracking-label text-white/50">
              Next service
            </p>
          </Reveal>

          {nextService ? (
            <>
              <Reveal delay={100}>
                <EditorialHeading
                  as="h2"
                  id="next-title"
                  size="xl"
                  className="mt-5 text-white"
                >
                  {nextService.displayDate}
                </EditorialHeading>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-4 font-sans text-sm text-white/65">
                  {nextService.time}
                  <span aria-hidden className="mx-3 text-white/30">
                    /
                  </span>
                  {nextService.location}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-1 font-sans text-sm text-white/65">
                  {nextService.address}
                </p>
              </Reveal>
            </>
          ) : (
            <Reveal delay={100}>
              <EditorialHeading
                as="h2"
                id="next-title"
                size="lg"
                className="mt-5 text-white/80"
              >
                Dates are being set. Check back shortly.
              </EditorialHeading>
            </Reveal>
          )}

          <Reveal delay={300}>
            <div className="mt-10">
              <LinkButton
                href="/events"
                showArrow
                className="text-revy-gold hover:text-revy-gold-soft"
              >
                See all events
              </LinkButton>
            </div>
          </Reveal>
        </ResponsiveContainer>
      </section>

      <SiteFooter />
    </>
  );
}
