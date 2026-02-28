import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import { Globe, BarChart3, Mail, Workflow, Bot, ArrowRight, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";
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
  problemHeadline: string;
  problemBullets: string[];
  solutionHeadline: string;
  solutionBullets: string[];
  features: string[];
  benefits: { title: string; desc: string }[];
}> = {
  "web-design": {
    icon: Globe,
    title: "Web Design & Development",
    h1: "Webflowra Web Design & Development",
    metaTitle: "Webflowra Web Design & Development — High-Converting Websites",
    metaDesc: "Webflowra builds high-converting, mobile-first websites that turn visitors into leads. Professional web design by Webflowra.",
    intro: "Webflowra designs and develops high-converting, fast, mobile-first websites engineered to turn visitors into paying customers.",
    problemHeadline: "Your website is quietly losing business",
    problemBullets: [
      "Visitors don't understand your value quickly",
      "Pages load slowly, especially on mobile",
      "Traffic comes in, but leads don't",
      "No clear path to take action",
    ],
    solutionHeadline: "A website that works as hard as you do",
    solutionBullets: [
      "Fast, mobile-first builds",
      "Clear messaging that guides action",
      "Conversion-focused layouts",
      "SEO-ready from day one",
    ],
    features: ["Responsive design by Webflowra", "SEO-optimized architecture", "Conversion-focused landing pages", "Mobile-first development", "Core Web Vitals optimization"],
    benefits: [
      { title: "3× More Leads", desc: "Conversion-focused design means more inquiries from the same traffic." },
      { title: "Professional Presence", desc: "A website that builds trust and positions you as a premium brand." },
      { title: "Faster Rankings", desc: "SEO-first architecture means Google loves your Webflowra site." },
    ],
  },
  "digital-marketing": {
    icon: BarChart3,
    title: "Digital Marketing",
    h1: "Webflowra Digital Marketing Services",
    metaTitle: "Webflowra Digital Marketing — SEO, Ads & Lead Generation",
    metaDesc: "Webflowra provides SEO, paid ads, funnels, and lead generation strategies. Grow with Webflowra digital marketing.",
    intro: "Webflowra runs data-driven digital marketing campaigns — SEO, paid ads, funnels, and lead gen for consistent, predictable growth.",
    problem: "You're spending money on ads with no clear ROI. Leads are inconsistent and you can't predict growth.",
    solution: "Webflowra builds systematic marketing funnels with tracking, A/B testing, and continuous optimization for maximum ROI.",
    features: ["SEO by Webflowra", "Google & Meta paid ads", "Sales funnel optimization", "Lead generation campaigns", "Performance analytics"],
    benefits: [
      { title: "Predictable Growth", desc: "Systematic funnels deliver consistent lead flow every month." },
      { title: "Higher ROI", desc: "Data-driven optimization ensures every rupee works harder." },
      { title: "Market Visibility", desc: "Rank higher, get found, and dominate your niche." },
    ],
  },
  "marketing-automation": {
    icon: Mail,
    title: "Marketing Automation",
    h1: "Webflowra Marketing Automation",
    metaTitle: "Webflowra Marketing Automation — Email, WhatsApp & CRM Flows",
    metaDesc: "Webflowra builds email, WhatsApp, and CRM automation flows. Marketing automation by Webflowra.",
    intro: "Webflowra builds automated email, WhatsApp, and CRM flows that follow up with every lead — so no opportunity is ever missed.",
    problem: "Leads come in but nobody follows up. Your team is overwhelmed with manual outreach and leads go cold.",
    solution: "Webflowra creates automated nurture sequences that follow up instantly, 24/7, converting leads while you sleep.",
    features: ["Email automation by Webflowra", "WhatsApp business flows", "CRM setup & integration", "Lead nurturing sequences", "Automated follow-ups"],
    benefits: [
      { title: "Never Miss a Lead", desc: "Every inquiry gets an instant, personalized response." },
      { title: "80% Less Manual Work", desc: "Automation handles follow-ups so your team focuses on closing." },
      { title: "24/7 Nurturing", desc: "Your Webflowra system works round the clock." },
    ],
  },
  "workflow-automation": {
    icon: Workflow,
    title: "Workflow Automation",
    h1: "Webflowra Workflow Automation",
    metaTitle: "Webflowra Workflow Automation — Zapier, Make & AI Tools",
    metaDesc: "Webflowra uses Zapier, Make, and AI tools to automate business workflows. Workflow automation by Webflowra.",
    intro: "Webflowra uses Zapier, Make, and AI tools to automate repetitive business processes, saving your team 20+ hours per week.",
    problem: "Your team wastes hours on data entry, copying info between tools, and manual tasks that should be automated.",
    solution: "Webflowra connects your tools and automates workflows so data flows seamlessly and tasks complete themselves.",
    features: ["Zapier & Make integrations", "Business process automation", "Cross-platform data sync", "Custom workflow design", "API integrations"],
    benefits: [
      { title: "Save 20+ Hours/Week", desc: "Eliminate repetitive tasks and free your team for strategic work." },
      { title: "Zero Human Errors", desc: "Automated processes don't make mistakes." },
      { title: "Streamlined Ops", desc: "Every tool connected, every process optimized by Webflowra." },
    ],
  },
  "ai-integration": {
    icon: Bot,
    title: "AI Integration",
    h1: "Webflowra AI Integration Services",
    metaTitle: "Webflowra AI Integration — Chatbots, AI Workflows & Smart Tools",
    metaDesc: "Webflowra integrates AI chatbots, workflows, and smart tools. AI integration by Webflowra.",
    intro: "Webflowra integrates cutting-edge AI chatbots, intelligent workflows, and smart tools into your operations.",
    problem: "Your competitors are using AI while you're stuck with manual processes. You're losing speed and efficiency.",
    solution: "Webflowra deploys AI-powered tools that handle customer support, content creation, and decision-making at scale.",
    features: ["AI chatbot development", "AI-powered workflows", "Smart content generation", "AI analytics & insights", "Custom AI integrations"],
    benefits: [
      { title: "24/7 Support", desc: "AI chatbots handle customer queries instantly, day and night." },
      { title: "Smarter Decisions", desc: "AI-driven insights help you make data-backed decisions." },
      { title: "Future-Proof", desc: "Stay ahead of competition with Webflowra AI solutions." },
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
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan/8 rounded-full blur-[120px]" />
          <div className="section-container relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <Link to="/services" className="terminal-text text-xs mb-6 opacity-50 inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
                  ← Back to All Services
                </Link>
                <div className="w-16 h-16 rounded flex items-center justify-center bg-cyan/10 border border-cyan/20 mx-auto mb-6 mt-4">
                  <Icon className="w-8 h-8 text-cyan" />
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                  <span className="gradient-text">{service.h1}</span>
                </h1>
                <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-8">{service.intro}</p>
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3 group">
                  Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Problem → Solution */}
        <section className="py-20 bg-background relative">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <ScrollReveal direction="left">
                <div className="p-8 rounded border border-destructive/20 bg-destructive/5 h-full">
                  <AlertTriangle className="w-8 h-8 text-destructive mb-4" />
                  <h3 className="text-lg font-display font-bold text-foreground mb-3">The Problem</h3>
                  {service.problem.split('\n\n').map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">{p}</p>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="p-8 rounded border border-[hsl(var(--cyan-text))]/20 bg-[hsl(var(--cyan-text))]/5 h-full">
                  <TrendingUp className="w-8 h-8 text-[hsl(var(--cyan-text))] mb-4" />
                  <h3 className="text-lg font-display font-bold text-foreground mb-3">The Webflowra Solution</h3>
                  {service.solution.split('\n\n').map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-10" />
          <div className="section-container relative z-10">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-10 text-center">
                What Webflowra Delivers
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {service.features.map((f, i) => (
                <ScrollReveal key={i} direction="scale" delay={i * 0.06}>
                  <div className="flex items-center gap-3 p-5 cyber-card card-hover">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--cyan-text))] flex-shrink-0" />
                     <span className="text-white/70 text-sm">{f}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-background relative">
          <div className="section-container">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-10 text-center">
                Results You Get with <span className="gradient-text">Webflowra</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {service.benefits.map((b, i) => (
                <ScrollReveal key={i} direction="scale" delay={i * 0.1}>
                  <div className="text-center p-8 rounded border border-border hover:border-cyan/30 bg-card card-hover h-full">
                    <p className="stats-highlight text-3xl mb-3">{["01", "02", "03"][i]}</p>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm">{b.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-15" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[150px]" />
          <div className="section-container text-center relative z-10">
            <ScrollReveal direction="scale">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Ready for <span className="gradient-text">{service.title}</span>?
              </h2>
              <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
                Let Webflowra build your {service.title.toLowerCase()} system. Book a free strategy call today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3 group animate-pulse-glow">
                  ⚡ Book Free Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
            <p className="text-center text-muted-foreground text-sm mb-4">Explore more Webflowra services:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(serviceData).filter(([s]) => s !== slug).map(([s, d]) => (
                <Link key={s} to={`/services/${s}`} className="text-xs font-mono text-muted-foreground hover:text-cyan border border-border hover:border-cyan/30 px-4 py-2 rounded transition-all">
                  {d.title}
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
