import { Search, Palette, Cog, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HowItWorksSection = () => {
  const steps = [
    { number: "01", icon: Search, title: "Discover", description: "We decode your business goals, audience, and growth blockers." },
    { number: "02", icon: Palette, title: "Design", description: "We architect your website and build your digital growth system." },
    { number: "03", icon: Cog, title: "Automate", description: "We deploy marketing and workflow automation pipelines." },
    { number: "04", icon: TrendingUp, title: "Scale", description: "We optimize, track metrics, and accelerate growth." },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 section-navy relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-10" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
              <span className="text-neon-magenta">$</span> process.execute()
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              4-step <span className="gradient-text">protocol</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.12}>
              <div className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-px bg-gradient-to-r from-cyan/40 to-transparent" />
                )}
                <div className="text-center cyber-card p-8 card-hover">
                  <span className="font-mono text-neon-magenta text-xs font-bold mb-4 block opacity-60">[{step.number}]</span>
                  <div className="inline-flex mb-5">
                    <div className="w-20 h-20 rounded flex items-center justify-center bg-cyan/5 border border-cyan/20 group-hover:border-cyan/50 group-hover:shadow-[0_0_30px_hsl(190_100%_50%/0.2)] transition-all">
                      <step.icon className="w-9 h-9 text-cyan" />
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm">{step.description}</p>
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
