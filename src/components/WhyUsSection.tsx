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
    <section className="py-32 md:py-40 section-living relative overflow-hidden organic-grain">
      <div className="absolute inset-0 pattern-cells opacity-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-bio-glow/3 blob animate-breathe" style={{ filter: 'blur(160px)' }} />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-bio-pulse/3 blob animate-drift delay-3000" style={{ filter: 'blur(100px)' }} />

      <div className="section-container relative z-10">
        {/* Living stats */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-8 mb-32 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <p className="stats-living mb-3 group-hover:scale-105 transition-transform duration-700">{stat.value}</p>
                <p className="organism-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="bio-divider mb-24" />

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <ScrollReveal direction="left">
            <span className="organism-label mb-6 block">Why Us</span>
            <div className="w-16 h-px bg-bio-glow/30 mb-8" />
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95]">
              Why choose<br /><span className="bio-text">Webflowra</span>?
            </h2>
          </ScrollReveal>

          <div className="space-y-2">
            {reasons.map((reason, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 0.08}>
                <div className="flex items-center gap-5 py-5 px-4 rounded-xl border border-white/3 hover:border-bio-glow/15 hover:bg-white/[0.02] transition-all duration-700 group">
                  <div className="flex-shrink-0">
                    <span className="pulse-dot" />
                  </div>
                  <span className="text-white/45 group-hover:text-white/75 font-medium transition-colors duration-700">{reason}</span>
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
