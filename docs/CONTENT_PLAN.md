# Content Plan — Revelation Youth

> Real content, approved copy, placeholders, and the list of assets still needed.
> **Golden rule: never invent content.** No fake events, lyrics, prices, leaders, testimonies, or dates. Mark gaps with the exact placeholders below.

---

## 1. Confirmed Facts (safe to use as-is)

| Field | Value |
|---|---|
| Website name | Revelation Youth |
| Church | International Miracle Makers Church (IIMC) |
| Tagline | Just a Moment With God |
| Service time | Sundays, 2:30 PM – 3:30 PM |
| Address | 3000 S 55th St, Kansas City, KS 66106 |
| Contact email (temporary) | emanuelling27@gmail.com |
| Phone | None — never display a phone number |
| Next youth service | June 28, 2026, 2:30 PM, at IIMC (biweekly) |
| Current music release | Encounter (by Revelation Youth) |

---

## 2. Links

| Link | URL |
|---|---|
| Instagram | https://www.instagram.com/revelationyth_/ |
| YouTube (song) | https://www.youtube.com/watch?v=ITwwDUzPnEs |
| Facebook | https://www.facebook.com/profile.php?id=61572843545362 |
| Spotify (artist) | https://open.spotify.com/artist/0srgn2X5FHLaEvDEKXhCxj |
| Spotify (Encounter track) | https://open.spotify.com/track/1wKwWf3PBUPKL7hqHkwjxE |

Footer requires: **Instagram, YouTube, Facebook**. Music page also surfaces **Spotify + YouTube**.

---

## 3. Placeholders (use exactly these strings)

| Missing content | Placeholder |
|---|---|
| Encounter lyrics | `[ADD LYRICS HERE]` |
| Encounter chords | "Chords coming soon." |
| Devotion image | `[NEEDS DEVOTION IMAGE]` |
| Devotion date | `[ADD DATE]` |
| Devotion writer (unknown) | "Devotion by Revelation Youth" |
| Worship nights (none) | "No upcoming worship nights at this time." |
| Conferences (none) | "No upcoming conferences at this time." |
| Merch products | "Coming Soon" labels on placement visuals |

Image assets that are not yet provided should reference their intended path (see [DATA_MODEL.md](./DATA_MODEL.md)) and use a tasteful placeholder/`alt` so a missing file never crashes the build.

---

## 4. Per-Page Copy Guidance

- **Home:** brand title + tagline + minimal supporting line; church info + service time. No marketing CTA copy.
- **Music:** short intro line; "Encounter" as the single release.
- **Encounter detail:** title, "Revelation Youth", links, embed, lyrics (placeholder until provided), "Chords coming soon."
- **Merch:** brief editorial line framing the drop as upcoming; "Coming Soon" labels.
- **Events:** category names only — Worship Night, Service, Conferences — with one-line descriptions.
- **Youth Services:** the confirmed next service details; note biweekly cadence.
- **Worship Nights / Conferences:** empty-state strings only.
- **Devotions:** "Devotions" title; the weekly visual; writer credit.
- **Community:** four section labels (Prayer Requests, Questions, Testimonies, General Discussions) with short, warm framing; forms static/coming-soon.

Tone follows [BRAND_GUIDE.md](./BRAND_GUIDE.md) §7 — warm, sincere, unhurried; no hype; no invented spiritual claims.

---

## 5. SEO Content (per route)

| Route | Title | Meta description |
|---|---|---|
| `/` | Revelation Youth \| International Miracle Makers Church | Revelation Youth is the youth ministry of International Miracle Makers Church, helping people encounter God, grow in faith, and connect through music, events, devotions, and community. |
| `/music` | Music \| Revelation Youth | Listen to original Revelation Youth music, including Encounter, with Spotify and YouTube links. |
| `/events` | Events \| Revelation Youth | View upcoming youth services, worship nights, and conferences at Revelation Youth. |
| `/merch` | Merch \| Revelation Youth | Preview upcoming Revelation Youth merch and product drops. |
| `/devotions` | Devotions \| Revelation Youth | Read weekly Revelation Youth devotions for encouragement and spiritual growth. |
| `/community` | Community \| Revelation Youth | Connect with Revelation Youth through prayer requests, questions, testimonies, and general discussion. |

Detail/sub-pages inherit sensible titles (e.g., "Encounter \| Revelation Youth", "Youth Services \| Revelation Youth"). Add Open Graph metadata where possible.

---

## 6. Assets / Content Still Needed (hand-off list)

The user still needs to provide:

- [ ] Final **Encounter cover art** file
- [ ] Final **Encounter lyrics**
- [ ] **Devotion** image/PDF visual + writer name + date
- [ ] **Merch** placement images
- [ ] **Event category** images (Worship Night, Service, Conferences)
- [ ] **Revelation Youth artwork** texture asset
- [ ] Final **social media** URLs if they change
- [ ] Future ministry **email** when ready (replaces temporary email)
- [ ] Custom **fonts** (Peranory / Amoresa) if licensed — else confirm fallbacks

Until provided, use the placeholders in §3. Track newly received assets in [SESSION_NOTES.md](./SESSION_NOTES.md).

---

## 7. Asset Path Convention

```txt
public/assets/
├── brand/      Revelation Youth artwork, wordmark, texture
├── music/      encounter-cover.jpg, etc.
├── merch/      merch-placeholder-1.jpg, etc.
├── events/     worship-night.jpg, service.jpg, conferences.jpg
└── devotions/  current-devotion.jpg
```
