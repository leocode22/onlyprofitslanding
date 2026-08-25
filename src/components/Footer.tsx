import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Reveal } from "@/components/Reveal";

const INSTAGRAM_URL = "#instagram-pendiente";

export function Footer() {
  return (
    <footer className="border-t border-[#26233d]/40 py-16 sm:py-24 px-5 sm:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h3 className="font-bold text-2xl sm:text-3xl text-white">Sigue a Only Profits.</h3>
        <p className="mt-3 text-[#9b96b8] text-sm sm:text-base">
          Contenido sobre ventas, sistemas comerciales y casos reales, cada semana.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#6a5cff] hover:bg-[#b6aeff] hover:text-black transition-colors px-6 py-3 text-sm font-medium"
          >
            <InstagramIcon className="h-4 w-4" />
            Síguenos en Instagram
          </a>
        </div>

        <p className="mt-12 text-xs uppercase tracking-widest text-[#9b96b8]">
          Only Profits · 2026
        </p>
      </Reveal>
    </footer>
  );
}
