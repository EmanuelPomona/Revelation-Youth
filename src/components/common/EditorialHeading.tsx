import { createElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4";
type HeadingSize = "display" | "xl" | "lg" | "md" | "sm";

interface EditorialHeadingProps {
  children: ReactNode;
  as?: HeadingTag;
  size?: HeadingSize;
  className?: string;
  id?: string;
}

const sizeClasses: Record<HeadingSize, string> = {
  display: "text-display-xl",
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
}: EditorialHeadingProps) {
  return createElement(
    as,
    {
      id,
      className: cn(
        "font-display font-medium leading-tight text-revy-forest",
        sizeClasses[size],
        className,
      ),
    },
    children,
  );
}
