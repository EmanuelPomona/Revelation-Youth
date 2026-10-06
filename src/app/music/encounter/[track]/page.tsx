import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import BackLink from "@/components/common/BackLink";
import MusicDetailLayout from "@/components/music/MusicDetailLayout";
import { musicReleases, type MusicRelease } from "@/data/music";

const album = musicReleases.find((release) => release.slug === "encounter");

type PageProps = {
  params: Promise<{
    track: string;
  }>;
};

function getTrackRelease(trackSlug: string): MusicRelease | null {
  const track = album?.tracks?.find((item) => item.slug === trackSlug);
  if (!album || !track) return null;

  return {
    slug: track.slug,
    title: track.title,
    artist: album.artist,
    releaseType: "Song",
    coverImage: album.coverImage,
    spotifyUrl: track.spotifyUrl ?? "",
    youtubeUrl: track.youtubeUrl ?? "",
    lyrics: track.lyrics ?? "[ADD LYRICS HERE]",
    chordsAvailable: track.chordsAvailable ?? false,
    chordsNote: track.chordsNote ?? "Chords coming soon.",
  };
}

/**
 * The album's track list is static data, so every song page can be prerendered
 * instead of being rendered on demand.
 */
export function generateStaticParams() {
  return (album?.tracks ?? []).map((track) => ({ track: track.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { track } = await params;
  const release = getTrackRelease(track);

  if (!release) {
    return {
      title: "Song",
    };
  }

  return {
    title: release.title,
    description: `${release.title} by ${release.artist} from Encounter.`,
    openGraph: {
      title: `${release.title} | Revelation Youth`,
      description: `${release.title} by ${release.artist}.`,
    },
  };
}

export default async function EncounterTrackPage({ params }: PageProps) {
  const { track } = await params;
  const release = getTrackRelease(track);

  if (!release) notFound();

  return (
    <div className="grow bg-revy-base/75 py-16 sm:py-24">
      <ResponsiveContainer>
        <BackLink href="/music/encounter">Encounter</BackLink>

        <MusicDetailLayout release={release} />
      </ResponsiveContainer>
    </div>
  );
}
