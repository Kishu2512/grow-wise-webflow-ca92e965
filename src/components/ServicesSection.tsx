import {
  Globe,
  BarChart3,
  Mail,
  Workflow,
  Bot,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Design & Development",
      description:
        "High-converting, fast, mobile-friendly websites designed to turn visitors into leads.",
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description:
        "SEO, ads, funnels, and lead generation strategies that bring consistent traffic.",
    },
    {
      icon: Mail,
      title: "Marketing Automation",
      description:
        "Email, WhatsApp, and CRM automation that follows up with every lead automatically.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Zapier, Make, AI tools, and internal systems that eliminate manual work.",
    },
    {
      icon: Bot,
      title: "AI Integration",
      description:
        "Chatbots, AI workflows, and smart tools to run your business faster and smarter.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 section-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Everything you need to grow — under one roof
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-accent/40 hover:bg-white/10 transition-all card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/30 transition-all">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
