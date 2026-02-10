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
    { value: "50+", label: "Projects" },
    { value: "3×", label: "Lead Increase" },
    { value: "80%", label: "Time Saved" },
    { value: "24/7", label: "Running" },
  ];

  return (
    <section className="py-24 md:py-32 section-navy relative overflow-hidden scanlines">
      <div className="absolute inset-0 pattern-grid opacity-10" />

      <div className="section-container relative z-10">
        {/* Brutalist stats — oversized numbers in a raw horizontal strip */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-20 border-2 border-cyan/15">
            {stats.map((stat, i) => (
              <div key={i} className="p-8 md:p-10 text-center border-r border-b border-cyan/10 last:border-r-0 md:[&:nth-child(n+3)]:border-b-0">
                <p className="stats-highlight mb-2">{stat.value}</p>
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Why us content */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <ScrollReveal direction="left" className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-cyan/40" />
              <span className="tag-label">Why Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[0.9]">
              WHY<br /><span className="gradient-text">WEBFLOWRA</span>?
            </h2>
          </ScrollReveal>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-2">
            {reasons.map((reason, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 0.06}>
                <div className="flex items-center gap-3 p-4 border border-white/5 hover:border-cyan/20 hover:bg-cyan/[0.03] transition-all group">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 bg-cyan/10 border border-cyan/20 group-hover:bg-cyan/20">
                    <Check className="w-3.5 h-3.5 text-cyan" />
                  </div>
                  <span className="text-white/70 text-sm font-medium">{reason}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
