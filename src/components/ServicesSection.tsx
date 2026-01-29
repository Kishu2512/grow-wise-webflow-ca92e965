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
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Everything you need to grow — under one roof
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-all card-hover"
            >
              <div className="feature-icon mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
