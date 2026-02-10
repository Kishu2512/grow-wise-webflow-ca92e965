import { AlertTriangle } from "lucide-react";
import worriedBusinessman from "@/assets/worried-businessman.png";
import ScrollReveal from "./ScrollReveal";

const ProblemSection = () => {
  const problems = [
    "Your website looks outdated and doesn't convert visitors into leads",
    "You're wasting hours on manual follow-ups and admin work",
    "Leads come in, but nothing happens after",
    "Your marketing feels random, not systematic",
    "You're working harder, but revenue isn't scaling",
  ];

  return (
    <section className="relative overflow-hidden film-grain">
      {/* Full-bleed image background */}
      <div className="absolute inset-0">
        <img
          src={worriedBusinessman}
          alt=""
          className="w-full h-full object-cover object-center opacity-15 animate-slow-zoom"
          style={{ filter: 'saturate(0) contrast(1.3)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      <div className="absolute inset-0 pattern-grid opacity-10" />

      <div className="section-container relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — cinematic heading */}
          <ScrollReveal direction="left">
            <span className="cine-label mb-6 block">The Problem</span>
            <div className="w-16 h-px bg-neon-magenta/30 mb-8" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-8">
              Is your<br />business<br /><span className="text-neon-magenta/80">stuck?</span>
            </h2>
            <p className="text-white/25 text-lg max-w-sm leading-relaxed">
              These are the silent killers of growth that most businesses ignore.
            </p>
          </ScrollReveal>

          {/* Right — problems floating in */}
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 0.12}>
                <div className="flex items-start gap-5 p-6 bg-white/[0.02] border-l border-l-neon-magenta/20 hover:bg-white/[0.04] hover:border-l-neon-magenta/40 transition-all duration-700">
                  <span className="cine-label mt-1 flex-shrink-0 opacity-30 text-neon-magenta" style={{ color: 'hsl(320 100% 60% / 0.4)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/50 text-base leading-relaxed">{problem}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
