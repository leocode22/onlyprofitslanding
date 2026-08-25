"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, X } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import type { SuccessCase } from "@/lib/cases";

export function CaseCard({ successCase }: { successCase: SuccessCase }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <article className="w-64 sm:w-72 md:w-80 shrink-0">
      <button
        type="button"
        onClick={() => successCase.video && setOpen(true)}
        disabled={!successCase.video}
        aria-label={successCase.video ? `Reproducir vídeo de ${successCase.name}` : successCase.name}
        className="group relative block w-full aspect-9/16 rounded-2xl overflow-hidden border-2 border-[#34305c] bg-[#0e0d17] hover:border-[#b6aeff] transition-colors disabled:cursor-default"
      >
        <Image
          src={successCase.image}
          alt={successCase.name}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 320px, (min-width: 640px) 288px, 256px"
        />
        {successCase.video && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90">
              <Play className="h-6 w-6 fill-black text-black translate-x-0.5" />
            </span>
          </span>
        )}
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pt-10 pb-4 text-left">
          <span className="block font-bold text-white text-sm sm:text-base leading-snug">
            {successCase.name}
          </span>
          <span className="mt-1 flex items-center gap-1.5 text-white/70 text-xs">
            <InstagramIcon className="h-3.5 w-3.5" />
            @{successCase.instagram}
          </span>
        </span>
      </button>

      <div className="mt-4 flex items-center gap-3 text-sm">
        <div>
          <p className="text-[#9b96b8] text-xs">Antes</p>
          <p className="font-bold text-white">{successCase.before}</p>
        </div>
        <ArrowRight className="h-4 w-4 text-[#6a5cff] shrink-0" />
        <div>
          <p className="text-[#9b96b8] text-xs">Con Only Profits</p>
          <p className="font-bold text-white">{successCase.after}</p>
        </div>
      </div>

      {open && successCase.video && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 backdrop-blur-sm p-5"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar vídeo"
            className="absolute top-5 right-5 rounded-full bg-[#0e0d17] border-2 border-[#34305c] p-2 text-white hover:border-[#b6aeff] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <video
            src={successCase.video}
            poster={successCase.image}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] max-w-full rounded-2xl border-2 border-[#34305c]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </article>
  );
}
