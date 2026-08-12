import type { Metadata } from "next";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import BackLink from "@/components/common/BackLink";
import PageIntro from "@/components/common/PageIntro";
import EventEmptyState from "@/components/events/EventEmptyState";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Conferences",
  description:
    "Upcoming Revelation Youth conferences — larger gatherings for worship, teaching, and fellowship.",
};

export default function ConferencesPage() {
  const upcomingConferences = events.filter((e) => e.category === "conferences");

  return (
    <div className="grow bg-revy-base py-16 sm:py-24">
      <ResponsiveContainer width="narrow">
        <BackLink href="/events">All events</BackLink>

        <PageIntro
          label="Events"
          title="Conferences"
          description="Larger gatherings for worship, teaching, and fellowship."
        />

        <div className="mt-12">
          {upcomingConferences.length > 0 ? (
            <ul className="space-y-6">
              {upcomingConferences.map((event) => (
                <li key={event.slug}>{event.title}</li>
              ))}
            </ul>
          ) : (
            <EventEmptyState message="No upcoming conferences at this time." />
          )}
        </div>
      </ResponsiveContainer>
    </div>
  );
}
