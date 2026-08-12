import type { Metadata } from "next";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import BackLink from "@/components/common/BackLink";
import PageIntro from "@/components/common/PageIntro";
import EventDetailBlock from "@/components/events/EventDetailBlock";
import EventEmptyState from "@/components/events/EventEmptyState";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Youth Services",
  description:
    "Upcoming Revelation Youth biweekly services at International Miracle Makers Church.",
};

export default function YouthServicesPage() {
  const upcomingServices = events.filter((e) => e.category === "youth-services");

  return (
    <div className="grow bg-revy-base py-16 sm:py-24">
      <ResponsiveContainer width="narrow">
        <BackLink href="/events">All events</BackLink>

        <PageIntro
          label="Events"
          title="Youth Services"
          description="Biweekly services held every other Sunday at IIMC."
        />

        <div className="mt-12 space-y-6">
          {upcomingServices.length > 0 ? (
            upcomingServices.map((event) => (
              <EventDetailBlock key={event.slug} event={event} />
            ))
          ) : (
            <EventEmptyState message="No upcoming services at this time." />
          )}
        </div>
      </ResponsiveContainer>
    </div>
  );
}
