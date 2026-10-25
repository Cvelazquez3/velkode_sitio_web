"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SIMULATED_LOGS = [
  { time: "00:00:02", tag: "KERNEL", msg: "Initialized distributed state engine across multi-region nodes." },
  { time: "00:00:04", tag: "AI-AGENT", msg: "Autonomous query optimizer dispatched: Latency reduced to 18ms." },
  { time: "00:00:07", tag: "ZERO-TRUST", msg: "Mutual TLS handshake verified (256-bit ECDSA cipher suite)." },
  { time: "00:00:09", tag: "PIPELINE", msg: "Real-time streaming ingestion active (142,000 evt/sec throughput)." },
  { time: "00:00:12", tag: "CLUSTER", msg: "Auto-rebalancing complete. 0 deadlocks, 100% data consistency." },
];

export default function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState<"terminal" | "nodes">("terminal");
  const [logIndex, setLogIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev < SIMULATED_LOGS.length ? prev + 1 : 1));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="architecture" className="relative py-24 px-4 max-w-6xl mx-auto">
      {/* ── Section Header ── */}
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-800/40 text-[11px] font-mono uppercase tracking-widest text-violet-400 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Runtime & Arquitectura
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Poder computacional con observabilidad absoluta.
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Cada arquitectura que entregamos está instrumentada para telemetría profunda, resistencia a fallos y auditoría criptográfica.
        </p>
      </div>

      {/* ── Interactive Monolith Console ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-panel rounded-3xl border border-white/10 shadow-2xl shadow-indigo-950/50 overflow-hidden"
      >
        {/* Terminal Titlebar */}
        <div className="px-6 py-4 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-slate-400 ml-3">
              velkode-core-engine v4.2.0-prod
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("terminal")}
              className={`text-xs font-mono px-3 py-1 rounded-md transition-colors ${
                activeTab === "terminal" ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Telemetría
            </button>
            <button
              onClick={() => setActiveTab("nodes")}
              className={`text-xs font-mono px-3 py-1 rounded-md transition-colors ${
                activeTab === "nodes" ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              Cluster Mesh
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm min-h-[300px] flex flex-col justify-between bg-black/40">
          {activeTab === "terminal" ? (
            <div className="flex flex-col gap-3">
              <div className="text-slate-500 text-xs">
                # Conectado a nodo primario: us-east-core.velkode.internal [SSL/TLS 1.3]
              </div>

              {SIMULATED_LOGS.slice(0, logIndex).map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-slate-600 select-none">[{log.time}]</span>
                  <span className="text-cyan-400 font-semibold uppercase">[{log.tag}]</span>
                  <span className="text-slate-200">{log.msg}</span>
                </motion.div>
              ))}

              <div className="flex items-center gap-2 text-cyan-400 mt-2">
                <span className="animate-pulse">❯</span>
                <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                <span className="text-xs text-slate-400">NODO PRIMARIO (NORTH AMERICA)</span>
                <span className="text-emerald-400 font-bold text-lg">ONLINE // 14ms</span>
                <span className="text-[11px] text-slate-500">128 vCPUs · 512GB ECC RAM</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                <span className="text-xs text-slate-400">EDGE INFERENCE CLUSTER</span>
                <span className="text-cyan-400 font-bold text-lg">SYNCHRONIZED // 19ms</span>
                <span className="text-[11px] text-slate-500">TensorRT-LLM Multi-GPU</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                <span className="text-xs text-slate-400">GLOBAL DATABASE REPLICA</span>
                <span className="text-violet-400 font-bold text-lg">REPLICATED // 0ms lag</span>
                <span className="text-[11px] text-slate-500">Raft Consensus Active</span>
              </div>
            </div>
          )}

          {/* Bottom telemetry status bar */}
          <div className="mt-8 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                All Systems Operational
              </span>
              <span className="hidden sm:inline">P99 Latency: 22ms</span>
            </div>
            <div>Velkode Engineering Autonomous Engine</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
