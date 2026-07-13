import Reveal from "@/components/Reveal";

export default function PainGrid({ items }: { items: string[] }) {
  return (
    <Reveal className="pain-grid" stagger>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </Reveal>
  );
}
