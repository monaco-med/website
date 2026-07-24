/**
 * MonacoMed – Formular-Backend (Google Apps Script)
 *
 * Empfängt POST-Requests von der Next.js-API-Route /api/lead und verschickt
 * die Formulardaten per E-Mail an TO_EMAIL. Wird NICHT direkt vom Browser
 * aufgerufen (CORS) – nur server-seitig von der Next.js-App.
 *
 * Deployment: siehe README.md in diesem Ordner.
 */

// Empfänger-Adresse für alle Formular-Benachrichtigungen.
const TO_EMAIL = "info@monaco-med.de";

// Muss mit GOOGLE_APPS_SCRIPT_SECRET in der Next.js-.env übereinstimmen.
// Eigenen Wert einsetzen (z. B. via: node -e "console.log(crypto.randomUUID())").
const SHARED_SECRET = "REPLACE_ME_WITH_A_LONG_RANDOM_STRING";

/**
 * Web-App-Einstiegspunkt: wird bei jedem POST an die deployte Apps-Script-URL
 * aufgerufen (siehe app/api/lead/route.ts). Prüft das Shared Secret, leitet
 * dann je nach `data.type` an die passende Mail-Funktion weiter.
 *
 * @param {GoogleAppsScript.Events.DoPost} e - Request-Objekt von Apps Script;
 *   `e.postData.contents` enthält den rohen JSON-Body.
 * @returns {GoogleAppsScript.Content.TextOutput} JSON-Antwort `{ok, error?}`.
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (data.secret !== SHARED_SECRET) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }

    if (data.type === "betreuungsbedarf") {
      sendBetreuungsbedarfMail(data);
    } else if (data.type === "rueckruf") {
      sendRueckrufMail(data);
    } else {
      return jsonResponse({ ok: false, error: "Unbekannter Formulartyp" });
    }

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

/**
 * Verschickt die "Betreuungsbedarf kostenlos einschätzen"-Anfrage
 * (ContactForm) als E-Mail an TO_EMAIL, mit `replyTo` auf die Absender-Adresse
 * gesetzt, damit direkt geantwortet werden kann.
 *
 * @param {Object} data - Geparster Formular-Body (Feldnamen entsprechen den
 *   `name`-Attributen in components/ContactForm.tsx).
 */
function sendBetreuungsbedarfMail(data) {
  const subject = "Neue Anfrage: Betreuungsbedarf" + (data.firma ? " – " + data.firma : "");
  const body = [
    "Neue Anfrage über das Formular \"Betreuungsbedarf kostenlos einschätzen\"",
    "",
    "Firma: " + (data.firma || "-"),
    "Name: " + (data.name || "-"),
    "Funktion: " + (data.funktion || "-"),
    "E-Mail: " + (data.email || "-"),
    "Telefon: " + (data.telefon || "-"),
    "Mitarbeiterzahl: " + (data.mitarbeiterzahl || "-"),
    "Standort(e): " + (data.standort || "-"),
    "Gewünschter Start: " + (data.start || "-"),
    "Gewünschte Leistung: " + (data.leistung || "-"),
    "",
    "Nachricht / Rückrufwunsch:",
    data.nachricht || "-",
  ].join("\n");

  MailApp.sendEmail({
    to: TO_EMAIL,
    replyTo: data.email || TO_EMAIL,
    subject: subject,
    body: body,
  });
}

/**
 * Verschickt die "Rückruf vereinbaren"-Anfrage (CallbackForm) als E-Mail an
 * TO_EMAIL, mit `replyTo` auf die Absender-Adresse gesetzt.
 *
 * @param {Object} data - Geparster Formular-Body (Feldnamen entsprechen den
 *   `name`-Attributen in components/CallbackForm.tsx).
 */
function sendRueckrufMail(data) {
  const subject = "Neuer Rückrufwunsch" + (data.name ? " – " + data.name : "");
  const body = [
    "Neue Anfrage über das Formular \"Rückruf vereinbaren\"",
    "",
    "Name: " + (data.name || "-"),
    "Unternehmen: " + (data.unternehmen || "-"),
    "E-Mail: " + (data.email || "-"),
    "Beste Zeit für den Rückruf: " + (data.zeit || "-"),
    "",
    "Grund des Rückrufwunsches:",
    data.grund || "-",
  ].join("\n");

  MailApp.sendEmail({
    to: TO_EMAIL,
    replyTo: data.email || TO_EMAIL,
    subject: subject,
    body: body,
  });
}

/**
 * Wrappt ein Objekt als JSON-`TextOutput`, dem von Apps Script erwarteten
 * Rückgabetyp für Web-App-Antworten.
 *
 * @param {Object} obj - Response-Payload, z. B. `{ok: true}`.
 * @returns {GoogleAppsScript.Content.TextOutput}
 */
function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
