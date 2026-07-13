export type LeadType = "betreuungsbedarf" | "rueckruf";

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
