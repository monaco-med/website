/**
 * Server-side proxy for lead-form submissions (`ContactForm`, `CallbackForm`
 * via `lib/submitLead.ts`).
 *
 * This route exists so the Google Apps Script URL and shared secret never
 * reach the browser: the client posts form data here, this route validates
 * it and adds the secret, then forwards it to the Apps Script web app,
 * which sends the actual email via `MailApp` (see
 * `google-apps-script/Code.gs`).
 *
 * Errors are returned in the language the visitor filled the form in.
 */
import { NextRequest, NextResponse } from "next/server";
import { isLocale, type Locale } from "@/lib/i18n";

const SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
const SCRIPT_SECRET = process.env.GOOGLE_APPS_SCRIPT_SECRET;

/** Required field names per `LeadType`, enforced before forwarding to the Apps Script. */
const REQUIRED_FIELDS: Record<string, string[]> = {
  betreuungsbedarf: ["firma", "name", "email"],
  rueckruf: ["name", "email"],
};

const MESSAGES = {
  de: {
    notConfigured: "Formular ist derzeit nicht konfiguriert.",
    invalidRequest: "Ungültige Anfrage.",
    unknownType: "Unbekannter Formulartyp.",
    missingFields: (fields: string[]) => `Pflichtfelder fehlen: ${fields.join(", ")}`,
    mailFailed: "E-Mail-Versand fehlgeschlagen.",
  },
  en: {
    notConfigured: "The form is currently unavailable.",
    invalidRequest: "Invalid request.",
    unknownType: "Unknown form type.",
    missingFields: (fields: string[]) => `Required fields are missing: ${fields.join(", ")}`,
    mailFailed: "The message could not be sent.",
  },
} satisfies Record<Locale, unknown>;

/**
 * Validates and forwards a lead submission to the Google Apps Script mailer.
 *
 * Returns `503` if the required env vars aren't set (see `.env.example`),
 * `400` for a malformed body, unknown `type`, or missing required fields,
 * and `502` if the Apps Script request itself fails or is rejected.
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    // Fall through — an unreadable body is reported below, in German, since
    // we have no reliable locale to read from it.
  }

  const rawLocale = typeof body.locale === "string" ? body.locale : "";
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "de";
  const t = MESSAGES[locale];

  if (!SCRIPT_URL || !SCRIPT_SECRET) {
    return NextResponse.json({ ok: false, error: t.notConfigured }, { status: 503 });
  }

  const type = typeof body.type === "string" ? body.type : "";
  if (!type) {
    return NextResponse.json({ ok: false, error: t.invalidRequest }, { status: 400 });
  }

  const required = REQUIRED_FIELDS[type];
  if (!required) {
    return NextResponse.json({ ok: false, error: t.unknownType }, { status: 400 });
  }

  const missing = required.filter((field) => !String(body[field] ?? "").trim());
  if (missing.length > 0) {
    return NextResponse.json({ ok: false, error: t.missingFields(missing) }, { status: 400 });
  }

  try {
    const scriptRes = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, secret: SCRIPT_SECRET }),
      redirect: "follow",
    });

    const json = await scriptRes.json();
    if (!scriptRes.ok || !json.ok) {
      return NextResponse.json({ ok: false, error: json.error || t.mailFailed }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: t.mailFailed }, { status: 502 });
  }
}
