import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BOOKING_LINK = "https://calendly.com/onlyprofits-info/30min";

// Añade los query params relevantes de la URL actual (lead_id, name, phone,
// email, utm_*) al link de agendar, para no perder atribución al saltar al
// calendario. Si no hay ninguno, devuelve el link tal cual.
export function buildBookingUrl(searchParams?: URLSearchParams | null): string {
  if (!searchParams) return BOOKING_LINK;
  const keep = ["lead_id", "name", "phone", "email", "utm_source", "utm_medium", "utm_campaign"];
  const params = new URLSearchParams();
  keep.forEach((key) => {
    const value = searchParams.get(key);
    if (value) params.set(key, value);
  });
  const query = params.toString();
  if (!query) return BOOKING_LINK;
  const separator = BOOKING_LINK.includes("?") ? "&" : "?";
  return `${BOOKING_LINK}${separator}${query}`;
}
