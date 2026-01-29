import { Search, Palette, Cog, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      description:
        "We understand your business goals, audience, and growth challenges.",
    },
    {
      number: "02",
      icon: Palette,
      title: "Design",
      description:
        "We design your website and build your digital growth system.",
    },
    {
      number: "03",
      icon: Cog,
      title: "Automate",
      description: "We set up marketing and workflow automation.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Scale",
      description: "We optimize, track results, and help you scale faster.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 section-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Our simple 4-step growth process
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/10" />
              )}

              <div className="text-center">
                {/* Step Number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-32 h-32 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group hover:border-accent/50 hover:bg-white/10 transition-all card-hover">
                    <step.icon className="w-12 h-12 text-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-primary font-bold text-sm flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
