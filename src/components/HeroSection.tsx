import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ParticleNetwork from "./ParticleNetwork";

const HeroSection = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to get a free strategy call.");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden organic-grain vignette-organic">
      {/* Organic BG */}
      <div className="absolute inset-0 animate-slow-zoom">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(0.2) contrast(1.1) brightness(0.3) hue-rotate(30deg)",
          }}
        />
      </div>

      {/* Living gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bio-deep/70 via-bio-deep/50 to-bio-deep" />

      {/* Bioluminescent blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-bio-glow/5 blob animate-breathe" style={{ zIndex: 2, filter: 'blur(120px)' }} />
      <div className="absolute bottom-1/3 right-1/5 w-[350px] h-[350px] bg-bio-pulse/4 blob animate-breathe delay-2000" style={{ zIndex: 2, filter: 'blur(100px)' }} />
      <div className="absolute top-2/3 left-2/3 w-[250px] h-[250px] bg-bio-glow-warm/3 blob animate-drift" style={{ zIndex: 2, filter: 'blur(80px)' }} />

      {/* Spore network */}
      <ParticleNetwork />

      {/* Cell pattern */}
      <div className="absolute inset-0 pattern-cells opacity-40" style={{ zIndex: 2 }} />

      <div className="section-container relative" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Living indicator */}
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="flex items-center justify-center gap-3 mb-12">
              <span className="pulse-dot" />
              <span className="organism-label">Living Growth System</span>
            </div>
          </div>

          {/* Hero headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-white leading-[0.95] mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Grow.{" "}
            <span className="bio-text">Evolve.</span>
            <br />Thrive.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/30 max-w-xl mx-auto mb-14 leading-relaxed font-light animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            We build living digital ecosystems that attract, nurture,
            and convert — growing your business organically, 24/7.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-living group"
            >
              Get a Free Strategy Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
            </a>
            <a href="#how-it-works" className="btn-membrane">
              <Play size={14} />
              See How It Works
            </a>
          </div>

          {/* Trust */}
          <p className="mt-20 organism-label animate-fade-in-up opacity-0" style={{ animationDelay: '1.6s', animationFillMode: 'forwards', color: 'hsl(0 0% 100% / 0.12)' }}>
            Trusted by startups & businesses across India
          </p>
        </div>
      </div>

      {/* Bottom organic fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" style={{ zIndex: 3 }} />
    </section>
  );
};

export default HeroSection;
