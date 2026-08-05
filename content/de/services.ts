/**
 * German copy for the four service detail pages.
 *
 * All four render through `components/pages/ServicePage.tsx`. Their body
 * sections are a tagged union, which is what lets pages that look quite
 * different — an exam list here, a steps block there — share one layout.
 *
 * Extracted mechanically from the original page files; no wording changed.
 */
import type { ServicePageContent } from "@/content/types";

export type ServiceSlug = "arbeitsmedizin" | "arbeitssicherheit" | "bahnmedizin" | "impfungen";

export const servicePagesDe: Record<ServiceSlug, ServicePageContent> = {
  arbeitsmedizin: {
    meta: {
      title: "Arbeitsmedizin & betriebsärztliche Betreuung",
      description:
        "Betriebsärztliche Betreuung nach ASiG und DGUV V2: Vorsorge, Eignungsuntersuchungen, ASA und Impfaktionen – persönlich betreut, digital organisiert.",
    },
    breadcrumb: "Arbeitsmedizin",
    h1: "Arbeitsmedizinische Betreuung, die im Alltag funktioniert",
    tagline: "Nach ASiG und DGUV Vorschrift 2 – persönlich betreut, digital organisiert.",
    intro: [
      "Von der laufenden betriebsärztlichen Betreuung bis zur einzelnen Vorsorge: MonacoMed übernimmt die arbeitsmedizinische Betreuung Ihres Unternehmens – mit festem ärztlichen Ansprechpartner, digitaler Terminorganisation und lückenloser Dokumentation.",
    ],
    heroCtas: [
      { key: "betreuungsbedarf", label: "Betreuungsbedarf kostenlos einschätzen", variant: "primary" },
      { key: "rueckruf", label: "Rückruf anfordern", variant: "ghost" },
    ],
    sections: [
      {
        kind: "tiles",
        title: "Was die Betreuung umfasst",
        lead: "Alle betriebsärztlichen Aufgaben – geplant, durchgeführt und dokumentiert.",
        items: [
          {
            title: "Betriebsärztliche Betreuung",
            text: "Nach ASiG und DGUV V2 – mit festen Einsatzzeiten und festem Ansprechpartner.",
          },
          {
            title: "Arbeitsmedizinische Vorsorge",
            text: "Pflicht-, Angebots- und Wunschvorsorge klar organisiert.",
          },
          {
            title: "Eignungsuntersuchungen",
            text: "Bei konkretem Anlass, sauber von der Vorsorge getrennt.",
          },
          {
            title: "ASA & Begehungen",
            text: "Teilnahme, Dokumentation und konkrete Empfehlungen.",
          },
          {
            title: "BEM & Mutterschutz",
            text: "Arbeitsmedizinische Beratung für passende betriebliche Lösungen.",
          },
          {
            title: "Impfaktionen",
            text: "Direkt im Betrieb –",
            link: { key: "impfungen", label: "alle Details" },
            textAfter: ".",
          },
        ],
      },
      {
        kind: "split",
        tone: "firm",
        label: "Vorsorge nach ArbMedVV",
        title: "Welche Vorsorge braucht Ihr Team?",
        lead: "Wir ordnen ein, welche Vorsorgen für Ihre Tätigkeiten nötig sind – und das digitale Vorsorgekataster überwacht alle Fristen automatisch.",
        matrixHeading: "Die drei Vorsorgearten",
        rows: [
          [{ bold: "Pflichtvorsorge" }, "z. B. bei Gefahrstoffen, Lärm oder Nachtarbeit"],
          [{ bold: "Angebotsvorsorge" }, "z. B. bei Bildschirmarbeit"],
          [{ bold: "Wunschvorsorge" }, "auf Wunsch der Mitarbeitenden"],
          [{ bold: "Eignungsuntersuchungen" }, "separat und anlassbezogen, z. B. Fahr- und Steuertätigkeiten"],
        ],
      },
      {
        kind: "steps",
        title: "So starten wir",
        items: [
          {
            n: "01",
            title: "Bedarf klären",
            text: "Tätigkeiten, Gefährdungen und Anzahl der Mitarbeitenden – daraus ergibt sich der Betreuungsumfang.",
          },
          {
            n: "02",
            title: "Vorsorgeplan",
            text: "Wir legen fest, welche Vorsorgen und Untersuchungen anstehen.",
          },
          {
            n: "03",
            title: "Untersuchungstage",
            text: "Im Betrieb oder in unserer Praxis – Mitarbeitende buchen online.",
          },
          {
            n: "04",
            title: "Laufende Betreuung",
            text: "Fristen im Kataster, ASA-Teilnahme, Begehungen und feste Ansprechpartner.",
          },
        ],
      },
      {
        kind: "faq",
        tone: "sand",
        title: "Häufige Fragen zur Arbeitsmedizin",
        items: [
          {
            q: "Ab wann braucht ein Unternehmen einen Betriebsarzt?",
            a: "Grundsätzlich ab dem ersten Mitarbeitenden. Der Umfang der Betreuung richtet sich nach DGUV Vorschrift 2 – abhängig von Branche, Gefährdungen und der Anzahl der Mitarbeitenden. Wir helfen bei der Einordnung.",
          },
          {
            q: "Finden Untersuchungen bei uns oder in der Praxis statt?",
            a: "Beides ist möglich. Für Teams organisieren wir Untersuchungstage direkt im Betrieb, einzelne Termine finden in unserer Praxis in München statt.",
          },
          {
            q: "Wer erfährt die Ergebnisse der Vorsorge?",
            a: "Die Inhalte sind vertraulich und bleiben zwischen Ärztin/Arzt und Mitarbeitenden. Der Arbeitgeber erhält nur die Teilnahmebescheinigung – das schafft Vertrauen und Akzeptanz.",
          },
          {
            q: "Was ist der Unterschied zwischen Vorsorge und Eignungsuntersuchung?",
            a: "Vorsorge dient dem Gesundheitsschutz der Mitarbeitenden und ist ergebnisoffen. Eignungsuntersuchungen prüfen anlassbezogen die gesundheitliche Eignung für eine Tätigkeit – beides halten wir sauber getrennt.",
          },
        ],
      },
    ],
    cta: {
      label: "Kontakt",
      title: "Klären wir Ihren Betreuungsbedarf",
      text: "Wenige Angaben genügen – Ihre Anfrage wird direkt ärztlich geprüft, ohne Vertrieb oder Callcenter.",
      ctaKey: "betreuungsbedarf",
      ctaLabel: "Betreuungsbedarf kostenlos einschätzen",
    },
  },
  arbeitssicherheit: {
    meta: {
      title: "Arbeitssicherheit & Gefährdungsbeurteilung",
      description:
        "Fachkraft für Arbeitssicherheit, Gefährdungsbeurteilung, Unterweisungen und Begehungen – eng verzahnt mit der Arbeitsmedizin.",
    },
    breadcrumb: "Arbeitssicherheit",
    h1: "Arbeitssicherheit, eng verzahnt mit der Arbeitsmedizin",
    tagline: "Sicherheitstechnische Betreuung nach ASiG und DGUV Vorschrift 2.",
    intro: [
      "Fachkraft für Arbeitssicherheit und Betriebsarzt arbeiten bei MonacoMed eng zusammen – mit abgestimmten Empfehlungen, klaren Verantwortlichkeiten und einer gemeinsamen, prüffähigen Dokumentation.",
    ],
    heroCtas: [
      { key: "betreuungsbedarf", label: "Betreuungsbedarf kostenlos einschätzen", variant: "primary" },
      { key: "rueckruf", label: "Rückruf anfordern", variant: "ghost" },
    ],
    sections: [
      {
        kind: "tiles",
        title: "Was die Betreuung umfasst",
        lead: "Von der Gefährdungsbeurteilung bis zur Maßnahmenverfolgung.",
        items: [
          {
            title: "Fachkraft für Arbeitssicherheit",
            text: "Sicherheitstechnische Betreuung und Beratung nach ASiG.",
          },
          {
            title: "Gefährdungsbeurteilung",
            text: "Erstellung, Fortschreibung, Maßnahmenplanung und Dokumentation.",
          },
          {
            title: "Unterweisungen",
            text: "Praxisnah, verständlich und auf den Betrieb abgestimmt.",
          },
          {
            title: "Brandschutz",
            text: "Unterweisung und praktische Schulung direkt vor Ort.",
          },
          {
            title: "ASA & Begehungen",
            text: "Organisation, Teilnahme und konkrete Empfehlungen.",
          },
          {
            title: "Maßnahmenverfolgung",
            text: "Offene Punkte strukturiert nachhalten – nichts geht verloren.",
          },
        ],
      },
      {
        kind: "split",
        tone: "firm",
        label: "Aus einer Hand",
        title: "Warum Medizin und Sicherheit zusammengehören",
        lead: "Die Zusammenarbeit von Betriebsarzt und Fachkraft für Arbeitssicherheit ist gesetzlich gefordert – bei MonacoMed kommt beides aus einem Haus.",
        matrixHeading: "Dadurch entstehen",
        rows: [
          ["Einheitliche Empfehlungen", "Abgestimmte Maßnahmen"],
          ["Weniger Abstimmungsaufwand", "Klare Verantwortlichkeiten"],
          ["Eine gemeinsame, prüffähige Dokumentation"],
        ],
      },
      {
        kind: "steps",
        title: "So starten wir",
        items: [
          {
            n: "01",
            title: "Bestandsaufnahme",
            text: "Wir sichten Arbeitsplätze, Tätigkeiten und die vorhandene Dokumentation.",
          },
          {
            n: "02",
            title: "Gefährdungsbeurteilung",
            text: "Risiken bewerten, Maßnahmen ableiten und priorisieren.",
          },
          {
            n: "03",
            title: "Umsetzung",
            text: "Unterweisungen, Begehungen und ASA-Sitzungen im laufenden Betrieb.",
          },
          {
            n: "04",
            title: "Nachhalten",
            text: "Maßnahmen digital verfolgen und die Dokumentation aktuell halten.",
          },
        ],
      },
      {
        kind: "faq",
        tone: "sand",
        title: "Häufige Fragen zur Arbeitssicherheit",
        items: [
          {
            q: "Ab wann ist eine Fachkraft für Arbeitssicherheit Pflicht?",
            a: "Wie beim Betriebsarzt gilt: grundsätzlich ab dem ersten Mitarbeitenden. Der Umfang richtet sich nach DGUV Vorschrift 2, Branche und Betriebsgröße.",
          },
          {
            q: "Wir haben bereits eine Fachkraft – geht das trotzdem?",
            a: "Ja. Bestehende Fachkräfte binden wir eng ein und stimmen die arbeitsmedizinische Seite darauf ab. Auf Wunsch übernehmen wir die sicherheitstechnische Betreuung komplett.",
          },
          {
            q: "Wie oft finden Begehungen statt?",
            a: "Das hängt von Gefährdungslage und Betriebsgröße ab. Wir legen den Rhythmus im Betreuungskonzept fest – und dokumentieren jede Begehung mit konkreten Empfehlungen.",
          },
          {
            q: "Übernehmen Sie auch die ASA-Organisation?",
            a: "Ja. Wir organisieren die Sitzungen des Arbeitsschutzausschusses, nehmen teil und halten Beschlüsse und offene Punkte strukturiert nach.",
          },
        ],
      },
    ],
    cta: {
      label: "Kontakt",
      title: "Klären wir Ihren Betreuungsbedarf",
      text: "Wenige Angaben genügen – Ihre Anfrage wird direkt fachlich geprüft, ohne Vertrieb oder Callcenter.",
      ctaKey: "betreuungsbedarf",
      ctaLabel: "Betreuungsbedarf kostenlos einschätzen",
    },
  },
  bahnmedizin: {
    meta: {
      title: "Bahnmedizin – Tauglichkeitsuntersuchungen TfV, EBO, VDV 714",
      description:
        "Ermächtigte Untersuchungsstelle: Eignungs- und Tauglichkeitsuntersuchungen für Triebfahrzeugführer und Bahnbetrieb – kurzfristige Termine in München.",
    },
    breadcrumb: "Bahnmedizin",
    h1: "Eignungs- und Tauglichkeitsuntersuchungen für den Bahnbetrieb",
    tagline: "Ermächtigte Untersuchungsstelle – fachärztlich, strukturiert, kurzfristig.",
    intro: [
      "MonacoMed führt medizinische Eignungs- und Tauglichkeitsuntersuchungen für Beschäftigte im Bahnbetrieb durch – nach den geltenden eisenbahnrechtlichen Vorgaben, mit klaren Abläufen und kurzen Terminzeiten.",
    ],
    heroCtas: [
      { key: "rueckruf", label: "Termin vereinbaren", variant: "primary" },
      { key: "kontakt", label: "Kontakt aufnehmen", variant: "ghost" },
    ],
    sections: [
      {
        kind: "examList",
        title: "Unsere Untersuchungen",
        lead: "Nach den geltenden eisenbahnrechtlichen Vorgaben und Konzernrichtlinien.",
        items: [
          {
            n: "01",
            title: "Untersuchungen von Triebfahrzeugführern nach § 16 Triebfahrzeugführerscheinverordnung (TfV)",
            text: "Medizinische Tauglichkeitsuntersuchungen für Lokführer gemäß den gesetzlichen Vorgaben.",
          },
          {
            n: "02",
            title: "Tauglichkeitsuntersuchungen nach VDV-Schrift 714",
            text: "Untersuchungen für Beschäftigte im öffentlichen Verkehrs- und Bahnbereich entsprechend den jeweiligen Anforderungen.",
          },
          {
            n: "03",
            title: "Untersuchungen nach der Eisenbahn-Bau- und Betriebsordnung (EBO)",
            text: "Medizinische Eignungsuntersuchungen für sicherheitsrelevante Tätigkeiten im Eisenbahnbetrieb.",
          },
          {
            n: "04",
            title: "Tauglichkeitsuntersuchungen nach den Anforderungsgruppen A und B der Deutschen Bahn AG",
            text: "Durchführung entsprechend den geltenden Konzernrichtlinien.",
          },
          {
            n: "05",
            title: "Eignungsuntersuchungen für weitere sicherheitsrelevante Tätigkeiten",
            text: "Unter anderem für Sicherungsposten (SiPo) und weitere Beschäftigte mit besonderen gesundheitlichen Anforderungen.",
          },
        ],
      },
      {
        kind: "split",
        tone: "firm",
        label: "Für Unternehmen und Einzelpersonen",
        title: "Einzeltermine oder ganze Gruppen",
        lead: "Untersuchungstermine sind sowohl für Einzelpersonen als auch für größere Gruppen planbar.",
        matrixHeading: "Wir betreuen",
        rows: [
          ["Eisenbahnverkehrsunternehmen", "Infrastrukturunternehmen"],
          ["Personaldienstleister", "Einzelne Bewerber und Beschäftigte"],
        ],
      },
      {
        kind: "reasons",
        title: "Warum MonacoMed?",
        items: [
          {
            title: "Ermächtigte Untersuchungsstelle",
            text: "Für den Bahnbereich – Untersuchungen nach den geltenden Vorgaben.",
          },
          {
            title: "Fachärztliche Durchführung",
            text: "Persönlich ärztlich geführt, mit festen Ansprechpartnern.",
          },
          {
            title: "Kurzfristige Termine",
            text: "Schnelle Terminvergabe – für Einzelpersonen und Gruppen.",
          },
          {
            title: "Digitale Terminorganisation",
            text: "Online buchen, Erinnerungen und Nachweise digital.",
          },
          {
            title: "Klare und effiziente Abläufe",
            text: "Strukturiert von der Anmeldung bis zur Bescheinigung.",
          },
        ],
      },
    ],
    cta: {
      label: "Termin vereinbaren",
      title: "Welche Untersuchung brauchen Sie?",
      text: "Gerne beraten wir Sie, welche Untersuchung für Ihre Tätigkeit erforderlich ist, und vereinbaren zeitnah einen Untersuchungstermin.",
      ctaKey: "rueckruf",
      ctaLabel: "Termin vereinbaren",
    },
  },
  impfungen: {
    meta: {
      title: "Impfungen im Unternehmen – Impfaktionen im Betrieb",
      description:
        "Grippeschutz, reisemedizinische und tätigkeitsbezogene Impfungen direkt im Betrieb – von der Planung bis zur Dokumentation.",
    },
    breadcrumb: "Impfungen im Unternehmen",
    h1: "Impfaktionen direkt im Betrieb",
    tagline: "Von der Planung bis zur Dokumentation – ärztlich durchgeführt.",
    intro: [
      "Grippeschutz vor der Saison, reisemedizinische Beratung vor Dienstreisen oder tätigkeitsbezogene Impfungen: MonacoMed organisiert Impftage direkt bei Ihnen – inklusive Aufklärung, Einwilligung und Nachweis.",
    ],
    heroCtas: [
      { key: "betreuungsbedarf", label: "Impfaktion anfragen", variant: "primary" },
      { key: "rueckruf", label: "Rückruf anfordern", variant: "ghost" },
    ],
    sections: [
      {
        kind: "tiles",
        title: "Welche Impfungen wir anbieten",
        lead: "Abgestimmt auf Tätigkeiten, Reisepläne und Saison.",
        items: [
          {
            title: "Grippeschutzimpfung",
            text: "Die jährliche Aktion im Herbst – planbar für das ganze Team.",
          },
          {
            title: "Reisemedizinische Impfungen",
            text: "Beratung und Impfungen vor Dienstreisen – fachärztlich durch einen Reisemediziner.",
          },
          {
            title: "Tätigkeitsbezogene Impfungen",
            text: "z. B. Hepatitis A/B bei entsprechender Gefährdung – eingeordnet über die Vorsorge.",
          },
        ],
      },
      {
        kind: "steps",
        flush: true,
        title: "So läuft ein Impftag ab",
        items: [
          {
            n: "01",
            title: "Bedarf & Termin",
            text: "Wir planen Umfang und Termin gemeinsam – abgestimmt auf Ihre Standorte.",
          },
          {
            n: "02",
            title: "Anmeldung & Aufklärung",
            text: "Mitarbeitende melden sich online an und erhalten alle Informationen vorab digital.",
          },
          {
            n: "03",
            title: "Impftag im Betrieb",
            text: "Durchführung vor Ort – mit wenig Ausfallzeit für Ihr Team.",
          },
          {
            n: "04",
            title: "Dokumentation",
            text: "Nachweise für die Mitarbeitenden, Erinnerung an Auffrischungen über das Kataster.",
          },
        ],
      },
      {
        kind: "faq",
        tone: "sand",
        title: "Häufige Fragen zu Impfaktionen",
        items: [
          {
            q: "Ab wie vielen Mitarbeitenden lohnt sich ein Impftag?",
            a: "Auch kleinere Teams sind möglich – Umfang und Format stimmen wir individuell ab. Alternativ können Mitarbeitende einzeln in unsere Praxis kommen.",
          },
          {
            q: "Wie viel Vorlauf brauchen wir?",
            a: "In der Regel wenige Wochen. Grippeimpfaktionen planen Sie am besten früh im Herbst, reisemedizinische Impfungen je nach Ziel mit mehreren Wochen Vorlauf.",
          },
          {
            q: "Geht das auch an mehreren Standorten?",
            a: "Ja. Impftage werden standortübergreifend koordiniert – mit zentraler Anmeldung und einheitlicher Dokumentation.",
          },
          {
            q: "Wer denkt an die Auffrischungen?",
            a: "Unser digitales Kataster überwacht Fälligkeiten und erinnert automatisch – niemand muss Listen führen.",
          },
        ],
      },
    ],
    cta: {
      label: "Kontakt",
      title: "Planen wir Ihre nächste Impfaktion",
      text: "Wenige Angaben genügen – Ihre Anfrage wird direkt ärztlich geprüft, ohne Vertrieb oder Callcenter.",
      ctaKey: "betreuungsbedarf",
      ctaLabel: "Jetzt unverbindlich anfragen",
    },
  },
};
