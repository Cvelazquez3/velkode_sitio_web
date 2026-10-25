"use client";

import { motion } from "framer-motion";

const TECH_ITEMS = [
  {
    name: "Next.js",
    role: "Framework Empresarial",
    svg: (
      <svg width="24" height="24" viewBox="0 0 180 180" fill="none">
        <mask id="mask0_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0_next)">
          <circle cx="90" cy="90" r="90" fill="black" stroke="white" strokeWidth="6" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.166 149.508 157.52Z" fill="url(#paint0_linear_next)" />
          <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_next" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "React 19",
    role: "Arquitectura Reactiva",
    svg: (
      <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    role: "Cero Errores en Runtime",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M11.5 9H6.5V11H8V18H10V11H11.5V9ZM13.5 14C13.5 15.5 14.5 16.5 16 16.5C17.2 16.5 18 15.8 18.2 15L16.5 14.2C16.3 14.7 15.8 15 15.3 15C14.7 15 14.3 14.6 14.3 14H18.5C18.5 11.5 17 9.5 14.8 9.5C13 9.5 11.5 11 11.5 13.5L13.5 14Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    role: "Bases de Datos Robustas",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    role: "Diseño Preciso & Ligero",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Cloudflare",
    role: "Seguridad & Red Edge",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#F38020">
        <path d="M18.3 12.8c-.1-.7-.4-1.3-.9-1.8-.5-.5-1.2-.8-1.9-.8-.4 0-.8.1-1.1.3-.3.2-.6.4-.8.7-.3-.6-.8-1-1.4-1.3-.6-.3-1.3-.4-2-.3-.8.1-1.5.5-2.1 1-.5.6-.9 1.3-1 2.1-.6.1-1.2.4-1.7.9-.5.5-.7 1.1-.7 1.8 0 .8.3 1.5.8 2.1.6.6 1.3.9 2.1.9h10.4c.8 0 1.6-.3 2.1-.9.6-.6.9-1.3.9-2.1 0-.9-.4-1.8-1-2.4-.4-.3-1-.5-1.6-.2z" />
      </svg>
    ),
  },
];

const METRICS = [
  { value: "Rápido", label: "Optimización y respuesta fluida" },
  { value: "99.9%", label: "Disponibilidad y estabilidad" },
  { value: "Multiplataforma", label: "Software Web y de Escritorio" },
  { value: "Por Fases", label: "Planificación y avance ordenado" },
];

export default function TechStackBanner() {
  return (
    <section className="relative py-16 px-4 max-w-6xl mx-auto border-t border-white/[0.08]">
      {/* ── Subtitle / Kicker ── */}
      <div className="flex flex-col items-center text-center mb-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300 mb-3">
          <span>Ingeniería Moderna</span>
          <span className="text-white/20">·</span>
          <span className="text-slate-400">Estándar Global</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-heading">
          Construimos con la tecnología que respalda a empresas líderes.
        </h3>
      </div>

      {/* ── Tech Stack Grid with Logos ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
        {TECH_ITEMS.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="apple-glass rounded-2xl p-4 flex flex-col items-center text-center gap-2.5 border border-white/10 hover:border-white/25 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center transition-transform group-hover:scale-110">
              {item.svg}
            </div>
            <div>
              <div className="text-xs font-semibold text-white tracking-tight">{item.name}</div>
              <div className="text-[10px] text-slate-400 mt-0.5 leading-snug">{item.role}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Enterprise Key Metrics Row ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/10">
        {METRICS.map((metric, i) => (
          <div key={i} className="flex flex-col items-center text-center p-2">
            <span className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight">
              {metric.value}
            </span>
            <span className="text-xs text-slate-400 mt-1">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
