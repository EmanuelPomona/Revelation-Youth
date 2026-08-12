# Data Model — Revelation Youth

> Static TypeScript data files in `src/data`. No database, no CMS, no runtime fetching in the MVP.
> Components consume these; **do not hardcode repeated content** in components.

---

## 1. Files Overview

| File | Exports | Consumed by |
|---|---|---|
| `siteInfo.ts` | `siteInfo` | Footer, Home, Youth Services, metadata |
| `navigation.ts` | `navigation` | SiteHeader |
| `socialLinks.ts` | `socialLinks` | SiteFooter, Music |
| `music.ts` | `musicReleases` | Music, Encounter detail |
| `events.ts` | `eventCategories`, `events` | Events + category pages |
| `merch.ts` | `merchItems` | Merch |
| `devotions.ts` | `currentDevotion` | Devotions |

Recommended: define shared TS types (e.g., in `src/data/types.ts` or co-located) and type each export.

---

## 2. siteInfo.ts

```ts
export const siteInfo = {
  name: "Revelation Youth",
  tagline: "Just a Moment With God",
  churchName: "International Miracle Makers Church",
  churchAbbreviation: "IIMC",
  email: "emanuelling27@gmail.com", // temporary
  phone: null,                       // never display a phone number
  address: "3000 S 55th St, Kansas City, KS 66106",
  serviceTime: "Sundays, 2:30 PM – 3:30 PM",
} as const;
```

---

## 3. navigation.ts

```ts
export const navigation = [
  { label: "Home", href: "/" },
  { label: "Music", href: "/music" },
  { label: "Merch", href: "/merch" },
  { label: "Events", href: "/events" },
  { label: "Devotions", href: "/devotions" },
  { label: "Community", href: "/community" },
] as const;
```

---

## 4. socialLinks.ts

```ts
export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/revelationyth_/" },
  { label: "YouTube",   href: "https://www.youtube.com/watch?v=ITwwDUzPnEs" },
  { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61572843545362" },
  { label: "Spotify",   href: "https://open.spotify.com/artist/0srgn2X5FHLaEvDEKXhCxj" },
] as const;
```

Footer renders Instagram, YouTube, Facebook (Spotify optional in footer; shown on Music).

---

## 5. music.ts

```ts
export type MusicRelease = {
  slug: string;
  title: string;
  artist: string;
  releaseType: string;
  coverImage: string;
  spotifyUrl: string;
  youtubeUrl: string;
  lyrics: string;          // "[ADD LYRICS HERE]" until provided — never invent
  chordsAvailable: boolean;
  chordsNote: string;      // shown when chordsAvailable === false
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
    lyrics: "[ADD LYRICS HERE]",
    chordsAvailable: false,
    chordsNote: "Chords coming soon.",
  },
];
```

> Only include lyrics/chords for songs Revelation Youth owns, wrote, or has permission to publish.

---

## 6. events.ts

```ts
export type EventCategory = {
  slug: "worship-nights" | "youth-services" | "conferences";
  title: string;
  image: string;
  description: string;
};

export type Event = {
  slug: string;
  category: EventCategory["slug"];
  title: string;
  date: string;        // ISO, e.g. "2026-06-28"
  displayDate: string; // e.g. "June 28, 2026"
  time: string;
  location: string;
  address: string;
  description: string;
};

export const eventCategories: EventCategory[] = [
  {
    slug: "worship-nights",
    title: "Worship Night",
    image: "/assets/events/worship-night.jpg",
    description: "Gatherings centered on worship, prayer, and encountering God.",
  },
  {
    slug: "youth-services",
    title: "Service",
    image: "/assets/events/service.jpg",
    description: "Biweekly Revelation Youth services at IIMC.",
  },
  {
    slug: "conferences",
    title: "Conferences",
    image: "/assets/events/conferences.jpg",
    description: "Larger gatherings for worship, teaching, and fellowship.",
  },
];

export const events: Event[] = [
  {
    slug: "june-28-youth-service",
    category: "youth-services",
    title: "Youth Service",
    date: "2026-06-28",
    displayDate: "June 28, 2026",
    time: "2:30 PM",
    location: "International Miracle Makers Church",
    address: "3000 S 55th St, Kansas City, KS 66106",
    description: "Biweekly Revelation Youth service.",
  },
];
```

- **Worship Nights** and **Conferences** have no events → pages render `EventEmptyState`. Do not invent dates.
- Youth services are biweekly; the array holds the next known service.

---

## 7. merch.ts

```ts
export type MerchItem = {
  slug: string;
  name: string;
  image: string;
  status: "Coming Soon";
  price: null;            // no prices in MVP
};

export const merchItems: MerchItem[] = [
  {
    slug: "coming-soon-1",
    name: "Revelation Youth Merch",
    image: "/assets/merch/merch-placeholder-1.jpg",
    status: "Coming Soon",
    price: null,
  },
];
```

No cart, checkout, inventory, or sizes. `price` stays `null`.

---

## 8. devotions.ts

```ts
export type Devotion = {
  title: string;
  image: string;     // "[NEEDS DEVOTION IMAGE]" handling if absent
  writer: string;    // "Devotion by Revelation Youth" if unknown
  date: string;      // "[ADD DATE]" until provided
};

export const currentDevotion: Devotion = {
  title: "Weekly Devotion",
  image: "/assets/devotions/current-devotion.jpg",
  writer: "Revelation Youth",
  date: "[ADD DATE]",
};
```

---

## 9. Data Rules

- Treat data files as the content source of truth; update content here, not in JSX.
- Use `as const` / explicit types; keep shapes stable so components don't churn.
- Image paths follow the `public/assets/...` convention in [CONTENT_PLAN.md](./CONTENT_PLAN.md) §7.
- Never invent values — use the placeholders from [CONTENT_PLAN.md](./CONTENT_PLAN.md) §3.
