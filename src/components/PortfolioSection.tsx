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
    <section id="portfolio" className="py-32 md:py-40 section-living relative overflow-hidden organic-grain">
      <div className="absolute inset-0 pattern-cells opacity-10" />

      {/* Organic blobs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-bio-glow-warm/3 blob animate-drift" style={{ filter: 'blur(120px)' }} />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="pulse-dot" />
              <span className="organism-label">Outcomes</span>
            </div>
            <div className="w-12 h-px bg-bio-glow/30 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95]">
              Living <span className="bio-text">proof</span>.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.15}>
              <div className="group living-card p-10 h-full">
                <div className="flex items-start justify-between mb-10">
                  <div>
                    <p className="organism-label mb-3">{study.client}</p>
                    <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-bio-glow/10 group-hover:border-bio-glow/40 group-hover:bg-bio-glow/10 transition-all duration-700">
                    <ArrowUpRight size={16} className="text-bio-glow/40 group-hover:text-bio-glow" />
                  </div>
                </div>

                <div className="space-y-4">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <span className="pulse-dot" />
                      </div>
                      <p className="text-white/35 text-sm font-medium">{result.text}</p>
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
