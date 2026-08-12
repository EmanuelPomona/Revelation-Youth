import { cn } from "@/lib/utils";

interface EventEmptyStateProps {
  message: string;
  className?: string;
}

/**
 * Calm, intentional empty state for event category pages with no upcoming
 * events. Should feel unhurried — not broken or apologetic.
 * See docs/COMPONENT_SPEC.md §5.
 */
export default function EventEmptyState({
  message,
  className,
}: EventEmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-revy border border-revy-stone/25 bg-revy-ivory px-8 py-20 text-center",
        className,
      )}
    >
      {/* Decorative hairline */}
      <span
        aria-hidden
        className="block h-px w-10 bg-revy-gold/60"
      />
      <p className="mt-6 font-display text-xl italic text-revy-ink-muted sm:text-2xl">
        {message}
      </p>
    </div>
  );
}
