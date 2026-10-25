"use client";

import Logo from "@/components/ui/Logo";
import { BRAND, SOCIAL } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#010508] border-t border-[#25333D]/60 text-[#7892A9] py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Left Column: Brand, Slogan & Descriptor */}
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <Logo showIcon={false} />
            <p className="text-xs sm:text-sm text-[#CBD5E1] font-sans leading-relaxed max-w-md">
              Desarrollo de sitios web y software a la medida —web, escritorio y plataformas empresariales— con visión y solidez.
            </p>
            {/* Status indicator badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#182028] border border-[#25333D] text-[11px] text-[#CBD5E1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DBECFE] animate-pulse shadow-[0_0_8px_#6B8C9D]" />
              <span>Abiertos a nuevos proyectos</span>
            </div>
          </div>

          {/* Right Column: Institutional Contact & Social Pills */}
          <div className="md:col-span-6 flex flex-col md:items-end gap-5">
            <div className="flex flex-col md:items-end gap-1">
              <span className="text-[11px] uppercase tracking-wider text-[#7892A9] font-medium font-sans">
                Contacto Directo
              </span>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-white hover:text-[#DBECFE] transition-colors text-sm sm:text-base font-medium font-sans underline underline-offset-4 decoration-[#25333D] hover:decoration-[#DBECFE]"
              >
                {BRAND.email}
              </a>
            </div>

            {/* Social Channels Pills */}
            <div className="flex flex-col md:items-end gap-2 pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#7892A9] font-medium font-sans">
                Canales Oficiales
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#182028] hover:bg-[#25333D] border border-[#25333D] hover:border-[#4B7784] text-xs text-[#CBD5E1] hover:text-white transition-all"
                >
                  Facebook
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#182028] hover:bg-[#25333D] border border-[#25333D] hover:border-[#4B7784] text-xs text-[#CBD5E1] hover:text-white transition-all"
                >
                  Instagram
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#182028] hover:bg-[#25333D] border border-[#25333D] hover:border-[#4B7784] text-xs text-[#CBD5E1] hover:text-white transition-all"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#25333D] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#7892A9]">
          <div>
            © 2026 VELKODE. Todos los derechos reservados.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#CBD5E1] hover:text-white transition-colors cursor-pointer"
          >
            <span>Subir al inicio</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
