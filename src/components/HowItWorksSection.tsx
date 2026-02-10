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
    <section id="how-it-works" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="tag-label">Process</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground leading-[0.9] mb-16">
            4-STEP<br /><span className="gradient-text">PROTOCOL</span>
          </h2>
        </ScrollReveal>

        {/* Brutalist horizontal timeline — stacked blocks */}
        <div className="grid md:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.12}>
              <div className="relative group border border-border bg-card hover:bg-cyan/[0.02] transition-all p-8 md:p-6 lg:p-8">
                {/* Giant step number */}
                <span className="brutal-number">{step.number}</span>

                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center bg-cyan/8 border border-cyan/20 mb-6 group-hover:shadow-[3px_3px_0_hsl(190_100%_50%/0.2)] transition-all">
                    <step.icon className="w-7 h-7 text-cyan" />
                  </div>

                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 w-4 h-px bg-cyan/30 translate-x-2 z-20" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
