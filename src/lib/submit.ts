export type SemaphoreValue = "verde" | "ambar" | "rojo";

export interface TestResponsePayload {
  lead_id: string | null;
  name: string | null;
  phone: string | null;
  email: string | null;
  q1: SemaphoreValue;
  q2: SemaphoreValue;
  q3: SemaphoreValue;
  q4: SemaphoreValue;
}

// Submit FAKE: no persiste nada. Simula latencia y siempre resuelve OK.
// (Aquí se enchufaría un backend real en el futuro: fetch a una API, etc.)
export async function saveTestResponse(payload: TestResponsePayload) {
  if (process.env.NODE_ENV !== "production") {
    console.log("[diagnostico] respuesta (no guardada):", payload);
  }
  await new Promise((r) => setTimeout(r, 900)); // simula guardado
  return { ok: true as const };
}
