import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteInfo } from "@/data/siteInfo";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import EditorialHeading from "./EditorialHeading";

interface BrandHeroProps {
  /** Defaults to the Revelation Youth wordmark. */
  title?: string;
  /** Defaults to the ministry tagline. */
  tagline?: string;
  eyebrow?: string;
  /**
   * Corner rail entries. They sit in the bottom corners on desktop and stack
   * into a centered column on mobile. Keep them factual — this rail is where a
   * first-time visitor looks for when and where.
   */
  meta?: { label: string; value: string }[];
  /** Optional supporting content below the rule. */
  children?: ReactNode;
  /**
   * Pull the hero up underneath the sticky header so the artwork starts at the
   * very top of the viewport. Matching top padding keeps the content clear of
   * the bar. Values track the header's h-16 / sm:h-20.
   */
  bleedUnderHeader?: boolean;
  className?: string;
}

/** Ordering of the load sequence, in ms. One arrival, not scattered effects. */
const ENTER = {
  eyebrow: 120,
  word: 220,
  wordStagger: 90,
  tagline: 560,
  rule: 720,
  meta: 880,
} as const;

const delay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

/**
 * The brand moment: a full-viewport wordmark over the ministry's own
 * long-exposure plate, with the service details anchored to the frame corners
 * the way the Revelation Youth poster artwork anchors its labels.
 *
 * Deliberately has no hero button (see docs/FEATURE_REQUIREMENTS.md §3.1).
 *
 * All motion is CSS, so this stays a server component: the plate settles out
 * of an over-scale and then drifts on a long ambient loop while the type rises
 * word by word. Reduced motion collapses every step to a plain fade and stops
 * the drift entirely (see globals.css).
 */
export default function BrandHero({
  title = siteInfo.name,
  tagline = siteInfo.tagline,
  eyebrow,
  meta,
  children,
  bleedUnderHeader = false,
  className,
}: BrandHeroProps) {
  const words = title.split(" ");

  return (
    <section
      aria-label="Introduction"
      className={cn(
        "relative flex min-h-[100dvh] flex-col justify-center overflow-hidden",
        bleedUnderHeader && "-mt-16 pt-16 sm:-mt-20 sm:pt-20",
        className,
      )}
    >
      {/* Plate. Two nested layers so the load settle and the ambient drift
          don't fight over the same transform. */}
      <div aria-hidden className="absolute inset-0 -z-10 select-none">
        <div className="revy-plate absolute inset-0">
          <div className="revy-drift absolute inset-0">
            <Image
              src="/assets/brand/bg-texture2.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Legibility scrim. Not decoration — the plate is a high-contrast
            photograph and the type has to clear AA over every part of it. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(16,30,21,0.66),rgba(16,30,21,0.42)_42%,rgba(16,30,21,0.80))]" />
      </div>

      <ResponsiveContainer className="flex flex-col items-center py-24 text-center sm:py-28">
        {eyebrow && (
          <span
            className="revy-enter mb-8 font-sans text-xs font-medium uppercase tracking-label text-white/70"
            style={delay(ENTER.eyebrow)}
          >
            {eyebrow}
          </span>
        )}

        <EditorialHeading
          as="h1"
          size="display"
          className="flex flex-wrap justify-center gap-x-[0.26em] text-white"
        >
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="revy-enter inline-block"
              style={delay(ENTER.word + i * ENTER.wordStagger)}
            >
              {word}
            </span>
          ))}
        </EditorialHeading>

        {tagline && (
          <p
            className="revy-enter mt-7 pb-2 font-display text-2xl italic leading-[1.15] text-white/90 sm:text-3xl"
            style={delay(ENTER.tagline)}
          >
            {tagline}
          </p>
        )}

        <span
          aria-hidden
          className="revy-enter-rule mt-9 block h-px w-28 bg-gradient-to-r from-transparent via-revy-gold to-transparent"
          style={delay(ENTER.rule)}
        />

        {children && (
          <div
            className="revy-enter mt-9 font-sans text-sm text-white/80"
            style={delay(ENTER.meta)}
          >
            {children}
          </div>
        )}
      </ResponsiveContainer>

      {/* Corner rail. Mirrors the corner labels on the ministry's own posters,
          but carries the details a visitor actually needs. */}
      {meta && meta.length > 0 && (
        <ResponsiveContainer className="pb-10 sm:absolute sm:inset-x-0 sm:bottom-0 sm:pb-12">
          <dl
            className="revy-enter flex flex-col items-center gap-5 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left"
            style={delay(ENTER.meta)}
          >
            {meta.map((item, i) => (
              <div
                key={item.label}
                className={cn(
                  "flex flex-col gap-1.5",
                  i === meta.length - 1 && "sm:text-right",
                )}
              >
                <dt className="font-sans text-[0.7rem] font-medium uppercase tracking-label text-white/75">
                  {item.label}
                </dt>
                <dd className="font-sans text-sm text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </ResponsiveContainer>
      )}
    </section>
  );
}
