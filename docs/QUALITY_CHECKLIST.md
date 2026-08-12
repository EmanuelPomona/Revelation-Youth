# Quality Checklist — Revelation Youth

> Run the relevant sections at the end of each coding session, and the full list before declaring the MVP complete.
> This is the anti-AI-slop gate plus per-page and technical QA.

---

## 1. Anti-AI-Slop Review

### Layout
- [ ] Every section has intentional spacing.
- [ ] No random grids created just to fill space.
- [ ] Homepage is not overloaded.
- [ ] White space is used as a design feature.
- [ ] No cramming too many cards into one section.

### Typography
- [ ] Expressive type only for brand moments.
- [ ] Body text is readable.
- [ ] Not too many font styles.
- [ ] Consistent letter spacing.
- [ ] Clear heading hierarchy.

### Color
- [ ] Mostly white / soft ivory.
- [ ] Green/teal/blue/gold used as tasteful accents.
- [ ] Champagne gold used sparingly.
- [ ] Contrast is readable (AA).
- [ ] No random colors, no neon, no overused dark backgrounds.

### Components
- [ ] Components are reused.
- [ ] No new one-off card per page.
- [ ] Shared styling is consistent.
- [ ] Repeated content lives in data files.

### Content
- [ ] No lorem ipsum.
- [ ] No invented events, prices, lyrics, or leaders.
- [ ] Missing content is clearly marked with the documented placeholders.

### Mobile
- [ ] Mobile designed intentionally.
- [ ] Content stacks cleanly.
- [ ] No horizontal scrolling.
- [ ] Menu works.
- [ ] Tap targets are usable.

### Animation
- [ ] Motion is subtle.
- [ ] No heavy parallax, glows, or random movement.
- [ ] No animation that distracts from a worship/ministry tone.
- [ ] `prefers-reduced-motion` respected.

### Code Organization
- [ ] TypeScript, clean file names, reusable components.
- [ ] Static data files used.
- [ ] No large messy components, no hardcoded repeated content.

---

## 2. Brand Check
- [ ] Feels like Revelation Youth.
- [ ] Feels premium and church-centered.
- [ ] Feels elegant and editorial.
- [ ] Not childish, not game-like, not a generic AI template.

---

## 3. Per-Page Checklist

**Home (`/`)**
- [ ] Minimal, spacious, calm.
- [ ] "Revelation Youth" title + "Just a Moment With God" tagline.
- [ ] No hero button.
- [ ] Footer present (info + socials + tagline).
- [ ] Subtle texture accent, not a dark wash.

**Music (`/music`)**
- [ ] White background.
- [ ] Encounter cover card linking to detail.
- [ ] No search/filters, no non-original songs.

**Encounter (`/music/encounter`)**
- [ ] Cover, title, "Revelation Youth".
- [ ] Spotify + YouTube links; embedded video if possible.
- [ ] Lyrics section (real or `[ADD LYRICS HERE]`).
- [ ] "Chords coming soon."

**Merch (`/merch`)**
- [ ] Editorial product grid with "Coming Soon" labels.
- [ ] No prices, cart, checkout, sizes, or buy buttons.

**Events (`/events`)**
- [ ] Three visual category cards (Worship Night, Service, Conferences), each clickable.
- [ ] Editorial overlays; subtle hover; not a game/concert poster.

**Youth Services (`/events/youth-services`)**
- [ ] Next service: June 28, 2026, 2:30 PM, IIMC, 3000 S 55th St.
- [ ] Notes biweekly cadence; no RSVP/registration.

**Worship Nights (`/events/worship-nights`)**
- [ ] Empty state: "No upcoming worship nights at this time." (no invented dates)

**Conferences (`/events/conferences`)**
- [ ] Empty state: "No upcoming conferences at this time." (no invented dates)

**Devotions (`/devotions`)**
- [ ] One large devotion visual (or `[NEEDS DEVOTION IMAGE]`).
- [ ] Writer credit at bottom.
- [ ] No cards, no download, no reactions/archive/search.

**Community (`/community`)**
- [ ] Sections: Prayer Requests, Questions, Testimonies, General Discussions.
- [ ] Static/coming-soon forms; no accounts/threads/comments/upvotes/moderation.

---

## 4. Accessibility
- [ ] Semantic HTML + landmarks.
- [ ] Correct heading order.
- [ ] Alt text on meaningful images.
- [ ] Keyboard-focusable links/buttons.
- [ ] Visible focus states.
- [ ] AA color contrast.
- [ ] Descriptive link text.
- [ ] Labels on any form fields.
- [ ] No important text only inside an image.

---

## 5. SEO
- [ ] Unique title per page.
- [ ] Meta description per page.
- [ ] Semantic headings.
- [ ] Clean URL structure.
- [ ] Descriptive image alt text.
- [ ] Open Graph metadata where possible.

---

## 6. Performance
- [ ] Optimized images via `next/image`.
- [ ] Large images lazy-loaded.
- [ ] No unnecessary heavy animation libraries.
- [ ] Static rendering where possible.
- [ ] Minimal client JS.
- [ ] Reusable components reduce duplication.

---

## 7. Technical Gate (must pass)
- [ ] `next build` passes.
- [ ] No TypeScript errors.
- [ ] No console errors.
- [ ] No broken routes.
- [ ] No missing-image crashes.
- [ ] No accidental backend/out-of-scope features.

---

## 8. Session 2 Pre-Flight (for the next session)
- [ ] Read `CLAUDE.md` + `/docs`.
- [ ] Confirm scope vs. [FEATURE_REQUIREMENTS.md](./FEATURE_REQUIREMENTS.md).
- [ ] Scaffold Next.js + TS + Tailwind (App Router).
- [ ] Create folder structure ([TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md)).
- [ ] Add design tokens ([DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)) to Tailwind config + globals.
- [ ] Create data files ([DATA_MODEL.md](./DATA_MODEL.md)).
- [ ] Build layout shell (Header/Footer/Container) + design-system components.
- [ ] Verify dev server runs and a blank Home renders with shell.
- [ ] Do **not** build out-of-scope features or invent content.
