import { Sprout } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const SolutionSection = () => {
  const benefits = [
    "Attract high-quality leads organically",
    "Nurture them through living automation",
    "Convert them into loyal customers",
    "Save time & eliminate manual work",
    "Scale with self-sustaining growth",
  ];

  return (
    <section className="py-32 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-cells opacity-5" />
      <div className="bio-divider absolute top-0 left-0 right-0" />

      {/* Organic blob */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-bio-glow/3 blob animate-drift" style={{ filter: 'blur(120px)' }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="left">
            <span className="organism-label mb-6 block">The Cure</span>
            <div className="w-16 h-px bg-bio-glow/30 mb-8" />

            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-[0.95] mb-8">
              We cultivate<br />
              <span className="bio-text">growth<br />ecosystems.</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              We fuse website design, digital marketing, and intelligent
              automation into a living system that grows stronger every day.
            </p>

            <a href="#contact" className="btn-living group">
              Start Growing
              <Sprout size={16} className="group-hover:rotate-12 transition-transform duration-500" />
            </a>
          </ScrollReveal>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 0.1}>
                <div className="flex items-center gap-5 p-5 rounded-xl border border-border/30 hover:border-bio-glow/20 transition-all duration-700 group bg-card/30">
                  <div className="flex-shrink-0">
                    <span className="pulse-dot" />
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
