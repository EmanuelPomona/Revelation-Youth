import type { Metadata } from "next";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import PageIntro from "@/components/common/PageIntro";
import LinkButton from "@/components/common/LinkButton";
import MusicCard from "@/components/music/MusicCard";
import { musicReleases } from "@/data/music";
import { socialLinks } from "@/data/socialLinks";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Listen to original Revelation Youth music, including Encounter, with Spotify and YouTube links.",
};

export default function MusicPage() {
  const spotifyArtist = socialLinks.find((l) => l.label === "Spotify");

  return (
    <div className="grow bg-revy-off-white py-20 sm:py-28">
      <ResponsiveContainer>
        <PageIntro
          label="Music"
          title="Albums"
          description="Original music from Revelation Youth."
        />

        {/* Release grid — centered when there is only one item */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {musicReleases.map((release) => (
            <MusicCard key={release.slug} release={release} />
          ))}
        </div>

        {/* Spotify artist link */}
        {spotifyArtist && (
          <div className="mt-16 border-t border-revy-stone/20 pt-10">
            <LinkButton href={spotifyArtist.href} external showArrow>
              Follow Revelation Youth on Spotify
            </LinkButton>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
}
