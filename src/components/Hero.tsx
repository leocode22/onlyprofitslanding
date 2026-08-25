"use client";

import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { buildBookingUrl } from "@/lib/utils";

const YOUTUBE_ID = "dQw4w9WgXcQ";

export function Hero() {
  const searchParams = useSearchParams();
  const bookingUrl = buildBookingUrl(searchParams);

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal delay={0}>
          <p className="text-[#b6aeff] font-medium text-xs sm:text-sm tracking-[0.25em] uppercase">
            PLATAFORMA DE VENTAS, NO AGENCIA
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-4 font-bold text-4xl sm:text-6xl leading-[1.05] tracking-tight">
            Antes de escalar tus ventas,
            <br />
            <span className="text-[#b6aeff]">agenda tu llamada.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-[#9b96b8] text-base sm:text-lg max-w-2xl mx-auto">
            Conectamos infoproductores que necesitan vender sin tocar ventas, y comerciales que
            quieren dirigir cuentas de verdad. En 20 minutos vemos si encajas y qué camino te
            toca.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 rounded-2xl overflow-hidden border-2 border-[#34305c] bg-[#0e0d17] shadow-[0_10px_40px_-10px_rgba(106,92,255,0.4)]">
            {/* TODO: sustituir por el vídeo real de Only Profits */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
                title="Only Profits"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#6a5cff] hover:bg-[#b6aeff] hover:text-black transition-colors px-6 sm:px-8 py-3.5 font-medium shadow-[0_10px_30px_-10px_rgba(106,92,255,0.6)]"
            >
              Agenda tu llamada
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#diagnostico"
              className="text-sm text-[#9b96b8] hover:text-[#b6aeff] transition-colors underline underline-offset-4"
            >
              o responde 4 preguntas rápidas primero
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
