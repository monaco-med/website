import Reveal from "@/components/Reveal";

/** A single benefit/reason card: a short title plus a supporting sentence. */
export type ReasonItem = {
  title: string;
  text: string;
};

/** Grid of benefit cards (title + text), used for "why this approach" sections. */
export default function ReasonGrid({ items }: { items: ReasonItem[] }) {
  return (
    <Reveal className="why-grid" stagger>
      {items.map((item) => (
        <div className="reason" key={item.title}>
          <b>{item.title}</b>
          <p>{item.text}</p>
        </div>
      ))}
    </Reveal>
  );
}
