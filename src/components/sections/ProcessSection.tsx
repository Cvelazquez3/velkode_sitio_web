"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-28 px-4 max-w-6xl mx-auto border-t border-[#25333D]/60 scroll-mt-24 sm:scroll-mt-28">
      {/* ── Section Header ── */}
      <div className="flex flex-col items-start mb-16 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#182028] border border-[#25333D] text-xs font-medium text-[#CBD5E1] mb-3">
          <span>El Camino</span>
          <span className="text-[#40626B]">·</span>
          <span className="text-[#7892A9]">4 Pasos</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-heading">
          Paso a paso, de principio a fin.
        </h2>
        <p className="mt-4 text-[#CBD5E1] text-base sm:text-lg leading-relaxed">
          Un proceso claro y transparente. Sabes con exactitud qué se está construyendo, cómo avanza y cuándo estará listo para tu negocio.
        </p>
      </div>

      {/* ── 4 Steps Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PROCESS.map((phase, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="apple-glass rounded-3xl p-7 flex flex-col justify-between border border-[#25333D] hover:border-[#4B7784]/50 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-6 text-xs text-[#7892A9] font-medium">
                <span className="text-[#CBD5E1]">Paso {phase.step}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#DBECFE] shadow-[0_0_6px_#6B8C9D]" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-heading">
                {phase.title}
              </h3>

              <p className="text-[#CBD5E1] text-xs sm:text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#25333D] text-xs text-[#CBD5E1] font-medium flex items-center justify-between">
              <span>Compromiso Velkode</span>
              <span className="text-[#7892A9]">0{idx + 1}/04</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
