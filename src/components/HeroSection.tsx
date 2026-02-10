import { ArrowRight, Play, Terminal } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ParticleNetwork from "./ParticleNetwork";

const HeroSection = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to get a free strategy call.");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary pt-24 scanlines">
      {/* BG image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0) contrast(1.4)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary" />

      {/* Particles */}
      <ParticleNetwork />

      {/* Grid */}
      <div className="absolute inset-0 pattern-grid opacity-50" style={{ zIndex: 2 }} />

      {/* Brutalist vertical line accents */}
      <div className="absolute left-8 md:left-16 top-0 w-px h-full bg-cyan/15" style={{ zIndex: 2 }} />
      <div className="absolute right-8 md:right-16 top-0 w-px h-full bg-cyan/10" style={{ zIndex: 2 }} />
      <div className="absolute left-0 top-1/3 w-12 h-px bg-cyan/30" style={{ zIndex: 2 }} />
      <div className="absolute right-0 top-2/3 w-20 h-px bg-neon-magenta/20" style={{ zIndex: 2 }} />

      <div className="section-container relative" style={{ zIndex: 10 }}>
        {/* Brutalist asymmetric layout — LEFT aligned */}
        <div className="max-w-6xl">
          {/* Terminal tag */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <div className="w-2 h-8 bg-cyan" />
            <span className="terminal-text text-xs">
              <span className="text-neon-magenta">$</span> initializing_growth_engine<span className="animate-blink">_</span>
            </span>
          </div>

          {/* OVERSIZED headline — brutalist left-aligned */}
          <h1
            className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black text-white leading-[0.85] mb-8 animate-fade-in-up delay-100 glitch-text tracking-tighter"
            data-text="BUILD. AUTOMATE. SCALE."
          >
            BUILD.<br />
            <span className="gradient-text">AUTO</span>MATE.<br />
            SCALE.
          </h1>

          {/* Sub text — offset from heading, max-width narrow */}
          <div className="md:ml-4 max-w-lg mb-12 animate-fade-in-up delay-200">
            <div className="w-16 h-px bg-cyan/50 mb-6" />
            <p className="text-white/50 text-base md:text-lg leading-relaxed font-light">
              We architect high-converting websites and deploy intelligent automation
              systems that scale your business — <span className="text-cyan font-medium">on autopilot</span>.
            </p>
          </div>

          {/* CTAs — raw, stacked on mobile, inline on desktop */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-3 group"
            >
              Get a Free Strategy Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#how-it-works" className="btn-secondary flex items-center gap-2">
              <Play size={14} />
              How It Works
            </a>
          </div>

          {/* Trust — monospace small */}
          <div className="animate-fade-in-up delay-400 font-mono text-[10px] text-white/25 uppercase tracking-[0.3em]">
            Trusted by startups & businesses across India
          </div>
        </div>
      </div>

      {/* Bottom hard line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan/60 via-cyan/20 to-transparent" style={{ zIndex: 3 }} />
    </section>
  );
};

export default HeroSection;
