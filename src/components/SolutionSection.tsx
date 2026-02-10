interface Props { isActive: boolean; }

const SolutionSection = ({ isActive }: Props) => {
  const benefits = [
    "Attract high-quality leads",
    "Nurture them automatically",
    "Convert into customers",
    "Save time & reduce manual work",
    "Scale with predictable growth",
  ];

  return (
    <div className="snap-panel bg-as-dark">
      <div className="section-container relative z-10 w-full">
        {isActive && (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="as-label opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>The Solution</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.85] mt-6 opacity-0 animate-slide-left" style={{ animationDelay: '0.3s' }}>
                We build<br /><span className="accent-text">growth<br />systems.</span>
              </h2>
              <p className="text-white/20 text-lg leading-relaxed mt-8 max-w-md opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Website design + digital marketing + workflow automation — fused into one engine that runs 24/7.
              </p>
            </div>

            <div className="space-y-0">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-slide-right border-b border-white/5 py-5 flex items-center gap-6 group"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <span className="w-2 h-2 bg-as-accent/40 group-hover:bg-as-accent transition-colors duration-300 flex-shrink-0" />
                  <p className="text-white/40 group-hover:text-white/70 text-lg font-light transition-colors duration-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-8 left-8 panel-counter">04</div>
    </div>
  );
};

export default SolutionSection;
