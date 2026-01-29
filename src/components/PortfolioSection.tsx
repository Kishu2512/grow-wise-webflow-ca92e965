import { TrendingUp, Clock, Users, ArrowUpRight } from "lucide-react";

const PortfolioSection = () => {
  const caseStudies = [
    {
      title: "Lead Generation System",
      client: "Business Coach",
      results: [
        { icon: TrendingUp, text: "Increased leads by 3× in 45 days" },
        { icon: Clock, text: "Automated 80% of follow-ups" },
        { icon: Users, text: "Reduced admin time by 60%" },
      ],
      color: "from-accent/20 to-teal/20",
    },
    {
      title: "Full Growth System",
      client: "SaaS Startup",
      results: [
        { icon: TrendingUp, text: "Launched a high-converting website" },
        { icon: Clock, text: "Built full CRM automation" },
        { icon: Users, text: "Generated 120+ leads in 30 days" },
      ],
      color: "from-teal/20 to-accent/20",
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Proven results
          </h2>
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden card-hover hover:border-accent/30"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-30`}
              />

              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">
                      {study.client}
                    </p>
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {study.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-colors">
                    <ArrowUpRight
                      size={20}
                      className="text-accent group-hover:text-primary"
                    />
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <result.icon className="w-5 h-5 text-accent" />
                      </div>
                      <p className="text-foreground font-medium">{result.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
