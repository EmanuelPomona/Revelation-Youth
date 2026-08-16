import Image from "next/image";
import { Music } from "lucide-react";
import type { MusicRelease } from "@/data/music";
import LinkButton from "@/components/common/LinkButton";
import SectionLabel from "@/components/common/SectionLabel";
import TextureAccent from "@/components/common/TextureAccent";
import EditorialHeading from "@/components/common/EditorialHeading";

interface MusicDetailLayoutProps {
  release: MusicRelease;
}

function getYouTubeId(url: string): string | null {
  try {
    return new URL(url).searchParams.get("v");
  } catch {
    return null;
  }
}

const hasLyrics = (lyrics: string) => lyrics !== "[ADD LYRICS HERE]";

export default function MusicDetailLayout({ release }: MusicDetailLayoutProps) {
  const videoId = getYouTubeId(release.youtubeUrl);

  return (
    <div className="space-y-16">
      {/* Top: cover + metadata */}
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Cover art — fills left column on desktop, max-sm centered on mobile */}
        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-revy bg-gradient-to-br from-revy-forest to-revy-dark-green shadow-soft-lg lg:mx-0 lg:max-w-none">
          <Image
            src={release.coverImage}
            alt={`${release.title} album cover by ${release.artist}`}
            fill
            sizes="(max-width: 1024px) 384px, 50vw"
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

        {/* Metadata + links + embed */}
        <div className="flex flex-col">
          <SectionLabel>{release.releaseType}</SectionLabel>
          <EditorialHeading as="h1" size="xl" className="mt-4">
            {release.title}
          </EditorialHeading>
          <p className="mt-2 font-sans text-lg text-revy-ink-soft">
            {release.artist}
          </p>

          <TextureAccent variant="hairline" className="my-8" />

          {(release.spotifyUrl || release.youtubeUrl) && (
            <div className="flex flex-wrap gap-4">
              {release.spotifyUrl && (
                <LinkButton
                  href={release.spotifyUrl}
                  variant="solid"
                  external
                  aria-label={`Listen to ${release.title} on Spotify`}
                >
                  Listen on Spotify
                </LinkButton>
              )}
              {release.youtubeUrl && (
                <LinkButton
                  href={release.youtubeUrl}
                  variant="outline"
                  external
                  aria-label={`Watch ${release.title} on YouTube`}
                >
                  Watch on YouTube
                </LinkButton>
              )}
            </div>
          )}

          {videoId && (
            <div className="mt-10 w-full">
              <div className="relative aspect-video w-full overflow-hidden rounded-revy bg-revy-ivory-deep">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`${release.title} — ${release.artist} (YouTube)`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <TextureAccent variant="hairline" />

      {/* Lyrics */}
      <section aria-label="Lyrics">
        <SectionLabel>Lyrics</SectionLabel>
        {hasLyrics(release.lyrics) ? (
          <pre className="mt-6 whitespace-pre-wrap font-sans text-base leading-loose text-revy-ink-soft">
            {release.lyrics}
          </pre>
        ) : (
          <p className="mt-6 font-sans text-sm italic text-revy-ink-muted">
            Lyrics coming soon.
          </p>
        )}
      </section>

      <TextureAccent variant="hairline" />

      {/* Chords */}
      <section aria-label="Chords">
        <SectionLabel>Chords</SectionLabel>
        <p className="mt-6 font-sans text-sm italic text-revy-ink-muted">
          {release.chordsAvailable ? null : release.chordsNote}
        </p>
      </section>
    </div>
  );
}
