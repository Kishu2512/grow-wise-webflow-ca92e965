import { Helmet } from "react-helmet-async";
import { Globe, BarChart3, Mail, Workflow, Bot, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    slug: "web-design",
    description: "Webflowra designs high-converting, fast, mobile-first websites that turn visitors into leads. Our web design service combines aesthetics with conversion science.",
    tag: "frontend",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Webflowra runs SEO, ads, funnels, and lead gen strategies for consistent traffic and predictable growth.",
    tag: "marketing",
  },
  {
    icon: Mail,
    title: "Marketing Automation",
    slug: "marketing-automation",
    description: "Webflowra builds email, WhatsApp, and CRM flows that follow up with every lead automatically — no manual work.",
    tag: "automation",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    slug: "workflow-automation",
    description: "Webflowra uses Zapier, Make, and AI tools to eliminate manual busywork and streamline your operations.",
    tag: "workflow",
  },
  {
    icon: Bot,
    title: "AI Integration",
    slug: "ai-integration",
    description: "Webflowra integrates chatbots, AI workflows, and smart tools so your business runs faster and leaner.",
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
        <section className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-15" />
          <div className="section-container relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
                  <span className="text-neon-magenta">$</span> webflowra.services()
                </p>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                  Webflowra <span className="gradient-text">Services</span>
                </h1>
                <p className="text-white/40 text-lg">Full-stack growth solutions by <Link to="/" className="text-cyan hover:underline">Webflowra</Link> — everything you need under one roof.</p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ScrollReveal key={index} direction="scale" delay={index * 0.08}>
                  <Link to={`/services/${service.slug}`} className="block h-full">
                    <div className="group cyber-card p-7 card-hover h-full">
                      <span className="terminal-text text-[10px] opacity-30 block mb-4">/{service.tag}</span>
                      <div className="w-12 h-12 rounded flex items-center justify-center mb-5 bg-cyan/10 border border-cyan/20 group-hover:shadow-[0_0_20px_hsl(190_100%_50%/0.3)] transition-all">
                        <service.icon className="w-6 h-6 text-cyan" />
                      </div>
                      <h2 className="text-lg font-display font-bold text-white mb-3">{service.title}</h2>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">{service.description}</p>
                      <span className="inline-flex items-center gap-2 text-cyan text-xs font-mono uppercase group-hover:gap-3 transition-all">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="section-container relative z-10 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Ready to grow with <span className="gradient-text">Webflowra</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">Book a free strategy call and let Webflowra build your growth engine.</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 group"
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
