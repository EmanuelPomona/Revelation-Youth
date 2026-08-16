import type { Metadata } from "next";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import BackLink from "@/components/common/BackLink";
import CardShell from "@/components/common/CardShell";
import PageIntro from "@/components/common/PageIntro";
import EventEmptyState from "@/components/events/EventEmptyState";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Outreach",
  description:
    "Upcoming Revelation Youth outreach events, revivals, crusades, and community gatherings.",
};

export default function ConferencesPage() {
  const upcomingOutreach = events.filter((e) => e.category === "conferences");
  const outreachSections = ["Conferences", "Camps", "Ministry"];

  return (
    <div className="grow bg-revy-base py-16 sm:py-24">
      <ResponsiveContainer width="narrow">
        <BackLink href="/events">All events</BackLink>

        <PageIntro
          label="Events"
          title="Outreach"
          description="Revivals, crusades, and community gatherings."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {outreachSections.map((section) => (
            <CardShell key={section} className="px-6 py-8 text-center">
              <h2 className="font-display text-3xl italic text-revy-forest">
                {section}
              </h2>
            </CardShell>
          ))}
        </div>

        <div className="mt-8">
          {upcomingOutreach.length > 0 ? (
            <ul className="space-y-6">
              {upcomingOutreach.map((event) => (
                <li key={event.slug}>{event.title}</li>
              ))}
            </ul>
          ) : (
            <EventEmptyState message="No upcoming Outreach events at this time." />
          )}
        </div>
      </ResponsiveContainer>
    </div>
  );
}
