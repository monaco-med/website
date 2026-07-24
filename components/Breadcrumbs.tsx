import Link from "next/link";
import { routes } from "@/lib/routes";

/**
 * Visible breadcrumb trail: always starts at "Leistungen", optionally
 * passes through one intermediate `parent` (used by the G-Untersuchungen
 * sub-pages, whose parent is the G-Untersuchungen overview page rather
 * than "Leistungen" directly), and ends at the current page as plain text.
 *
 * This only renders the visual trail — pair with `BreadcrumbJsonLd` using
 * the same page hierarchy for the structured-data equivalent.
 *
 * @param current - Label for the current page (not a link).
 * @param parent - Optional intermediate crumb between "Leistungen" and `current`.
 */
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
