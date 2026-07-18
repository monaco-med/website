import Reveal from "@/components/Reveal";

export default function CheckList({ items }: { items: string[] }) {
  return (
    <Reveal className="check-list" stagger>
      {items.map((item) => (
        <div className="check-item" key={item}>
          <span className="check-mark" aria-hidden="true">
            ✓
          </span>
          <span>{item}</span>
        </div>
      ))}
    </Reveal>
  );
}
