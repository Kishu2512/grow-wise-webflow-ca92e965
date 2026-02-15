import worriedBusinessman from "@/assets/worried-businessman.png";

interface Props { isActive: boolean; }

const ProblemSection = ({ isActive }: Props) => {
  const problems = [
    "Website doesn't convert",
    "Manual follow-ups waste hours",
    "Leads die in your inbox",
    "Marketing feels random",
    "Revenue isn't scaling",
  ];

  return (
    <div className="snap-panel bg-as-black">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src={worriedBusinessman}
          alt=""
          className="w-full h-full object-cover opacity-8"
          style={{ filter: 'saturate(0) contrast(1.4)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-as-black via-as-black/95 to-as-black/70" />
      </div>

      <div className="section-container relative z-10 w-full">
        {isActive && (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="as-label opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>The Problem</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.85] mt-6 opacity-0 animate-slide-left" style={{ animationDelay: '0.3s' }}>
                Is your<br />business<br /><span className="accent-text" style={{ textShadow: '0 0 30px hsl(200 100% 55% / 0.3)' }}>stuck?</span>
              </h2>
            </div>

            <div className="space-y-0">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-slide-right border-b border-white/5 py-6 flex items-center gap-6"
                  style={{ animationDelay: `${0.4 + index * 0.12}s` }}
                >
                  <span className="font-mono text-[11px] text-white/10 tracking-wider w-8">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white/40 text-lg font-light">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-8 left-8 panel-counter">03</div>
    </div>
  );
};

export default ProblemSection;
