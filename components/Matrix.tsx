import type { ReactNode } from "react";
import Link from "next/link";

export type MatrixRow = [ReactNode, ReactNode] | [ReactNode];

export function Matrix({ heading, rows }: { heading: string; rows: MatrixRow[] }) {
  return (
    <div className="matrix">
      <div className="mh">{heading}</div>
      {rows.map((row, i) => (
        <div className="mrow" key={i}>
          <div className="mcell" style={row.length === 1 ? { gridColumn: "1/3" } : undefined}>
            {row[0]}
          </div>
          {row.length === 2 && <div className="mcell">{row[1]}</div>}
        </div>
      ))}
    </div>
  );
}

export type MatrixLinkItem = {
  href: string;
  label: string;
};

export function MatrixLinks({ heading, items }: { heading: string; items: MatrixLinkItem[] }) {
  return (
    <div className="matrix">
      <div className="mh">{heading}</div>
      {items.map((item) => (
        <Link className="mlink" href={item.href} key={item.href}>
          <span>{item.label}</span>
          <span className="arrow">→</span>
        </Link>
      ))}
    </div>
  );
}
