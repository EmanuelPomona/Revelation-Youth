"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

/**
 * Full-width editorial background texture for interior routes.
 *
 * Several interior pages sit on a translucent field (`bg-revy-base/75`) and let
 * this plate read through, which is what keeps them from looking like flat
 * white documents. Pages with an opaque background simply cover it.
 *
 * Home renders nothing here: its hero owns a full-viewport copy of the same
 * plate, and loading a second one behind it wasted bandwidth on the largest
 * asset in the project.
 */
export default function SiteBackground() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 select-none"
    >
      {/* Cropped from the centre and held well back. Anchored to the top it
          framed the palest band of the plate, which read as a grey smear
          rather than as foliage. */}
      <Image
        src="/assets/brand/bg-texture2.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-70 dark:opacity-50"
      />
    </div>
  );
}
