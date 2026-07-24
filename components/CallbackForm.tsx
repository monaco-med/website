"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { submitLead } from "@/lib/submitLead";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * "Rückruf vereinbaren" (request a callback) form, rendered on `/rueckruf`.
 * Submits via `submitLead("rueckruf", ...)` — see `lib/submitLead.ts` and
 * `app/api/lead/route.ts` for the request/validation flow, and
 * `ContactForm` for the sibling "Betreuungsbedarf" form.
 */
export default function CallbackForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;
    // The consent checkbox is only required for client-side validation —
    // its value ("on") isn't a lead field, so it's dropped before sending.
    delete (data as Record<string, unknown>).dsgvo;

    setStatus("submitting");
    setError(null);
    try {
      await submitLead("rueckruf", data);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unbekannter Fehler.");
    }
  }

  return (
    <form className="cb-card" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="grund">Grund des Rückrufwunsches</label>
        <textarea id="grund" name="grund" rows={3} placeholder="Worum geht es?" />
      </div>
      <div className="field">
        <label htmlFor="cb-name">
          Name <span className="req">*</span>
        </label>
        <input id="cb-name" name="name" type="text" required />
      </div>
      <div className="field">
        <label htmlFor="cb-unternehmen">Unternehmen (optional)</label>
        <input id="cb-unternehmen" name="unternehmen" type="text" />
      </div>
      <div className="field">
        <label htmlFor="cb-email">
          E-Mail <span className="req">*</span>
        </label>
        <input id="cb-email" name="email" type="email" required />
      </div>
      <div className="field">
        <label htmlFor="cb-zeit">Beste Zeit für den Rückruf</label>
        <select id="cb-zeit" name="zeit" defaultValue="9–12 Uhr">
          <option>9–12 Uhr</option>
          <option>13–17 Uhr</option>
          <option>Sonstige</option>
        </select>
      </div>
      <div className="field-check">
        <input id="cb-dsgvo" name="dsgvo" type="checkbox" required />
        <label htmlFor="cb-dsgvo">
          Ich habe die{" "}
          <Link href={routes.datenschutz} target="_blank">
            Datenschutzhinweise
          </Link>{" "}
          zur Kenntnis genommen und bin mit der Verarbeitung meiner Angaben einverstanden.{" "}
          <span className="req">*</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={status === "submitting"}>
        {status === "submitting" ? "Wird gesendet…" : "Rückruf anfordern"}
      </button>
      {status === "success" && (
        <div className="form-danke">
          Vielen Dank – wir rufen Sie im gewünschten Zeitfenster zurück.
        </div>
      )}
      {status === "error" && <p className="error-text">{error}</p>}
      <p className="helper">{"// Wir melden uns zum gewünschten Zeitfenster telefonisch bei Ihnen."}</p>
    </form>
  );
}
