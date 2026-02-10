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
    <section id="portfolio" className="py-24 md:py-32 section-navy relative overflow-hidden scanlines">
      <div className="absolute inset-0 pattern-grid opacity-10" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="tag-label">Cases</span>
            <div className="flex-1 h-px bg-cyan/15" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-[0.9] mb-16">
            PROVEN<br /><span className="gradient-text">RESULTS</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={index} direction={index === 0 ? "left" : "right"}>
              <div className="group brutal-card overflow-hidden card-hover h-full border-t-2 border-t-cyan/30">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <p className="font-mono text-[10px] text-cyan/40 uppercase tracking-widest mb-2">{study.client}</p>
                      <h3 className="text-2xl font-display font-bold text-white">{study.title}</h3>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center bg-cyan/8 border border-cyan/20 group-hover:bg-cyan group-hover:border-cyan transition-all">
                      <ArrowUpRight size={16} className="text-cyan group-hover:text-primary" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-4 border-l-2 border-l-cyan/20 pl-4">
                        <result.icon className="w-4 h-4 text-cyan flex-shrink-0" />
                        <p className="text-white/60 text-sm font-medium">{result.text}</p>
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
