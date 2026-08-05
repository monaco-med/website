"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import type { CommonContent } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { localeRoutes } from "@/lib/routes";
import { submitLead } from "@/lib/submitLead";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * "Betreuungsbedarf einschätzen" lead form, embedded on the homepage and
 * rendered full-page on the Betreuungsbedarf route. Submits via
 * `submitLead("betreuungsbedarf", ...)` — see `lib/submitLead.ts` and
 * `app/api/lead/route.ts` for the request/validation flow, and
 * `CallbackForm` for the sibling callback form.
 *
 * Field `name` attributes are intentionally German in both locales: they are
 * the data keys the Google Apps Script mailer reads (`google-apps-script/Code.gs`),
 * so renaming them would silently drop fields out of the notification email.
 * Only the visible labels are translated.
 */
export default function ContactForm({
  locale,
  content,
}: {
  locale: Locale;
  content: CommonContent;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const { contact, submitting, unknownError, consentBefore, consentLinkLabel, consentAfter } =
    content.forms;
  const routes = localeRoutes[locale];

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
      setError(err instanceof Error ? err.message : unknownError);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="f-row">
        <div className="field">
          <label htmlFor="firma">
            {contact.firma} <span className="req">*</span>
          </label>
          <input id="firma" name="firma" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="name">
            {contact.name} <span className="req">*</span>
          </label>
          <input id="name" name="name" type="text" required />
        </div>
      </div>
      <div className="f-row">
        <div className="field">
          <label htmlFor="funktion">{contact.funktion}</label>
          <select id="funktion" name="funktion" defaultValue={contact.funktionOptions[0]}>
            {contact.funktionOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="email">
            {contact.email} <span className="req">*</span>
          </label>
          <input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className="f-row">
        <div className="field">
          <label htmlFor="telefon">{contact.telefon}</label>
          <input id="telefon" name="telefon" type="tel" />
        </div>
        <div className="field">
          <label htmlFor="mitarbeiterzahl">{contact.mitarbeiterzahl}</label>
          <select
            id="mitarbeiterzahl"
            name="mitarbeiterzahl"
            defaultValue={contact.mitarbeiterzahlOptions[0]}
          >
            {contact.mitarbeiterzahlOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="f-row">
        <div className="field">
          <label htmlFor="standort">{contact.standort}</label>
          <input id="standort" name="standort" type="text" />
        </div>
        <div className="field">
          <label htmlFor="start">{contact.start}</label>
          <input id="start" name="start" type="text" placeholder={contact.startPlaceholder} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="leistung">{contact.leistung}</label>
        <input id="leistung" name="leistung" type="text" />
      </div>
      <div className="field">
        <label htmlFor="nachricht">{contact.nachricht}</label>
        <textarea id="nachricht" name="nachricht" rows={3} />
      </div>
      <div className="field-check">
        <input id="dsgvo" name="dsgvo" type="checkbox" required />
        <label htmlFor="dsgvo">
          {consentBefore}{" "}
          <Link href={routes.datenschutz} target="_blank">
            {consentLinkLabel}
          </Link>{" "}
          {consentAfter} <span className="req">*</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={status === "submitting"}>
        {status === "submitting" ? submitting : contact.submit}
      </button>
      {status === "success" && <div className="form-danke">{contact.success}</div>}
      {status === "error" && <p className="error-text">{error}</p>}
      <p className="helper">{contact.helper}</p>
    </form>
  );
}
