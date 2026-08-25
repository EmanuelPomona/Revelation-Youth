"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Element to render. Keep it semantic — `div` is only the fallback. */
  as?: ElementType;
  /** Stagger offset in ms. Applied to this element, never to a shared parent. */
  delay?: number;
  className?: string;
}

/**
 * Reveals its children once, the first time they scroll into view.
 *
 * Uses IntersectionObserver rather than a scroll listener so nothing runs on
 * the main thread per frame. The motion itself lives in the `.revy-reveal`
 * utility (globals.css), which drops the translate under reduced motion and
 * keeps only the opacity fade.
 *
 * Fires once — re-animating on every scroll-by is an interface fighting its
 * reader.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Without observer support, show the content rather than stranding it at
    // opacity 0.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Already on screen, or already scrolled past, at mount: a reload that
    // restores scroll position, or a deep link into the middle of the page.
    if (node.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // A fast scroll can carry an element all the way through the viewport
        // between two observer deliveries, so `isIntersecting` is never once
        // reported true and the content stays hidden for good. Treat "now
        // above the viewport" as revealed as well.
        if (!entry.isIntersecting && entry.boundingClientRect.top > 0) return;
        setVisible(true);
        observer.disconnect();
      },
      // threshold 0 rather than a fraction: a section taller than the viewport
      // can never satisfy a fractional threshold. The negative bottom margin is
      // what holds the reveal until the element is properly in view.
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      "data-visible": visible,
      className: cn("revy-reveal", className),
      style: delay
        ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
        : undefined,
    },
    children,
  );
}
