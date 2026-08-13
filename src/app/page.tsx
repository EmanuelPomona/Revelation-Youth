import type { Metadata } from "next";
import BrandHero from "@/components/common/BrandHero";
import SiteFooter from "@/components/layout/SiteFooter";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import SectionLabel from "@/components/common/SectionLabel";
import EditorialHeading from "@/components/common/EditorialHeading";
import LinkButton from "@/components/common/LinkButton";
import HomeImageSection from "@/components/home/HomeImageSection";
import { siteInfo } from "@/data/siteInfo";
import { homeBanners } from "@/data/home";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: `${siteInfo.name} | ${siteInfo.churchName}`,
  description:
    "Revelation Youth is the youth ministry of International Miracle Makers Church, helping people encounter God, grow in faith, and connect through music, events, devotions, and community.",
};

export default function HomePage() {
  const nextService = events.find((e) => e.category === "youth-services");

  return (
    <>
      {/* 1 — Hero */}
      <BrandHero>
        <p className="text-sm">
          {siteInfo.churchName}&ensp;·&ensp;{siteInfo.serviceTime}
        </p>
      </BrandHero>

      {/* 2-4 — Full-width editorial image banners */}
      {homeBanners.map((banner, i) => (
        <HomeImageSection
          key={banner.id}
          eyebrow={banner.eyebrow}
          title={banner.title}
          image={banner.image}
          alt={banner.alt}
          href={banner.href}
          cta={banner.cta}
          priority={i === 0}
          fit={banner.fit}
          width={banner.width}
          height={banner.height}
        />
      ))}

      {/* 5 — Next Service */}
      <section aria-label="Next Service" className="bg-revy-forest py-24 sm:py-32">
        <ResponsiveContainer>
          <SectionLabel className="text-white/50">Next Service</SectionLabel>
          {nextService ? (
            <>
              <EditorialHeading as="h2" size="xl" className="mt-4 text-white">
                {nextService.displayDate}
              </EditorialHeading>
              <p className="mt-3 font-sans text-sm text-white/60">
                {nextService.time}&ensp;·&ensp;{nextService.location}
              </p>
              <p className="mt-1 font-sans text-sm text-white/60">
                {nextService.address}
              </p>
            </>
          ) : (
            <p className="mt-4 font-sans text-sm italic text-white/50">
              Service dates coming soon.
            </p>
          )}
          <div className="mt-10">
            <LinkButton
              href="/events"
              showArrow
              className="text-revy-gold hover:text-revy-gold-soft"
            >
              See all events
            </LinkButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* 6 — Footer */}
      <SiteFooter />
    </>
  );
}
