import { Search, Palette, Cog, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HowItWorksSection = () => {
  const steps = [
    { number: "01", icon: Search, title: "Discover", description: "We decode your goals, audience, and growth blockers." },
    { number: "02", icon: Palette, title: "Design", description: "We architect your website and digital growth system." },
    { number: "03", icon: Cog, title: "Automate", description: "We deploy marketing and workflow automation." },
    { number: "04", icon: TrendingUp, title: "Scale", description: "We optimize, track, and accelerate growth." },
  ];

  return (
    <section id="how-it-works" className="py-32 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />
      <div className="absolute top-0 left-0 right-0 cine-hr" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="cine-label mb-6 block">Our Process</span>
            <div className="w-12 h-px bg-cyan/30 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-[0.95]">
              Four steps to<br /><span className="gradient-text">liftoff</span>.
            </h2>
          </div>
        </ScrollReveal>

        {/* Cinematic timeline — vertical, spacious */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.15}>
              <div className={`flex gap-8 md:gap-12 items-start ${index < steps.length - 1 ? 'pb-16 md:pb-20 border-l border-border/30 ml-6 pl-12' : 'ml-6 pl-12'} relative`}>
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-[13px] h-[13px] -translate-x-[7px] bg-background border-2 border-cyan/40 group-hover:border-cyan transition-colors duration-700" />

                <div className="flex-1">
                  <span className="cine-label block mb-3" style={{ color: 'hsl(190 100% 50% / 0.3)' }}>{step.number}</span>
                  <div className="flex items-center gap-4 mb-4">
                    <step.icon className="w-5 h-5 text-cyan/50" />
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
