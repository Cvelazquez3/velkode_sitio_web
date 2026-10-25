"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CinematicHeroShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaWrapperRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const vectorHudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !mediaWrapperRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1.1,
          anticipatePin: 1,
        },
      });

      // 1. Heading fades and lifts out gracefully
      tl.to(
        headingRef.current,
        {
          yPercent: -40,
          opacity: 0,
          scale: 0.95,
          ease: "power2.out",
        },
        0
      );

      // 2. Smooth expansion to full viewport (Apple Keynote style)
      tl.to(
        mediaWrapperRef.current,
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          ease: "power2.inOut",
        },
        0
      );

      // 3. Parallax internal scale
      tl.to(
        mediaRef.current,
        {
          scale: 1.06,
          ease: "none",
        },
        0
      );

      // 4. Reveal Vector Principle Overlay
      tl.fromTo(
        vectorHudRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        0.5
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="vector"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center border-t border-white/[0.08]"
    >
      {/* ── Heading before scroll ── */}
      <div
        ref={headingRef}
        className="absolute top-16 sm:top-24 z-20 text-center px-4 max-w-2xl pointer-events-none select-none"
      >
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#86868B] mb-3">
          El Concepto Central
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.02em] text-white leading-tight">
          El Vector.
        </h2>
        <p className="mt-2 text-[#86868B] text-sm font-normal">
          Desliza para desplegar la dirección de ingeniería.
        </p>
      </div>

      {/* ── Expanding Media Frame ── */}
      <div
        ref={mediaWrapperRef}
        className="relative z-10 w-[88vw] sm:w-[78vw] max-w-5xl h-[46vh] sm:h-[54vh] rounded-[28px] overflow-hidden shadow-2xl shadow-black border border-white/10"
      >
        {/* Optical Glass / Precision Server Architecture Image */}
        <div
          ref={mediaRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=85')`,
          }}
        >
          {/* Neutral Apple Space Black Voids */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
        </div>

        {/* ── Vector Explanation HUD (Reveals at 100% expansion) ── */}
        <div
          ref={vectorHudRef}
          className="absolute inset-0 flex flex-col justify-between p-6 sm:p-14 z-20 pointer-events-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-white/80">
            <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>FÍSICA DE LA VELOCIDAD: MAGNITUD + DIRECCIÓN</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[#86868B]">
              <span>RUMBO DEFINIDO:</span>
              <span className="text-white font-medium">Entender antes de programar</span>
            </div>
          </div>

          {/* Central Statement Card */}
          <div className="max-w-2xl bg-black/80 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-[#86868B] mb-3">
              ¿Por qué Velkode?
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-4 tracking-[-0.02em]">
              En física, la velocidad es un vector: tiene magnitud y dirección.
            </h3>
            <p className="text-[#86868B] text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Velkode desarrolla software con ambas: avanza con orden técnico y calidad constructiva (magnitud), y exactamente orientado a los objetivos operativos de cada empresa (dirección).
            </p>
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-mono text-[#86868B]">
              <span className="text-white">✓ Soluciones Web & Escritorio</span>
              <span className="text-white">✓ Avances por fases</span>
              <span className="text-white">✓ Alcance definido</span>
            </div>
          </div>

          {/* Bottom Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-xs font-mono">
            <div>
              <div className="text-[#86868B] uppercase text-[10px]">Enfoque</div>
              <div className="text-white font-semibold">Técnico y práctico</div>
            </div>
            <div>
              <div className="text-[#86868B] uppercase text-[10px]">Arquitectura</div>
              <div className="text-white font-semibold">Modular y escalable</div>
            </div>
            <div>
              <div className="text-[#86868B] uppercase text-[10px]">Presupuesto</div>
              <div className="text-white font-semibold">Alcance claro</div>
            </div>
            <div>
              <div className="text-[#86868B] uppercase text-[10px]">Entregables</div>
              <div className="text-white font-semibold">Probado y documentado</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
