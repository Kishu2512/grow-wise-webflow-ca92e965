import { XCircle, AlertTriangle, X } from "lucide-react";
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
    <section className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-magenta/5 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-neon-magenta/30 bg-neon-magenta/10 rounded mb-6">
              <AlertTriangle className="w-4 h-4 text-neon-magenta" />
              <span className="terminal-text text-xs" style={{ color: 'hsl(320 100% 60%)' }}>
                error: system_failure_detected
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Is your business <span className="text-neon-magenta">stuck</span>?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <ScrollReveal direction="left" className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 border border-neon-magenta/20 rounded" />
              <img
                src={worriedBusinessman}
                alt="Overwhelmed business owner"
                className="relative rounded max-w-md w-full border border-white/10"
                style={{ filter: 'contrast(1.1) saturate(0.8)' }}
              />
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-neon-magenta/50" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-neon-magenta/50" />
            </div>
          </ScrollReveal>

          <div className="order-1 lg:order-2 space-y-3">
            {problems.map((problem, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 0.1}>
                <div className="flex items-start gap-4 p-4 cyber-card group hover:border-neon-magenta/40 transition-all">
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 bg-neon-magenta/10 border border-neon-magenta/20">
                    <X className="w-4 h-4 text-neon-magenta" />
                  </div>
                  <div>
                    <span className="terminal-text text-[10px] opacity-40 block mb-1" style={{ color: 'hsl(320 100% 60%)' }}>
                      err_{String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-white/70 text-base leading-relaxed">{problem}</p>
                  </div>
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
