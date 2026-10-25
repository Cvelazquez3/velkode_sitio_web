"use client";

import { motion } from "framer-motion";

export default function BackgroundBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* ── Kinetic Ambient Light Orbs ── */}
      {/* Top Left Cosmic Cyan */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[15%] left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/30 to-indigo-600/10 blur-[140px]"
      />

      {/* Top Right Deep Indigo/Violet */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.18, 0.32, 0.18],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -right-[5%] w-[680px] h-[680px] rounded-full bg-gradient-to-bl from-violet-600/30 to-fuchsia-600/10 blur-[150px]"
      />

      {/* Center Dynamic Glow Pulse */}
      <motion.div
        animate={{
          scale: [0.9, 1.08, 0.9],
          opacity: [0.1, 0.22, 0.1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full bg-gradient-to-r from-cyan-600/15 via-indigo-600/20 to-violet-600/15 blur-[160px]"
      />

      {/* ── Perspective Horizon Grid ── */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 20%, transparent 80%)",
        }}
      />

      {/* ── Sub-surface Vignette ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/60 to-[#030712]" />
    </div>
  );
}
