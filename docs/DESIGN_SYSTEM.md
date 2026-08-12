# Design System — Revelation Youth

> Concrete, implementable tokens: color, type, spacing, radius, shadow, motion.
> These values translate [BRAND_GUIDE.md](./BRAND_GUIDE.md) into code. Treat them as the default; refine during build but keep them centralized (Tailwind theme + CSS variables), never scattered as magic values.

---

## 1. Color Tokens

Proposed hex values matching the brand palette. Define these in the Tailwind theme (`tailwind.config.ts`) under a `revy` namespace and/or as CSS variables in `globals.css`. Tune during the design pass, but keep names stable.

### Backgrounds (dominant)

| Token | Hex | Use |
|---|---|---|
| `bg-base` (soft white) | `#FBFBF8` | Default page background |
| `bg-ivory` (soft ivory) | `#F4F1EA` | Alternating sections, cards |
| `bg-ivory-deep` | `#ECE7DB` | Subtle contrast blocks |

### Text

| Token | Hex | Use |
|---|---|---|
| `ink` (charcoal) | `#23231F` | Primary body text |
| `ink-soft` | `#4A4A44` | Secondary text |
| `ink-muted` (stone gray) | `#8A887F` | Captions, metadata |

### Primary Accents (greens / blues)

| Token | Hex | Use |
|---|---|---|
| `forest` | `#1F3D2B` | Headings on light, primary accent, readable text |
| `moss` | `#3C5A40` | Secondary green |
| `olive` | `#6B7150` | Tertiary green |
| `teal` | `#3E6F6A` | Muted teal accent |
| `sky` | `#7FA7C4` | Sky blue accent (sparingly) |

### Secondary Accents

| Token | Hex | Use |
|---|---|---|
| `gold` (champagne) | `#C9A86A` | **Sparing** accents: lines, hover, small emphasis |
| `gold-soft` | `#E3D2AE` | Subtle gold tint |
| `charcoal` | `#33332E` | Strong text / dark UI on light |
| `stone` | `#A9A79C` | Borders, dividers, muted UI |

### Supporting Tones

`dark-green #14241A`, `dark-gray-green #2C342C`, `yellow-green #97A06B`, `gray-green #7E8674`, `gray-azure #9DB0BC`. Use rarely, for depth only.

### Color Rules (enforced)

- White/ivory dominate. Dark backgrounds are the exception, never the default.
- Gold is an accent only — never a large fill or primary background.
- No neon, no pure `#000`, no random hues outside this palette.
- Maintain WCAG AA contrast for all text (see Accessibility in [QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md)).
- Brand artwork = subtle texture/overlay at low opacity, never a full dark page wash.

---

## 2. Typography

### Font Roles

| Role | Preferred | Fallback stack |
|---|---|---|
| Display (brand, page titles, category/music/merch headings) | Peranory Condensed / Semicondensed, Amoresa | `"Peranory", Canela, "Cormorant Garamond", ui-serif, Georgia, serif` |
| Body / UI (paragraphs, metadata, labels, footer) | Clean grotesque/neo-sans | `Inter, "Neue Haas Grotesk", ui-sans-serif, system-ui, sans-serif` |

> If Peranory/Amoresa are not licensed/available, use the fallbacks above. Load custom fonts via `next/font` (local or Google) — never via unmanaged `@import`. Document the final choice in [BUILD_DECISIONS.md](./BUILD_DECISIONS.md).

### Type Scale (desktop; scale down ~15–25% on mobile)

| Token | Size / line-height | Use |
|---|---|---|
| `display-xl` | 72–96px / 1.0 | Homepage brand title |
| `display-lg` | 48–64px / 1.05 | Page titles |
| `h1` | 36–44px / 1.1 | Major section headings |
| `h2` | 28–32px / 1.2 | Sub-headings, card titles |
| `h3` | 20–24px / 1.3 | Minor headings |
| `body-lg` | 18px / 1.6 | Lead paragraphs |
| `body` | 16px / 1.65 | Default body |
| `caption` | 13–14px / 1.5 | Metadata, captions |
| `label` | 12–13px / 1.4, tracking +0.08em, uppercase | Section labels, eyebrows |

**Rules:** consistent letter-spacing; clear hierarchy; limit decorative type to brand moments; body stays highly readable.

---

## 3. Spacing & Layout

| Token | Value |
|---|---|
| Max content width | 1200–1440px |
| Page padding — desktop | 48–80px |
| Page padding — tablet | 32px |
| Page padding — mobile | 20px |
| Section vertical padding — desktop | 96–140px |
| Section vertical padding — tablet | 72–96px |
| Section vertical padding — mobile | 56–72px |

Base spacing unit: **4px** (Tailwind default scale). Use generous, rhythmic spacing. White space is a design feature — never cram.

### Breakpoints (Tailwind defaults)

`sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536`. Design **mobile-first**; verify desktop, tablet, mobile.

---

## 4. Radius, Border, Shadow

| Token | Value | Use |
|---|---|---|
| `radius-sm` | 4px | Inputs, small chips |
| `radius-md` | 8–10px | Cards, images |
| `radius-lg` | 16px | Feature cards |
| Border | 1px `stone` at low opacity | Dividers, card edges |
| Shadow | soft, low-spread (`0 8px 30px rgba(31,61,43,0.08)`) | Gentle card lift only |

Keep shadows subtle and warm-tinted. No hard drop shadows, no glows.

---

## 5. Motion

| Property | Default |
|---|---|
| Standard transition | 200–300ms, `ease-out` |
| Hover lift | translateY(-2 to -4px) + subtle shadow |
| Image hover scale | scale(1.02–1.04), overflow hidden |
| Scroll reveal | fade + 8–16px rise, once, ~400–600ms |
| Nav underline | width/opacity grow on hover/focus |

**Allowed:** smooth hover, gentle card lift, soft image scale, lightweight fade-in on scroll, nav underline, simple mobile menu animation.

**Avoid:** heavy parallax, neon glows, game-like movement, random/constant motion, overanimation, anything distracting from a worship/ministry tone.

Prefer CSS transitions first. Use Framer Motion **only** for subtle reveals where CSS is insufficient. Respect `prefers-reduced-motion` — disable non-essential motion.

---

## 6. Iconography

- Use `lucide-react` where icons are needed (social icons, simple UI).
- Thin/consistent stroke, sized to match text. Icons support text, never replace meaningful labels.

---

## 7. Implementation Notes

- Centralize tokens in `tailwind.config.ts` (`theme.extend`) + CSS variables in `globals.css`.
- No inline magic colors/sizes in components — reference tokens.
- Provide a `.revy-container` / `ResponsiveContainer` for consistent max-width + page padding.
