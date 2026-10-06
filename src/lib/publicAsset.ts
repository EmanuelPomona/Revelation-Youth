import fs from "node:fs";
import path from "node:path";

const publicDir = path.join(process.cwd(), "public");

/**
 * Whether a `/assets/...` path actually exists in `public/`.
 *
 * Several data files intentionally point at artwork that has not been supplied
 * yet, and the components around them are written to fall back to a gradient or
 * a placeholder. Rendering `next/image` with a missing file defeats that: the
 * browser paints a broken-image icon and its alt text straight over the
 * fallback. Checking first lets the documented fallback actually show, and the
 * real image appears on its own once the file is dropped in.
 *
 * Server-only, and every page that calls it is prerendered, so this runs at
 * build time and costs nothing at runtime.
 */
export function publicAssetExists(src: string): boolean {
  if (!src.startsWith("/")) return false;
  return fs.existsSync(path.join(publicDir, src));
}
