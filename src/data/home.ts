/**
 * Homepage editorial banner sections.
 * Images live under /assets/music/ (album) and /assets/home/ (other).
 * Keep copy minimal — images carry the design.
 */
export type HomeBanner = {
  id: string;
  /** Small uppercase eyebrow above the title. */
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
  /** Optional internal link for a CTA. */
  href?: string;
  /** CTA label shown when href is set. */
  cta?: string;
};

export const homeBanners: HomeBanner[] = [
  {
    id: "album",
    eyebrow: "Music",
    title: "Latest Album",
    image: "/assets/music/encounteralbum.jpg",
    alt: "Encounter album cover by Revelation Youth",
    href: "/music",
    cta: "Listen now",
  },
  {
    id: "team",
    eyebrow: "Revelation Youth",
    title: "Meet the Team",
    image: "/assets/home/thegroup.jpg",
    alt: "Revelation Youth team group photo",
  },
  {
    id: "theme",
    eyebrow: "Theme of the Month",
    title: "Intimacy",
    image: "/assets/home/intimacy.jpg",
    alt: "Theme of the Month artwork for Intimacy",
  },
];
