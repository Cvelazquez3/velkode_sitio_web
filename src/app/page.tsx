import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PillarsCarouselSection from "@/components/sections/PillarsCarouselSection";
import LogoAssemblySection from "@/components/sections/LogoAssemblySection";
import VisionCodeSplit from "@/components/sections/VisionCodeSplit";
import BentoServices from "@/components/sections/BentoServices";
import ParallaxGallery from "@/components/sections/ParallaxGallery";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#010508] text-slate-100 selection:bg-white selection:text-black overflow-x-hidden">
        {/* ── Volumetric Cinematic Ambiance (Extracted from Official Cover Banner) ── */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          {/* Upper-left Nordic Cyan Volumetric Bloom */}
          <div className="absolute top-[-15%] left-[-10%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(85,123,142,0.16)_0%,rgba(43,76,96,0.08)_45%,transparent_70%)] blur-[120px]" />
          
          {/* Top-center Cold Ambient Haze */}
          <div className="absolute top-[5%] left-[35%] w-[800px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(113,140,161,0.09)_0%,transparent_70%)] blur-[100px]" />

          {/* Mid-page Petrol/Oceanic Atmosphere */}
          <div className="absolute top-[38%] right-[-12%] w-[850px] h-[850px] rounded-full bg-[radial-gradient(circle,rgba(64,98,107,0.11)_0%,rgba(8,19,25,0.05)_50%,transparent_70%)] blur-[130px]" />

          {/* Lower Cinematic Cyan Haze */}
          <div className="absolute top-[70%] left-[-8%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(85,123,142,0.10)_0%,rgba(43,76,96,0.05)_45%,transparent_70%)] blur-[120px]" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <HeroSection />
            <PillarsCarouselSection />
            <LogoAssemblySection />
            <VisionCodeSplit />
            <BentoServices />
            <ParallaxGallery />
            <ProcessSection />
            <FAQSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScrollProvider>
  );
}
