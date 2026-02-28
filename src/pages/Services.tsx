import { Helmet } from "react-helmet-async";
import { Globe, BarChart3, Mail, Workflow, Bot, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    slug: "web-design",
    description: "Webflowra designs high-converting, fast, mobile-first websites that turn visitors into leads.",
    highlights: ["Responsive design", "SEO-optimized", "Conversion-focused", "Mobile-first"],
    tag: "frontend",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Webflowra runs SEO, paid ads, funnels, and lead gen strategies for consistent traffic and predictable growth.",
    highlights: ["SEO & SEM", "Paid advertising", "Sales funnels", "Analytics"],
    tag: "marketing",
  },
  {
    icon: Mail,
    title: "Marketing Automation",
    slug: "marketing-automation",
    description: "Webflowra builds email, WhatsApp, and CRM flows that follow up with every lead automatically.",
    highlights: ["Email sequences", "WhatsApp automation", "CRM integration", "Lead nurturing"],
    tag: "automation",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    slug: "workflow-automation",
    description: "Webflowra uses Zapier, Make, and AI tools to eliminate manual busywork and streamline operations.",
    highlights: ["Zapier & Make", "Process automation", "Data sync", "API integrations"],
    tag: "workflow",
  },
  {
    icon: Bot,
    title: "AI Integration",
    slug: "ai-integration",
    description: "Webflowra integrates chatbots, AI workflows, and smart tools so your business runs faster and leaner.",
    highlights: ["AI chatbots", "Smart workflows", "Content AI", "Predictive analytics"],
    tag: "ai_ops",
  },
];

const Services = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to learn more about Webflowra's services.");

  return (
    <>
      <Helmet>
        <title>Webflowra Services — Web Design, Marketing & Automation Solutions</title>
        <meta name="description" content="Webflowra offers web design, digital marketing, marketing automation, workflow automation, and AI integration services. Build. Automate. Scale with Webflowra." />
        <link rel="canonical" href="https://webflowra.com/services" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-15" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan/8 rounded-full blur-[120px]" />
          <div className="section-container relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
                  <span className="text-neon-magenta">$</span> webflowra.services()
                </p>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                  Webflowra <span className="gradient-text">Services</span>
                </h1>
                <p className="text-white/50 text-lg max-w-xl mx-auto">
                  Full-stack growth solutions by <Link to="/" className="text-cyan hover:underline">Webflowra</Link> — from design to automation, everything your business needs to scale.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services List — Alternating Layout */}
        <section className="py-20 bg-background relative">
          <div className="section-container">
            <div className="space-y-16 md:space-y-24">
              {services.map((service, index) => {
                const isEven = index % 2 === 0;
                return (
                  <ScrollReveal key={index} direction={isEven ? "left" : "right"}>
                    <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? "lg:direction-rtl" : ""}`}>
                      <div className={!isEven ? "lg:order-2" : ""}>
                        <span className="font-mono text-[10px] text-[hsl(var(--cyan-text))] opacity-60 block mb-3">/{service.tag}</span>
                        <div className="w-14 h-14 rounded flex items-center justify-center mb-5 bg-cyan/10 border border-cyan/20">
                          <service.icon className="w-7 h-7 text-cyan" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                          Webflowra {service.title}
                        </h2>
                        <p className="text-muted-foreground text-base leading-relaxed mb-6">{service.description}</p>
                        <Link to={`/services/${service.slug}`} className="btn-primary inline-flex items-center gap-3 group text-sm">
                          Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                      <div className={!isEven ? "lg:order-1" : ""}>
                        <div className="grid grid-cols-2 gap-3">
                          {service.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2.5 p-4 rounded border border-border hover:border-cyan/30 bg-card hover:bg-cyan/5 transition-all">
                              <CheckCircle className="w-4 h-4 text-[hsl(var(--cyan-text))] flex-shrink-0" />
                              <span className="text-foreground text-sm font-medium">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-15" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[150px]" />
          <div className="section-container relative z-10 text-center">
            <ScrollReveal direction="scale">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to grow with <span className="gradient-text">Webflowra</span>?
              </h2>
              <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
                Book a free strategy call and let Webflowra build your growth engine.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 group animate-pulse-glow"
              >
                ⚡ Book Free Call with Webflowra
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
