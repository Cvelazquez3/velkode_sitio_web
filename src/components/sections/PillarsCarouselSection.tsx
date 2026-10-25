"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { PILLARS } from "@/lib/constants";

export default function PillarsCarouselSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafId = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [sidePadding, setSidePadding] = useState<number>(180);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);

  // ── Real-time continuous card scaling based on distance to viewport center ──
  const updateCardScales = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIdx = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }

      // Range over which the magnification operates smoothly
      const range = cardRect.width * 1.15;
      const normalized = Math.max(0, Math.min(1, 1 - distance / range));

      // Smooth cosine easing curve for organic magnification
      const factor = normalized * normalized * (3 - 2 * normalized);

      // Card scale continuously interpolates from 0.88 up to 1.14
      const scale = 0.88 + factor * 0.26;
      // Opacity ramps from 0.5 to 1.0
      const opacity = 0.5 + factor * 0.5;
      // Border illumination
      const borderAlpha = 0.08 + factor * 0.28;

      card.style.transform = `scale(${scale.toFixed(4)})`;
      card.style.opacity = opacity.toFixed(3);
      card.style.borderColor = `rgba(255, 255, 255, ${borderAlpha.toFixed(3)})`;

      if (factor > 0.35) {
        card.style.zIndex = "20";
        card.style.boxShadow = `0 24px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(255, 255, 255, ${(
          factor * 0.09
        ).toFixed(3)})`;
      } else {
        card.style.zIndex = "1";
        card.style.boxShadow = "none";
      }
    });

    setActiveIndex(closestIdx);
  }, []);

  const handleScroll = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(updateCardScales);
  };

  // ── Calculate dynamic side padding so the first and last cards can be centered ──
  const calculatePadding = useCallback(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    const firstCard = cardRefs.current[0];
    const cardWidth = firstCard ? firstCard.offsetWidth : 360;
    const pad = Math.max(24, Math.floor((containerWidth - cardWidth) / 2));
    setSidePadding(pad);
  }, []);

  useEffect(() => {
    calculatePadding();
    const handleResize = () => {
      calculatePadding();
      updateCardScales();
    };

    window.addEventListener("resize", handleResize);
    // Initial scale calculation on load
    const timer = setTimeout(() => {
      calculatePadding();
      updateCardScales();
    }, 60);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [calculatePadding, updateCardScales]);

  // ── Smooth centering navigation ──
  const centerCard = (index: number) => {
    if (!containerRef.current || !cardRefs.current[index]) return;
    const container = containerRef.current;
    const card = cardRefs.current[index]!;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const containerCenter = container.clientWidth / 2;
    const targetScroll = cardCenter - containerCenter;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  const scrollByDirection = (direction: "left" | "right") => {
    const nextIndex =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(PILLARS.length - 1, activeIndex + 1);
    centerCard(nextIndex);
  };

  // Convert mouse wheel on the carousel track to horizontal scroll
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const isAtStart = scrollLeft <= 0 && e.deltaY < 0;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 5 && e.deltaY > 0;

      if (!isAtStart && !isAtEnd) {
        e.preventDefault();
        containerRef.current.scrollLeft += e.deltaY * 1.15;
      }
    }
  };

  // Mouse Drag to Scroll (Grab & Swipe)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setInitialScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.35;
    containerRef.current.scrollLeft = initialScrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="pillars"
      className="relative py-24 sm:py-28 overflow-hidden border-t border-[#25333D]/60 scroll-mt-24 sm:scroll-mt-28"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[360px] bg-[radial-gradient(ellipse_at_center,rgba(43,76,96,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Header and Controls */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#182028] border border-[#25333D] text-xs font-medium text-[#CBD5E1] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B8C9D]" />
            <span>Nuestra base de trabajo</span>
            <span className="text-[#40626B]">·</span>
            <span className="text-[#7892A9]">4 Fundamentos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading">
            Nuestra base de trabajo.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#CBD5E1]">
            Desplaza de izquierda a derecha para conocer los fundamentos con los que desarrollamos cada proyecto.
          </p>
        </div>

        {/* Carousel Navigation Buttons & Dots */}
        <div className="flex items-center gap-4">
          {/* Progress Indicators */}
          <div className="flex items-center gap-1.5">
            {PILLARS.map((_, i) => (
              <button
                key={i}
                onClick={() => centerCard(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i ? "w-7 bg-[#DBECFE]" : "w-2 bg-[#25333D] hover:bg-[#4B7784]"
                }`}
                aria-label={`Ir al principio ${i + 1}`}
              />
            ))}
          </div>

          <div className="w-[1px] h-4 bg-[#25333D] mx-1" />

          {/* Left / Right Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollByDirection("left")}
              disabled={activeIndex === 0}
              aria-label="Anterior"
              className="w-9 h-9 rounded-full apple-glass border border-[#25333D] flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#4B7784]/50 transition-all cursor-pointer"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M7.5 9L4.5 6L7.5 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollByDirection("right")}
              disabled={activeIndex === PILLARS.length - 1}
              aria-label="Siguiente"
              className="w-9 h-9 rounded-full apple-glass border border-[#25333D] flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#4B7784]/50 transition-all cursor-pointer"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M4.5 3L7.5 6L4.5 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── True Left-to-Right Horizontal Scrolling Carousel Track ── */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="relative z-10 w-full overflow-x-auto py-10 no-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory scroll-smooth select-none"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: `${sidePadding}px`,
          paddingRight: `${sidePadding}px`,
        }}
      >
        <div className="flex items-center gap-6 sm:gap-8 w-max">
          {PILLARS.map((pillar, idx) => {
            const isCurrent = activeIndex === idx;
            return (
              <div
                key={pillar.number}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => centerCard(idx)}
                className="relative flex-shrink-0 w-[290px] sm:w-[350px] md:w-[390px] h-[360px] sm:h-[390px] rounded-3xl p-7 sm:p-8 apple-glass snap-center flex flex-col justify-between transition-transform duration-100 will-change-transform border border-[#25333D] cursor-pointer"
              >
                {/* Subtle top glare highlight line */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#DBECFE]/30 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-medium text-[#7892A9]">
                      Pilar {pillar.number}
                    </span>
                    <span className="text-xs font-medium text-[#CBD5E1] bg-[#182028] px-3 py-1 rounded-full border border-[#25333D] whitespace-nowrap">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-[#CBD5E1] text-xs sm:text-[13px] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#25333D] flex items-center justify-between text-xs text-[#CBD5E1] font-medium">
                  <span className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isCurrent ? "bg-[#DBECFE]" : "bg-[#7892A9]"
                      }`}
                    />
                    <span>Compromiso Velkode</span>
                  </span>
                  <span className="text-[#7892A9]">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
