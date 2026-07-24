/**
 * Server-side proxy for lead-form submissions (`ContactForm`, `CallbackForm`
 * via `lib/submitLead.ts`).
 *
 * This route exists so the Google Apps Script URL and shared secret never
 * reach the browser: the client posts form data here, this route validates
 * it and adds the secret, then forwards it to the Apps Script web app,
 * which sends the actual email via `MailApp` (see
 * `google-apps-script/Code.gs`).
 */
import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
const SCRIPT_SECRET = process.env.GOOGLE_APPS_SCRIPT_SECRET;

/** Required field names per `LeadType`, enforced before forwarding to the Apps Script. */
const REQUIRED_FIELDS: Record<string, string[]> = {
  betreuungsbedarf: ["firma", "name", "email"],
  rueckruf: ["name", "email"],
};

/**
 * Validates and forwards a lead submission to the Google Apps Script mailer.
 *
 * Returns `503` if the required env vars aren't set (see `.env.example`),
 * `400` for a malformed body, unknown `type`, or missing required fields,
 * and `502` if the Apps Script request itself fails or is rejected.
 */
export async function POST(req: NextRequest) {
  if (!SCRIPT_URL || !SCRIPT_SECRET) {
    return NextResponse.json(
      { ok: false, error: "Formular ist derzeit nicht konfiguriert." },
      { status: 503 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  const type = typeof body.type === "string" ? body.type : "";
  const required = REQUIRED_FIELDS[type];
  if (!required) {
    return NextResponse.json({ ok: false, error: "Unbekannter Formulartyp." }, { status: 400 });
  }
  const missing = required.filter((field) => !String(body[field] ?? "").trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Pflichtfelder fehlen: ${missing.join(", ")}` },
      { status: 400 }
    );
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
      return NextResponse.json(
        { ok: false, error: json.error || "E-Mail-Versand fehlgeschlagen." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "E-Mail-Versand fehlgeschlagen." },
      { status: 502 }
    );
  }
}
