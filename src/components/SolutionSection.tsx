import { CheckCircle, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const SolutionSection = () => {
  const benefits = [
    "Attract high-quality leads",
    "Nurture them automatically",
    "Convert them into customers",
    "Save time and reduce manual work",
    "Scale your business with predictable growth",
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-cyan/30 bg-cyan/5 rounded mb-6">
              <Zap size={14} className="text-cyan" />
              <span className="terminal-text text-xs">solution.deploy()</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              We build{" "}
              <span className="gradient-text">growth systems</span>
              <br />not just websites.
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We fuse website design, digital marketing, and workflow
              automation into a complete business engine that runs 24/7.
            </p>

            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Initialize Your System
            </a>
          </ScrollReveal>

          <div className="space-y-3">
            <p className="terminal-text text-xs opacity-40 mb-4 uppercase tracking-widest">
              <span className="text-neon-magenta">$</span> system.capabilities:
            </p>
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 0.08}>
                <div className="flex items-center gap-4 p-4 rounded border border-border bg-card hover:border-cyan/30 transition-all group corner-accents">
                  <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 bg-cyan/10 border border-cyan/20 group-hover:shadow-[0_0_15px_hsl(190_100%_50%/0.3)] transition-shadow">
                    <CheckCircle className="w-5 h-5 text-cyan" />
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
