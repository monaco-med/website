import Reveal from "@/components/Reveal";

export type ReasonItem = {
  title: string;
  text: string;
};

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
