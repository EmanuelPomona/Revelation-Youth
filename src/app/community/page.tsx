import type { Metadata } from "next";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import PageIntro from "@/components/common/PageIntro";
import CommunityFormSection from "@/components/community/CommunityFormSection";
import { communitySections } from "@/data/community";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Connect with Revelation Youth through prayer requests, questions, testimonies, and general discussion.",
};

export default function CommunityPage() {
  return (
    <div className="grow bg-revy-base/75 py-20 sm:py-28">
      <ResponsiveContainer>
        <PageIntro
          label="Community"
          title="Connect"
          description="Reach out to Revelation Youth. Whether you have a prayer request, a question, a testimony, or just want to say hello — we'd love to hear from you."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {communitySections.map((section) => (
            <CommunityFormSection key={section.id} section={section} />
          ))}
        </div>
      </ResponsiveContainer>
    </div>
  );
}
