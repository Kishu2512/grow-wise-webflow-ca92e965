import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { Globe, BarChart3, Mail, Workflow, Bot, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const serviceData: Record<string, {
  icon: typeof Globe;
  title: string;
  h1: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  features: string[];
  benefits: string[];
}> = {
  "web-design": {
    icon: Globe,
    title: "Web Design & Development",
    h1: "Webflowra Web Design & Development",
    metaTitle: "Webflowra Web Design & Development — High-Converting Websites",
    metaDesc: "Webflowra builds high-converting, mobile-first websites that turn visitors into leads. Professional web design and development by Webflowra.",
    intro: "Webflowra designs and develops high-converting, fast, mobile-first websites that are engineered to turn visitors into leads and customers.",
    features: [
      "Custom responsive website design by Webflowra",
      "SEO-optimized architecture and performance",
      "Conversion-focused landing pages",
      "Mobile-first development approach",
      "Speed optimization and Core Web Vitals",
    ],
    benefits: [
      "3× more leads from your Webflowra-built website",
      "Professional brand presence online",
      "Faster load times = better search rankings",
      "Designed to convert, not just look good",
    ],
  },
  "digital-marketing": {
    icon: BarChart3,
    title: "Digital Marketing",
    h1: "Webflowra Digital Marketing Services",
    metaTitle: "Webflowra Digital Marketing — SEO, Ads & Lead Generation",
    metaDesc: "Webflowra provides SEO, paid ads, funnels, and lead generation strategies. Grow your business with Webflowra's digital marketing services.",
    intro: "Webflowra runs data-driven digital marketing campaigns including SEO, paid ads, funnels, and lead generation strategies for consistent, predictable growth.",
    features: [
      "Search Engine Optimization (SEO) by Webflowra",
      "Google & Meta paid advertising",
      "Sales funnel design and optimization",
      "Lead generation campaigns",
      "Analytics and performance tracking",
    ],
    benefits: [
      "Consistent traffic and lead flow",
      "Data-driven decision making",
      "Higher ROI on marketing spend",
      "Systematic growth with Webflowra",
    ],
  },
  "marketing-automation": {
    icon: Mail,
    title: "Marketing Automation",
    h1: "Webflowra Marketing Automation",
    metaTitle: "Webflowra Marketing Automation — Email, WhatsApp & CRM Flows",
    metaDesc: "Webflowra builds email, WhatsApp, and CRM automation flows that follow up with every lead automatically. Marketing automation by Webflowra.",
    intro: "Webflowra builds automated email, WhatsApp, and CRM flows that follow up with every lead automatically — so no opportunity slips through the cracks.",
    features: [
      "Email marketing automation by Webflowra",
      "WhatsApp business automation",
      "CRM setup and integration",
      "Lead nurturing sequences",
      "Automated follow-up systems",
    ],
    benefits: [
      "Never miss a lead again",
      "80% reduction in manual follow-ups",
      "Higher conversion rates with Webflowra automation",
      "24/7 lead nurturing on autopilot",
    ],
  },
  "workflow-automation": {
    icon: Workflow,
    title: "Workflow Automation",
    h1: "Webflowra Workflow Automation",
    metaTitle: "Webflowra Workflow Automation — Zapier, Make & AI Tools",
    metaDesc: "Webflowra uses Zapier, Make, and AI tools to automate your business workflows. Eliminate manual busywork with Webflowra workflow automation.",
    intro: "Webflowra uses Zapier, Make, and AI tools to automate repetitive business processes, saving your team 20+ hours per week.",
    features: [
      "Zapier and Make integrations by Webflowra",
      "Business process automation",
      "Data sync across platforms",
      "Custom workflow design",
      "API integrations and webhooks",
    ],
    benefits: [
      "Save 20+ hours per week",
      "Eliminate manual data entry",
      "Reduce human errors to zero",
      "Streamlined operations with Webflowra",
    ],
  },
  "ai-integration": {
    icon: Bot,
    title: "AI Integration",
    h1: "Webflowra AI Integration Services",
    metaTitle: "Webflowra AI Integration — Chatbots, AI Workflows & Smart Tools",
    metaDesc: "Webflowra integrates AI chatbots, workflows, and smart tools into your business. Run faster and leaner with Webflowra AI integration services.",
    intro: "Webflowra integrates cutting-edge AI chatbots, intelligent workflows, and smart tools into your business operations so you can run faster and leaner.",
    features: [
      "AI chatbot development by Webflowra",
      "AI-powered workflow automation",
      "Smart content generation tools",
      "AI analytics and insights",
      "Custom AI integrations",
    ],
    benefits: [
      "Instant customer support 24/7",
      "AI-driven business decisions",
      "Faster operations with less staff",
      "Future-proof your business with Webflowra",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) return <Navigate to="/services" replace />;

  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent(`Hi Webflowra! I'm interested in your ${service.title} service.`);
  const Icon = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDesc} />
        <link rel="canonical" href={`https://webflowra.com/services/${slug}`} />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-15" />
          <div className="section-container relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 rounded flex items-center justify-center bg-cyan/10 border border-cyan/20 mx-auto mb-6">
                  <Icon className="w-8 h-8 text-cyan" />
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                  {service.h1.replace("Webflowra ", "").includes("Webflowra") ? service.h1 : <>{service.h1.replace(service.title, "")}<span className="gradient-text">{service.title}</span></>}
                </h1>
                <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">{service.intro}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-20 bg-background relative">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <ScrollReveal direction="left">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">What Webflowra Delivers</h2>
                <div className="space-y-3">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded border border-border hover:border-cyan/30 transition-all">
                      <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0" />
                      <span className="text-foreground text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Benefits</h2>
                <div className="space-y-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded border border-border hover:border-cyan/30 transition-all">
                      <CheckCircle className="w-5 h-5 text-cyan flex-shrink-0" />
                      <span className="text-foreground text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 section-navy relative overflow-hidden">
          <div className="section-container text-center relative z-10">
            <ScrollReveal direction="scale">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Ready for <span className="gradient-text">{service.title}</span>?
              </h2>
              <p className="text-white/40 text-lg mb-8 max-w-xl mx-auto">
                Let Webflowra build your {service.title.toLowerCase()} system. Book a free strategy call today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-3 group"
                >
                  ⚡ Book Free Call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
                  All Webflowra Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-12 bg-background">
          <div className="section-container">
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(serviceData).filter(([s]) => s !== slug).map(([s, d]) => (
                <Link key={s} to={`/services/${s}`} className="text-xs font-mono text-muted-foreground hover:text-cyan border border-border hover:border-cyan/30 px-4 py-2 rounded transition-all">
                  Webflowra {d.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetail;
