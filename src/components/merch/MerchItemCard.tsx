import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import type { MerchItem } from "@/data/merch";

interface MerchItemCardProps {
  item: MerchItem;
}

/**
 * Editorial product placement card. No price, no buy/cart button.
 * See docs/COMPONENT_SPEC.md §4.
 */
export default function MerchItemCard({ item }: MerchItemCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-revy border border-revy-stone/30 bg-revy-base">
      {/* Product image area */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-revy-ivory to-revy-ivory-deep">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Fallback icon when no image is supplied */}
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center opacity-10"
        >
          <ShoppingBag className="h-16 w-16 text-revy-forest" />
        </span>

      </div>

      {/* Name */}
      <div className="px-5 py-4">
        <p className="font-display text-xl font-medium text-revy-forest">
          {item.name}
        </p>
      </div>
    </div>
  );
}
