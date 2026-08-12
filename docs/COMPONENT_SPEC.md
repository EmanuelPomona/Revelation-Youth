# Component Spec — Revelation Youth

> Component inventory and contracts. Build these as reusable, typed components.
> Rule: **no one-off duplicated cards.** If two places need a card, build one component and parametrize it. Keep styling consistent and driven by [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) tokens.

---

## 1. Layout Components (`components/layout/`)

### SiteHeader
- **Purpose:** top brand bar + primary navigation.
- **Props:** none (reads `navigation` from data).
- **Behavior:** minimal wordmark/home link; nav links with underline-on-hover/focus; responsive — collapses to an animated mobile menu (client component for toggle). Sticky optional but subtle.
- **A11y:** `<header>` + `<nav aria-label="Primary">`; mobile toggle is a real `<button>` with `aria-expanded`/`aria-controls`; focus states visible.

### SiteFooter
- **Purpose:** church info + socials + tagline on every page.
- **Props:** none (reads `siteInfo`, `socialLinks`).
- **Contents:** church name/abbreviation, address, service time, tagline, social icon links (Instagram, YouTube, Facebook).
- **A11y:** `<footer>`; social links have descriptive labels; icons from `lucide-react` with accessible names; open external in new tab with `rel="noopener noreferrer"`.

### ResponsiveContainer
- **Purpose:** consistent max-width + responsive page padding wrapper.
- **Props:** `children`, `className?`, optional `as` (element/tag), optional `width` variant.
- **Behavior:** applies max-width (1200–1440px) and page padding per breakpoint from the design system.

---

## 2. Common / Design-System Components (`components/common/`)

### PageIntro
- **Purpose:** standardized page header block (label + title + optional lead).
- **Props:** `label?: string`, `title: string`, `description?: string`, `align?: "left" | "center"`.
- **Use:** top of most pages for consistent rhythm.

### EditorialHeading
- **Purpose:** expressive display heading using the brand display font.
- **Props:** `children`, `as?: "h1" | "h2" | "h3"`, `size?: keyof typeScale`, `className?`.
- **Note:** for brand moments/titles; keeps decorative type contained.

### SectionLabel
- **Purpose:** small uppercase eyebrow/label (tracking, muted).
- **Props:** `children`, `className?`.

### TextureAccent
- **Purpose:** subtle Revelation Youth artwork texture/motif accent.
- **Props:** `position?`, `opacity?`, `className?`.
- **Rule:** subtle, low-opacity, decorative (`aria-hidden`); never a full-page dark wash.

---

## 3. Music Components (`components/music/`)

### MusicCard
- **Purpose:** release cover card on `/music`.
- **Props:** `release: MusicRelease` (slug, title, artist, releaseType, coverImage).
- **Behavior:** links to `/music/{slug}`; `next/image` cover; subtle hover scale/lift.
- **A11y:** whole card is a link with accessible name (title + artist); image `alt`.

### MusicDetailLayout
- **Purpose:** layout for `/music/encounter`.
- **Props:** `release: MusicRelease`.
- **Contents:** cover art; title; "Revelation Youth"; Spotify + YouTube links; embedded YouTube (`<iframe>` with title) when available; **Lyrics** section (renders `lyrics` or `[ADD LYRICS HERE]`); **Chords** section (renders "Chords coming soon." when `chordsAvailable === false`).

---

## 4. Merch Components (`components/merch/`)

### MerchGrid
- **Purpose:** editorial grid wrapper for merch items.
- **Props:** `items: MerchItem[]`.
- **Behavior:** responsive editorial grid; generous spacing; optional subtle scroll-reveal.

### MerchItemCard
- **Purpose:** single merch placement visual.
- **Props:** `item: MerchItem` (slug, name, image, status).
- **Behavior:** `next/image`; **"Coming Soon"** label; subtle hover. **No price, no buy/cart.**

---

## 5. Events Components (`components/events/`)

### EventCategoryCard
- **Purpose:** large vertical image card on `/events`.
- **Props:** `category: EventCategory` (slug, title, image, description).
- **Behavior:** large background image; editorial typographic overlay; clickable → `/events/{slug}`; subtle hover. Must not read as a game menu / concert poster.
- **A11y:** sufficient text contrast over image (scrim/overlay); accessible link name.

### EventEmptyState
- **Purpose:** calm empty state for worship-nights / conferences.
- **Props:** `message: string`.
- **Use:** "No upcoming worship nights at this time." / "No upcoming conferences at this time." Feels intentional, not broken.

---

## 6. Devotions Components (`components/devotions/`)

### DevotionDisplay
- **Purpose:** show the single weekly devotion visual + credit.
- **Props:** `devotion: Devotion` (title, image, writer, date).
- **Behavior:** one large visual (`next/image`); writer credit at bottom ("Written by …" / "Devotion by …"); if `image` missing → `[NEEDS DEVOTION IMAGE]` placeholder. **No cards, no download, no reactions.**

---

## 7. Community Components (`components/community/`)

### CommunityFormSection
- **Purpose:** one connection section (Prayer Requests / Questions / Testimonies / General Discussions).
- **Props:** `title`, `description?`, `fields?` (for static UI), `status?: "ui" | "coming-soon"`.
- **Behavior:** static form UI **or** clearly-marked "coming soon" — no submission/backend unless explicitly requested.
- **A11y:** every input has a `<label>`; visible focus; logical order.

---

## 8. Shared Component Rules

- Reusable, typed, single-responsibility.
- Driven by data files ([DATA_MODEL.md](./DATA_MODEL.md)) — no hardcoded repeated content.
- Tokens only for color/spacing/type — no magic values.
- Server Components by default; `"use client"` only for interactivity (mobile menu, scroll reveal, motion).
- Consistent hover/focus/motion per [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) §5.
- Every interactive element keyboard-accessible with a visible focus state.
