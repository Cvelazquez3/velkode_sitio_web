"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SHOWCASE_ITEMS = [
  {
    category: "Desarrollo Web",
    title: "Sitios Web & Páginas Corporativas",
    description: "Diseño visual moderno, carga inmediata y experiencia pensada para convertir visitas en clientes potenciales.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    speed: -40,
  },
  {
    category: "Software a la Medida",
    title: "Sistemas Web & Software de Escritorio",
    description: "Aplicaciones especializadas para Windows, macOS o plataformas en la nube, adaptadas a la operación interna de tu empresa.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    speed: -20,
  },
  {
    category: "Acompañamiento Digital",
    title: "Consultoría & Optimización",
    description: "Evaluación clara de tu infraestructura y recomendaciones prácticas para invertir sólo en lo que tu negocio necesita.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    speed: -60,
  },
];

export default function ParallaxGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const speed = SHOWCASE_ITEMS[index].speed;

        gsap.fromTo(
          card,
          {
            yPercent: speed * 0.25,
          },
          {
            yPercent: speed * -0.25,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* ── Section Header ── */}
      <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#182028] border border-[#25333D] text-xs font-medium text-[#CBD5E1] mb-3">
          <span>Casos de Éxito</span>
          <span className="text-[#40626B]">·</span>
          <span className="text-[#7892A9]">Resultados</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight font-heading">
          Soluciones listas para operar.
        </h2>
        <p className="mt-2 text-[#CBD5E1] text-xs sm:text-sm font-normal">
          Cada solución une una imagen profesional impecable con estabilidad comprobada para que tu negocio crezca con seguridad.
        </p>
      </div>

      {/* ── Parallax Cards Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start min-h-[550px]">
        {SHOWCASE_ITEMS.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className={`group apple-glass rounded-3xl overflow-hidden flex flex-col will-change-transform border border-[#25333D] hover:border-[#4B7784]/50 transition-colors ${
              idx === 1 ? "md:mt-12" : idx === 2 ? "md:-mt-6" : ""
            }`}
          >
            {/* Image Frame with Chrome Header */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#010508] flex flex-col justify-between">
              {/* Top Chrome Bar */}
              <div className="relative z-10 p-4 flex items-center justify-between bg-gradient-to-b from-[#010508]/90 via-[#010508]/50 to-transparent">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-xs font-medium bg-[#182028]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#25333D] text-[#CBD5E1] shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Background Image with Ambient Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010508] via-[#010508]/40 to-black/20 opacity-80" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight font-heading">
                  {item.title}
                </h3>
                <p className="text-[#CBD5E1] text-xs sm:text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#25333D] flex items-center justify-between text-xs text-[#CBD5E1] font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DBECFE]" />
                  <span>En Operación</span>
                </span>
                <span className="text-[#DBECFE] group-hover:translate-x-1 transition-transform">❯</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
