import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WhyUsSection = () => {
  const reasons = [
    "Growth-focused, not just design",
    "Automation-first approach",
    "AI-ready systems",
    "Fast delivery timelines",
    "Transparent pricing",
    "Long-term support",
  ];

  const stats = [
    { value: "50+", label: "Projects Deployed" },
    { value: "3×", label: "Avg. Lead Increase" },
    { value: "80%", label: "Time Saved" },
    { value: "24/7", label: "Automation Running" },
  ];

  return (
    <section className="py-20 md:py-28 md:min-h-screen md:flex md:items-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} direction="scale" delay={i * 0.1}>
                <div className={`p-7 rounded border text-center card-hover ${
                  i % 2 === 0 ? "bg-primary border-cyan/20" : "bg-card border-border"
                }`}>
                  <p className="stats-highlight mb-2">{stat.value}</p>
                  <p className={i % 2 === 0 ? "text-white/50 text-sm" : "text-muted-foreground text-sm"}>
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="right">
            <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
              <span className="text-neon-magenta">$</span> why.choose_us()
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8">
              Why <span className="gradient-text">Webflowra</span>?
            </h2>

            <div className="grid sm:grid-cols-2 gap-3">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded border border-transparent hover:border-cyan/20 hover:bg-cyan/5 transition-all">
                  <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 bg-cyan/10 border border-cyan/20">
                    <Check className="w-3.5 h-3.5 text-cyan" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
