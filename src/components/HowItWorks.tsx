"use client";

import { useSearchParams } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { buildBookingUrl } from "@/lib/utils";

const steps = [
  {
    number: "1",
    title: "Agendas gratis",
    description: "Eliges el hueco que te venga bien. Sin tarjeta, sin letra pequeña.",
  },
  {
    number: "2",
    title: "Diagnosticamos tu situación",
    description: "Revisamos dónde estás hoy: facturación, equipo comercial, capacidad de venta.",
  },
  {
    number: "3",
    title: "Te decimos el camino exacto",
    description:
      "Free, Done With You o Done For You — o te decimos honestamente que todavía no toca.",
  },
];

export function HowItWorks() {
  const searchParams = useSearchParams();
  const bookingUrl = buildBookingUrl(searchParams);

  return (
    <section id="como-funciona" className="py-16 sm:py-24 px-5 sm:px-8 bg-[#0c0b16]/60">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-[#b6aeff] font-medium text-xs sm:text-sm tracking-[0.25em] uppercase">
            SIN POWERPOINT NI PITCH GENÉRICO
          </p>
          <h2 className="mt-4 font-bold text-3xl sm:text-5xl leading-tight tracking-tight text-white">
            Así es la llamada,
            <br />
            <span className="text-[#b6aeff]">de principio a fin.</span>
          </h2>
          <p className="mt-6 text-[#9b96b8] text-base sm:text-lg">
            20 minutos. Si no encajamos, te lo decimos ahí mismo — no perdemos el tiempo de nadie.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-[#0e0d17] border-2 border-[#34305c] p-6 sm:p-8">
                <div className="w-12 h-12 rounded-full border-2 border-[#6a5cff] flex items-center justify-center font-bold text-[#b6aeff]">
                  {step.number}
                </div>
                <h3 className="mt-5 font-bold text-lg sm:text-xl text-white">{step.title}</h3>
                <p className="mt-2 text-[#9b96b8] text-sm sm:text-base">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24} className="mt-12 flex justify-center">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#6a5cff] hover:bg-[#b6aeff] hover:text-black transition-colors px-6 py-3 text-sm font-medium shadow-[0_10px_30px_-10px_rgba(106,92,255,0.6)]"
          >
            Agenda tu llamada
          </a>
        </Reveal>
      </div>
    </section>
  );
}
