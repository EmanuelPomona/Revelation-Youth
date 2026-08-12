import Image from "next/image";

/**
 * Full-viewport editorial background texture.
 *
 * A fixed, decorative image layer that sits behind all page content. We use a
 * fixed-positioned element with next/image (optimized, lazy-decoded) instead of
 * CSS `background-attachment: fixed`, which janks and flickers on iOS/mobile.
 *
 * Rendered globally; non-events pages let it show through a translucent veil,
 * while the Events routes cover it with a solid wrapper (see those pages).
 */
export default function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 select-none"
    >
      <Image
        src="/assets/brand/bg-texture.jpg"
        alt=""
        fill
        priority
        quality={70}
        sizes="100vw"
        className="object-cover object-top"
      />
    </div>
  );
}
