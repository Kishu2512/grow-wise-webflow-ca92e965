import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WhyUsSection = () => {
  const reasons = [
    "Growth-focused, not just design",
    "Automation-first approach",
    "AI-ready systems",
    "Fast delivery timelines",
    "Transparent pricing",
    "Long-term support",
  ];

  const stats = [
    { value: "50+", label: "Projects" },
    { value: "3×", label: "Lead Growth" },
    { value: "80%", label: "Time Saved" },
    { value: "24/7", label: "Always On" },
  ];

  return (
    <section className="py-32 md:py-40 section-dark relative overflow-hidden film-grain">
      <div className="absolute inset-0 pattern-grid opacity-8" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan/3 rounded-full blur-[200px] animate-breathe" />

      <div className="section-container relative z-10">
        {/* Cinematic stats — large, floating numbers */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-8 mb-32 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="stats-highlight mb-3">{stat.value}</p>
                <p className="cine-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="cine-hr mb-24" />

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <ScrollReveal direction="left">
            <span className="cine-label mb-6 block">Why Us</span>
            <div className="w-16 h-px bg-cyan/30 mb-8" />
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95]">
              Why choose<br /><span className="gradient-text">Webflowra</span>?
            </h2>
          </ScrollReveal>

          <div className="space-y-1">
            {reasons.map((reason, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 0.08}>
                <div className="flex items-center gap-5 py-5 border-b border-white/5 hover:border-cyan/15 transition-all duration-700 group">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 opacity-30 group-hover:opacity-80 transition-opacity duration-700">
                    <Check className="w-4 h-4 text-cyan" />
                  </div>
                  <span className="text-white/50 group-hover:text-white/80 font-medium transition-colors duration-700">{reason}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
