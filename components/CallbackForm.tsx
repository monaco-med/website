"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import type { CommonContent } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { localeRoutes } from "@/lib/routes";
import { submitLead } from "@/lib/submitLead";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * "Rückruf anfordern" (request a callback) form, rendered on the callback
 * route. Submits via `submitLead("rueckruf", ...)` — see `lib/submitLead.ts`
 * and `app/api/lead/route.ts` for the request/validation flow, and
 * `ContactForm` for the sibling "Betreuungsbedarf" form.
 *
 * Field `name` attributes stay German in both locales — they are the data keys
 * the Google Apps Script mailer reads. Only visible labels are translated.
 */
export default function CallbackForm({
  locale,
  content,
}: {
  locale: Locale;
  content: CommonContent;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const { callback, submitting, unknownError, consentBefore, consentLinkLabel, consentAfter } =
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
      await submitLead("rueckruf", data);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : unknownError);
    }
  }

  return (
    <form className="cb-card" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="grund">{callback.grund}</label>
        <textarea
          id="grund"
          name="grund"
          rows={3}
          placeholder={callback.grundPlaceholder}
        />
      </div>
      <div className="field">
        <label htmlFor="cb-name">
          {callback.name} <span className="req">*</span>
        </label>
        <input id="cb-name" name="name" type="text" required />
      </div>
      <div className="field">
        <label htmlFor="cb-unternehmen">{callback.unternehmen}</label>
        <input id="cb-unternehmen" name="unternehmen" type="text" />
      </div>
      <div className="field">
        <label htmlFor="cb-email">
          {callback.email} <span className="req">*</span>
        </label>
        <input id="cb-email" name="email" type="email" required />
      </div>
      <div className="field">
        <label htmlFor="cb-telefon">{callback.telefon}</label>
        <input id="cb-telefon" name="telefon" type="tel" />
        <p className="field-hint">{callback.telefonHint}</p>
      </div>
      <div className="field">
        <label htmlFor="cb-zeit">{callback.zeit}</label>
        <select id="cb-zeit" name="zeit" defaultValue={callback.zeitOptions[0]}>
          {callback.zeitOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="field-check">
        <input id="cb-dsgvo" name="dsgvo" type="checkbox" required />
        <label htmlFor="cb-dsgvo">
          {consentBefore}{" "}
          <Link href={routes.datenschutz} target="_blank">
            {consentLinkLabel}
          </Link>{" "}
          {consentAfter} <span className="req">*</span>
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={status === "submitting"}>
        {status === "submitting" ? submitting : callback.submit}
      </button>
      {status === "success" && <div className="form-danke">{callback.success}</div>}
      {status === "error" && <p className="error-text">{error}</p>}
      <p className="helper">{callback.helper}</p>
    </form>
  );
}
