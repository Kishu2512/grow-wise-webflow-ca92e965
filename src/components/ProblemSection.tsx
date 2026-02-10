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
    <section className="relative overflow-hidden organic-grain">
      <div className="absolute inset-0">
        <img
          src={worriedBusinessman}
          alt=""
          className="w-full h-full object-cover object-center opacity-10 animate-slow-zoom"
          style={{ filter: 'saturate(0) contrast(1.2) hue-rotate(40deg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bio-deep via-bio-deep/95 to-bio-deep/80" />
      </div>

      <div className="absolute inset-0 pattern-cells opacity-15" />

      {/* Organic blob */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-bio-magenta/5 blob animate-breathe delay-1000" style={{ filter: 'blur(120px)' }} />

      <div className="section-container relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="left">
            <span className="organism-label mb-6 block" style={{ color: 'hsl(320 70% 55% / 0.5)' }}>Diagnosis</span>
            <div className="w-16 h-px mb-8" style={{ background: 'linear-gradient(90deg, hsl(320 70% 55% / 0.3), transparent)' }} />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-8">
              Is your<br />ecosystem<br /><span style={{ color: 'hsl(320 70% 55% / 0.7)' }}>dying?</span>
            </h2>
            <p className="text-white/20 text-lg max-w-sm leading-relaxed">
              These are the toxins silently killing your business growth.
            </p>
          </ScrollReveal>

          <div className="space-y-3">
            {problems.map((problem, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 0.12}>
                <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border border-bio-magenta/5 hover:bg-white/[0.04] hover:border-bio-magenta/15 transition-all duration-700">
                  <span className="organism-label mt-1 flex-shrink-0" style={{ color: 'hsl(320 70% 55% / 0.35)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/45 text-base leading-relaxed">{problem}</p>
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
