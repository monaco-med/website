/**
 * Single source of truth for every internal URL in the site.
 *
 * Import this instead of hardcoding path strings in `<Link>`/`redirect()`
 * calls, so that renaming a route only requires a change here. Keys map
 * 1:1 to route groups under `app/`; hash-suffixed values (e.g. `leitung`)
 * point at an anchor on another page rather than a dedicated route.
 */
export const routes = {
  home: "/",
  leistungen: "/leistungen",
  arbeitsmedizin: "/leistungen/arbeitsmedizin",
  arbeitssicherheit: "/leistungen/arbeitssicherheit",
  bahnmedizin: "/leistungen/bahnmedizin",
  impfungen: "/leistungen/impfungen",
  gUntersuchungen: "/leistungen/vorsorge-g-untersuchungen",
  g25: "/leistungen/vorsorge-g-untersuchungen/g25",
  g26: "/leistungen/vorsorge-g-untersuchungen/g26",
  g37: "/leistungen/vorsorge-g-untersuchungen/g37",
  g41: "/leistungen/vorsorge-g-untersuchungen/g41",
  g42: "/leistungen/vorsorge-g-untersuchungen/g42",
  asbest: "/leistungen/vorsorge-g-untersuchungen/asbest",
  g20: "/leistungen/vorsorge-g-untersuchungen/g20",
  g24: "/leistungen/vorsorge-g-untersuchungen/g24",
  digitaleProzesse: "/leistungen#digitale-prozesse",
  gesundheitsmanagement: "/leistungen#gesundheitsmanagement",
  betriebsarztMuenchen: "/betriebsarzt-muenchen",
  fuerUnternehmen: "/fuer-unternehmen",
  betreuungsbedarf: "/betreuungsbedarf",
  rueckruf: "/rueckruf",
  faq: "/faq",
  kontakt: "/kontakt",
  impressum: "/impressum",
  datenschutz: "/impressum#datenschutz",
  leitung: "/#leitung",
  homeFaq: "/#faq",
} as const;
