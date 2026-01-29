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
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Zap size={16} className="text-accent" />
              <span className="text-accent text-sm font-medium">Our Solution</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Webflowra builds{" "}
              <span className="gradient-text">growth systems</span> — not just
              websites.
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We combine website design, digital marketing, and workflow
              automation to create a complete business engine that runs 24/7.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all"
            >
              Start Building Your System
            </a>
          </div>

          {/* Right Content - Benefits */}
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-6">
              Our systems help you:
            </p>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-accent/30 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <p className="text-foreground text-lg font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
