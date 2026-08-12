import type { MerchItem } from "@/data/merch";
import MerchItemCard from "./MerchItemCard";

interface MerchGridProps {
  items: MerchItem[];
}

/**
 * Editorial product grid for the /merch page.
 * See docs/COMPONENT_SPEC.md §4.
 */
export default function MerchGrid({ items }: MerchGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <MerchItemCard key={item.slug} item={item} />
      ))}
    </div>
  );
}
