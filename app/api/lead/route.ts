import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
const SCRIPT_SECRET = process.env.GOOGLE_APPS_SCRIPT_SECRET;

const REQUIRED_FIELDS: Record<string, string[]> = {
  betreuungsbedarf: ["firma", "name", "email"],
  rueckruf: ["name", "email"],
};

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
