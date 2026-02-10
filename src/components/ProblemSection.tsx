import { AlertTriangle, X } from "lucide-react";
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
    <section className="py-24 md:py-32 section-navy relative overflow-hidden scanlines">
      <div className="absolute inset-0 pattern-grid opacity-10" />

      <div className="section-container relative z-10">
        {/* Brutalist asymmetric header — RIGHT aligned */}
        <ScrollReveal>
          <div className="flex justify-end mb-16">
            <div className="max-w-2xl text-right">
              <div className="tag-label inline-block mb-6" style={{ color: 'hsl(320 100% 60%)', borderColor: 'hsl(320 100% 60% / 0.3)' }}>
                ⚠ System Failure
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[0.9]">
                IS YOUR<br />BUSINESS<br /><span className="text-neon-magenta">STUCK</span>?
              </h2>
            </div>
          </div>
        </ScrollReveal>

        {/* Broken grid — image bleeds left, problems offset right */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <ScrollReveal direction="left" className="lg:col-span-5">
            <div className="relative offset-border">
              <img
                src={worriedBusinessman}
                alt="Overwhelmed business owner"
                className="w-full border-2 border-white/10"
                style={{ filter: 'contrast(1.1) saturate(0.6) brightness(0.9)' }}
              />
              {/* Overlapping label */}
              <div className="absolute -bottom-4 -right-4 bg-neon-magenta px-4 py-2 font-mono text-[10px] text-white font-bold uppercase tracking-wider">
                Pain Points Detected
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7 lg:pl-6 space-y-2">
            {problems.map((problem, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 0.08}>
                <div className="flex items-start gap-4 p-5 brutal-card group hover:border-neon-magenta/30 border-l-2 border-l-neon-magenta/30">
                  <span className="font-mono text-neon-magenta text-xs font-bold mt-1 flex-shrink-0 opacity-40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/60 text-base leading-relaxed">{problem}</p>
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
