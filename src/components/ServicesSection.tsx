import { Globe, BarChart3, Mail, Workflow, Bot } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ServicesSection = () => {
  const services = [
    { icon: Globe, title: "Web Design & Dev", description: "High-converting, fast, mobile-first websites that turn visitors into leads.", tag: "frontend" },
    { icon: BarChart3, title: "Digital Marketing", description: "SEO, ads, funnels, and lead gen strategies for consistent traffic.", tag: "marketing" },
    { icon: Mail, title: "Marketing Automation", description: "Email, WhatsApp, and CRM flows that follow up automatically.", tag: "auto" },
    { icon: Workflow, title: "Workflow Automation", description: "Zapier, Make, AI tools that eliminate manual busywork.", tag: "workflow" },
    { icon: Bot, title: "AI Integration", description: "Chatbots, AI workflows, and smart tools to run leaner.", tag: "ai" },
  ];

  return (
    <section id="services" className="py-24 md:py-32 section-navy relative overflow-hidden scanlines">
      <div className="absolute inset-0 pattern-grid opacity-15" />

      <div className="section-container relative z-10">
        {/* Brutalist header with thick line */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="tag-label">Services</span>
              <div className="flex-1 h-px bg-cyan/15" />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[0.9]">
              FULL STACK<br /><span className="gradient-text">GROWTH</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Brutalist broken grid — 2+3 asymmetric */}
        <div className="grid md:grid-cols-2 gap-3 mb-3">
          {services.slice(0, 2).map((service, index) => (
            <ScrollReveal key={index} direction={index === 0 ? "left" : "right"}>
              <div className="group brutal-card p-8 card-hover h-full border-t-2 border-t-cyan/20">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-[10px] text-cyan/30 uppercase tracking-widest">/{service.tag}</span>
                  <div className="w-12 h-12 flex items-center justify-center bg-cyan/8 border border-cyan/20 group-hover:shadow-[0_0_20px_hsl(190_100%_50%/0.2)] transition-all">
                    <service.icon className="w-6 h-6 text-cyan" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {services.slice(2).map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="group brutal-card p-8 card-hover h-full border-t-2 border-t-cyan/20">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-[10px] text-cyan/30 uppercase tracking-widest">/{service.tag}</span>
                  <div className="w-12 h-12 flex items-center justify-center bg-cyan/8 border border-cyan/20 group-hover:shadow-[0_0_20px_hsl(190_100%_50%/0.2)] transition-all">
                    <service.icon className="w-6 h-6 text-cyan" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
