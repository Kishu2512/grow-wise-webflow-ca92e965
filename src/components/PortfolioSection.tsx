import { TrendingUp, Clock, Users } from "lucide-react";

interface Props { isActive: boolean; }

const PortfolioSection = ({ isActive }: Props) => {
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
    <div className="snap-panel bg-as-black">
      <div className="section-container relative z-10 w-full">
        {isActive && (
          <>
            <div className="text-center mb-16">
              <span className="as-label opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>Case Studies</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.9] mt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Proven <span className="accent-text">results</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-fade-in-up bg-as-dark border border-white/5 p-10 hover:border-as-accent/20 transition-all duration-500 group"
                  style={{ animationDelay: `${0.5 + index * 0.15}s` }}
                >
                  <p className="as-label mb-3">{study.client}</p>
                  <h3 className="text-2xl font-bold text-white mb-8">{study.title}</h3>

                  <div className="space-y-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <result.icon className="w-4 h-4 text-as-accent/30 flex-shrink-0" />
                        <p className="text-white/30 text-sm">{result.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-8 left-8 panel-counter">09</div>
    </div>
  );
};

export default PortfolioSection;
