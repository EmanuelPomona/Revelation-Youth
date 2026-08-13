"use client";

import { useEffect, useState } from "react";
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

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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

  return (
    <header className="sticky top-0 z-40 border-b border-revy-stone/20 bg-revy-off-white/90 backdrop-blur">
      <ResponsiveContainer
        as="nav"
        aria-label="Primary"
        className="flex h-16 items-center justify-between sm:h-20"
      >
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight text-revy-forest sm:text-xl"
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
                    "group relative font-sans text-sm font-medium transition-colors",
                    active
                      ? "text-revy-forest"
                      : "text-revy-ink-soft hover:text-revy-forest",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-1 left-0 h-px w-full origin-left bg-revy-gold transition-transform duration-300 ease-out",
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
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-revy-forest md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden />
          ) : (
            <Menu className="h-6 w-6" aria-hidden />
          )}
        </button>
      </ResponsiveContainer>

      {/* Mobile navigation panel */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="animate-fade-in border-t border-revy-stone/20 bg-revy-off-white md:hidden"
        >
          <ResponsiveContainer as="ul" className="flex flex-col py-4">
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
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
            <li className="pt-2">
              <ThemeToggle />
            </li>
          </ResponsiveContainer>
        </div>
      )}
    </header>
  );
}
