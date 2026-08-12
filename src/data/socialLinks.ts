/**
 * Social links. Footer renders Instagram, YouTube, Facebook (required);
 * Spotify is surfaced on the Music page. See docs/DATA_MODEL.md.
 */
export type SocialPlatform = "Instagram" | "YouTube" | "Facebook" | "Spotify";

export type SocialLink = {
  label: SocialPlatform;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/revelationyth_/" },
  { label: "YouTube", href: "https://www.youtube.com/watch?v=ITwwDUzPnEs" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61572843545362",
  },
  { label: "Spotify", href: "https://open.spotify.com/artist/0srgn2X5FHLaEvDEKXhCxj" },
];

/** Platforms shown as icon links in the footer. */
export const footerSocialLabels: SocialPlatform[] = [
  "Instagram",
  "YouTube",
  "Facebook",
];
