import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Music } from "lucide-react";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import BackLink from "@/components/common/BackLink";
import CardShell from "@/components/common/CardShell";
import EditorialHeading from "@/components/common/EditorialHeading";
import SectionLabel from "@/components/common/SectionLabel";
import TextureAccent from "@/components/common/TextureAccent";
import { musicReleases } from "@/data/music";

const release = musicReleases.find((r) => r.slug === "encounter");

export const metadata: Metadata = {
  title: "Encounter",
  description:
    "Encounter by Revelation Youth — an album featuring All I am and Just a moment.",
  openGraph: {
    title: "Encounter | Revelation Youth",
    description: "Listen to Encounter by Revelation Youth.",
  },
};

export default function EncounterPage() {
  if (!release) notFound();

  return (
    <div className="grow bg-revy-base/75 py-16 sm:py-24">
      <ResponsiveContainer>
        <BackLink href="/music">All music</BackLink>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(280px,0.8fr)_1fr] lg:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-revy bg-gradient-to-br from-revy-forest to-revy-dark-green shadow-soft-lg lg:mx-0 lg:max-w-none">
            <Image
              src={release.coverImage}
              alt={`${release.title} album cover by ${release.artist}`}
              fill
              sizes="(max-width: 1024px) 384px, 40vw"
              className="object-cover"
              priority
            />
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center opacity-20"
            >
              <Music className="h-24 w-24 text-revy-base" />
            </span>
          </div>

          <div>
            <SectionLabel>{release.releaseType}</SectionLabel>
            <EditorialHeading as="h1" size="xl" className="mt-4">
              {release.title}
            </EditorialHeading>
            <p className="mt-2 font-sans text-lg text-revy-ink-soft">
              {release.artist}
            </p>

            <TextureAccent variant="hairline" className="my-8" />

            <section aria-label="Songs">
              <SectionLabel>Songs</SectionLabel>
              <div className="mt-6 space-y-4">
                {release.tracks?.map((track) => (
                  <CardShell
                    key={track.slug}
                    href={`/music/encounter/${track.slug}`}
                    aria-label={`Open ${track.title} details`}
                    className="group px-6 py-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="font-display text-3xl italic text-revy-forest">
                        {track.title}
                      </h2>
                      <span
                        aria-hidden
                        className="font-sans text-sm font-medium text-revy-ink-muted transition-colors group-hover:text-revy-forest"
                      >
                        View
                      </span>
                    </div>
                  </CardShell>
                ))}
              </div>
            </section>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
