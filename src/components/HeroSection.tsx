import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ParticleNetwork from "./ParticleNetwork";

const HeroSection = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to get a free strategy call.");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain vignette">
      {/* Cinematic BG — slow zoom */}
      <div className="absolute inset-0 animate-slow-zoom">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(0.15) contrast(1.2) brightness(0.4)",
          }}
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary" />

      {/* Particles — atmospheric */}
      <ParticleNetwork />

      {/* Subtle grid */}
      <div className="absolute inset-0 pattern-grid opacity-30" style={{ zIndex: 2 }} />

      {/* Atmospheric glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[200px] animate-breathe" style={{ zIndex: 2 }} />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-neon-magenta/3 rounded-full blur-[150px] animate-breathe delay-300" style={{ zIndex: 2 }} />

      <div className="section-container relative" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Cinematic label */}
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <span className="cine-label">Digital Growth Agency</span>
            <div className="w-12 h-px bg-cyan/30 mx-auto mt-4 mb-12" />
          </div>

          {/* Hero headline — cinematic scale with breathing room */}
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-white leading-[0.95] mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Build.{" "}
            <span className="gradient-text">Automate.</span>
            <br />Scale.
          </h1>

          {/* Subtitle — elegant, airy */}
          <p className="text-lg md:text-xl text-white/35 max-w-xl mx-auto mb-14 leading-relaxed font-light animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            We architect high-converting websites and deploy intelligent automation
            that grows your business on autopilot.
          </p>

          {/* CTAs — minimal, spaced */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              Get a Free Strategy Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
            </a>
            <a href="#how-it-works" className="btn-secondary">
              <Play size={14} />
              See How It Works
            </a>
          </div>

          {/* Trust — whisper */}
          <p className="mt-20 cine-label animate-fade-in-up opacity-0" style={{ animationDelay: '1.6s', animationFillMode: 'forwards', color: 'hsl(0 0% 100% / 0.15)' }}>
            Trusted by startups & businesses across India
          </p>
        </div>
      </div>

      {/* Bottom fade — cinematic wipe */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" style={{ zIndex: 3 }} />
    </section>
  );
};

export default HeroSection;
