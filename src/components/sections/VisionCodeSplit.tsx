"use client";

import { motion } from "framer-motion";

export default function VisionCodeSplit() {
  return (
    <section id="vision-code" className="relative py-24 px-4 max-w-6xl mx-auto border-t border-[#25333D]/60 scroll-mt-24 sm:scroll-mt-28">
      {/* ── Section Header ── */}
      <div className="flex flex-col items-center text-center mb-14 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#182028] border border-[#25333D] text-xs font-medium text-[#CBD5E1] mb-3">
          <span>El Enfoque</span>
          <span className="text-[#40626B]">·</span>
          <span className="text-[#7892A9]">Diseño + Solidez</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3 font-heading font-display">
          Diseño que proyecta confianza. Estructura que no falla.
        </h2>
        <p className="text-[#CBD5E1] text-xs sm:text-sm leading-relaxed max-w-xl">
          En Velkode unimos las dos partes fundamentales para que tu solución funcione: una imagen impecable que atrae clientes y una estructura sólida que opera con rapidez y seguridad todos los días.
        </p>
      </div>

      {/* ── Two Practical Halves ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
        {/* Half 1: Visión y Experiencia */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="apple-glass rounded-3xl p-7 sm:p-9 flex flex-col justify-between border border-[#25333D] hover:border-[#4B7784]/50 transition-colors"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-medium text-[#CBD5E1] bg-[#182028] px-3 py-1 rounded-full border border-[#25333D]">
                Lo que tus clientes ven
              </span>
              <span className="text-xs font-medium text-[#7892A9]">Imagen y Experiencia</span>
            </div>

            <h3
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-xl sm:text-2xl font-semibold text-white mb-2.5 tracking-tight font-display"
            >
              Diseño profesional que transmite seriedad.
            </h3>

            <p className="text-[#CBD5E1] text-xs sm:text-[13px] leading-relaxed mb-5">
              Estética cuidada, orden visual y navegación fluida que posicionan a tu empresa con un estándar superior frente a la competencia.
            </p>

            {/* Visual Design Experience Preview */}
            <div className="mb-6 rounded-2xl bg-[#081319]/90 border border-[#25333D] p-4 flex flex-col gap-2.5 shadow-inner">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#CBD5E1]">Presentación Visual</span>
                <span className="text-[10px] text-[#DBECFE] font-medium bg-[#182028] px-2 py-0.5 rounded-full border border-[#25333D]">A la Medida</span>
              </div>
              <div className="p-3 rounded-xl bg-[#182028]/80 border border-[#25333D] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2B4C60] to-[#182028] flex items-center justify-center text-white text-xs font-bold font-display border border-[#4B7784]/30">
                    VK
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Identidad Propia</div>
                    <div className="text-[10px] text-[#7892A9]">Adaptable a celular, tablet y computadora</div>
                  </div>
                </div>
                <div className="text-[10px] text-[#DBECFE] font-medium bg-[#2B4C60]/40 border border-[#4B7784]/30 px-2 py-0.5 rounded-full">
                  Responsive
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-[#25333D] flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5 text-xs text-[#CBD5E1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DBECFE] flex-shrink-0" />
              <span>Diseño coherente con la identidad y valores de tu empresa</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#CBD5E1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DBECFE] flex-shrink-0" />
              <span>Navegación cómoda y fácil para cualquier usuario</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#CBD5E1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DBECFE] flex-shrink-0" />
              <span>Estructura orientada a transmitir confianza y captar clientes</span>
            </div>
          </div>
        </motion.div>

        {/* Half 2: Código e Infraestructura */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="apple-glass rounded-3xl p-7 sm:p-9 flex flex-col justify-between border border-[#25333D] hover:border-[#4B7784]/50 transition-colors"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-medium text-[#CBD5E1] bg-[#182028] px-3 py-1 rounded-full border border-[#25333D]">
                Lo que hace que funcione
              </span>
              <span className="text-xs font-medium text-[#7892A9]">Estabilidad Operativa</span>
            </div>

            <h3
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-xl sm:text-2xl font-semibold text-white mb-2.5 tracking-tight font-display"
            >
              Herramientas confiables para tu operación.
            </h3>

            <p className="text-[#CBD5E1] text-xs sm:text-[13px] leading-relaxed mb-5">
              Estructura ordenada, seguridad en tu información y pruebas previas para que tu equipo trabaje con tranquilidad en el día a día.
            </p>

            {/* Visual Engineering Architecture Preview */}
            <div className="mb-6 rounded-2xl bg-[#081319]/90 border border-[#25333D] p-4 flex flex-col gap-2.5 shadow-inner">
              <div className="flex items-center justify-between pb-2 border-b border-[#25333D]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6B8C9D]" />
                  <span className="text-[11px] font-medium text-[#CBD5E1]">Base Funcional</span>
                </div>
                <span className="text-[10px] text-[#DBECFE] font-medium bg-[#182028] px-2 py-0.5 rounded-full border border-[#25333D]">Verificada</span>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2 rounded-lg bg-[#182028]/80 border border-[#25333D]">
                  <div className="text-[10px] text-[#7892A9]">Entornos</div>
                  <div className="text-xs font-semibold text-white mt-0.5">Web y Desktop</div>
                </div>
                <div className="p-2 rounded-lg bg-[#182028]/80 border border-[#25333D]">
                  <div className="text-[10px] text-[#7892A9]">Seguridad</div>
                  <div className="text-xs font-semibold text-white mt-0.5">Respaldos</div>
                </div>
                <div className="p-2 rounded-lg bg-[#182028]/80 border border-[#25333D]">
                  <div className="text-[10px] text-[#7892A9]">Evolución</div>
                  <div className="text-xs font-semibold text-[#DBECFE] mt-0.5">Modular</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-[#25333D] flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5 text-xs text-[#CBD5E1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7892A9] flex-shrink-0" />
              <span>Sistemas preparados para trabajar en la nube o en computadoras locales</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#CBD5E1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7892A9] flex-shrink-0" />
              <span>Respuesta ágil que ahorra tiempo a tu equipo</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#CBD5E1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7892A9] flex-shrink-0" />
              <span>Capacidad de crecer e integrar nuevas funciones cuando lo necesites</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
