"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { submitLead } from "@/lib/submitLead";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * "Betreuungsbedarf einschätzen" lead form, embedded on the homepage and
 * rendered full-page on `/betreuungsbedarf`. Submits via
 * `submitLead("betreuungsbedarf", ...)` — see `lib/submitLead.ts` and
 * `app/api/lead/route.ts` for the request/validation flow, and
 * `CallbackForm` for the sibling "Rückruf" form.
 */
export default function ContactForm() {
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
      await submitLead("betreuungsbedarf", data);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unbekannter Fehler.");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="f-row">
        <div className="field">
          <label htmlFor="firma">
            Firma <span className="req">*</span>
          </label>
          <input id="firma" name="firma" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="name">
            Name <span className="req">*</span>
          </label>
          <input id="name" name="name" type="text" required />
        </div>
      </div>
      <div className="f-row">
        <div className="field">
          <label htmlFor="funktion">Funktion</label>
          <select id="funktion" name="funktion" defaultValue="Geschäftsführung">
            <option>Geschäftsführung</option>
            <option>HR / Personal</option>
            <option>Arbeitsschutz</option>
            <option>Fachkraft für Arbeitssicherheit</option>
            <option>Betriebsrat</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="email">
            E-Mail <span className="req">*</span>
          </label>
          <input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className="f-row">
        <div className="field">
          <label htmlFor="telefon">Telefon</label>
          <input id="telefon" name="telefon" type="tel" />
        </div>
        <div className="field">
          <label htmlFor="mitarbeiterzahl">Anzahl der Mitarbeitenden</label>
          <select id="mitarbeiterzahl" name="mitarbeiterzahl" defaultValue="1–49">
            <option>1–49</option>
            <option>50–199</option>
            <option>200–499</option>
            <option>500+</option>
          </select>
        </div>
      </div>
      <div className="f-row">
        <div className="field">
          <label htmlFor="standort">Standort(e)</label>
          <input id="standort" name="standort" type="text" />
        </div>
        <div className="field">
          <label htmlFor="start">Gewünschter Start</label>
          <input id="start" name="start" type="text" placeholder="z. B. Q3 2026" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="leistung">Gewünschte Leistung</label>
        <input id="leistung" name="leistung" type="text" />
      </div>
      <div className="field">
        <label htmlFor="nachricht">Nachricht / Rückrufwunsch</label>
        <textarea id="nachricht" name="nachricht" rows={3} />
      </div>
      <div className="field-check">
        <input id="dsgvo" name="dsgvo" type="checkbox" required />
        <label htmlFor="dsgvo">
          Ich habe die{" "}
          <Link href={routes.datenschutz} target="_blank">
            Datenschutzhinweise
          </Link>{" "}
          zur Kenntnis genommen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung
          meiner Anfrage einverstanden. <span className="req">*</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={status === "submitting"}>
        {status === "submitting" ? "Wird gesendet…" : "Anfrage senden"}
      </button>
      {status === "success" && (
        <div className="form-danke">
          Vielen Dank – Ihre Anfrage ist eingegangen. Wir melden uns kurzfristig.
        </div>
      )}
      {status === "error" && <p className="error-text">{error}</p>}
      <p className="helper">
        {
          "// Ihre Anfrage wird direkt ärztlich geprüft. Sie sprechen von Anfang an mit einem fachlichen Ansprechpartner – ohne Umwege über Vertrieb oder Callcenter."
        }
      </p>
    </form>
  );
}
