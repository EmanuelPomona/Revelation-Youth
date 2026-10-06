import { createElement, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4";
type HeadingSize = "display" | "xl" | "lg" | "md" | "sm";

interface EditorialHeadingProps {
  children: ReactNode;
  as?: HeadingTag;
  size?: HeadingSize;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

const sizeClasses: Record<HeadingSize, string> = {
  // "display" is the brand moment on the homepage hero only. Everything else
  // steps down from "xl".
  display: "text-display-2xl",
  xl: "text-display-lg",
  lg: "text-4xl sm:text-5xl",
  md: "text-3xl sm:text-4xl",
  sm: "text-2xl sm:text-3xl",
};

/**
 * Expressive display heading using the brand serif. For brand/page/section
 * titles only — body content stays in the sans family. Color and weight can be
 * overridden via `className` (tailwind-merge resolves conflicts).
 */
export default function EditorialHeading({
  children,
  as = "h2",
  size = "lg",
  className,
  id,
  style,
}: EditorialHeadingProps) {
  return createElement(
    as,
    {
      id,
      style,
      className: cn(
        "font-display font-medium leading-tight text-revy-forest",
        sizeClasses[size],
        className,
      ),
    },
    children,
  );
}
