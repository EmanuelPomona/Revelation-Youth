import type { Config } from "tailwindcss";

/**
 * Revelation Youth design tokens.
 * Source of truth for color, type scale, spacing rhythm, shadow, and motion.
 * See docs/DESIGN_SYSTEM.md. Do not hardcode magic values in components —
 * reference these tokens (e.g. `bg-revy-base`, `text-revy-forest`, `font-display`).
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        revy: {
          // Backgrounds (dominant) — CSS-variable-backed so they respond to
          // light/dark/system mode. See globals.css for the variable values.
          base: "rgb(var(--revy-base) / <alpha-value>)",
          "off-white": "rgb(var(--revy-off-white) / <alpha-value>)",
          ivory: "rgb(var(--revy-ivory) / <alpha-value>)",
          "ivory-deep": "rgb(var(--revy-ivory-deep) / <alpha-value>)",
          sage: "rgb(var(--revy-sage) / <alpha-value>)",
          // Text
          ink: "rgb(var(--revy-ink) / <alpha-value>)", // primary body
          "ink-soft": "rgb(var(--revy-ink-soft) / <alpha-value>)",
          "ink-muted": "rgb(var(--revy-ink-muted) / <alpha-value>)", // captions/meta
          // Primary accents
          forest: "rgb(var(--revy-forest) / <alpha-value>)",
          moss: "#3C5A40",
          olive: "#6B7150",
          teal: "#3E6F6A",
          sky: "#7FA7C4",
          // Secondary accents
          gold: "#C9A86A", // champagne — sparing
          "gold-soft": "#E3D2AE",
          // Warm accent sampled from the Encounter cover art. Sparing; used to
          // tie the site to the ministry's own printed work.
          clay: "rgb(var(--revy-clay) / <alpha-value>)",
          charcoal: "#33332E",
          stone: "rgb(var(--revy-stone) / <alpha-value>)",
          // Supporting tones (use rarely, for depth)
          "dark-green": "#14241A",
          "dark-gray-green": "#2C342C",
          "yellow-green": "#97A06B",
          "gray-green": "#7E8674",
          "gray-azure": "#9DB0BC",
        },
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "Cormorant Garamond",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        sans: [
          "var(--font-sans)",
          "Archivo",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      transitionTimingFunction: {
        // Mirrors the --ease-* custom properties in globals.css so Tailwind
        // utilities and hand-written CSS share one motion vocabulary.
        "revy-out": "cubic-bezier(0.23, 1, 0.32, 1)",
        "revy-in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
        "revy-drawer": "cubic-bezier(0.32, 0.72, 0, 1)",
      },
      fontSize: {
        // Responsive brand/display sizes (clamp scales with viewport)
        "display-2xl": [
          "clamp(3.5rem, 13vw, 11rem)",
          { lineHeight: "0.92", letterSpacing: "-0.03em" },
        ],
        "display-xl": [
          "clamp(3rem, 8vw, 6rem)",
          { lineHeight: "1", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 5vw, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.01em" },
        ],
      },
      letterSpacing: {
        label: "0.2em",
      },
      maxWidth: {
        "revy-narrow": "56rem", // ~896px
        "revy-content": "80rem", // 1280px
        "revy-wide": "90rem", // 1440px
      },
      boxShadow: {
        soft: "0 8px 30px rgba(31, 61, 43, 0.08)",
        "soft-lg": "0 16px 50px rgba(31, 61, 43, 0.10)",
      },
      borderRadius: {
        revy: "10px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out both",
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
