interface Props { isActive: boolean; }

const WhyUsSection = ({ isActive }: Props) => {
  const stats = [
    { value: "50+", label: "Projects" },
    { value: "3×", label: "Lead Growth" },
    { value: "80%", label: "Time Saved" },
    { value: "24/7", label: "Always On" },
  ];

  const reasons = [
    "Growth-focused, not just design",
    "Automation-first approach",
    "AI-ready systems",
    "Fast delivery timelines",
    "Transparent pricing",
    "Long-term support",
  ];

  return (
    <div className="snap-panel bg-as-black">
      <div className="section-container relative z-10 w-full">
        {isActive && (
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="as-label opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>Why Us</span>
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.85] mt-6 mb-16 opacity-0 animate-slide-left" style={{ animationDelay: '0.3s' }}>
                Why<br /><span className="accent-text">Webflowra</span>?
              </h2>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                    <p className="text-4xl md:text-5xl font-bold accent-text mb-1" style={{ fontFamily: 'Syne' }}>{stat.value}</p>
                    <p className="as-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-0">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-slide-right border-b border-white/5 py-5 flex items-center gap-5 group"
                  style={{ animationDelay: `${0.4 + index * 0.08}s` }}
                >
                  <span className="w-1.5 h-1.5 bg-as-accent/30 group-hover:bg-as-accent flex-shrink-0 transition-colors duration-300" />
                  <span className="text-white/35 group-hover:text-white/70 font-medium text-base transition-colors duration-300">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-8 left-8 panel-counter">07</div>
    </div>
  );
};

export default WhyUsSection;
