import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function SectionHead({
  label,
  title,
  as = "h2",
  lead,
  action,
}: {
  label?: string;
  title: ReactNode;
  as?: "h1" | "h2";
  lead?: ReactNode;
  action?: { href: string; label: string; variant?: "primary" | "ghost" };
}) {
  const Title = as;
  return (
    <Reveal className="sec-head">
      {label ? (
        <div>
          <span className="lbl">{label}</span>
          <Title style={{ marginTop: 12 }}>{title}</Title>
        </div>
      ) : (
        <Title>{title}</Title>
      )}
      {lead && <p className="lead">{lead}</p>}
      {action && (
        <Link href={action.href} className={`btn btn-${action.variant ?? "primary"}`}>
          {action.label}
        </Link>
      )}
    </Reveal>
  );
}
