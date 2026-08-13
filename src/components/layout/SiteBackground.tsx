"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

/**
 * Full-width editorial background texture.
 *
 * A decorative image layer pinned behind all page content. It renders at the
 * Home uses the tall stretched art treatment. Interior landing pages keep the
 * texture cropped to the viewport so it does not run to the bottom of the page.
 *
 * Rendered globally; non-events pages let it show through a translucent veil,
 * while the Events routes cover it with a solid wrapper (see those pages).
 */
export default function SiteBackground() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      aria-hidden
      className={
        isHome
          ? "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[max(100vh,calc(100vw*1870/841))] select-none"
          : "pointer-events-none fixed inset-0 -z-10 select-none"
      }
    >
      <Image
        src="/assets/brand/bg-texture2.png"
        alt=""
        fill
        priority
        quality={70}
        sizes="100vw"
        className={isHome ? "object-fill" : "object-cover object-top"}
      />
    </div>
  );
}
