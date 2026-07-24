/** Two-column grid of short industry/sector labels (e.g. "Für wen geeignet"). Not wrapped in `Reveal` — renders statically. */
export default function SectorGrid({ items, style }: { items: string[]; style?: React.CSSProperties }) {
  return (
    <div className="sector-grid" style={style}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
