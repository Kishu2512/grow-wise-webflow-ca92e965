import { Check } from "lucide-react";

const WhyUsSection = () => {
  const reasons = [
    "Growth-focused, not just design",
    "Automation-first approach",
    "AI-ready systems",
    "Fast delivery timelines",
    "Transparent pricing",
    "Long-term support",
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-primary rounded-2xl text-center">
                <p className="stats-highlight mb-2">50+</p>
                <p className="text-white/70">Projects Delivered</p>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl text-center">
                <p className="stats-highlight mb-2">3×</p>
                <p className="text-muted-foreground">Avg. Lead Increase</p>
              </div>
              <div className="p-8 bg-card border border-border rounded-2xl text-center">
                <p className="stats-highlight mb-2">80%</p>
                <p className="text-muted-foreground">Time Saved</p>
              </div>
              <div className="p-8 bg-primary rounded-2xl text-center">
                <p className="stats-highlight mb-2">24/7</p>
                <p className="text-white/70">Automation Running</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8">
              Why businesses choose{" "}
              <span className="gradient-text">Webflowra</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
