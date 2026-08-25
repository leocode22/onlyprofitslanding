"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { buildBookingUrl, cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bookingUrl = buildBookingUrl(searchParams);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-[#060608]/90 backdrop-blur-md border-b border-[#26233d]/40"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <span className="font-bold tracking-[0.3em] text-sm sm:text-base">ONLY PROFITS</span>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#6a5cff] hover:bg-[#b6aeff] hover:text-black transition-colors px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium whitespace-nowrap"
        >
          <span className="sm:hidden">Agenda</span>
          <span className="hidden sm:inline">Agenda tu llamada</span>
        </a>
      </div>
    </header>
  );
}
