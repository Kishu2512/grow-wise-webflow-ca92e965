import { Search, Palette, Cog, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HowItWorksSection = () => {
  const steps = [
    { number: "01", icon: Search, title: "Discover", description: "We study your ecosystem — goals, audience, and growth blockers." },
    { number: "02", icon: Palette, title: "Design", description: "We architect your website and digital growth organism." },
    { number: "03", icon: Cog, title: "Cultivate", description: "We deploy marketing and workflow automation that adapts." },
    { number: "04", icon: TrendingUp, title: "Evolve", description: "We optimize, track, and accelerate organic growth." },
  ];

  return (
    <section id="how-it-works" className="py-32 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-cells opacity-5" />
      <div className="bio-divider absolute top-0 left-0 right-0" />

      {/* Organic glow */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-bio-glow/3 blob animate-drift delay-1000" style={{ filter: 'blur(120px)' }} />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="pulse-dot" />
              <span className="organism-label">Growth Cycle</span>
            </div>
            <div className="w-12 h-px bg-bio-glow/30 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-[0.95]">
              Four phases of<br /><span className="bio-text">evolution</span>.
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.15}>
              <div className={`flex gap-8 md:gap-12 items-start ${index < steps.length - 1 ? 'pb-16 md:pb-20 ml-6 pl-12' : 'ml-6 pl-12'} relative`}>
                {/* Organic vine */}
                {index < steps.length - 1 && (
                  <div className="absolute left-0 top-5 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, hsl(160 100% 40% / 0.2), hsl(160 100% 40% / 0.05))' }} />
                )}

                {/* Living node */}
                <div className="absolute left-0 top-1 -translate-x-[4px]">
                  <span className="pulse-dot" />
                </div>

                <div className="flex-1">
                  <span className="organism-label block mb-3" style={{ color: 'hsl(160 100% 40% / 0.25)' }}>{step.number}</span>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="feature-icon-organic w-10 h-10">
                      <step.icon className="w-4 h-4 text-bio-glow/50" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-md">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
