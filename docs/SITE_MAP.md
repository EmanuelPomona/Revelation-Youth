# Site Map — Revelation Youth

> Routes, navigation, and page hierarchy for the MVP.

---

## 1. Route Tree (MVP)

```txt
/                         Home
├── /music                Music (releases overview)
│   └── /music/encounter  Encounter (music detail)
├── /merch                Merch (coming soon, editorial preview)
├── /events               Events (3 category cards)
│   ├── /events/youth-services   Youth Services (next service details)
│   ├── /events/worship-nights   Worship Nights (empty state)
│   └── /events/conferences      Conferences (empty state)
├── /devotions            Devotions (single weekly visual)
└── /community            Community (connection form sections)
```

All 10 routes above are **required** for the MVP.

---

## 2. Primary Navigation

Order, label → href:

| Label | Href |
|---|---|
| Home | `/` |
| Music | `/music` |
| Merch | `/merch` |
| Events | `/events` |
| Devotions | `/devotions` |
| Community | `/community` |

- Navigation is defined once in `src/data/navigation.ts` and consumed by `SiteHeader`.
- Detail/sub-pages (`/music/encounter`, `/events/*`) are reached **through their parent page**, not the top nav.
- Mobile: collapses into a simple animated menu.

---

## 3. Footer

The footer appears on every page and includes:

- Church info: International Miracle Makers Church (IIMC)
- Address: 3000 S 55th St, Kansas City, KS 66106
- Service time: Sundays, 2:30 PM – 3:30 PM
- Social icons/links: **Instagram, YouTube, Facebook** (required). Spotify optional in footer; required on Music.
- Tagline: Just a Moment With God

Social URLs live in `src/data/socialLinks.ts`.

---

## 4. Page Relationships

```txt
Home ──► Music ──► Encounter detail
  │
  ├────► Merch
  │
  ├────► Events ──► Youth Services
  │           ├──► Worship Nights
  │           └──► Conferences
  │
  ├────► Devotions
  │
  └────► Community
```

- **Home** is a calm hub that directs to the main sections (no hero button; navigation + light pointers only).
- **Events** is a visual index of 3 categories, each linking to its detail page.
- **Music** lists releases; **Encounter** is the only current release and links to its detail page.

---

## 5. Future Routes (NOT in MVP)

Do not build these now; structure should allow adding them later:

`/about` · `/contact` · `/parents` · `/admin` · full forum · event registration · shop/checkout.

See [FEATURE_REQUIREMENTS.md](./FEATURE_REQUIREMENTS.md) for scope rules.

---

## 6. Metadata per Route

Each route gets a unique title + meta description (Open Graph where possible). See SEO section in [CONTENT_PLAN.md](./CONTENT_PLAN.md) and [QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md).
