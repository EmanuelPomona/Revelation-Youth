/**
 * Current weekly devotion. One devotion displayed at a time — no card grid.
 * Never invent copy or writer names. See docs/DATA_MODEL.md §8.
 */
export type Devotion = {
  title: string;
  /** Path under /assets/devotions/. If missing, a placeholder is shown. */
  image: string;
  /** "Devotion by Revelation Youth" if writer is unknown. */
  writer: string;
  /** "[ADD DATE]" until provided — never invented. */
  date: string;
};

export const currentDevotion: Devotion = {
  title: "Weekly Devotion",
  image: "/assets/devotions/current-devotion.jpg",
  writer: "Revelation Youth",
  date: "[ADD DATE]",
};
