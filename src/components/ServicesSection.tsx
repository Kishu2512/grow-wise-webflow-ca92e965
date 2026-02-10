import { Globe, BarChart3, Mail, Workflow, Bot } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ServicesSection = () => {
  const services = [
    { icon: Globe, title: "Web Design & Development", description: "High-converting, fast, mobile-first websites that turn visitors into leads." },
    { icon: BarChart3, title: "Digital Marketing", description: "SEO, ads, funnels, and lead gen strategies for consistent traffic." },
    { icon: Mail, title: "Marketing Automation", description: "Email, WhatsApp, and CRM flows that follow up automatically." },
    { icon: Workflow, title: "Workflow Automation", description: "Zapier, Make, AI tools that eliminate manual busywork." },
    { icon: Bot, title: "AI Integration", description: "Chatbots, AI workflows, and smart tools to run faster." },
  ];

  return (
    <section id="services" className="py-32 md:py-40 section-living relative overflow-hidden organic-grain">
      <div className="absolute inset-0 pattern-cells opacity-15" />

      {/* Living blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-bio-glow/3 blob animate-breathe" style={{ filter: 'blur(180px)' }} />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-bio-pulse/3 blob animate-drift delay-2000" style={{ filter: 'blur(100px)' }} />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="pulse-dot" />
              <span className="organism-label">Capabilities</span>
            </div>
            <div className="w-12 h-px bg-bio-glow/30 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95]">
              Everything your<br />ecosystem <span className="bio-text">needs</span>.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="fade" delay={index * 0.1}>
              <div className="group living-card p-8 h-full relative overflow-hidden">
                {/* Bio glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[20px]" style={{ background: 'radial-gradient(circle at 30% 30%, hsl(160 100% 40% / 0.06), transparent 70%)' }} />

                <div className="relative z-10">
                  <div className="feature-icon-organic mb-8">
                    <service.icon className="w-6 h-6 text-bio-glow/60 group-hover:text-bio-glow transition-all duration-700" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
                  <p className="text-white/25 text-sm leading-relaxed group-hover:text-white/45 transition-colors duration-700">{service.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
