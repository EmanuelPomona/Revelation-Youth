/**
 * Event categories and individual events.
 * Do not invent event dates or details.
 * See docs/DATA_MODEL.md §6.
 */
export type EventCategorySlug = "worship-nights" | "youth-services" | "conferences";

export type EventCategory = {
  slug: EventCategorySlug;
  title: string;
  /** Path to image under /assets/events/. Graceful fallback if absent. */
  image: string;
  description: string;
  /** On-brand CSS gradient shown when no photo is available. */
  gradientFrom: string;
  gradientTo: string;
};

export type Event = {
  slug: string;
  category: EventCategorySlug;
  title: string;
  /** ISO date string, e.g. "2026-06-28" */
  date: string;
  /** Human-readable date shown in the UI. */
  displayDate: string;
  time: string;
  location: string;
  address: string;
  description: string;
};

export const eventCategories: EventCategory[] = [
  {
    slug: "worship-nights",
    title: "Worship Night",
    image: "/assets/events/worship-night.jpg",
    description:
      "Join us for a night of worship and prayer.",
    gradientFrom: "#1F3D2B",
    gradientTo: "#14241A",
  },
  {
    slug: "youth-services",
    title: "Service",
    image: "/assets/events/service.jpg",
    description: "Revelation Youth services at IMMC.",
    gradientFrom: "#33332E",
    gradientTo: "#2C342C",
  },
  {
    slug: "conferences",
    title: "Conferences",
    image: "/assets/events/conferences.jpg",
    description: "Join us in revivals, crusades, and more.",
    gradientFrom: "#3E6F6A",
    gradientTo: "#1F3D2B",
  },
];

/**
 * Individual events. No worship nights or conferences exist yet — show the
 * EventEmptyState component for those category pages.
 */
export const events: Event[] = [
  {
    slug: "june-28-youth-service",
    category: "youth-services",
    title: "Youth Service",
    date: "2026-06-28",
    displayDate: "June 28, 2026",
    time: "2:30 PM",
    location: "International Miracle Makers Church",
    address: "3000 S 55th St, Kansas City, KS 66106",
    description: "Biweekly Revelation Youth service.",
  },
];
