# Project Brief — Revelation Youth

> The single source of truth for *what* this project is and *why* it exists.
> Read this first. For *how* to build it, see the other docs in `/docs`.

---

## 1. One-Line Summary

A polished, mostly-static frontend MVP website for **Revelation Youth**, the youth ministry of **International Miracle Makers Church (IIMC)**, built with Next.js, TypeScript, and Tailwind CSS.

---

## 2. Project Identity

| Field | Value |
|---|---|
| Website name | Revelation Youth |
| Church name | International Miracle Makers Church |
| Church abbreviation | IIMC |
| Tagline | Just a Moment With God |
| Project type | Frontend MVP (mostly static) |
| Service time | Sundays, 2:30 PM – 3:30 PM |
| Address | 3000 S 55th St, Kansas City, KS 66106 |
| Contact email (temporary) | emanuelling27@gmail.com |
| Phone | None — do not display a phone number |
| Deployment target | Vercel |

---

## 3. Purpose

Revelation Youth needs a premium online presence that helps people:

- Discover what Revelation Youth is
- Understand when and where youth services happen
- Listen to original Revelation Youth music (current release: **Encounter**)
- View upcoming events
- Preview future merch
- Read weekly devotions
- Submit simple connection/community forms (UI only in MVP)
- Find the church address, service time, and social links

The MVP should feel **complete and intentional** even though advanced features come later.

---

## 4. Target Audience

Primary: church members, visitors, young adults, students, parents, and anyone interested in connecting with Revelation Youth.

The ministry is youth-focused, but the site must read as **mature, elegant, welcoming, and youthful** — never childish.

---

## 5. What Success Looks Like

The MVP is successful when:

1. The site feels like a **premium modern church youth ministry**, not a generic landing page, SaaS site, game UI, or dark concert poster.
2. Every MVP page exists, is responsive, and is visually intentional.
3. The brand (calm, editorial, reverent, white/ivory + green/gold) is consistent across pages.
4. Content gaps are clearly marked with placeholders rather than invented content.
5. The codebase is clean, typed, component-driven, and ready for future features to be added without rework.

---

## 6. Scope at a Glance

**In scope (MVP):** Home, Music, Music Detail (Encounter), Merch, Events, Youth Services, Worship Nights, Conferences, Devotions, Community.

**Out of scope (MVP):** accounts, login, database, Stripe, cart, checkout, RSVP, event registration, reminder/confirmation emails, admin dashboard, full forum, AI features, Google Sheets automation, CMS, auth, payments, inventory, upload systems.

See [FEATURE_REQUIREMENTS.md](./FEATURE_REQUIREMENTS.md) for the authoritative in/out-of-scope list.

---

## 7. Brand Direction (Summary)

**Should feel:** premium, church-centered, editorial, artistic, youthful, clean, reverent, modern, calm, elegant, spiritually reflective, professional, welcoming.

**Should NOT feel:** generic, game-like, neon, dark fantasy, SaaS-like, childish, overbuilt, AI-generated, like a nightclub, like a random event poster, like a basic church template.

Full direction lives in [BRAND_GUIDE.md](./BRAND_GUIDE.md).

---

## 8. Guiding Constraints

- **Do not overbuild.** Build the frontend structure so future features can be added later — but do not implement them now.
- **Do not invent content.** No fake events, lyrics, prices, leaders, or dates. Mark missing content with explicit placeholders.
- **Design quality is a requirement, not a nice-to-have.** Every phase ends with an anti-AI-slop review (see [QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md)).

---

## 9. Related Documents

| Doc | Purpose |
|---|---|
| [BRAND_GUIDE.md](./BRAND_GUIDE.md) | Brand identity, voice, color, typography mood |
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) | Concrete tokens: colors, spacing, type scale, motion |
| [SITE_MAP.md](./SITE_MAP.md) | Routes, navigation, page hierarchy |
| [FEATURE_REQUIREMENTS.md](./FEATURE_REQUIREMENTS.md) | In-scope / out-of-scope, per-page requirements |
| [USER_FLOWS.md](./USER_FLOWS.md) | Key journeys through the site |
| [CONTENT_PLAN.md](./CONTENT_PLAN.md) | Real content, placeholders, and what's still needed |
| [TECHNICAL_ARCHITECTURE.md](./TECHNICAL_ARCHITECTURE.md) | Stack, folder structure, rendering strategy |
| [COMPONENT_SPEC.md](./COMPONENT_SPEC.md) | Component inventory and contracts |
| [DATA_MODEL.md](./DATA_MODEL.md) | Static data files and TypeScript shapes |
| [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) | Build order across sessions |
| [CLAUDE_CODE_INSTRUCTIONS.md](./CLAUDE_CODE_INSTRUCTIONS.md) | Operating rules for AI coding sessions |
| [QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md) | Anti-AI-slop + per-page QA gates |
