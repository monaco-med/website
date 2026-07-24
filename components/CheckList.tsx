import Reveal from "@/components/Reveal";

/**
 * Single-column checklist with a checkmark accent per row, used for
 * odd-length benefit/coverage lists where the two-column grids
 * (`PainGrid`, `SectorGrid`) would leave an uneven gap.
 */
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
