import type { Metadata } from "next";
import ResponsiveContainer from "@/components/layout/ResponsiveContainer";
import PageIntro from "@/components/common/PageIntro";
import MerchGrid from "@/components/merch/MerchGrid";
import { merchItems } from "@/data/merch";

export const metadata: Metadata = {
  title: "Merch",
  description:
    "Preview upcoming Revelation Youth merch and product drops.",
};

export default function MerchPage() {
  return (
    <div className="grow bg-revy-base/75 py-20 sm:py-28">
      <ResponsiveContainer>
        <PageIntro
          label="Merch"
          title="Coming Soon"
          description="Revelation Youth apparel and accessories."
        />

        <div className="mt-14">
          <MerchGrid items={merchItems} />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
