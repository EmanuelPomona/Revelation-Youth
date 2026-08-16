import type { Metadata } from "next";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import BackLink from "@/components/common/BackLink";
import PageIntro from "@/components/common/PageIntro";
import CardShell from "@/components/common/CardShell";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Bible Study",
  description:
    "Upcoming Revelation Youth Bible Study gatherings centered on Scripture and growing together.",
};

export default function WorshipNightsPage() {
  const upcomingStudies = events.filter((e) => e.category === "worship-nights");

  return (
    <div className="grow bg-revy-base py-16 sm:py-24">
      <ResponsiveContainer width="narrow">
        <BackLink href="/events">All events</BackLink>

        <PageIntro
          label="Events"
          title="Bible Study"
          description="Gatherings centered on Scripture and growing together."
        />

        <CardShell className="mt-12 px-8 py-10">
          <p className="font-sans text-xs font-medium uppercase tracking-label text-revy-ink-muted">
            Schedule
          </p>
          <h2 className="mt-4 font-display text-3xl italic text-revy-forest sm:text-4xl">
            Every Monday/Saturday
          </h2>
          <p className="mt-3 font-sans text-lg text-revy-ink-soft">
            7:30 - 8:30 PM on Zoom
          </p>
        </CardShell>

        <div className="mt-8">
          {upcomingStudies.length > 0 ? (
            <ul className="space-y-6">
              {upcomingStudies.map((event) => (
                <li key={event.slug}>{event.title}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </ResponsiveContainer>
    </div>
  );
}
