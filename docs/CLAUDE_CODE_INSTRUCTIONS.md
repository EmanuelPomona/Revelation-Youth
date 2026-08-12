# Claude Code Instructions — Revelation Youth

> Operating rules for any AI coding session on this project. Read alongside `CLAUDE.md`.
> These rules exist to prevent generic AI output, scope creep, and invented content.

---

## 1. Before You Code (every session)

1. Read `CLAUDE.md`, then the relevant `/docs` files for the work at hand.
2. Restate the goal of the current session in your own words.
3. Confirm the work is **in scope** ([FEATURE_REQUIREMENTS.md](./FEATURE_REQUIREMENTS.md) §1–2).
4. Identify any missing content; plan to use the placeholders in [CONTENT_PLAN.md](./CONTENT_PLAN.md) §3 — never invent.
5. Follow the build order in [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md).

---

## 2. Hard Rules (do not break)

- **No out-of-scope features.** No accounts, login, DB, Stripe, cart, checkout, RSVP, registration, emails, admin, full forum, AI, Google Sheets, CMS, uploads. If a request implies one, stop and confirm.
- **No invented content.** No fake events, lyrics, chords, prices, leaders, testimonies, or dates. Use the exact placeholders.
- **No phone number** anywhere.
- **No lyrics/chords** unless Revelation Youth owns or has permission (copyright rule).
- **Mostly white/ivory.** Dark backgrounds are the exception; gold is a sparing accent; no neon.
- **Don't overbuild the homepage** or add filler sections to look bigger.

---

## 3. Design Discipline

- Use tokens from [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) — no magic hex/spacing inline.
- Use white space generously; every section must be intentional.
- Expressive type for brand moments only; body text stays readable.
- Motion is subtle: CSS first, Framer Motion only for gentle reveals; respect `prefers-reduced-motion`.
- Imagery warm/natural/editorial; no AI faces, harsh filters, or generic gradients/blobs.

---

## 4. Code Discipline

- TypeScript, `strict`, no `any`.
- Reusable, typed components ([COMPONENT_SPEC.md](./COMPONENT_SPEC.md)); **no duplicated one-off cards**.
- Repeated content lives in `src/data` ([DATA_MODEL.md](./DATA_MODEL.md)), not in JSX.
- Server Components by default; `"use client"` only where interactivity needs it.
- `next/image` for meaningful images; graceful handling if an asset file is missing (no crash).
- Semantic HTML + per-route `metadata`.

---

## 5. Accessibility & SEO (always)

- Semantic landmarks, correct heading order, alt text, keyboard focusability, visible focus, AA contrast, descriptive link text, labels for any form fields.
- Unique title + meta description per route; Open Graph where possible.
- No important text trapped only inside an image.

---

## 6. When Unsure

- If a requirement is ambiguous or content is missing: **pause and ask** or use the documented placeholder — do not guess or fabricate.
- If a request conflicts with the docs: surface the conflict; the docs win until the user updates them.

---

## 7. After You Code (every session)

1. Verify build passes; no TypeScript or console errors; no broken routes/images.
2. Run the relevant sections of [QUALITY_CHECKLIST.md](./QUALITY_CHECKLIST.md), including the **anti-AI-slop** review.
3. Refactor any duplication into components/data.
4. Log decisions in [BUILD_DECISIONS.md](./BUILD_DECISIONS.md) and progress in [SESSION_NOTES.md](./SESSION_NOTES.md).
5. Summarize what changed, what's left, and any new content needs.

---

## 8. Self-Check Before Declaring "Done"

Ask: *Does this feel generic, inconsistent, cluttered, too dark, too game-like, or off-brand?*
If yes → revise before stopping. The bar is a **premium, editorial, reverent church youth** site — not a template.
