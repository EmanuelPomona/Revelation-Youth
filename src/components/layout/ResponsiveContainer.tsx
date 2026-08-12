import { createElement, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerWidth = "default" | "wide" | "narrow";

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  width?: ContainerWidth;
}

const widthClasses: Record<ContainerWidth, string> = {
  default: "max-w-revy-content",
  wide: "max-w-revy-wide",
  narrow: "max-w-revy-narrow",
};

/**
 * Centered max-width wrapper with the standard responsive page padding
 * (20px mobile / 32px tablet / 48–80px desktop). Use on every page section so
 * horizontal rhythm stays consistent. See docs/DESIGN_SYSTEM.md §3.
 */
export default function ResponsiveContainer({
  children,
  className,
  as = "div",
  width = "default",
}: ResponsiveContainerProps) {
  return createElement(
    as,
    {
      className: cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-20",
        widthClasses[width],
        className,
      ),
    },
    children,
  );
}
