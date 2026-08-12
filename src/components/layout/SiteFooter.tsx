import Link from "next/link";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Music,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { navigation } from "@/data/navigation";
import { siteInfo } from "@/data/siteInfo";
import {
  footerSocialLabels,
  socialLinks,
  type SocialPlatform,
} from "@/data/socialLinks";
import ResponsiveContainer from "./ResponsiveContainer";

const socialIcons: Record<SocialPlatform, LucideIcon> = {
  Instagram,
  YouTube: Youtube,
  Facebook,
  Spotify: Music,
};

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${siteInfo.churchName}, ${siteInfo.address}`,
)}`;

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const footerSocials = socialLinks.filter((link) =>
    footerSocialLabels.includes(link.label),
  );

  return (
    <footer className="mt-auto border-t border-revy-stone/20 bg-revy-ivory">
      <ResponsiveContainer className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-medium text-revy-forest">
              {siteInfo.name}
            </p>
            <p className="mt-3 font-display text-lg italic text-revy-ink-soft">
              {siteInfo.tagline}
            </p>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-revy-ink-muted">
              The youth ministry of {siteInfo.churchName} ({siteInfo.churchAbbreviation}).
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="font-sans text-xs font-medium uppercase tracking-label text-revy-ink-muted">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-sm text-revy-ink-soft transition-colors hover:text-revy-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit */}
          <div className="md:col-span-4">
            <h2 className="font-sans text-xs font-medium uppercase tracking-label text-revy-ink-muted">
              Visit
            </h2>
            <ul className="mt-5 space-y-4 font-sans text-sm text-revy-ink-soft">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-revy-gold" aria-hidden />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-revy-forest"
                >
                  {siteInfo.address}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-revy-gold" aria-hidden />
                <span>{siteInfo.serviceTime}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-revy-gold" aria-hidden />
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="transition-colors hover:text-revy-forest"
                >
                  {siteInfo.email}
                </a>
              </li>
            </ul>

            {/* Social */}
            <ul className="mt-6 flex items-center gap-4">
              {footerSocials.map((link) => {
                const Icon = socialIcons[link.label];
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-revy-stone/40 text-revy-forest transition-colors hover:border-revy-gold hover:text-revy-moss"
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-2 border-t border-revy-stone/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-revy-ink-muted">
            © {year} {siteInfo.name} · {siteInfo.churchName}
          </p>
          <p className="font-sans text-xs italic text-revy-ink-muted">
            {siteInfo.tagline}
          </p>
        </div>
      </ResponsiveContainer>
    </footer>
  );
}
