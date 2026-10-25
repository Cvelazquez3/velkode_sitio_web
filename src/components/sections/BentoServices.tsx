"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

export default function BentoServices() {
  return (
    <section id="services" className="relative py-24 px-4 max-w-6xl mx-auto border-t border-[#25333D]/60 scroll-mt-24 sm:scroll-mt-28">
      {/* ── Section Header ── */}
      <div className="flex flex-col items-start mb-14 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#182028] border border-[#25333D] text-xs font-medium text-[#CBD5E1] mb-3">
          <span>Servicios</span>
          <span className="text-[#40626B]">·</span>
          <span className="text-[#7892A9]">Soluciones Claras</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight font-heading">
          Lo que construimos para tu empresa.
        </h2>
        <p className="mt-3 text-[#CBD5E1] text-xs sm:text-sm leading-relaxed">
          Tres áreas de enfoque bien definidas. Sin complicaciones técnicas innecesarias: soluciones prácticas que resuelven los retos de tu negocio.
        </p>
      </div>

      {/* ── 3 Core Services Bento Layout ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative apple-glass rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#4B7784]/50 border border-[#25333D] ${
              index === 2 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-medium text-[#CBD5E1] bg-[#182028] px-3 py-1 rounded-full border border-[#25333D]">
                  {service.badge}
                </span>
                <span className="text-xs text-[#7892A9] font-medium">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight font-heading">
                {service.title}
              </h3>

              <p className="text-[#CBD5E1] text-xs sm:text-[13px] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* ── High-Fidelity Interactive Visual Mockups for TOP-Tier Look ── */}
              {service.id === "web" && (
                <div className="mb-6 rounded-2xl bg-[#081319]/90 border border-[#25333D] p-3.5 flex flex-col gap-3 overflow-hidden shadow-inner">
                  {/* Browser Chrome Header with Genuine Mac Traffic Lights */}
                  <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#25333D]">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="flex-1 py-0.5 px-2.5 rounded-md bg-[#182028] border border-[#25333D] text-[10px] text-[#CBD5E1] flex items-center justify-between min-w-0">
                      <div className="flex items-center gap-1.5 truncate">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#7892A9] shrink-0">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        <span className="font-mono text-[9px] text-[#CBD5E1] truncate">velkode.com</span>
                      </div>
                      <span className="text-[8px] text-[#7892A9] uppercase font-sans tracking-wider shrink-0 pl-1">Web</span>
                    </div>
                  </div>
                  {/* Realistic Corporate Website Wireframe */}
                  <div className="space-y-2.5 pt-0.5">
                    {/* Hero Section Wireframe */}
                    <div className="p-2.5 rounded-xl bg-[#182028] border border-[#25333D] space-y-2">
                      <div className="h-3.5 w-4/5 rounded bg-gradient-to-r from-white/30 via-white/15 to-transparent" />
                      <div className="h-2 w-3/5 rounded bg-[#25333D]" />
                      <div className="pt-1 flex items-center gap-2">
                        <div className="h-4 px-2 rounded-full bg-[#DBECFE] text-[8px] font-semibold text-black flex items-center justify-center">
                          Contacto
                        </div>
                        <div className="h-4 px-2 rounded-full bg-[#25333D] text-[8px] text-[#CBD5E1] flex items-center justify-center">
                          Servicios
                        </div>
                      </div>
                    </div>
                    {/* 2-column feature blocks */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 rounded-lg bg-[#182028] border border-[#25333D] space-y-1">
                        <div className="w-2.5 h-2.5 rounded bg-[#4B7784]/60" />
                        <div className="h-2 w-3/4 rounded bg-[#25333D]" />
                      </div>
                      <div className="p-2 rounded-lg bg-[#182028] border border-[#25333D] space-y-1">
                        <div className="w-2.5 h-2.5 rounded bg-[#6B8C9D]/60" />
                        <div className="h-2 w-3/4 rounded bg-[#25333D]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {service.id === "software" && (
                <div className="mb-6 rounded-2xl bg-[#081319]/90 border border-[#25333D] p-3.5 flex flex-col gap-3 overflow-hidden shadow-inner">
                  {/* Multiplatform Header with Genuine Mac Traffic Lights */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-[#25333D]">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="text-[10px] text-[#7892A9] font-medium">
                      Panel Administrativo
                    </span>
                  </div>
                  {/* Clean Visual Rows with realistic business metrics */}
                  <div className="space-y-2 pt-0.5">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-[#182028] border border-[#25333D] p-2 flex flex-col gap-0.5">
                        <span className="text-[9px] text-[#7892A9]">Módulo</span>
                        <span className="text-xs font-semibold text-white">Inventarios</span>
                        <span className="text-[9px] text-[#DBECFE]">Control local</span>
                      </div>
                      <div className="rounded-xl bg-[#182028] border border-[#25333D] p-2 flex flex-col gap-0.5">
                        <span className="text-[9px] text-[#7892A9]">Acceso</span>
                        <span className="text-xs font-semibold text-white">Plataforma</span>
                        <span className="text-[9px] text-[#DBECFE]">En la nube</span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-[#182028] border border-[#25333D] px-2.5 py-1.5 flex items-center justify-between text-[10px]">
                      <span className="text-[#CBD5E1]">Gestión de Operaciones</span>
                      <span className="text-[#DBECFE] font-medium bg-[#25333D] px-1.5 py-0.5 rounded text-[9px]">Activo</span>
                    </div>
                  </div>
                </div>
              )}

              {service.id === "architecture" && (
                <div className="mb-6 rounded-2xl bg-[#081319]/90 border border-[#25333D] p-3.5 flex flex-col gap-3 overflow-hidden shadow-inner">
                  {/* Header with Genuine Mac Traffic Lights */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-[#25333D]">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="text-[10px] text-[#7892A9] font-medium">
                      Plan por Etapas
                    </span>
                  </div>
                  {/* Clean 3-Stage Process with realistic consulting steps */}
                  <div className="grid grid-cols-3 gap-2 pt-0.5">
                    <div className="rounded-xl bg-[#182028] border border-[#25333D] p-2 flex flex-col items-center justify-center text-center">
                      <span className="text-[9px] text-[#7892A9] font-medium uppercase tracking-wider">Etapa 1</span>
                      <span className="text-xs font-semibold text-white mt-0.5">Diagnóstico</span>
                      <span className="text-[9px] text-[#7892A9] mt-0.5">Revisión</span>
                    </div>
                    <div className="rounded-xl bg-[#182028] border border-[#25333D] p-2 flex flex-col items-center justify-center text-center">
                      <span className="text-[9px] text-[#7892A9] font-medium uppercase tracking-wider">Etapa 2</span>
                      <span className="text-xs font-semibold text-[#DBECFE] mt-0.5">Propuesta</span>
                      <span className="text-[9px] text-[#7892A9] mt-0.5">Alcance</span>
                    </div>
                    <div className="rounded-xl bg-[#182028] border border-[#25333D] p-2 flex flex-col items-center justify-center text-center">
                      <span className="text-[9px] text-[#7892A9] font-medium uppercase tracking-wider">Etapa 3</span>
                      <span className="text-xs font-semibold text-white mt-0.5">Entrega</span>
                      <span className="text-[9px] text-[#7892A9] mt-0.5">Soporte</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-5 border-t border-[#25333D] flex flex-col gap-2">
              {service.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DBECFE] mt-1.5 flex-shrink-0" />
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
