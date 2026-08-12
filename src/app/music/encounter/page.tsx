import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import BackLink from "@/components/common/BackLink";
import MusicDetailLayout from "@/components/music/MusicDetailLayout";
import { musicReleases } from "@/data/music";

const release = musicReleases.find((r) => r.slug === "encounter");

export const metadata: Metadata = {
  title: "Encounter",
  description:
    "Encounter by Revelation Youth — listen on Spotify and YouTube, read lyrics and chords.",
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

        <MusicDetailLayout release={release} />
      </ResponsiveContainer>
    </div>
  );
}
