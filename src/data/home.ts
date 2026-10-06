/**
 * Homepage editorial features.
 * Images live under /assets/music/ (album) and /assets/home/ (other).
 * Keep copy minimal — the artwork carries the design.
 *
 * `kind` picks the presentation, and each kind is used once so no two
 * homepage sections share a layout:
 *   poster — wide artwork shown whole inside a hairline frame, caption
 *            alongside. For pieces that are already a finished composition.
 *   sleeve — a square cover shown whole at record size, caption centred below.
 *            A square crops badly full-bleed: it always cuts the lettering.
 *   banner — full-bleed cinematic crop with scroll parallax, text overlaid.
 *            Reserved for wide photographs, which are what full-bleed suits.
 */
export type HomeFeatureKind = "poster" | "sleeve" | "banner";

export type HomeFeature = {
  id: string;
  kind: HomeFeatureKind;
  /** Small uppercase eyebrow. Used sparingly — most features do without one. */
  eyebrow?: string;
  title: string;
  /** One short line of context. Optional. */
  caption?: string;
  image: string;
  alt: string;
  /** Intrinsic aspect ratio, used to reserve space and avoid layout shift. */
  width: number;
  height: number;
  /** Optional internal link for a CTA. */
  href?: string;
  /** CTA label shown when href is set. */
  cta?: string;
};

export const homeFeatures: HomeFeature[] = [
  {
    id: "theme",
    kind: "poster",
    eyebrow: "Theme of the Month",
    title: "Intimacy",
    caption: "Prayer, the secret place, and presence.",
    image: "/assets/home/intimacy.jpg",
    alt: "Theme of the Month artwork: three panels of clouds beneath the word Intimacy, labelled prayer, secret place, follower, and presence",
    width: 2048,
    height: 1143,
  },
  {
    id: "album",
    kind: "sleeve",
    title: "Encounter",
    caption: "The first Revelation Youth record.",
    image: "/assets/music/encounteralbum.jpg",
    alt: "Encounter album cover by Revelation Youth: stencil-cut lettering over warm ochre and terracotta plaster",
    width: 2048,
    height: 2048,
    href: "/music",
    cta: "Listen now",
  },
  {
    id: "team",
    kind: "banner",
    title: "Meet the Team",
    caption: "The people you will find on a Sunday afternoon.",
    image: "/assets/home/thegroup.jpg",
    alt: "The Revelation Youth team photographed in black and white on the steps of a stone building",
    width: 1618,
    height: 1086,
  },
];
