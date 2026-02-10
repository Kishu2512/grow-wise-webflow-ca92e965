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
    <section id="services" className="py-32 md:py-40 section-dark relative overflow-hidden film-grain">
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/3 rounded-full blur-[200px] animate-breathe" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-24">
            <span className="cine-label mb-6 block">What We Do</span>
            <div className="w-12 h-px bg-cyan/30 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95]">
              Everything you need<br />to <span className="gradient-text">grow</span>.
            </h2>
          </div>
        </ScrollReveal>

        {/* Cinematic staggered layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="fade" delay={index * 0.1}>
              <div className="group p-10 bg-primary/80 hover:bg-primary/60 transition-all duration-700 h-full relative overflow-hidden">
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br from-cyan/5 to-transparent" />

                <div className="relative z-10">
                  <service.icon className="w-7 h-7 text-cyan/40 group-hover:text-cyan/80 transition-all duration-700 mb-8" />
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/50 transition-colors duration-700">{service.description}</p>
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
