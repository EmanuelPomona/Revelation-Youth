import type { Config } from "tailwindcss";

/**
 * Revelation Youth design tokens.
 * Source of truth for color, type scale, spacing rhythm, shadow, and motion.
 * See docs/DESIGN_SYSTEM.md. Do not hardcode magic values in components —
 * reference these tokens (e.g. `bg-revy-base`, `text-revy-forest`, `font-display`).
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        revy: {
          // Backgrounds (dominant)
          base: "#FBFBF8", // soft white
          ivory: "#F4F1EA", // soft ivory
          "ivory-deep": "#ECE7DB",
          // Text
          ink: "#23231F", // charcoal — primary body
          "ink-soft": "#4A4A44",
          "ink-muted": "#8A887F", // stone gray — captions/meta
          // Primary accents
          forest: "#1F3D2B",
          moss: "#3C5A40",
          olive: "#6B7150",
          teal: "#3E6F6A",
          sky: "#7FA7C4",
          // Secondary accents
          gold: "#C9A86A", // champagne — sparing
          "gold-soft": "#E3D2AE",
          charcoal: "#33332E",
          stone: "#A9A79C",
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
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        // Responsive brand/display sizes (clamp scales with viewport)
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
