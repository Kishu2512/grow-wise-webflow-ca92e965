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
    <section id="portfolio" className="py-32 md:py-40 section-dark relative overflow-hidden film-grain">
      <div className="absolute inset-0 pattern-grid opacity-8" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="cine-label mb-6 block">Case Studies</span>
            <div className="w-12 h-px bg-cyan/30 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95]">
              Proven <span className="gradient-text">results</span>.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.15}>
              <div className="group cine-card p-10 h-full">
                <div className="flex items-start justify-between mb-10">
                  <div>
                    <p className="cine-label mb-3">{study.client}</p>
                    <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center border border-cyan/10 group-hover:border-cyan/40 group-hover:bg-cyan/10 transition-all duration-700">
                    <ArrowUpRight size={16} className="text-cyan/40 group-hover:text-cyan" />
                  </div>
                </div>

                <div className="space-y-5">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <result.icon className="w-4 h-4 text-cyan/40 flex-shrink-0" />
                      <p className="text-white/40 text-sm font-medium">{result.text}</p>
                    </div>
                  ))}
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
