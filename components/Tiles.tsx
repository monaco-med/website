import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export type TileItem = {
  title: string;
  text: ReactNode;
};

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
