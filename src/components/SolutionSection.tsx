import { CheckCircle, Zap } from "lucide-react";

const SolutionSection = () => {
  const benefits = [
    "Attract high-quality leads",
    "Nurture them automatically",
    "Convert them into customers",
    "Save time and reduce manual work",
    "Scale your business with predictable growth",
  ];

  return (
    <section className="py-20 md:py-28 section-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <Zap size={16} className="text-accent" />
              <span className="text-accent text-sm font-medium">Our Solution</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Webflowra builds{" "}
              <span className="gradient-text">growth systems</span> — not just
              websites.
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We combine website design, digital marketing, and workflow
              automation to create a complete business engine that runs 24/7.
            </p>

            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Start Building Your System
            </a>
          </div>

          {/* Right Content - Benefits */}
          <div className="space-y-4">
            <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-6">
              Our systems help you:
            </p>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <p className="text-white text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
