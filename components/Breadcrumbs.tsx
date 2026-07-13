import Link from "next/link";
import { routes } from "@/lib/routes";

export default function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link href={routes.leistungen}>Leistungen</Link>
      <span className="sep">/</span>
      <span aria-current="page">{current}</span>
    </nav>
  );
}
