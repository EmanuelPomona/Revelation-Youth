import { Calendar, Clock, MapPin } from "lucide-react";
import type { Event } from "@/data/events";
import { cn } from "@/lib/utils";

interface EventDetailBlockProps {
  event: Event;
  className?: string;
}

const mapsUrl = (event: Event) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${event.location}, ${event.address}`,
  )}`;

/**
 * Displays a single confirmed event: date, time, location, address.
 * No RSVP or registration — MVP. See docs/COMPONENT_SPEC.md §5.
 */
export default function EventDetailBlock({
  event,
  className,
}: EventDetailBlockProps) {
  return (
    <article
      aria-label={`${event.title} on ${event.displayDate}`}
      className={cn(
        "rounded-revy border border-revy-stone/25 bg-revy-ivory p-8 sm:p-10",
        className,
      )}
    >
      <p className="font-display text-2xl font-medium text-revy-forest sm:text-3xl">
        {event.title}
      </p>

      <ul className="mt-8 space-y-5">
        <li className="flex items-start gap-4">
          <Calendar
            className="mt-0.5 h-5 w-5 shrink-0 text-revy-gold"
            aria-hidden
          />
          <div>
            <p className="font-sans font-medium text-revy-ink">
              {event.displayDate}
            </p>
            <p className="mt-0.5 font-sans text-sm text-revy-ink-muted">
              Biweekly service
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <Clock
            className="mt-0.5 h-5 w-5 shrink-0 text-revy-gold"
            aria-hidden
          />
          <p className="font-sans font-medium text-revy-ink">{event.time}</p>
        </li>

        <li className="flex items-start gap-4">
          <MapPin
            className="mt-0.5 h-5 w-5 shrink-0 text-revy-gold"
            aria-hidden
          />
          <div>
            <p className="font-sans font-medium text-revy-ink">
              {event.location}
            </p>
            <a
              href={mapsUrl(event)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 block font-sans text-sm text-revy-ink-muted transition-colors hover:text-revy-forest"
            >
              {event.address}
            </a>
          </div>
        </li>
      </ul>
    </article>
  );
}
