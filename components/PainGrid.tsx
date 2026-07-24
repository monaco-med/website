import Reveal from "@/components/Reveal";

/** Two-column grid of short "pain point" strings (problem statements before a solution pitch). */
export default function PainGrid({ items }: { items: string[] }) {
  return (
    <Reveal className="pain-grid" stagger>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </Reveal>
  );
}
