import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { successCases } from "@/lib/cases";

export function SuccessCases() {
  const track = [...successCases, ...successCases];

  return (
    <section id="casos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-[#b6aeff] font-medium text-xs sm:text-sm tracking-[0.25em] uppercase">
            PRUEBA REAL
          </p>
          <h2 className="mt-4 font-bold text-3xl sm:text-5xl leading-tight tracking-tight text-white">
            Resultados reales,
            <br />
            <span className="text-[#b6aeff]">en construcción.</span>
          </h2>
          <p className="mt-6 text-[#9b96b8] text-base sm:text-lg">
            Only Profits está cerrando sus primeras cuentas ahora mismo. Aquí van los casos en
            cuanto haya el primero — nada de cifras infladas.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <div
          className="overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="flex w-max gap-5 sm:gap-6 px-5 sm:px-8 animate-marquee hover:[animation-play-state:paused]">
            {track.map((successCase, i) => (
              <CaseCard key={`${successCase.image}-${i}`} successCase={successCase} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
