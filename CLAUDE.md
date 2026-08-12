# CLAUDE.md — Revelation Youth

> Primary context file for any AI coding session on this project. **Read this first**, then the relevant files in [`/docs`](./docs).

---

## What This Is

A polished, mostly-static **frontend MVP** for **Revelation Youth**, the youth ministry of **International Miracle Makers Church (IIMC)**. Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, deployed on **Vercel**.

- Tagline: **Just a Moment With God**
- Service time: **Sundays, 2:30 PM – 3:30 PM**
- Address: **3000 S 55th St, Kansas City, KS 66106**
- Contact (temporary): **emanuelling27@gmail.com** · Phone: **none — never display one**
- Current music release: **Encounter**

The bar: a **premium, editorial, reverent, youthful (not childish)** church site — never a generic AI template, SaaS page, game UI, or dark concert poster.

---

## Documentation Map

| Doc | Read it for |
|---|---|
| [docs/PROJECT_BRIEF.md](./docs/PROJECT_BRIEF.md) | What/why, scope at a glance |
| [docs/BRAND_GUIDE.md](./docs/BRAND_GUIDE.md) | Brand feel, voice, color/type mood |
| [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) | Concrete tokens: color, type, spacing, motion |
| [docs/SITE_MAP.md](./docs/SITE_MAP.md) | Routes, nav, page hierarchy |
| [docs/FEATURE_REQUIREMENTS.md](./docs/FEATURE_REQUIREMENTS.md) | In/out-of-scope + per-page requirements |
| [docs/USER_FLOWS.md](./docs/USER_FLOWS.md) | Key visitor journeys |
| [docs/CONTENT_PLAN.md](./docs/CONTENT_PLAN.md) | Real content, placeholders, assets needed |
| [docs/TECHNICAL_ARCHITECTURE.md](./docs/TECHNICAL_ARCHITECTURE.md) | Stack, folders, rendering, conventions |
| [docs/COMPONENT_SPEC.md](./docs/COMPONENT_SPEC.md) | Component inventory + contracts |
| [docs/DATA_MODEL.md](./docs/DATA_MODEL.md) | Static data files + TS shapes |
| [docs/IMPLEMENTATION_PLAN.md](./docs/IMPLEMENTATION_PLAN.md) | Build order across sessions |
| [docs/CLAUDE_CODE_INSTRUCTIONS.md](./docs/CLAUDE_CODE_INSTRUCTIONS.md) | Operating rules per session |
| [docs/QUALITY_CHECKLIST.md](./docs/QUALITY_CHECKLIST.md) | Anti-AI-slop + QA gates |
| [docs/BUILD_DECISIONS.md](./docs/BUILD_DECISIONS.md) | Log of key decisions (append) |
| [docs/SESSION_NOTES.md](./docs/SESSION_NOTES.md) | Per-session progress log (append) |

---

## MVP Routes (11 + /_not-found = 13 total builds)

`/` · `/music` · `/music/encounter` · `/merch` · `/events` · `/events/youth-services` · `/events/worship-nights` · `/events/conferences` · `/devotions` · `/community`

Nav: Home · Music · Merch · Events · Devotions · Community.

---

## Hard Rules (do not break)

1. **No out-of-scope features.** No accounts, login, database, Stripe, cart, checkout, RSVP, registration, emails, admin, full forum, AI, Google Sheets, CMS, or uploads. Build the structure so they can be added later — don't implement them.
2. **No invented content.** No fake events, lyrics, chords, prices, leaders, testimonies, or dates. Use the exact placeholders in [CONTENT_PLAN.md](./docs/CONTENT_PLAN.md) §3.
3. **No phone number** anywhere.
4. **Lyrics/chords only** for songs Revelation Youth owns or has permission to publish.
5. **Mostly white/ivory**; gold is a sparing accent; no neon; don't overuse dark backgrounds.
6. **Don't overbuild** — no filler sections; no hero button on Home.
7. **Reuse components**; put repeated content in `src/data`; no duplicated one-off cards.
8. **Subtle motion only** (CSS first; Framer Motion only for gentle reveals); respect `prefers-reduced-motion`.
9. **Accessibility + SEO always** (semantic HTML, alt text, focus states, AA contrast, per-route metadata).

---

## Session Workflow

**Before coding:** read this file + relevant `/docs`; restate the goal; confirm scope; follow [IMPLEMENTATION_PLAN.md](./docs/IMPLEMENTATION_PLAN.md).
**After coding:** build passes (no TS/console errors, no broken routes/images); run [QUALITY_CHECKLIST.md](./docs/QUALITY_CHECKLIST.md) incl. anti-AI-slop; refactor duplication; log in BUILD_DECISIONS + SESSION_NOTES; summarize what's left.

**Current status:** Session 4 (Merch + Devotions + Community + Polish) complete — all 13 MVP routes built and prerendering static; build + lint pass clean. All pages done. Next: Session 5 — real assets (images, OG image, favicon), font swap if licensed, `metadataBase`, Vercel deploy.

---

## When Unsure

If a requirement is ambiguous or content is missing, **pause and ask or use the documented placeholder** — never guess or fabricate. If a request conflicts with the docs, surface it; the docs win until the user updates them.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
