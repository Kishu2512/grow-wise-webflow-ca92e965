import { Search, Palette, Cog, TrendingUp } from "lucide-react";

interface Props { isActive: boolean; }

const HowItWorksSection = ({ isActive }: Props) => {
  const steps = [
    { num: "01", icon: Search, title: "Discover", desc: "We decode your goals, audience, and growth blockers." },
    { num: "02", icon: Palette, title: "Design", desc: "We architect your website and digital growth system." },
    { num: "03", icon: Cog, title: "Automate", desc: "We deploy marketing and workflow automation." },
    { num: "04", icon: TrendingUp, title: "Scale", desc: "We optimize, track, and accelerate growth." },
  ];

  return (
    <div className="snap-panel bg-as-dark">
      <div className="section-container relative z-10 w-full">
        {isActive && (
          <>
            <div className="text-center mb-20">
              <span className="as-label opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>Process</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.9] mt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Four steps to <span className="accent-text">liftoff</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-0 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-fade-in-up text-center relative px-6"
                  style={{ animationDelay: `${0.4 + index * 0.15}s` }}
                >
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] right-0 h-px bg-white/5" />
                  )}

                  <span className="font-mono text-5xl md:text-6xl font-bold text-white/[0.04] block mb-4">{step.num}</span>
                  <step.icon className="w-5 h-5 text-as-accent/50 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/25 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-8 left-8 panel-counter">06</div>
    </div>
  );
};

export default HowItWorksSection;
