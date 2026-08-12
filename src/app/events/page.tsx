import type { Metadata } from "next";
import EventCategoryCard from "@/components/events/EventCategoryCard";
import { eventCategories } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "View upcoming youth services, worship nights, and conferences at Revelation Youth.",
};

export default function EventsPage() {
  return (
    /*
     * grow   — fills all remaining height inside the flex-col <main>
     * flex flex-col — so the panel row can be flex-1 inside
     * bg-revy-base — solid cover over the site texture (events pages stay clean)
     */
    <div className="flex grow flex-col bg-revy-base">
      {/*
       * Panel row.
       * Mobile: stacked column, each panel min-h-[60vh] so they feel immersive.
       * Tablet+: horizontal row, panels flex-1 to share available height equally.
       * divide-* draws a subtle 1px separator between panels in each direction.
       */}
      <div className="flex flex-1 flex-col divide-y divide-white/10 md:flex-row md:divide-x md:divide-y-0">
        {eventCategories.map((category) => (
          <EventCategoryCard
            key={category.slug}
            category={category}
            className="min-h-[60vh] flex-1 md:min-h-0"
          />
        ))}
      </div>
    </div>
  );
}
