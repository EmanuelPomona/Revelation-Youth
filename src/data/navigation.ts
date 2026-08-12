/**
 * Primary navigation. Consumed by SiteHeader (and SiteFooter "Explore").
 * Detail/sub-pages are reached through their parent page, not the top nav.
 * See docs/SITE_MAP.md.
 */
export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Music", href: "/music" },
  { label: "Merch", href: "/merch" },
  { label: "Events", href: "/events" },
  { label: "Devotions", href: "/devotions" },
  { label: "Community", href: "/community" },
];
