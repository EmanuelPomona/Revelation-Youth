# Feature Requirements — Revelation Youth

> Authoritative in-scope / out-of-scope list and per-page requirements.
> If a request conflicts with this doc, this doc wins until explicitly updated.

---

## 1. MVP Scope (Build This)

A polished, mostly-static frontend across these 10 routes:

`/` · `/music` · `/music/encounter` · `/merch` · `/events` · `/events/youth-services` · `/events/worship-nights` · `/events/conferences` · `/devotions` · `/community`

Plus shared shell: `SiteHeader`, `SiteFooter`, responsive container, design-system components.

---

## 2. Out of Scope (Do NOT Build in MVP)

Hard restrictions. **None** of these may be implemented in the MVP:

- User accounts / profiles
- Login / authentication
- Database
- Stripe / payments / checkout / cart
- Inventory / size selection / buy / add-to-cart buttons
- RSVP / event registration
- Reminder emails / confirmation emails
- Admin dashboard
- Full forum (threads, comments, upvotes, moderation)
- AI features
- Google Sheets automation
- CMS
- Upload systems

**Rule:** If a feature requires accounts, payments, databases, moderation, emails, Google Sheets automation, or admin tools, **do not implement it**. Build the frontend so it can be added later.

Forms (Community) are **static UI or "coming soon"** unless form handling is *specifically* requested.

---

## 3. Per-Page Requirements

### 3.1 Home — `/`

**Must include:** brand headline "Revelation Youth"; tagline "Just a Moment With God"; minimal navigation; footer with social links; church info; service time; subtle Revelation Youth texture accent.

**Must NOT include:** hero button; too much content; overloaded sections; complex animations; SaaS-style CTA blocks; generic hero layout.

**Style:** minimal, spacious, elegant, calm, premium, mostly white/ivory.

---

### 3.2 Music — `/music`

**Purpose:** show original Revelation Youth music. Current release: **Encounter**.

**Must include:** white background; minimal Elevation Rhythm-inspired layout; an **Encounter cover card** linking to `/music/encounter`.

**Must NOT include:** search, filters, or any non-original songs.

**Links available:** Spotify track, YouTube video, Spotify artist profile (see [CONTENT_PLAN.md](./CONTENT_PLAN.md)).

---

### 3.3 Music Detail — `/music/encounter`

**Must include:** cover art; title "Encounter"; artist/ministry "Revelation Youth"; Spotify link; YouTube link; embedded YouTube video if possible; lyrics section; chords section.

**Lyrics:** only when provided. **Do not invent.** If missing → `[ADD LYRICS HERE]`.

**Chords:** not available yet → display "Chords coming soon."

**Copyright rule:** only include lyrics/chords for songs Revelation Youth owns, wrote, or has permission to publish.

---

### 3.4 Merch — `/merch`

**Status:** coming soon; no products officially available; placement images allowed.

**Must include:** mostly white background; editorial product grid; product placement visuals; "Coming Soon" labels; subtle scroll reveal or hover animation.

**Must NOT include:** prices, cart, checkout, Stripe, inventory, size selection, buy buttons, add-to-cart buttons.

**Style:** premium editorial product page (Elevation Rhythm shop-inspired), customized to Revelation Youth.

---

### 3.5 Events — `/events`

**Must include:** three large vertical image cards — **Worship Night**, **Service**, **Conferences** — each clickable, with elegant editorial typographic overlay over a large image, minimal text, subtle hover animation.

**Must NOT feel like:** a game menu, nightclub poster, or dramatic concert poster.

---

### 3.6 Youth Services — `/events/youth-services`

**Must show the next youth service:**

- Date: **June 28, 2026**
- Time: **2:30 PM**
- Location: International Miracle Makers Church
- Address: 3000 S 55th St, Kansas City, KS 66106

Youth services are **biweekly**. No RSVP/registration in MVP.

---

### 3.7 Worship Nights — `/events/worship-nights`

No worship night data exists. Show empty state: **"No upcoming worship nights at this time."** Do not invent dates.

---

### 3.8 Conferences — `/events/conferences`

No conferences exist. Show empty state: **"No upcoming conferences at this time."** Do not invent dates.

---

### 3.9 Devotions — `/devotions`

**Must include:** page title "Devotions"; one large weekly devotion **visual** displayed directly on the page; writer credit at the bottom.

**Must NOT include:** devotion cards; download; comments; likes; reactions; uploads; archive; search/filter.

**Writer credit:** "Written by [Writer Name]" / "Devotion by [Writer Name]" / if unknown → "Devotion by Revelation Youth".

If the visual is missing → `[NEEDS DEVOTION IMAGE]`.

---

### 3.10 Community — `/community`

**Purpose:** a simple first step toward connection — not a full forum.

**Must include sections for:** Prayer Requests, Questions, Testimonies, General Discussions.

**Must NOT include:** accounts, profiles, public threads, comments, upvotes, moderation, AI moderation, subreddit-style functionality.

Forms are **static UI or clearly marked "coming soon"** unless form handling is specifically requested.

---

## 4. Cross-Cutting Requirements

- **Accessibility:** semantic HTML, heading order, alt text, keyboard focus, visible focus states, AA contrast, descriptive links, form labels if forms exist.
- **SEO:** unique title + meta description per page; semantic headings; clean URLs; alt text; Open Graph where possible.
- **Performance:** `next/image`, optimized/lazy images, static rendering where possible, minimal JS, subtle motion, reusable components.

See [QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md) for verification gates.
