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
  tracks?: MusicTrack[];
};

export type MusicTrack = {
  slug: string;
  title: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  lyrics?: string;
  chordsAvailable?: boolean;
  chordsNote?: string;
};

export const musicReleases: MusicRelease[] = [
  {
    slug: "encounter",
    title: "Encounter",
    artist: "Revelation Youth",
    releaseType: "Album",
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
    tracks: [
      {
        slug: "all-i-am",
        title: "All I am",
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
      {
        slug: "just-a-moment",
        title: "Just a moment",
        spotifyUrl: "https://open.spotify.com/track/1wKwWf3PBUPKL7hqHkwjxE",
        youtubeUrl: "https://www.youtube.com/watch?v=CTB895TSqqc",
        lyrics: `VERSE 1:
I JUST NEED A MOMENT
STANDING IN YOUR PRESENCE
TAKE MY BROKEN PIECES
IT'S ALL I HAVE FOR YOU

VERSE 2:
FILL ME WITH YOUR SPIRIT
TAKE AWAY MY BURDENS
ALL MY IMPERFECTIONS
I LAY IT DOWN FOR YOU

PRE CHORUS:
A MOMENT WITH YOUR HEART
A MOMENT WITH YOUR VOICE
IT'S ALL I REALLY WANT
IT'S ALL MY HEART DESIRE

CHORUS:
LORD I YEARN FOR YOU NOTHING ELSE WILL DO
JUST TO BE WITH YOU TO ENCOUNTER IN YOUR PRESENCE
KNOW YOU IN THESE MOMENTS
LORD, JUST ME AND YOU

BRIDGE:
MEET ME WHERE I AM SHOW ME WHO YOU ARE
MEET ME WHERE I AM LET ME KNOW YOUR HEART`,
        chordsAvailable: false,
        chordsNote: "Chords coming soon.",
      },
    ],
  },
];
