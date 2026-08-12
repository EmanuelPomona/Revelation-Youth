import type { Metadata } from "next";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import BackLink from "@/components/common/BackLink";
import PageIntro from "@/components/common/PageIntro";
import EventEmptyState from "@/components/events/EventEmptyState";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Worship Nights",
  description:
    "Upcoming Revelation Youth worship nights — gatherings centered on worship, prayer, and encountering God.",
};

export default function WorshipNightsPage() {
  const upcomingNights = events.filter((e) => e.category === "worship-nights");

  return (
    <div className="grow bg-revy-base py-16 sm:py-24">
      <ResponsiveContainer width="narrow">
        <BackLink href="/events">All events</BackLink>

        <PageIntro
          label="Events"
          title="Worship Nights"
          description="Gatherings centered on worship, prayer, and encountering God."
        />

        <div className="mt-12">
          {upcomingNights.length > 0 ? (
            <ul className="space-y-6">
              {upcomingNights.map((event) => (
                <li key={event.slug}>{event.title}</li>
              ))}
            </ul>
          ) : (
            <EventEmptyState message="No upcoming worship nights at this time." />
          )}
        </div>
      </ResponsiveContainer>
    </div>
  );
}
