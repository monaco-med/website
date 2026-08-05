/**
 * German copy for the eight G-Untersuchungen detail pages.
 *
 * All eight share one template (`components/pages/ExamPage.tsx`): hero with a
 * three-level breadcrumb, an ordered list of body sections, then a closing CTA
 * band. Only the copy differs, so it lives here and the layout lives once.
 *
 * Sections render in array order and alternate background shading by position.
 * G-numbers are the German legal designations for these exams and are kept
 * verbatim in translation.
 *
 * Extracted mechanically from the original page files — no wording changed.
 */
import type { ExamPageContent, ExamSlug } from "@/content/types";

/** Parent page name, used as the middle breadcrumb on every exam page. */
export const examParentLabelDe = "Arbeitsmedizinische Vorsorge & G-Untersuchungen";

export const examPagesDe: Record<ExamSlug, ExamPageContent> = {
  g25: {
    meta: {
      title: "G25 Untersuchung München",
      description:
        "G25 Untersuchung in München: arbeitsmedizinische Eignungsbeurteilung für Fahr-, Steuer- und Überwachungstätigkeiten – in der Praxis oder direkt im Unternehmen.",
    },
    h1: "G25 Untersuchung München",
    tagline: "Fahr-, Steuer- und Überwachungstätigkeiten",
    intro: [
      "Die sogenannte G25 Untersuchung ist eine der bekanntesten arbeitsmedizinischen Eignungsuntersuchungen. Sie richtet sich an Beschäftigte, die Fahrzeuge führen, Maschinen steuern oder sicherheitsrelevante Anlagen überwachen.",
      "Auch wenn die frühere Bezeichnung „G25” heute offiziell nicht mehr verwendet wird, suchen viele Unternehmen weiterhin unter diesem Begriff nach einer arbeitsmedizinischen Eignungsbeurteilung.",
      "MonacoMed führt Eignungsuntersuchungen für Fahr-, Steuer- und Überwachungstätigkeiten in München und nach Absprache direkt bei Unternehmen vor Ort durch.",
    ],
    heroCta: "Untersuchung anfragen",
    sections: [
      {
        kind: "checklist",
        title: "Für wen kann eine G25 Untersuchung relevant sein?",
        lead: "Eine Eignungsbeurteilung kann beispielsweise bei folgenden Tätigkeiten sinnvoll oder betrieblich vorgesehen sein:",
        items: [
          "Führen von Flurförderzeugen und Gabelstaplern",
          "Führen von Fahrzeugen im betrieblichen Umfeld",
          "Bedienen von Kränen und Maschinen",
          "Steuer- und Überwachungstätigkeiten",
          "Tätigkeiten mit besonderer Verantwortung für die eigene Sicherheit oder die Sicherheit Dritter",
        ],
        note: "Ob eine Eignungsbeurteilung erforderlich und rechtlich zulässig ist, richtet sich nach der konkreten Tätigkeit und dem jeweiligen Untersuchungsanlass.",
      },
      {
        kind: "prose",
        title: "Was wird bei der G25 Untersuchung untersucht?",
        paragraphs: [
          "Art und Umfang der Untersuchung richten sich nach der Tätigkeit und den individuellen Anforderungen. Je nach Untersuchungsanlass können beispielsweise eine ärztliche Anamnese, körperliche Untersuchung sowie Untersuchungen des Seh- und Hörvermögens Bestandteil der Eignungsbeurteilung sein.",
        ],
      },
    ],
    cta: {
      label: "Kontakt",
      title: "G25 Untersuchungen direkt im Unternehmen",
      text: "Bei mehreren Beschäftigten können wir Untersuchungstage direkt an Ihrem Unternehmensstandort organisieren. So lassen sich die Untersuchungen effizient in den Betriebsablauf integrieren und Ausfallzeiten reduzieren. Wir melden uns in der Regel innerhalb von 48 Stunden zurück.",
      ctaLabel: "Untersuchung anfragen",
    },
  },
  g26: {
    meta: {
      title: "G26 Untersuchung München",
      description:
        "G26 Untersuchung in München: arbeitsmedizinische Vorsorge und Eignungsbeurteilung für Beschäftigte, die bei ihrer Tätigkeit Atemschutzgeräte tragen.",
    },
    h1: "G26 Untersuchung München",
    tagline: "Arbeitsmedizinische Vorsorge und Eignungsbeurteilung bei Atemschutz",
    intro: [
      "Die sogenannte G26 Untersuchung betrifft Beschäftigte, die bei ihrer Tätigkeit Atemschutzgeräte tragen.",
      "Die frühere Bezeichnung „G26” wurde durch die heutigen DGUV Empfehlungen für arbeitsmedizinische Beratungen und Untersuchungen abgelöst. Je nach Atemschutzgerät, Tätigkeit und rechtlichem Untersuchungsanlass können arbeitsmedizinische Vorsorge und Fragen der gesundheitlichen Eignung eine Rolle spielen.",
      "MonacoMed bietet arbeitsmedizinische Vorsorge und Untersuchungen bei Tätigkeiten mit Atemschutz in München und nach Absprache direkt bei Unternehmen vor Ort an.",
    ],
    heroCta: "Atemschutzvorsorge anfragen",
    sections: [
      {
        kind: "checklist",
        title: "Für wen ist eine G26 Untersuchung relevant?",
        lead: "Eine arbeitsmedizinische Beurteilung kann beispielsweise Beschäftigte betreffen, die:",
        items: [
          "Filtergeräte oder Atemschutzmasken tragen",
          "umluftunabhängige Atemschutzgeräte verwenden",
          "unter Atemschutz körperlich belastende Tätigkeiten ausführen",
          "im Brand- und Katastrophenschutz eingesetzt werden",
          "bei industriellen Tätigkeiten auf Atemschutz angewiesen sind",
        ],
        note: "Welche arbeitsmedizinischen Maßnahmen erforderlich sind, hängt insbesondere von Art und Gewicht des Atemschutzgerätes sowie von der Tätigkeit und der Gefährdungsbeurteilung ab.",
      },
      {
        kind: "prose",
        title: "Was wird untersucht?",
        paragraphs: [
          "Der Untersuchungsumfang richtet sich nach der Art des Atemschutzes und der körperlichen Belastung. Neben Anamnese und ärztlicher Untersuchung können je nach Anlass beispielsweise Lungenfunktionsprüfung, Seh- oder Hörprüfung, EKG oder weitere Untersuchungen erforderlich sein.",
        ],
      },
    ],
    cta: {
      label: "Kontakt",
      title: "G26 Untersuchungstage vor Ort",
      text: "Bei mehreren Beschäftigten können Atemschutzvorsorgen und entsprechende Untersuchungen gebündelt als Untersuchungstag direkt in Ihrem Unternehmen durchgeführt werden. Wir stimmen den benötigten Umfang und die organisatorischen Voraussetzungen vorab mit Ihnen ab. Wir melden uns in der Regel innerhalb von 48 Stunden auf Ihre Anfrage zurück.",
      ctaLabel: "Untersuchungstag anfragen",
    },
  },
  g37: {
    meta: {
      title: "G37 Untersuchung München",
      description:
        "G37 Untersuchung München: arbeitsmedizinische Angebotsvorsorge bei Bildschirmarbeit – Beratung, Sehtest und Organisation direkt im Unternehmen.",
    },
    h1: "G37 Untersuchung München",
    tagline: "Arbeitsmedizinische Vorsorge bei Bildschirmarbeit",
    intro: [
      "Die sogenannte G37 Untersuchung ist die arbeitsmedizinische Vorsorge für Beschäftigte, die regelmäßig an Bildschirmgeräten arbeiten.",
      "Heute wird sie als arbeitsmedizinische Angebotsvorsorge bei Tätigkeiten an Bildschirmgeräten durchgeführt. Im Mittelpunkt stehen die individuelle Beratung sowie insbesondere Beschwerden und gesundheitliche Fragestellungen im Zusammenhang mit der Bildschirmarbeit.",
      "MonacoMed organisiert die Bildschirmvorsorge für Unternehmen in München und nach Absprache direkt an Ihrem Standort.",
    ],
    heroCta: "G37 Vorsorge anfragen",
    sections: [
      {
        kind: "checklist",
        title: "Was beinhaltet die G37 Vorsorge?",
        lead: "Die Vorsorge umfasst eine arbeitsmedizinische Beratung und eine angemessene Untersuchung der Augen und des Sehvermögens.",
        intro: "Dabei können unter anderem folgende Aspekte berücksichtigt werden:",
        items: [
          "Sehschärfe",
          "Beschwerden der Augen",
          "Belastungen durch Bildschirmarbeit",
          "bestehende Sehhilfen",
          "Beschwerden im Zusammenhang mit der Arbeitsplatzgestaltung",
        ],
        note: "Ergibt sich, dass eine spezielle Sehhilfe für die Arbeit am Bildschirm erforderlich ist, kann dies im Rahmen der Vorsorge entsprechend eingeordnet werden.",
      },
      {
        kind: "prose",
        title: "Ist die G37 Untersuchung Pflicht?",
        paragraphs: [
          "Bei Bildschirmarbeit handelt es sich grundsätzlich um eine Angebotsvorsorge. Der Arbeitgeber muss den Beschäftigten die Vorsorge entsprechend den gesetzlichen Voraussetzungen anbieten. Die Teilnahme der Beschäftigten ist freiwillig.",
        ],
      },
    ],
    cta: {
      label: "Kontakt",
      title: "Bildschirmvorsorge direkt in Ihrem Unternehmen",
      text: "Gerade bei einer größeren Zahl von Bildschirmarbeitsplätzen können Vorsorgetage effizient direkt im Unternehmen durchgeführt werden. Wir unterstützen Sie bei der Terminorganisation und führen die Vorsorgen gebündelt an Ihrem Standort durch. Wir melden uns in der Regel innerhalb von 48 Stunden auf Ihre Anfrage zurück.",
      ctaLabel: "Vorsorgetag anfragen",
    },
  },
  g41: {
    meta: {
      title: "G41 Untersuchung München",
      description:
        "G41 Untersuchung München: arbeitsmedizinische Eignungsbeurteilung für Tätigkeiten mit Absturzgefährdung – Organisation in München und direkt im Unternehmen.",
    },
    h1: "G41 Untersuchung München",
    tagline: "Eignungsuntersuchung für Arbeiten mit Absturzgefahr",
    intro: [
      "Die sogenannte G41 Untersuchung wird häufig im Zusammenhang mit Tätigkeiten mit besonderer Absturzgefährdung angefragt.",
      "Die frühere Bezeichnung „G41” ist heute offiziell nicht mehr die aktuelle Bezeichnung. Bei entsprechender Rechtsgrundlage oder einem nachvollziehbaren betrieblichen Anlass kann jedoch eine arbeitsmedizinische Eignungsbeurteilung für Tätigkeiten mit Absturzgefährdung erforderlich oder sinnvoll sein.",
      "MonacoMed führt entsprechende Eignungsuntersuchungen in München und nach Absprache direkt bei Unternehmen vor Ort durch.",
    ],
    heroCta: "G41 Untersuchung anfragen",
    sections: [
      {
        kind: "checklist",
        title: "Für welche Tätigkeiten kann eine Eignungsbeurteilung relevant sein?",
        lead: "Beispielsweise bei Arbeiten:",
        items: [
          "auf Dächern",
          "auf Gerüsten",
          "auf Masten",
          "in größeren Höhen",
          "an hoch gelegenen Arbeitsplätzen",
          "bei denen eine plötzliche gesundheitliche Beeinträchtigung zu einer erheblichen Eigen- oder Fremdgefährdung führen könnte",
        ],
        note: "Ob eine Eignungsuntersuchung erforderlich und rechtlich zulässig ist, muss anhand des konkreten Arbeitsplatzes und des Untersuchungsanlasses beurteilt werden.",
      },
      {
        kind: "prose",
        title: "Was wird bei der Untersuchung geprüft?",
        paragraphs: [
          "Die Untersuchung orientiert sich an den gesundheitlichen Anforderungen der konkreten Tätigkeit. Je nach Anlass können neben Anamnese und körperlicher Untersuchung weitere Untersuchungen erforderlich sein.",
          "Ziel ist die arbeitsmedizinische Beurteilung der gesundheitlichen Eignung für die vorgesehene Tätigkeit.",
        ],
      },
    ],
    cta: {
      label: "Kontakt",
      title: "G41 Untersuchungen für Unternehmen",
      text: "Bei mehreren Beschäftigten können wir Untersuchungstage gebündelt und nach Absprache direkt an Ihrem Unternehmensstandort durchführen. Wir melden uns in der Regel innerhalb von 48 Stunden zurück.",
      ctaLabel: "Untersuchung anfragen",
    },
  },
  g42: {
    meta: {
      title: "G42 Untersuchung München",
      description:
        "G42 Untersuchung in München: arbeitsmedizinische Vorsorge bei Infektionsgefährdung – für Gesundheitswesen, Labore und weitere Tätigkeitsbereiche, auch vor Ort.",
    },
    h1: "G42 Untersuchung München",
    tagline: "Arbeitsmedizinische Vorsorge bei Tätigkeiten mit Infektionsgefährdung",
    intro: [
      "Die sogenannte G42 Untersuchung betrifft Beschäftigte, die bei ihrer beruflichen Tätigkeit einer erhöhten Infektionsgefährdung durch biologische Arbeitsstoffe ausgesetzt sein können.",
      "Typische Anwendungsbereiche finden sich unter anderem im Gesundheitswesen, in medizinischen Einrichtungen, Laboratorien sowie bei weiteren Tätigkeiten mit regelmäßigem Kontakt zu biologischen Arbeitsstoffen.",
      "MonacoMed bietet die arbeitsmedizinische Vorsorge bei Tätigkeiten mit Infektionsgefährdung für Unternehmen in München und nach Absprache direkt vor Ort an.",
    ],
    heroCta: "G42 Vorsorge anfragen",
    sections: [
      {
        kind: "checklist",
        title: "Für wen kann eine G42 Vorsorge erforderlich sein?",
        lead: "Je nach Gefährdungsbeurteilung kann eine arbeitsmedizinische Vorsorge beispielsweise relevant sein für Beschäftigte in:",
        items: [
          "Krankenhäusern und medizinischen Einrichtungen",
          "Arzt- und Zahnarztpraxen",
          "Pflegeeinrichtungen",
          "Laboratorien",
          "Kindertagesstätten und sozialen Einrichtungen",
          "Rettungsdiensten",
          "weiteren Tätigkeitsbereichen mit relevanter Infektionsgefährdung",
        ],
        note: "Ob eine Pflicht- oder Angebotsvorsorge erforderlich ist, richtet sich nach der konkreten Tätigkeit und Gefährdung.",
      },
      {
        kind: "prose",
        title: "Was beinhaltet die G42 Vorsorge?",
        paragraphs: [
          "Im Mittelpunkt stehen die individuelle arbeitsmedizinische Beratung und die Beurteilung der tätigkeitsbezogenen Infektionsgefährdung.",
          "Dabei werden je nach Tätigkeit unter anderem mögliche Infektionsrisiken, Übertragungswege und geeignete Schutzmaßnahmen besprochen.",
          "Auch der Impfstatus spielt eine wichtige Rolle. Besteht aufgrund der Tätigkeit ein erhöhtes Infektionsrisiko und steht eine wirksame Impfung zur Verfügung, kann im Rahmen der arbeitsmedizinischen Vorsorge eine entsprechende Impfberatung und – soweit angezeigt – ein Impfangebot erfolgen.",
        ],
      },
    ],
    cta: {
      label: "Kontakt",
      title: "G42 Vorsorge und Impfungen direkt im Unternehmen",
      text: "Bei mehreren Beschäftigten können wir Vorsorgetermine und Impfangebote gebündelt direkt an Ihrem Standort organisieren. So lassen sich arbeitsmedizinische Vorsorge, Impfstatuskontrolle und betriebliche Impfangebote effizient miteinander verbinden. Wir melden uns in der Regel innerhalb von 48 Stunden auf Ihre Anfrage zurück.",
      ctaLabel: "Vorsorgetag anfragen",
    },
  },
  asbest: {
    meta: {
      title: "Asbest Vorsorge München",
      description:
        "Arbeitsmedizinische Vorsorge bei Tätigkeiten mit Asbest für Unternehmen in München – inklusive nachgehender Vorsorge nach Expositionsende.",
    },
    h1: "Asbest Vorsorge München",
    tagline: "Arbeitsmedizinische Vorsorge bei Tätigkeiten mit Asbest",
    intro: [
      "Bei Tätigkeiten mit Asbest können Beschäftigte gesundheitsgefährdenden Asbestfasern ausgesetzt sein. Auch heute kann eine Exposition insbesondere bei Abbruch-, Sanierungs- und Instandhaltungsarbeiten an älteren Gebäuden und Anlagen auftreten.",
      "Bei Tätigkeiten mit Asbestexposition ist arbeitsmedizinische Pflichtvorsorge zu veranlassen. MonacoMed bietet arbeitsmedizinische Vorsorge bei Tätigkeiten mit Asbest für Unternehmen in München und nach Absprache direkt vor Ort an.",
    ],
    heroCta: "Asbestvorsorge anfragen",
    sections: [
      {
        kind: "checklist",
        title: "Für wen ist eine Asbestvorsorge relevant?",
        lead: "Eine arbeitsmedizinische Vorsorge kann insbesondere Beschäftigte betreffen, die bei ihrer Tätigkeit mit asbesthaltigen Materialien in Kontakt kommen können, beispielsweise bei:",
        items: [
          "Abbrucharbeiten",
          "Sanierungsarbeiten",
          "Instandhaltungsarbeiten",
          "Arbeiten an älteren Gebäuden und technischen Anlagen",
          "Tätigkeiten mit potenzieller Exposition gegenüber Asbestfasern",
        ],
        note: "Welche Vorsorge erforderlich ist, richtet sich nach der konkreten Tätigkeit und der betrieblichen Gefährdungsbeurteilung.",
      },
      {
        kind: "prose",
        title: "Was beinhaltet die arbeitsmedizinische Vorsorge bei Asbest?",
        paragraphs: [
          "Im Mittelpunkt stehen die individuelle arbeitsmedizinische Beratung und die gesundheitlichen Risiken einer möglichen Asbestexposition.",
          "Je nach Vorsorgeanlass und individueller Situation kann zusätzlich eine ärztliche Untersuchung angeboten werden. Dabei werden unter anderem die Tätigkeit, mögliche frühere Expositionen und individuelle gesundheitliche Aspekte berücksichtigt.",
        ],
      },
      {
        kind: "prose",
        title: "Nachgehende Vorsorge nach Asbestexposition",
        paragraphs: [
          "Asbestbedingte Erkrankungen können erst viele Jahre oder Jahrzehnte nach einer beruflichen Exposition auftreten. Deshalb spielt bei Asbest die nachgehende arbeitsmedizinische Vorsorge eine besondere Rolle.",
          "Nach Beendigung der gefährdenden Tätigkeit kann die Vorsorge über die eigentliche Beschäftigungszeit hinaus fortgeführt werden.",
        ],
      },
    ],
    cta: {
      label: "Kontakt",
      title: "Asbestvorsorge für Unternehmen",
      text: "Wir unterstützen Unternehmen bei der arbeitsmedizinischen Einordnung und Durchführung der erforderlichen Vorsorge. Bei mehreren Beschäftigten können Vorsorgetermine nach Absprache gebündelt organisiert werden. Wir melden uns in der Regel innerhalb von 48 Stunden zurück.",
      ctaLabel: "Asbestvorsorge anfragen",
    },
  },
  g20: {
    meta: {
      title: "G20 Untersuchung München",
      description:
        "G20 Untersuchung (DGUV Empfehlung „Lärm”) in München: arbeitsmedizinische Vorsorge bei Lärmexposition – für Unternehmen und nach Absprache vor Ort.",
    },
    h1: "G20 Untersuchung München",
    tagline: "Arbeitsmedizinische Vorsorge bei Lärm",
    intro: [
      "Die sogenannte G20 Untersuchung betrifft Beschäftigte, die bei ihrer Tätigkeit relevanten Lärmbelastungen ausgesetzt sind.",
      "Die frühere Bezeichnung „G20” wurde durch die heutige DGUV Empfehlung „Lärm” abgelöst. Im betrieblichen Alltag und bei der Suche nach arbeitsmedizinischer Vorsorge wird der Begriff G20 jedoch weiterhin häufig verwendet.",
      "MonacoMed bietet arbeitsmedizinische Vorsorge bei Lärmexposition für Unternehmen in München und nach Absprache direkt bei Ihnen vor Ort an.",
    ],
    heroCta: "G20 Vorsorge anfragen",
    sections: [
      {
        kind: "prose",
        title: "Wann ist eine Vorsorge bei Lärm erforderlich?",
        paragraphs: [
          "Bei beruflicher Lärmexposition kann je nach Höhe der Belastung eine Angebots- oder Pflichtvorsorge erforderlich sein.",
          "Bei Erreichen oder Überschreiten des unteren Auslösewerts von 80 dB(A) ist grundsätzlich Angebotsvorsorge vorgesehen. Bei Erreichen oder Überschreiten des oberen Auslösewerts von 85 dB(A) ist Pflichtvorsorge zu veranlassen.",
        ],
      },
      {
        kind: "checklist",
        title: "Was beinhaltet die G20 Vorsorge?",
        lead: "Im Mittelpunkt stehen die arbeitsmedizinische Beratung zum Schutz des Gehörs und die individuelle Lärmbelastung.",
        intro: "Je nach Vorsorgeanlass können unter anderem folgende Aspekte berücksichtigt werden:",
        items: [
          "berufliche Lärmexposition",
          "bisherige Lärmbelastungen",
          "Gehörschutz",
          "individuelle Risikofaktoren",
          "Beschwerden oder Veränderungen des Hörvermögens",
          "Untersuchung des Hörvermögens beziehungsweise Audiometrie, soweit medizinisch angezeigt",
        ],
        note: "Ziel ist es, arbeitsbedingte Gesundheitsgefahren frühzeitig zu erkennen und Beschäftigte individuell zum Schutz ihres Gehörs zu beraten.",
      },
    ],
    cta: {
      label: "Kontakt",
      title: "G20 Vorsorge direkt im Unternehmen",
      text: "Bei mehreren lärmexponierten Beschäftigten können wir die Vorsorge gebündelt direkt an Ihrem Unternehmensstandort organisieren. Wir stimmen mit Ihnen die Anzahl der Beschäftigten, die erforderlichen Untersuchungen und die organisatorischen Voraussetzungen im Vorfeld ab. So lassen sich auch größere Vorsorgetage effizient in den Betriebsablauf integrieren. Wir melden uns in der Regel innerhalb von 48 Stunden auf Ihre Anfrage zurück.",
      ctaLabel: "Vorsorgetag anfragen",
    },
  },
  g24: {
    meta: {
      title: "G24 Untersuchung München",
      description:
        "G24 Untersuchung München: arbeitsmedizinische Vorsorge bei Hautbelastungen durch Feuchtarbeit, Handschuhe oder hautreizende Arbeitsstoffe – im Betrieb oder in der Praxis.",
    },
    h1: "G24 Untersuchung München",
    tagline: "Arbeitsmedizinische Vorsorge bei Hautbelastungen",
    intro: [
      "Die sogenannte G24 Untersuchung betrifft Beschäftigte, deren Haut durch ihre berufliche Tätigkeit besonderen Belastungen ausgesetzt ist.",
      "Die frühere Bezeichnung „G24 – Hauterkrankungen” wird weiterhin häufig verwendet. Heute erfolgt die arbeitsmedizinische Vorsorge auf Grundlage des konkreten Vorsorgeanlasses und der betrieblichen Gefährdungsbeurteilung.",
      "MonacoMed bietet arbeitsmedizinische Vorsorge bei hautbelastenden Tätigkeiten für Unternehmen in München und nach Absprache direkt bei Ihnen vor Ort an.",
    ],
    heroCta: "G24 Vorsorge anfragen",
    sections: [
      {
        kind: "checklist",
        title: "Für wen kann eine G24 Vorsorge relevant sein?",
        lead: "Arbeitsmedizinische Vorsorge kann insbesondere bei Tätigkeiten mit erhöhter Hautbelastung relevant sein, beispielsweise bei:",
        items: [
          "Feuchtarbeit",
          "häufigem oder längerem Tragen flüssigkeitsdichter Handschuhe",
          "regelmäßigem Kontakt mit hautreizenden oder sensibilisierenden Arbeitsstoffen",
          "Tätigkeiten mit Kühlschmierstoffen",
          "Reinigungs- und Desinfektionstätigkeiten",
          "Tätigkeiten im Gesundheitswesen, Handwerk oder in der Industrie",
        ],
        note: "Ob eine Pflicht- oder Angebotsvorsorge erforderlich ist, richtet sich nach Art und Umfang der Exposition und der Gefährdungsbeurteilung.",
      },
      {
        kind: "checklist",
        title: "Was beinhaltet die G24 Vorsorge?",
        lead: "Im Mittelpunkt stehen die individuelle Beratung zur Hautgesundheit und die frühzeitige Erkennung arbeitsbedingter Hautprobleme.",
        intro: "Je nach Vorsorgeanlass werden unter anderem folgende Themen berücksichtigt:",
        items: [
          "aktuelle oder frühere Hautbeschwerden",
          "berufliche Hautbelastungen",
          "geeignete Schutzhandschuhe",
          "Hautschutz und Hautpflege",
          "betriebliche Hautschutzmaßnahmen",
        ],
        note: "Bei Bedarf kann eine Untersuchung der betroffenen Hautbereiche angeboten werden.",
      },
      {
        kind: "prose",
        title: "Hauterkrankungen frühzeitig vermeiden",
        paragraphs: [
          "Beruflich bedingte Hauterkrankungen können sich schleichend entwickeln. Frühzeitige arbeitsmedizinische Beratung und geeignete Schutzmaßnahmen können dazu beitragen, Beschwerden zu vermeiden oder eine Verschlechterung zu verhindern.",
          "Die arbeitsmedizinische Vorsorge ergänzt dabei die technischen und organisatorischen Schutzmaßnahmen im Unternehmen.",
        ],
      },
    ],
    cta: {
      label: "Kontakt",
      title: "G24 Vorsorge direkt im Unternehmen",
      text: "Bei mehreren Beschäftigten mit hautbelastenden Tätigkeiten können wir Vorsorgetermine gebündelt direkt an Ihrem Standort durchführen. Wir unterstützen Sie bei der Organisation und stimmen den Vorsorgebedarf anhand der Tätigkeiten und der betrieblichen Gefährdungsbeurteilung mit Ihnen ab. Wir melden uns in der Regel innerhalb von 48 Stunden auf Ihre Anfrage zurück.",
      ctaLabel: "Vorsorgetag anfragen",
    },
  },
};
