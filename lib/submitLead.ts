/** Which form submitted the lead — must match a key in `REQUIRED_FIELDS` in `app/api/lead/route.ts`. */
export type LeadType = "betreuungsbedarf" | "rueckruf";

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
 * @throws {Error} With a user-facing German message if the request fails,
 *   the API route rejects it (e.g. missing required fields), or the Apps
 *   Script mailer errors out.
 */
export async function submitLead(type: LeadType, data: Record<string, string>): Promise<void> {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, ...data }),
  });

  let json: { ok: boolean; error?: string } | null = null;
  try {
    json = await res.json();
  } catch {
    // ignore — handled by the !json check below
  }

  if (!res.ok || !json?.ok) {
    throw new Error(json?.error || "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.");
  }
}
