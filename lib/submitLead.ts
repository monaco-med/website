import type { Locale } from "@/lib/i18n";

/** Which form submitted the lead — must match a key in `REQUIRED_FIELDS` in `app/api/lead/route.ts`. */
export type LeadType = "betreuungsbedarf" | "rueckruf";

/** Fallback error text, used when the API gives no message of its own. */
const FALLBACK_ERROR: Record<Locale, string> = {
  de: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
  en: "Your request could not be sent. Please try again.",
};

/**
 * Submits a lead form to the `/api/lead` route, which forwards it to the
 * Google Apps Script mailer (see `google-apps-script/Code.gs`).
 *
 * Used by `ContactForm` and `CallbackForm` instead of calling `fetch`
 * directly, so both forms share the same request shape and error handling.
 *
 * @param type - Which form this submission came from; determines which
 *   fields the API route requires.
 * @param data - Form field values, keyed by field name (e.g. `firma`, `name`,
 *   `email`).
 * @param locale - Language the visitor filled the form in. Selects the
 *   language of any error shown back to them, and is recorded in the
 *   notification email so replies go out in the right language.
 * @throws {Error} With a user-facing message if the request fails, the API
 *   route rejects it (e.g. missing required fields), or the mailer errors.
 */
export async function submitLead(
  type: LeadType,
  data: Record<string, string>,
  locale: Locale
): Promise<void> {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, locale, ...data }),
  });

  let json: { ok: boolean; error?: string } | null = null;
  try {
    json = await res.json();
  } catch {
    // ignore — handled by the !json check below
  }

  if (!res.ok || !json?.ok) {
    throw new Error(json?.error || FALLBACK_ERROR[locale]);
  }
}
