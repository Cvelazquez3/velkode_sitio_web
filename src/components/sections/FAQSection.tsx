"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/lib/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 px-4 max-w-5xl mx-auto border-t border-[#25333D]/60 scroll-mt-24 sm:scroll-mt-28">
      {/* ── Section Header ── */}
      <div className="flex flex-col items-start mb-16 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#182028] border border-[#25333D] text-xs font-medium text-[#CBD5E1] mb-3">
          <span>Claridad</span>
          <span className="text-[#40626B]">·</span>
          <span className="text-[#7892A9]">Dudas Comunes</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-heading">
          Preguntas frecuentes.
        </h2>
        <p className="mt-4 text-[#CBD5E1] text-base leading-relaxed">
          Respuestas directas a las dudas principales antes de comenzar a trabajar juntos.
        </p>
      </div>

      {/* ── Accordion List ── */}
      <div className="flex flex-col gap-3.5">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="apple-glass rounded-2xl overflow-hidden transition-colors border border-[#25333D] hover:border-[#4B7784]/50"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
              >
                <span className="text-base sm:text-lg font-bold text-white tracking-tight font-heading">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-[#DBECFE] text-lg font-light">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#CBD5E1] leading-relaxed border-t border-[#25333D]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
