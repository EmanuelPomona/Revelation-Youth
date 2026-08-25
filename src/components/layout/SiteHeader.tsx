"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { siteInfo } from "@/data/siteInfo";
import { cn } from "@/lib/utils";
import ResponsiveContainer from "./ResponsiveContainer";
import ThemeToggle from "./ThemeToggle";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Home opens on a full-viewport hero, so the bar starts transparent and only
  // takes on its own surface once the reader has left the hero behind.
  const overlay = pathname === "/";

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Condense on scroll. A sentinel plus IntersectionObserver keeps this off the
  // scroll event loop — nothing runs per frame.
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll and enable Escape-to-close while the menu is open.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Over the hero the bar has no surface of its own, so its contents are set
  // in white against the artwork rather than in ink.
  const onArtwork = overlay && !scrolled && !menuOpen;

  return (
    <>
      {/* Scroll sentinel. Sits at the very top of the document; once it leaves
          the viewport the header has been scrolled past. */}
      <div ref={sentinelRef} aria-hidden className="absolute top-0 h-px w-full" />

      <header
        data-scrolled={scrolled}
        data-on-artwork={onArtwork}
        className={cn(
          // No border-b: the rule is drawn as an overlaid line instead, so the
          // header's height stays exactly h-16 / h-20 and the homepage hero can
          // bleed up underneath it by a round amount.
          "sticky top-0 z-40 transition-[background-color,box-shadow] duration-300 ease-revy-out",
          onArtwork
            ? "bg-transparent"
            : "bg-revy-off-white/90 shadow-soft backdrop-blur",
        )}
      >
        <ResponsiveContainer
          as="nav"
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between transition-[height] duration-300 ease-revy-out",
            scrolled ? "h-16" : "h-16 sm:h-20",
          )}
        >
          <Link
            href="/"
            className={cn(
              "revy-press font-display text-lg font-medium tracking-tight transition-colors duration-300 sm:text-xl",
              onArtwork ? "text-white" : "text-revy-forest",
            )}
          >
            {siteInfo.name}
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative font-sans text-sm font-medium transition-colors duration-300",
                      onArtwork
                        ? active
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                        : active
                          ? "text-revy-forest"
                          : "text-revy-ink-soft hover:text-revy-forest",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -bottom-1 left-0 h-px w-full origin-left bg-revy-gold transition-transform duration-300 ease-revy-out",
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle onArtwork={onArtwork} />
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className={cn(
              "revy-press -mr-2 inline-flex items-center justify-center rounded-md p-2 transition-colors duration-300 md:hidden",
              onArtwork ? "text-white" : "text-revy-forest",
            )}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {/* Both glyphs stay mounted and cross-fade, so the control never
                jumps as the icon swaps. */}
            <span className="relative block h-6 w-6">
              <Menu
                aria-hidden
                className={cn(
                  "absolute inset-0 h-6 w-6 transition-[opacity,transform] duration-200 ease-revy-out",
                  menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
                )}
              />
              <X
                aria-hidden
                className={cn(
                  "absolute inset-0 h-6 w-6 transition-[opacity,transform] duration-200 ease-revy-out",
                  menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
                )}
              />
            </span>
          </button>
        </ResponsiveContainer>

        {/* Mobile navigation panel. Stays mounted so it can animate out as well
            as in, and is positioned absolutely so that while closed it costs no
            layout height — left in flow it padded the header out to ~480px and
            pushed the hero down the page. `inert` keeps it out of the tab order
            and out of the accessibility tree while closed. */}
        <div
          id="mobile-nav"
          inert={!menuOpen}
          data-open={menuOpen}
          className={cn(
            "absolute inset-x-0 top-full origin-top border-t bg-revy-off-white shadow-soft transition-[opacity,transform,visibility] duration-[280ms] ease-revy-drawer md:hidden",
            menuOpen
              ? "visible translate-y-0 border-revy-stone/20 opacity-100"
              : "invisible -translate-y-2 border-transparent opacity-0",
          )}
        >
          <ResponsiveContainer as="ul" className="flex flex-col py-4">
            {navigation.map((item, i) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li
                  key={item.href}
                  className="transition-[opacity,transform] duration-300 ease-revy-out"
                  style={{
                    transitionDelay: menuOpen ? `${60 + i * 40}ms` : "0ms",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "none" : "translateY(6px)",
                  }}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block py-3 font-display text-2xl transition-colors",
                      active
                        ? "text-revy-forest"
                        : "text-revy-ink-soft hover:text-revy-forest",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-3">
              <ThemeToggle />
            </li>
          </ResponsiveContainer>
        </div>

        {/* Bottom rule, drawn over the content rather than as a border so it
            costs no layout height. */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-px transition-colors duration-300 ease-revy-out",
            onArtwork ? "bg-transparent" : "bg-revy-stone/20",
          )}
        />
      </header>
    </>
  );
}
