/**
 * Community connection section definitions.
 * These are the four MVP entry points: Prayer, Questions, Testimonies, Discussions.
 * No forum, threads, accounts, or public content in MVP. See docs/FEATURE_REQUIREMENTS.md §3.10.
 */
export type CommunitySection = {
  id: string;
  label: string;
  title: string;
  description: string;
  messagePlaceholder: string;
};

export const communitySections: CommunitySection[] = [
  {
    id: "prayer-requests",
    label: "Prayer",
    title: "Prayer Requests",
    description:
      "Share what's on your heart. Revelation Youth would love to stand with you in prayer.",
    messagePlaceholder: "Share your prayer request...",
  },
  {
    id: "questions",
    label: "Questions",
    title: "Questions",
    description:
      "Have questions about faith, life, or Revelation Youth? We'd love to hear from you.",
    messagePlaceholder: "What's on your mind?",
  },
  {
    id: "testimonies",
    label: "Testimonies",
    title: "Testimonies",
    description:
      "Share how God is moving in your life. Your story can encourage someone else.",
    messagePlaceholder: "Share what God has done...",
  },
  {
    id: "general",
    label: "Community",
    title: "General Discussions",
    description:
      "Reach out to connect, share thoughts, or simply say hello to the Revelation Youth family.",
    messagePlaceholder: "Your message...",
  },
];
