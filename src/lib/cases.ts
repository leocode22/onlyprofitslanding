export interface SuccessCase {
  image: string;
  name: string;
  instagram: string;
  before: string;
  after: string;
  // Ruta local a un vídeo (p.ej. "/testimonials/case-1.mp4"). Si está presente,
  // la tarjeta muestra el vídeo con thumbnail + botón play en vez del avatar.
  video?: string;
}

// ⚠️ FALTA: Only Profits está cerrando sus primeras cuentas. Sustituye cada
// placeholder por el caso real (vídeo, nombre, IG, cifras) en cuanto exista —
// no hace falta esperar a tener los 6. Para añadir el vídeo de un caso: coloca
// el .mp4 en public/testimonials/case-N.mp4 y añade "video: '/testimonials/case-N.mp4'".
export const successCases: SuccessCase[] = [
  // ⚠️ FALTA: nombre, IG y cifras reales de este caso — el vídeo ya está subido.
  {
    image: "/testimonials/case-1-poster.jpg",
    video: "/testimonials/case-1.mp4",
    name: "⚠️ Caso 1 — pendiente",
    instagram: "pendiente",
    before: "—",
    after: "—",
  },
  // ⚠️ FALTA: nombre, IG y cifras reales de este caso — el vídeo ya está subido.
  {
    image: "/testimonials/case-2-poster.jpg",
    video: "/testimonials/case-2.mp4",
    name: "⚠️ Caso 2 — pendiente",
    instagram: "pendiente",
    before: "—",
    after: "—",
  },
  // ⚠️ FALTA: nombre, IG y cifras reales de este caso — el vídeo ya está subido.
  {
    image: "/testimonials/case-3-poster.jpg",
    video: "/testimonials/case-3.mp4",
    name: "⚠️ Caso 3 — pendiente",
    instagram: "pendiente",
    before: "—",
    after: "—",
  },
  { image: "/testimonials/case-4.svg", name: "⚠️ Caso 4 — pendiente", instagram: "pendiente", before: "—", after: "—" },
  { image: "/testimonials/case-5.svg", name: "⚠️ Caso 5 — pendiente", instagram: "pendiente", before: "—", after: "—" },
  { image: "/testimonials/case-6.svg", name: "⚠️ Caso 6 — pendiente", instagram: "pendiente", before: "—", after: "—" },
];
