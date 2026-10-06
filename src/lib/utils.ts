import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge only knows Tailwind's stock class names. The project's custom
 * display sizes (`text-display-lg` and friends, declared in tailwind.config.ts)
 * look like text-colour utilities to it, so a call such as
 *
 *   cn("text-display-xl", "text-white")
 *
 * silently dropped the size and left headings at body size. Registering them in
 * the font-size group lets size and colour coexist.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display-2xl", "display-xl", "display-lg"] }],
    },
  },
});

/**
 * Merge conditional class names and resolve Tailwind conflicts.
 * Lets callers override component defaults via `className`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
