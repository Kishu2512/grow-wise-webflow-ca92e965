import { CheckCircle, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const SolutionSection = () => {
  const benefits = [
    "Attract high-quality leads",
    "Nurture them automatically",
    "Convert them into customers",
    "Save time & reduce manual work",
    "Scale with predictable growth",
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />

      <div className="section-container relative z-10">
        {/* Brutalist split — text LEFT, oversized word RIGHT */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <ScrollReveal direction="left" className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-cyan/50" />
              <span className="tag-label">Solution</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground leading-[0.9] mb-8">
              WE BUILD<br />
              <span className="gradient-text">GROWTH<br />SYSTEMS</span>
            </h2>

            <div className="w-20 h-[3px] bg-cyan/40 mb-8" />

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              We fuse website design, digital marketing, and workflow
              automation into a complete business engine that runs 24/7.
            </p>

            <a href="#contact" className="btn-primary inline-flex items-center gap-3">
              Initialize Your System
            </a>
          </ScrollReveal>

          <div className="lg:col-span-5 space-y-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-cyan/30" />
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                Capabilities
              </span>
            </div>
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 0.08}>
                <div className="flex items-center gap-4 p-4 border border-border bg-card hover:border-cyan/30 hover:translate-x-[-2px] hover:shadow-[2px_2px_0_hsl(190_100%_50%/0.2)] transition-all group">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-cyan/10 border border-cyan/20 group-hover:bg-cyan/20">
                    <CheckCircle className="w-4 h-4 text-cyan" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{benefit}</p>
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
