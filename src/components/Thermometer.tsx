"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Check, Loader2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { buildBookingUrl } from "@/lib/utils";
import { saveTestResponse, type SemaphoreValue } from "@/lib/submit";

const WHATSAPP_LINK = "#whatsapp-pendiente";

interface Option {
  value: SemaphoreValue;
  label: string;
}

interface Question {
  id: "q1" | "q2" | "q3" | "q4";
  title: string;
  subtitle: string;
  options: Option[];
}

const questions: Question[] = [
  {
    id: "q1",
    title: "¿Qué describe mejor tu situación?",
    subtitle: "Así sabemos qué camino de Only Profits te toca.",
    options: [
      {
        value: "verde",
        label: "Tengo un negocio o infoproducto que ya vende, y quiero dejar de tocar ventas",
      },
      {
        value: "ambar",
        label: "Vendo para otros (closer/setter) y quiero dirigir cuentas de verdad",
      },
      {
        value: "rojo",
        label: "Todavía no tengo ni negocio facturando ni experiencia comercial",
      },
    ],
  },
  {
    id: "q2",
    title: "¿Cuánto llevas intentando resolver esto por tu cuenta?",
    subtitle: "El tiempo que ya has perdido cuenta.",
    options: [
      { value: "verde", label: "Más de 6 meses dándole vueltas sin resultado" },
      { value: "ambar", label: "Entre 1 y 6 meses probando cosas sueltas" },
      { value: "rojo", label: "Acabo de empezar a planteármelo" },
    ],
  },
  {
    id: "q3",
    title: "Si esto funciona, ¿qué tan grande es la oportunidad?",
    subtitle: "Piensa en cash collected mensual, no en sueños.",
    options: [
      { value: "verde", label: "Podría mover 30.000€/mes o más en cash collected" },
      { value: "ambar", label: "Entre 10.000€ y 30.000€/mes" },
      { value: "rojo", label: "Todavía no lo sé, o es menos de 10.000€/mes" },
    ],
  },
  {
    id: "q4",
    title: "¿Estás listo para comprometerte a decidir en la llamada?",
    subtitle: "No vendemos humo, ni te hacemos perder el tiempo.",
    options: [
      { value: "verde", label: "Sí, si encajamos quiero arrancar ya" },
      { value: "ambar", label: "Sí, pero necesito verlo primero" },
      { value: "rojo", label: "Solo estoy mirando por ahora" },
    ],
  },
];

const SEMAPHORE_STYLES: Record<
  SemaphoreValue,
  { dot: string; ring: string; border: string; text: string }
> = {
  verde: {
    dot: "#28c840",
    ring: "ring-[#28c840]",
    border: "border-[#28c840]",
    text: "text-[#28c840]",
  },
  ambar: {
    dot: "#febc2e",
    ring: "ring-[#febc2e]",
    border: "border-[#febc2e]",
    text: "text-[#febc2e]",
  },
  rojo: {
    dot: "#ff5f57",
    ring: "ring-[#ff5f57]",
    border: "border-[#ff5f57]",
    text: "text-[#ff5f57]",
  },
};

type Status = "idle" | "saving" | "done" | "error";

export function Thermometer() {
  const searchParams = useSearchParams();
  const [answers, setAnswers] = useState<Partial<Record<Question["id"], SemaphoreValue>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  const bookingUrl = useMemo(() => buildBookingUrl(searchParams), [searchParams]);

  async function handleSelect(questionId: Question["id"], value: SemaphoreValue) {
    if (status === "saving" || status === "done") return;

    const nextAnswers = { ...answers, [questionId]: value };
    setAnswers(nextAnswers);

    if (Object.keys(nextAnswers).length === questions.length) {
      setStatus("saving");
      try {
        await saveTestResponse({
          lead_id: searchParams.get("lead_id"),
          name: searchParams.get("name"),
          phone: searchParams.get("phone"),
          email: searchParams.get("email"),
          q1: nextAnswers.q1 as SemaphoreValue,
          q2: nextAnswers.q2 as SemaphoreValue,
          q3: nextAnswers.q3 as SemaphoreValue,
          q4: nextAnswers.q4 as SemaphoreValue,
        });
        setStatus("done");
      } catch {
        setStatus("error");
      }
    }
  }

  const isLocked = status === "saving" || status === "done";

  return (
    <section id="diagnostico" className="py-16 sm:py-24 px-5 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-[#b6aeff] font-medium text-xs sm:text-sm tracking-[0.25em] uppercase">
            AUTODIAGNÓSTICO
          </p>
          <h2 className="mt-4 font-bold text-3xl sm:text-5xl leading-tight tracking-tight text-white">
            60 segundos.
            <br />
            <span className="text-[#b6aeff]">Así sabemos si encajamos.</span>
          </h2>
          <p className="mt-6 text-[#9b96b8] text-base sm:text-lg">
            Responde con honestidad. No hay respuesta correcta, solo la que describe tu momento
            real.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <div className="flex items-center justify-between text-sm text-[#9b96b8] mb-2">
            <span>
              {answeredCount} / {questions.length} respondidas
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 rounded-full bg-[#0e0d17] border border-[#34305c] overflow-hidden">
            <motion.div
              className="h-full bg-[#6a5cff]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </Reveal>

        <div className="mt-8 space-y-6">
          {questions.map((question, qIndex) => {
            const selected = answers[question.id];
            return (
              <Reveal key={question.id} delay={0.08 + qIndex * 0.05}>
                <div className="rounded-2xl bg-[#0e0d17] border-2 border-[#34305c] p-6 sm:p-7">
                  <div className="flex gap-4 items-start">
                    <div className="w-9 h-9 shrink-0 rounded-full border-2 border-[#6a5cff] flex items-center justify-center font-bold text-[#b6aeff] text-sm">
                      {qIndex + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base sm:text-lg">
                        {question.title}
                      </h3>
                      <p className="mt-1 text-[#9b96b8] text-sm">{question.subtitle}</p>
                    </div>
                  </div>

                  <div role="radiogroup" className="mt-5 grid grid-cols-1 gap-3">
                    {question.options.map((option) => {
                      const isSelected = selected === option.value;
                      const styles = SEMAPHORE_STYLES[option.value];
                      return (
                        <button
                          key={option.value}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          disabled={isLocked}
                          onClick={() => handleSelect(question.id, option.value)}
                          className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-left text-sm sm:text-base transition-colors disabled:cursor-not-allowed ${
                            isSelected
                              ? `${styles.border} bg-white/5 ring-2 ${styles.ring}`
                              : "border-[#26233d] hover:border-[#34305c]"
                          }`}
                        >
                          <span
                            className="h-3 w-3 shrink-0 rounded-full"
                            style={{
                              backgroundColor: styles.dot,
                              boxShadow: isSelected ? `0 0 12px ${styles.dot}` : undefined,
                            }}
                          />
                          <span className="flex-1 text-white/90">{option.label}</span>
                          {isSelected && <Check className={`h-5 w-5 shrink-0 ${styles.text}`} />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {status === "saving" && (
            <motion.div
              key="saving"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-10 flex flex-col items-center gap-3 text-center"
            >
              <Loader2 className="h-8 w-8 text-[#b6aeff] animate-spin" />
              <p className="text-[#9b96b8]">Guardando tus respuestas...</p>
            </motion.div>
          )}

          {(status === "done" || status === "error") && (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-10 rounded-2xl bg-[#0e0d17] border-2 border-[#6a5cff] p-6 sm:p-8 text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-[#6a5cff]/15 border-2 border-[#6a5cff] flex items-center justify-center">
                <Check className="h-7 w-7 text-[#b6aeff]" />
              </div>

              {status === "done" ? (
                <>
                  <h3 className="mt-5 font-bold text-2xl sm:text-3xl text-white leading-snug">
                    Perfecto. Tu llamada va directa a esto.
                  </h3>
                  <p className="mt-3 text-[#9b96b8] text-sm sm:text-base max-w-xl mx-auto">
                    20 minutos, sin pitch genérico: repasamos tu situación y te decimos si Only
                    Profits encaja contigo, y por qué camino.
                  </p>
                </>
              ) : (
                <p className="mt-5 text-[#9b96b8] text-sm sm:text-base max-w-xl mx-auto">
                  Tus respuestas quedaron registradas. Agenda tu llamada y lo repasamos juntos.
                </p>
              )}

              <div className="mt-7 flex flex-col items-center gap-4">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#6a5cff] hover:bg-[#b6aeff] hover:text-black transition-colors px-6 sm:px-8 py-3.5 font-medium shadow-[0_10px_30px_-10px_rgba(106,92,255,0.6)]"
                >
                  <Calendar className="h-5 w-5" />
                  Agenda tu llamada
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#9b96b8] hover:text-[#b6aeff] transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  ¿Dudas antes? Escríbenos por WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
