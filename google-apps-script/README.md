# Formular-Backend (Google Apps Script)

Die Website-Formulare (`Betreuungsbedarf`, `Rückruf`) senden ihre Daten an eine
Next.js-API-Route (`/api/lead`), die sie server-seitig an dieses Apps Script
weiterleitet. Das Script verschickt die Anfrage per E-Mail an
`info@monaco-med.de` über `MailApp` (läuft über das Google-Konto, mit dem es
deployed wird).

## Einmaliges Setup

1. **Script-Projekt anlegen**
   - [script.google.com](https://script.google.com) öffnen (mit dem
     Workspace-Konto, das `info@monaco-med.de` verwaltet oder Zugriff aufs
     Postfach hat).
   - „Neues Projekt" → Inhalt von [`Code.gs`](./Code.gs) hineinkopieren.

2. **Secret setzen**
   - In `Code.gs` den Platzhalter `REPLACE_ME_WITH_A_LONG_RANDOM_STRING` durch
     einen zufälligen String ersetzen (z. B. `node -e
     "console.log(require('crypto').randomBytes(24).toString('hex'))"` lokal
     ausführen).
   - Denselben Wert als `GOOGLE_APPS_SCRIPT_SECRET` in `.env.local` (lokal) und
     in den Umgebungsvariablen der Hosting-Plattform (Vercel o. Ä., für
     Produktion) eintragen.

3. **Deployen**
   - Oben rechts „Bereitstellen" → „Neue Bereitstellung".
   - Typ: **Web-App**.
   - „Ausführen als": **Ich** (dein Konto).
   - „Wer hat Zugriff": **Jeder** (die URL ist durch das Secret in Schritt 2
     geschützt; ohne korrektes Secret verschickt das Script keine Mail).
   - Bereitstellen → Berechtigungen bestätigen (Google fragt nach Zugriff auf
     Gmail/MailApp – das ist erwartet).
   - Die angezeigte **Web-App-URL** (`https://script.google.com/macros/s/…/exec`)
     kopieren.

4. **URL in Next.js eintragen**
   - Als `GOOGLE_APPS_SCRIPT_URL` in `.env.local` (lokal) und in den
     Umgebungsvariablen der Hosting-Plattform (Produktion) eintragen.

## Bei Code-Änderungen

Google Apps Script versioniert Deployments unabhängig vom Code. Nach einer
Änderung an `Code.gs`:
„Bereitstellen" → „Bereitstellungen verwalten" → bestehende Bereitstellung
bearbeiten (Stift-Icon) → neue Version wählen → „Bereitstellen". Die URL
bleibt dabei gleich.

## Limits

`MailApp.sendEmail` erlaubt bei Google-Workspace-Konten ca. 1500 E-Mails/Tag
(Gmail-Privatkonten: 100/Tag) – für ein Kontaktformular ausreichend.
