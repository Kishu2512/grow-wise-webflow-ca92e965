import { TrendingUp, Clock, Users, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PortfolioSection = () => {
  const caseStudies = [
    {
      title: "Lead Generation System",
      client: "Business Coach",
      results: [
        { icon: TrendingUp, text: "3× leads in 45 days" },
        { icon: Clock, text: "80% follow-ups automated" },
        { icon: Users, text: "60% less admin time" },
      ],
    },
    {
      title: "Full Growth System",
      client: "SaaS Startup",
      results: [
        { icon: TrendingUp, text: "High-converting site launched" },
        { icon: Clock, text: "Full CRM automation built" },
        { icon: Users, text: "120+ leads in 30 days" },
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 md:min-h-screen md:flex md:items-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
              <span className="text-neon-magenta">$</span> cases.showcase()
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Proven <span className="gradient-text">results</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={index} direction={index === 0 ? "left" : "right"}>
              <div className="group rounded border border-border bg-card overflow-hidden card-hover hover:border-cyan/30 relative h-full">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan/30" />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="terminal-text text-xs opacity-40 mb-1">{study.client}</p>
                      <h3 className="text-xl font-display font-bold text-foreground">{study.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded flex items-center justify-center bg-cyan/10 border border-cyan/20 group-hover:bg-cyan group-hover:border-cyan transition-colors">
                      <ArrowUpRight size={18} className="text-cyan group-hover:text-primary" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded flex items-center justify-center bg-cyan/10 border border-cyan/20 flex-shrink-0">
                          <result.icon className="w-4 h-4 text-cyan" />
                        </div>
                        <p className="text-foreground text-sm font-medium">{result.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
