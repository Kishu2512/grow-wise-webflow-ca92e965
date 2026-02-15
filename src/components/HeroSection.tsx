import { ArrowRight, Play, Terminal } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ParticleNetwork from "./ParticleNetwork";

const HeroSection = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to get a free strategy call.");

  return (
    <section className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden bg-primary pt-20 scanlines">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.2) contrast(1.3)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary" />

      {/* Particle Network — interactive */}
      <ParticleNetwork />

      {/* Grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-40" style={{ zIndex: 2 }} />

      {/* Vertical data lines */}
      <div className="absolute left-[15%] top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan/20 to-transparent opacity-40" style={{ zIndex: 2 }} />
      <div className="absolute left-[85%] top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan/20 to-transparent opacity-30" style={{ zIndex: 2 }} />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan/8 rounded-full blur-[120px]" style={{ zIndex: 2 }} />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-light/5 rounded-full blur-[100px]" style={{ zIndex: 2 }} />

      <div className="section-container relative" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Terminal badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded border border-cyan/30 bg-cyan/5 backdrop-blur-sm mb-10 animate-fade-in-up">
            <Terminal size={14} className="text-cyan" />
            <span className="terminal-text">
              <span className="text-neon-magenta">$</span> initializing_growth_engine<span className="animate-blink">_</span>
            </span>
          </div>

          {/* Glitch headline */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 animate-fade-in-up delay-100 glitch-text"
            data-text="Build. Automate. Scale."
          >
            Build.{" "}
            <span className="gradient-text">Automate.</span>{" "}
            Scale.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200 font-light">
            We architect high-converting websites and deploy intelligent automation
            systems that scale your business — <span className="text-cyan">on autopilot</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up delay-300">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-3 group"
            >
              <span className="font-mono text-xs opacity-60">[</span>
              Get a Free Strategy Call
              <span className="font-mono text-xs opacity-60">]</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#how-it-works" className="btn-secondary flex items-center gap-2">
              <Play size={16} />
              See How It Works
            </a>
          </div>

          {/* Trust line */}
          <div className="animate-fade-in-up delay-400 terminal-text text-xs opacity-50">
            <span className="text-neon-magenta">→</span> trusted by startups, coaches & growing businesses across India
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" style={{ zIndex: 3 }} />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-cyan/30" style={{ zIndex: 3 }} />
    </section>
  );
};

export default HeroSection;
