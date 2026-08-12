/**
 * Core site information. Single source of truth — do not hardcode these
 * values in components. See docs/DATA_MODEL.md.
 */
export const siteInfo = {
  name: "Revelation Youth",
  tagline: "Just a Moment With God",
  churchName: "International Miracle Makers Church",
  churchAbbreviation: "IIMC",
  email: "emanuelling27@gmail.com", // temporary — may change
  phone: null, // never display a phone number
  address: "3000 S 55th St, Kansas City, KS 66106",
  serviceTime: "Sundays, 2:30 PM – 3:30 PM",
} as const;

export type SiteInfo = typeof siteInfo;
