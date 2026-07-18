import Link from "next/link";
import { routes } from "@/lib/routes";

export default function Breadcrumbs({
  current,
  parent,
}: {
  current: string;
  parent?: { label: string; href: string };
}) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link href={routes.leistungen}>Leistungen</Link>
      {parent && (
        <>
          <span className="sep">/</span>
          <Link href={parent.href}>{parent.label}</Link>
        </>
      )}
      <span className="sep">/</span>
      <span aria-current="page">{current}</span>
    </nav>
  );
}
