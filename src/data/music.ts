/**
 * Original Revelation Youth music releases.
 * Only include songs Revelation Youth owns, wrote, or has permission to publish.
 * Never invent lyrics or chords. See docs/DATA_MODEL.md §5.
 */
export type MusicRelease = {
  slug: string;
  title: string;
  artist: string;
  /** "Single" | "EP" | "Album" */
  releaseType: string;
  coverImage: string;
  spotifyUrl: string;
  youtubeUrl: string;
  /** Use "[ADD LYRICS HERE]" until real lyrics are provided — never invent. */
  lyrics: string;
  chordsAvailable: boolean;
  /** Displayed when chordsAvailable === false. */
  chordsNote: string;
};

export const musicReleases: MusicRelease[] = [
  {
    slug: "encounter",
    title: "Encounter",
    artist: "Revelation Youth",
    releaseType: "Single",
    coverImage: "/assets/music/encounter-cover.jpg",
    spotifyUrl: "https://open.spotify.com/track/1wKwWf3PBUPKL7hqHkwjxE",
    youtubeUrl: "https://www.youtube.com/watch?v=ITwwDUzPnEs",
    lyrics: `VERSE:
JESUS I'M IN AWE AND WONDER
I NEVER WANT TO LOSE YOUR PRESENCE
THERE IS NOTHING ELSE I WANNA DO
BUT TO BE HERE AND DWELL WITH YOU ALONE

CHORUS:
ALL I AM IS FOR THE KING ALL I AM IS FOR YOUR GLORY
JESUS I SURRENDER ALL IF IT MEANS A LIFE OF HEAVEN
LORD I GIVE IT ALL TO YOU

BRIDGE:
I LEAVE ALL THE DISTRACTIONS
I JUST WANNA BEHOLD YOU ALL MY HEART AND WORSHIP
IT BELONGS TO YOU JESUS`,
    chordsAvailable: false,
    chordsNote: "Chords coming soon.",
  },
];
