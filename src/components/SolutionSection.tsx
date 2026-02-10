import { CheckCircle } from "lucide-react";
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
    <section className="py-32 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />
      <div className="absolute top-0 left-0 right-0 cine-hr" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="left">
            <span className="cine-label mb-6 block">The Solution</span>
            <div className="w-16 h-px bg-cyan/30 mb-8" />

            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-[0.95] mb-8">
              We build<br />
              <span className="gradient-text">growth<br />systems.</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              We fuse website design, digital marketing, and workflow
              automation into a complete business engine that runs 24/7.
            </p>

            <a href="#contact" className="btn-primary group">
              Start Building
              <span className="w-4 h-px bg-current group-hover:w-8 transition-all duration-500" />
            </a>
          </ScrollReveal>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 0.1}>
                <div className="flex items-center gap-5 p-5 border-b border-border/50 hover:border-cyan/20 transition-all duration-700 group">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
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
