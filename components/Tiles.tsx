import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

/** A single tile: a title plus body content (`text` accepts JSX so a tile can embed an inline `<Link>`). */
export type TileItem = {
  title: string;
  text: ReactNode;
};

/** Responsive grid of bordered content cards — the site's general-purpose "features/services" grid. */
export default function Tiles({ items }: { items: TileItem[] }) {
  return (
    <Reveal className="tiles" stagger>
      {items.map((item) => (
        <div className="tile" key={item.title}>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </Reveal>
  );
}
