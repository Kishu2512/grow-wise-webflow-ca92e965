import { Globe, BarChart3, Mail, Workflow, Bot } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ServicesSection = () => {
  const services = [
    { icon: Globe, title: "Web Design & Dev", description: "High-converting, fast, mobile-first websites that turn visitors into leads.", tag: "frontend" },
    { icon: BarChart3, title: "Digital Marketing", description: "SEO, ads, funnels, and lead gen strategies for consistent traffic.", tag: "marketing" },
    { icon: Mail, title: "Marketing Automation", description: "Email, WhatsApp, and CRM flows that follow up with every lead automatically.", tag: "automation" },
    { icon: Workflow, title: "Workflow Automation", description: "Zapier, Make, AI tools that eliminate manual busywork.", tag: "workflow" },
    { icon: Bot, title: "AI Integration", description: "Chatbots, AI workflows, and smart tools to run faster and leaner.", tag: "ai_ops" },
  ];

  return (
    <section id="services" className="py-20 md:py-28 md:min-h-screen md:flex md:items-center section-navy relative overflow-hidden scanlines">
      <div className="absolute inset-0 pattern-grid opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
              <span className="text-neon-magenta">$</span> services.list()
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Full stack <span className="gradient-text">growth</span>
            </h2>
            <p className="text-white/40 text-lg">Everything you need — under one roof.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="scale" delay={index * 0.08}>
              <div className="group cyber-card p-7 card-hover h-full">
                <span className="terminal-text text-[10px] opacity-30 block mb-4">/{service.tag}</span>
                <div className="w-12 h-12 rounded flex items-center justify-center mb-5 bg-cyan/10 border border-cyan/20 group-hover:shadow-[0_0_20px_hsl(190_100%_50%/0.3)] transition-all">
                  <service.icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
