# Implementation Plan — Revelation Youth

> The build order across sessions. Follow it; do not skip planning or review steps.
> Session 1 (this session) is **documentation + architecture only** — no app code.

---

## Sessions Overview

| Session | Focus | Outcome |
|---|---|---|
| **1. Docs + Architecture** | This `/docs` set + `CLAUDE.md` | Requirements, brand, data model, build order written down |
| **2. Scaffold + Foundations** | Next.js/TS/Tailwind init, tokens, data files, layout shell | App runs; header/footer/container; design system in code |
| **3. Home + Music** | Home, `/music`, `/music/encounter` | First polished pages + reusable cards |
| **4. Merch + Events** | `/merch`, `/events` + 3 category pages | Editorial grid; category cards; empty states; youth service details |
| **5. Devotions + Community** | `/devotions`, `/community` | Devotion display; connection sections (static/coming-soon) |
| **6. Polish + QA + Deploy** | Motion, responsive sweep, anti-AI-slop audit, deploy | MVP ready on Vercel |

Each coding session ends with the relevant checks in [QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md).

---

## Detailed Build Order

This mirrors the canonical sequence; do not reorder without reason.

1. **Read the docs** (`/docs` + `CLAUDE.md`) completely.
2. **Summarize requirements** and flag unclear/missing content before coding.
3. **Set up** Next.js + TypeScript + Tailwind + App Router.
4. **Create folder structure** per [TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md).
5. **Create static data files** per [DATA_MODEL.md](./DATA_MODEL.md).
6. **Build layout shell:** `SiteHeader`, `SiteFooter`, `ResponsiveContainer`; wire into `layout.tsx`; configure fonts + tokens.
7. **Build design-system components:** `PageIntro`, `EditorialHeading`, `SectionLabel`, `TextureAccent`.
8. **Build Home** (`/`).
9. **Build Music** (`/music`) + **Encounter detail** (`/music/encounter`).
10. **Build Merch** (`/merch`).
11. **Build Events** (`/events`) + category pages (youth-services, worship-nights, conferences).
12. **Build Devotions** (`/devotions`).
13. **Build Community** (`/community`).
14. **Add subtle interactivity** (hover, scroll reveal, mobile menu).
15. **Test** desktop, tablet, mobile.
16. **Run anti-AI-slop audit** ([QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md) §Anti-AI-Slop).
17. **Refactor** repeated code into components/data.
18. **Prepare for deployment** (Vercel): build passes, no TS/console errors, no broken routes.

---

## Session Entry/Exit Criteria

**Entry (every coding session):**
- Read `CLAUDE.md` + relevant `/docs`.
- Confirm scope against [FEATURE_REQUIREMENTS.md](./FEATURE_REQUIREMENTS.md) (no out-of-scope features).

**Exit (every coding session):**
- Build passes; no TypeScript or console errors; no broken routes/images.
- New work uses tokens + reusable components; no duplicated one-off cards.
- Run the matching parts of [QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md).
- Record decisions in [BUILD_DECISIONS.md](./BUILD_DECISIONS.md) and progress in [SESSION_NOTES.md](./SESSION_NOTES.md).

---

## Dependencies

- Sessions 3–5 depend on Session 2 (shell, tokens, data) being complete.
- Real content/assets ([CONTENT_PLAN.md](./CONTENT_PLAN.md) §6) can arrive any time; until then, placeholders are used and pages must not break.
- Deployment (Session 6) depends on all pages existing and passing QA.

---

## Guardrails Across All Sessions

- Do **not** build out-of-scope features ([FEATURE_REQUIREMENTS.md](./FEATURE_REQUIREMENTS.md) §2).
- Do **not** invent content ([CONTENT_PLAN.md](./CONTENT_PLAN.md)).
- Do **not** overbuild the homepage or add filler sections.
- Prefer CSS motion; Framer Motion only for subtle reveals.
- Stop and review against the quality checklist before declaring a phase done.
