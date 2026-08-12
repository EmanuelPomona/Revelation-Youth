# Build Decisions — Revelation Youth

> Append-only log of meaningful decisions (and their rationale). Newest at top.
> Record anything a future session would otherwise have to re-derive: tech choices, font/color finalizations, trade-offs, deviations from the docs.

---

## Format

```
### YYYY-MM-DD — <short title>
**Decision:** what was decided.
**Why:** the reasoning / trade-off.
**Affects:** docs/files impacted.
```

---

### 2026-06-12 — BackLink extracted from 4 duplicate inline patterns (Session 4)
**Decision:** Extracted the repeated back-navigation link (ChevronLeft + hover-translate + muted-ink color) into `src/components/common/BackLink.tsx`. All 4 detail pages (encounter, youth-services, worship-nights, conferences) now import it.
**Why:** The same 7-line JSX pattern appeared verbatim in 4 separate pages — a clear component extraction opportunity. Keeps visual behavior consistent and reduces future drift.
**Affects:** `BackLink.tsx` (new); `encounter/page.tsx`, `youth-services/page.tsx`, `worship-nights/page.tsx`, `conferences/page.tsx`.

### 2026-06-12 — Community forms: static UI with aria-disabled button (Session 4)
**Decision:** Community section forms use `<button type="button" aria-disabled="true">` (not `disabled`) plus a "Form submissions coming soon." helper note below the button. No submit handler wired.
**Why:** `disabled` removes the element from the tab order entirely, which can confuse screen reader users scanning the page. `aria-disabled="true"` keeps it reachable and announces its state. The helper text is visible to all users. Form backend is out of scope for the MVP.
**Affects:** `CommunityFormSection.tsx`, `community/page.tsx`.

### 2026-06-12 — BrandHero section needed explicit aria-label (Session 4)
**Decision:** Added `aria-label="Introduction"` to the `<section>` in `BrandHero.tsx`.
**Why:** A `<section>` without an accessible name is treated as a generic container by some screen readers and flagged by accessibility linters. "Introduction" accurately describes the page-intro role the component plays.
**Affects:** `BrandHero.tsx`.

### 2026-06-12 — EventCategoryCard removed invalid transition-gap utility (Session 4)
**Decision:** Removed the non-existent `transition-gap duration-300` class from `EventCategoryCard.tsx`. `group-hover:gap-3` retained (CSS transition on gap works without the `transition-gap` utility via the `.transition` base class).
**Why:** Tailwind v3 has no `transition-gap` utility; the class was silently ignored but cluttered the markup and could confuse future editors.
**Affects:** `EventCategoryCard.tsx`.

### 2026-06-12 — Stack pinned: Next 15 + React 19 + Tailwind v3 (Session 2)
**Decision:** Tailwind **v3.4** (not v4), so `tailwind.config.ts` stays the single source of truth for tokens (matches the docs). Next.js 15 (App Router) + React 19; ESLint **8** (not 9) for clean `next lint` with the eslintrc `next/core-web-vitals` config.
**Why:** v4's CSS-first config would contradict the documented `tailwind.config.ts` token approach; ESLint 8 avoids flat-config friction with `next lint`.
**Affects:** `package.json`, `tailwind.config.ts`, `postcss.config.js`, `.eslintrc.json`.

### 2026-06-12 — Fonts: Cormorant Garamond + Inter via next/font/google (Session 2)
**Decision:** Implemented the documented fallbacks now — **Cormorant Garamond** (display) + **Inter** (body) through `next/font/google`, exposed as `--font-display` / `--font-sans` and wired into Tailwind `fontFamily`. Swap to `next/font/local` when Peranory/Amoresa files arrive — only `layout.tsx` changes.
**Why:** Preferred brand fonts aren't licensed/available yet; the site must still ship on-brand. CSS-variable indirection keeps the swap isolated.
**Affects:** `layout.tsx`, `tailwind.config.ts`; see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) §2.

### 2026-06-12 — Color tokens namespaced under `revy` (Session 2)
**Decision:** All palette tokens live under a `revy` namespace (`bg-revy-base`, `text-revy-forest`, …) with the proposed Session 1 hex values. Added `display-xl`/`display-lg` clamp font sizes, `soft` shadow, `revy` radius, and subtle `fade-in`/`fade-up` animations.
**Why:** Prevents collisions with Tailwind defaults and makes brand usage obvious/greppable; centralizes motion + elevation so pages don't invent values.
**Affects:** `tailwind.config.ts`, `globals.css`, all components.

### 2026-06-12 — Local npm cache + outputFileTracingRoot (Session 2)
**Decision:** Installed with a project-local `.npm-cache` (gitignored) to dodge root-owned files in `~/.npm`. Set `outputFileTracingRoot` in `next.config.ts` to silence a wrong-workspace-root warning from a stray `package-lock.json` in `/Users/emanuel/Documents/`.
**Why:** Keep installs/builds reproducible without `sudo`; ensure correct file tracing on Vercel.
**Affects:** `next.config.ts`, `.gitignore`. The parent-directory lockfile is unrelated and left untouched.

### 2026-06-12 — Documentation + architecture foundation (Session 1)
**Decision:** Authored the full `/docs` set + `CLAUDE.md` before any app code. Locked stack (Next.js App Router + TypeScript + Tailwind, static-first, Vercel), folder structure, static data model, component inventory, and a 6-session build order.
**Why:** Prevent generic AI output and scope creep by writing requirements, brand, content rules, and build order down first.
**Affects:** all `/docs`, `CLAUDE.md`.

### 2026-06-12 — Design tokens proposed (not yet locked)
**Decision:** Proposed concrete hex values + type/spacing/motion scales in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) as defaults to centralize in Tailwind config in Session 2.
**Why:** Give Session 2 implementable values while keeping room to refine during the visual pass.
**Affects:** [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md); future `tailwind.config.ts`, `globals.css`.

### 2026-06-12 — Fonts: preferred vs. fallback (open)
**Decision:** Use Peranory Condensed/Semicondensed + Amoresa if licensed; otherwise an editorial serif/condensed display + clean sans (see DESIGN_SYSTEM §2). Final choice to be confirmed when font files/licenses are known.
**Why:** Preferred fonts may not be available; the site must still ship with on-brand typography.
**Affects:** [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md); future `layout.tsx` (`next/font`).
