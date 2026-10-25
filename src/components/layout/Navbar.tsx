"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <header className="fixed top-4 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
      <nav
        className={`w-full max-w-5xl mx-auto flex items-center justify-between px-6 py-2.5 sm:py-3 rounded-full pointer-events-auto transition-all duration-300 ${
          scrolled
            ? "apple-glass shadow-[0_16px_40px_rgba(1,5,8,0.9)] border border-[#4B7784]/25"
            : "bg-[#06090E]/75 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(1,5,8,0.7)]"
        }`}
      >
        {/* Brand Name Only (Clean Apple Style) */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="focus:outline-none flex items-center"
        >
          <Logo showIcon={false} />
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-medium tracking-wide px-3.5 py-1.5 text-[#CBD5E1] hover:text-white rounded-full transition-colors duration-150 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Apple-style Pill */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="apple-btn-primary text-xs font-semibold px-5 py-2 inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Cotizar Proyecto</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 5H8M8 5L5 2M8 5L5 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#CBD5E1] hover:text-white cursor-pointer"
          aria-label="Toggle navigation"
        >
          <div className="w-5 h-3.5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-white transition-all ${
                mobileOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-all ${
                mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-20 left-4 right-4 apple-glass rounded-2xl p-6 shadow-2xl flex flex-col gap-4 z-50 pointer-events-auto border border-[#25333D]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-[#CBD5E1] hover:text-white py-1.5 border-b border-[#25333D] cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="apple-btn-primary text-center text-xs font-semibold py-3 mt-2 cursor-pointer"
            >
              Cotizar Proyecto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
