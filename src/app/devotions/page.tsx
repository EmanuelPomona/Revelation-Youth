import type { Metadata } from "next";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import PageIntro from "@/components/common/PageIntro";
import DevotionDisplay from "@/components/devotions/DevotionDisplay";
import { currentDevotion } from "@/data/devotions";

export const metadata: Metadata = {
  title: "Devotions",
  description:
    "Read weekly Revelation Youth devotions for encouragement and spiritual growth.",
};

export default function DevotionsPage() {
  return (
    <div className="grow bg-revy-base/75 py-20 sm:py-28">
      <ResponsiveContainer width="narrow">
        <PageIntro
          label="Devotions"
          title="Weekly Devotion"
          description="Your weekly encouragement."
        />

        <div className="mt-14">
          <DevotionDisplay devotion={currentDevotion} />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
