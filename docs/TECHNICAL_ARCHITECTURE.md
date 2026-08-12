# Technical Architecture — Revelation Youth

> Stack, rendering strategy, folder structure, and engineering conventions.

---

## 1. Stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | **Next.js (App Router)** | React Server Components by default |
| Language | **TypeScript** | `strict` mode on |
| Styling | **Tailwind CSS** | Tokens in `tailwind.config.ts` + CSS vars |
| Icons | **lucide-react** | Only where needed |
| Animation | **CSS transitions first**; Framer Motion optional | Subtle reveals only |
| Fonts | **next/font** | local (Peranory/Amoresa) or Google fallback |
| Data | **Static TS files** in `src/data` | No DB/CMS in MVP |
| Deploy | **Vercel** | Static-first |

**No** database, CMS, auth, payments, or server backend in the MVP. See [FEATURE_REQUIREMENTS.md](./FEATURE_REQUIREMENTS.md).

---

## 2. Rendering Strategy

- Default to **static rendering** (SSG). All MVP pages are static — no dynamic data fetching.
- Use **Server Components** by default; mark `"use client"` only where interactivity requires it (mobile menu toggle, scroll-reveal wrapper, any Framer Motion usage).
- Use `next/image` for all meaningful imagery; lazy-load below the fold.
- Keep client JS minimal — the site should be fast and mostly HTML/CSS.

---

## 3. Folder Structure

```txt
src/
├── app/
│   ├── page.tsx                      # Home
│   ├── layout.tsx                    # Root layout (header/footer, fonts, metadata)
│   ├── globals.css                   # Tailwind layers + CSS variables
│   ├── music/
│   │   ├── page.tsx                  # /music
│   │   └── encounter/page.tsx        # /music/encounter
│   ├── merch/page.tsx                # /merch
│   ├── events/
│   │   ├── page.tsx                  # /events
│   │   ├── youth-services/page.tsx
│   │   ├── worship-nights/page.tsx
│   │   └── conferences/page.tsx
│   ├── devotions/page.tsx            # /devotions
│   └── community/page.tsx            # /community
├── components/
│   ├── layout/    SiteHeader, SiteFooter, ResponsiveContainer
│   ├── common/    PageIntro, EditorialHeading, SectionLabel, TextureAccent
│   ├── music/     MusicCard, MusicDetailLayout
│   ├── merch/     MerchGrid, MerchItemCard
│   ├── events/    EventCategoryCard, EventEmptyState
│   ├── devotions/ DevotionDisplay
│   └── community/ CommunityFormSection
├── data/          navigation, socialLinks, siteInfo, music, events, merch, devotions
├── lib/           helpers/utilities (e.g., cn, metadata builder)
└── styles/        (optional) extra style modules

public/assets/
├── brand/ music/ merch/ events/ devotions/
```

Component contracts are specified in [COMPONENT_SPEC.md](./COMPONENT_SPEC.md); data shapes in [DATA_MODEL.md](./DATA_MODEL.md).

---

## 4. Conventions

- **TypeScript:** explicit prop types/interfaces; no `any`; data files typed and exported.
- **Naming:** components `PascalCase.tsx`; data/utility files `camelCase.ts`; routes follow App Router conventions.
- **Styling:** Tailwind utilities referencing theme tokens; no magic hex/spacing inline; shared patterns extracted (e.g., `ResponsiveContainer`).
- **Reuse:** no one-off duplicated card styles — build a component, parametrize it. Repeated content lives in `src/data`.
- **Server/Client split:** keep pages as Server Components; isolate interactivity in small client components.
- **Accessibility & SEO:** semantic landmarks (`header`, `nav`, `main`, `footer`); per-route `metadata` exports.
- **Images:** `next/image` with width/height or `fill` + sized container; meaningful `alt`; graceful handling when an asset file is absent (placeholder, no crash).

---

## 5. Configuration & Tooling

- Next.js + TypeScript + Tailwind initialized via standard scaffolding (Session 2).
- ESLint (Next config) + Prettier recommended for consistency.
- `tailwind.config.ts` holds the design tokens from [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).
- `next/font` configured in `layout.tsx`; document final font decision in [BUILD_DECISIONS.md](./BUILD_DECISIONS.md).
- Respect `prefers-reduced-motion` globally.

---

## 6. Performance Budget

- Mostly static HTML/CSS; minimal client JS.
- Optimized, lazy-loaded images via `next/image`.
- Avoid heavy animation libraries unless justified; Framer Motion only for subtle reveals.
- Reuse components to reduce bundle and duplication.
- Target strong Lighthouse scores (performance, accessibility, best practices, SEO).

---

## 7. Future-Proofing (structure only, do not implement)

Leave clean seams for later: a `lib/` for future API/CMS adapters; data files that could later be replaced by CMS fetches; route structure that can absorb `/about`, `/contact`, `/parents`, `/admin`, registration, and checkout without restructuring. Do **not** add these now.
