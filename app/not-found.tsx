import Link from "next/link";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="wrap">
        <span className="code">404</span>
        <h1>Diese Seite gibt es nicht (mehr).</h1>
        <p>Der Link ist möglicherweise veraltet, oder die Seite wurde verschoben.</p>
        <div className="actions">
          <Link href={routes.home} className="btn btn-primary">
            Zur Startseite
          </Link>
          <Link href={routes.kontakt} className="btn btn-ghost">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}
