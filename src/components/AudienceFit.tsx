import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface AudienceCard {
  tag: string;
  title: string;
  bullets: string[];
  closing: string;
}

const cards: AudienceCard[] = [
  {
    tag: "PERFIL 1",
    title: "Vendes un infoproducto o servicio",
    bullets: [
      "Ya facturas, pero las ventas dependen de ti o de un equipo sin sistema.",
      "No quieres montar, formar y dirigir un equipo comercial desde cero.",
      "Prefieres pagar por resultado (cash collected) que por promesas de agencia.",
    ],
    closing: "Este es el camino Done With You / Done For You.",
  },
  {
    tag: "PERFIL 2",
    title: "Vendes bien, pero estás perdido",
    bullets: [
      "Sabes cerrar, pero nadie te ha dado un sistema, SOPs ni dirección real.",
      "Quieres dirigir cuentas y cobrar % de cash collected, no un sueldo fijo con techo.",
      "Buscas crecer de closer a Sales Manager, con equipo y cuentas propias.",
    ],
    closing: "Este es el camino de formación gratis + pool de Only Profits.",
  },
];

export function AudienceFit() {
  return (
    <section id="para-quien" className="py-16 sm:py-24 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-[#b6aeff] font-medium text-xs sm:text-sm tracking-[0.25em] uppercase">
            ¿ESTO ES PARA TI?
          </p>
          <h2 className="mt-4 font-bold text-3xl sm:text-5xl leading-tight tracking-tight text-white">
            Only Profits conecta a dos perfiles.
            <br />
            <span className="text-[#b6aeff]">Mira cuál eres tú.</span>
          </h2>
          <p className="mt-6 text-[#9b96b8] text-base sm:text-lg">
            No hace falta que elijas antes de agendar. La llamada es donde lo confirmamos.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.tag} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-[#0e0d17] border-2 border-[#34305c] hover:border-[#b6aeff] hover:-translate-y-0.5 transition-all duration-300 p-6 sm:p-8">
                <span className="text-[#b6aeff] font-medium text-xs tracking-[0.2em] uppercase">
                  {card.tag}
                </span>
                <h3 className="mt-3 font-bold text-xl sm:text-2xl text-white">{card.title}</h3>
                <ul className="mt-6 space-y-4">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 items-start">
                      <Check className="h-5 w-5 shrink-0 text-[#6a5cff] mt-0.5" />
                      <span className="text-[#9b96b8] text-sm sm:text-base">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[#9b96b8] text-sm italic">{card.closing}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
