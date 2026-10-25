"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";
import ThreeScene from "@/components/3d/ThreeScene";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] pt-36 sm:pt-42 pb-16 flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* ── 3D Quantum Gyroscope Core ── */}
      <ThreeScene />

      {/* Subtle cinematic ambient light pool (Nordic Cyan Mist from cover photo) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(85,123,142,0.18)_0%,rgba(43,76,96,0.08)_45%,transparent_70%)] pointer-events-none blur-2xl z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Category & Tagline Complement */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182028]/80 border border-[#25333D] text-xs font-medium text-[#CBD5E1] mb-6 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#557B8E] shadow-[0_0_8px_#6B8C9D]" />
          <span>Desarrollo Web & Software a la Medida</span>
          <span className="text-[#40626B]">·</span>
          <span className="text-[#7892A9]">{BRAND.tagline}</span>
        </motion.div>

        {/* Headline — "See it. Build it." */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-bold tracking-tight leading-[0.96] mb-6 select-none font-heading"
        >
          <span className="text-white block">See it.</span>
          <span className="text-titanium block">Build it.</span>
        </motion.h1>

        {/* Subtitle — Calibrated, human, elegant */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm md:text-[15px] text-[#CBD5E1] max-w-xl mx-auto font-normal leading-relaxed mb-9"
        >
          {BRAND.description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="apple-btn-primary px-7 py-3 text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Cotizar mi proyecto</span>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="#pillars"
            className="apple-btn-secondary px-7 py-3 text-xs sm:text-sm font-medium tracking-wide inline-flex items-center justify-center w-full sm:w-auto"
          >
            Cómo trabajamos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
