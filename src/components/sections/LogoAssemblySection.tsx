"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAND } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function LogoAssemblySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPillarRef = useRef<SVGPathElement>(null);
  const rightPillarRef = useRef<SVGPathElement>(null);
  const leftBevelRef = useRef<SVGPathElement>(null);
  const rightBevelRef = useRef<SVGPathElement>(null);
  const centerVertexRef = useRef<SVGPolygonElement>(null);
  const horizontalCrossbarRef = useRef<SVGGElement>(null);
  const gleamSweepRef = useRef<SVGRectElement>(null);
  const haloGlowRef = useRef<HTMLDivElement>(null);
  const horizonLaserRef = useRef<HTMLDivElement>(null);
  const brandWordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 1.1,
          anticipatePin: 1,
        },
      });

      // ── 01. Lateral Horizon & Background Aura Activation ──
      tl.fromTo(
        horizonLaserRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 0.5, duration: 0.35, ease: "power2.out" },
        0
      );

      // ── 02. Smooth Convergence of the Two Monolithic Titanium Pillars ──
      tl.fromTo(
        [leftPillarRef.current, leftBevelRef.current],
        {
          x: -160,
          y: -40,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: "power3.out",
        },
        0.05
      );

      tl.fromTo(
        [rightPillarRef.current, rightBevelRef.current],
        {
          x: 160,
          y: -40,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: "power3.out",
        },
        0.05
      );

      // ── 03. Apex Vertex Snapping at Bottom Contact Point ──
      tl.fromTo(
        centerVertexRef.current,
        {
          y: 35,
          opacity: 0,
          scale: 0.6,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "back.out(1.5)",
        },
        0.38
      );

      // ── 04. Horizontal Crossbar Appears from Deep Background Forward into Front Plane ──
      // Zooms forward along z-axis from depth (scale 0.08 to 1.0) with depth-blur clearing
      tl.fromTo(
        horizontalCrossbarRef.current,
        {
          scale: 0.08,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.45,
          ease: "back.out(1.4)",
        },
        0.42
      );

      // ── 05. Luminescent Halo Burst ──
      tl.fromTo(
        haloGlowRef.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1.25,
          duration: 0.3,
          ease: "power2.out",
        },
        0.52
      );
      tl.to(
        haloGlowRef.current,
        {
          opacity: 0.35,
          scale: 1.02,
          duration: 0.35,
          ease: "power2.inOut",
        },
        0.82
      );

      // ── 06. Specular Laser Gleam Sweep ──
      tl.fromTo(
        gleamSweepRef.current,
        {
          y: -180,
          opacity: 0,
        },
        {
          y: 200,
          opacity: 0.75,
          duration: 0.4,
          ease: "power1.inOut",
        },
        0.56
      );

      // ── 07. Reveal Exact Centered Wordmark with Slogan Only ──
      tl.fromTo(
        brandWordmarkRef.current,
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        0.68
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center border-t border-white/[0.08]"
    >
      {/* ── Precision Horizon Laser Line (Mathematically Centered) ── */}
      <div
        ref={horizonLaserRef}
        className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none origin-center opacity-0"
      />

      {/* ── Luminescent Radial Caustic Halo ── */}
      <div
        ref={haloGlowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(219,236,254,0.32)_0%,rgba(75,119,132,0.18)_42%,transparent_70%)] pointer-events-none opacity-0 blur-3xl"
      />

      {/* ── Perfectly Centered Column for Symbol + Identity ── */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-sm px-4">
        {/* The "V" SVG Canvas: centered at x = 70 */}
        <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] flex items-center justify-center">
          <svg
            width="100%"
            height="100%"
            viewBox="-50 0 240 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible drop-shadow-[0_25px_50px_rgba(219,236,254,0.22)] will-change-transform"
          >
            <defs>
              <linearGradient id="v-titanium-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="35%" stopColor="#DBECFE" />
                <stop offset="70%" stopColor="#A3BDCC" />
                <stop offset="100%" stopColor="#40626B" />
              </linearGradient>

              <linearGradient id="v-titanium-right" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="35%" stopColor="#BAD1E3" />
                <stop offset="70%" stopColor="#7892A9" />
                <stop offset="100%" stopColor="#2B4C60" />
              </linearGradient>

              <linearGradient id="v-bevel-left" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#6B8C9D" stopOpacity="0.25" />
              </linearGradient>

              <linearGradient id="v-bevel-right" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#25333D" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.85" />
              </linearGradient>

              <linearGradient id="v-crossbar-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#081319" stopOpacity="0" />
                <stop offset="20%" stopColor="#71716F" stopOpacity="0.6" />
                <stop offset="42%" stopColor="#A3BDCC" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="58%" stopColor="#A3BDCC" stopOpacity="0.95" />
                <stop offset="80%" stopColor="#71716F" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#081319" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="v-crossbar-bloom" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#25333D" stopOpacity="0" />
                <stop offset="30%" stopColor="#4B7784" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#DBECFE" stopOpacity="0.75" />
                <stop offset="70%" stopColor="#4B7784" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#25333D" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="v-crossbar-subtle" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#25333D" stopOpacity="0" />
                <stop offset="50%" stopColor="#BAD1E3" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#25333D" stopOpacity="0" />
              </linearGradient>

              <radialGradient id="v-diamond-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="40%" stopColor="#DBECFE" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2B4C60" stopOpacity="0" />
              </radialGradient>

              <clipPath id="v-symbol-clip">
                <path d="M10 15L62 135H77L35 15H10Z" />
                <path d="M130 15L78 135H63L105 15H130Z" />
                <polygon points="70,118 78,135 62,135" />
                <path d="M-15 67 L -10 65.5 H 150 L 155 67 L 150 68.5 H -10 Z" />
              </clipPath>

              <linearGradient id="v-gleam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="50%" stopColor="#DBECFE" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Left Monolithic Pillar */}
            <path
              ref={leftPillarRef}
              d="M10 15L62 135H77L35 15H10Z"
              fill="url(#v-titanium-left)"
              className="will-change-transform"
            />
            <path
              ref={leftBevelRef}
              d="M10 15L62 135H66L14 15H10Z"
              fill="url(#v-bevel-left)"
              className="will-change-transform"
            />

            {/* Right Monolithic Pillar */}
            <path
              ref={rightPillarRef}
              d="M130 15L78 135H63L105 15H130Z"
              fill="url(#v-titanium-right)"
              className="will-change-transform"
            />
            <path
              ref={rightBevelRef}
              d="M126 15L74 135H78L130 15H126Z"
              fill="url(#v-bevel-right)"
              className="will-change-transform"
            />

            {/* Apex Locking Vertex (Bottom Anchor Wedge) */}
            <polygon
              ref={centerVertexRef}
              points="70,118 78,135 62,135"
              fill="#FFFFFF"
              className="will-change-transform drop-shadow-[0_0_12px_rgba(255,255,255,0.95)]"
            />

            {/* ── Precision Horizon Crossbar Blades (Appearing From Deep Background to Foreground) ── */}
            <g
              ref={horizontalCrossbarRef}
              style={{ transformOrigin: "70px 67px" }}
              className="will-change-transform opacity-0"
            >
              {/* Diffuse Anamorphic Flare Beam Bloom */}
              <ellipse
                cx="70"
                cy="67"
                rx="85"
                ry="3"
                fill="url(#v-crossbar-bloom)"
                className="pointer-events-none"
              />

              {/* Primary Tapered Titanium Crossbar Blade */}
              <path
                d="M -15 67 L -10 65.5 H 150 L 155 67 L 150 68.5 H -10 Z"
                fill="url(#v-crossbar-grad)"
                className="drop-shadow-[0_0_14px_rgba(219,236,254,0.85)]"
              />

              {/* Secondary Parallel Hairline Accent Rail Beneath Beam */}
              <path
                d="M 20 71.5 H 120"
                stroke="url(#v-crossbar-subtle)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />

              {/* Outboard Horizon Floating Accent Notches */}
              <line x1="-34" y1="67" x2="-22" y2="67" stroke="#71716F" strokeWidth="1" strokeLinecap="round" />
              <line x1="162" y1="67" x2="174" y2="67" stroke="#71716F" strokeWidth="1" strokeLinecap="round" />

              {/* Central Precision Diamond Reticle & Glow */}
              <circle cx="70" cy="67" r="9" fill="url(#v-diamond-glow)" className="pointer-events-none" />
              <polygon
                points="70,62.5 74.5,67 70,71.5 65.5,67"
                fill="#FFFFFF"
                className="drop-shadow-[0_0_10px_rgba(255,255,255,1)]"
              />
            </g>

            {/* Specular Gleam Sweep */}
            <g clipPath="url(#v-symbol-clip)">
              <rect
                ref={gleamSweepRef}
                x="-40"
                y="-180"
                width="220"
                height="60"
                fill="url(#v-gleam-gradient)"
                transform="rotate(-25 70 75)"
                className="pointer-events-none opacity-0"
              />
            </g>
          </svg>
        </div>

        {/* ── Centered Official Wordmark & Slogan Only ── */}
        <div
          ref={brandWordmarkRef}
          className="flex flex-col items-center justify-center text-center mt-6 opacity-0 will-change-transform"
        >
          {/* Exact official wordmark (perfectly centered) */}
          <Logo
            showIcon={false}
            className="justify-center mx-auto"
            wordmarkClassName="h-7 sm:h-8 w-auto text-white drop-shadow-[0_8px_20px_rgba(255,255,255,0.12)]"
          />

          {/* Slogan only: "See it. Build it." */}
          <div className="mt-3.5 text-xs sm:text-[13px] tracking-wide text-slate-400 text-center select-none font-medium font-sans">
            {BRAND.slogan}
          </div>
        </div>
      </div>
    </section>
  );
}
