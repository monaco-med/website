"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";

export default function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setSubmitted(true);
    form.reset();
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
      <button type="submit" className="btn btn-primary btn-block">
        Rückruf anfordern
      </button>
      {submitted && (
        <div className="form-danke">
          Vielen Dank – wir rufen Sie im gewünschten Zeitfenster zurück.{" "}
          <em style={{ color: "var(--mute)", fontStyle: "normal" }}>(Demo-Formular im Entwurf)</em>
        </div>
      )}
      <p className="helper">{"// Wir melden uns zum gewünschten Zeitfenster telefonisch bei Ihnen."}</p>
    </form>
  );
}
