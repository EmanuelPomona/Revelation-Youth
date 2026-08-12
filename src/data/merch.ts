/**
 * Merch items. No prices, cart, or checkout in MVP.
 * See docs/DATA_MODEL.md §7.
 */
export type MerchItem = {
  slug: string;
  name: string;
  /** Accessible description for the product image. */
  alt: string;
  image: string;
};

export const merchItems: MerchItem[] = [
  {
    slug: "coming-soon-1",
    name: "Revelation Youth T-Shirt",
    alt: "Revelation Youth T-shirt",
    image: "/assets/merch/tshirt.jpg",
  },
  {
    slug: "coming-soon-2",
    name: "Revelation Youth Tote Bag",
    alt: "Revelation Youth tote bag",
    image: "/assets/merch/totebag.jpg",
  },
  {
    slug: "coming-soon-3",
    name: "Revelation Youth Phone Case",
    alt: "Revelation Youth phone case",
    image: "/assets/merch/phonecase.jpg",
  },
];
