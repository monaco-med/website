export default function SectorGrid({ items, style }: { items: string[]; style?: React.CSSProperties }) {
  return (
    <div className="sector-grid" style={style}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
