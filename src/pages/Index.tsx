import { Helmet } from "react-helmet-async";
import { ArrowRight, Play, Terminal, Globe, BarChart3, Mail, Workflow, Bot, CheckCircle, Zap, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SocialProofStrip from "@/components/SocialProofStrip";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleNetwork from "@/components/ParticleNetwork";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Globe, title: "Web Design", slug: "web-design", desc: "High-converting, mobile-first websites engineered for leads." },
  { icon: BarChart3, title: "Digital Marketing", slug: "digital-marketing", desc: "SEO, ads & funnels for predictable traffic growth." },
  { icon: Mail, title: "Marketing Automation", slug: "marketing-automation", desc: "Email, WhatsApp & CRM flows that nurture every lead." },
  { icon: Workflow, title: "Workflow Automation", slug: "workflow-automation", desc: "Zapier, Make & AI tools to eliminate manual work." },
  { icon: Bot, title: "AI Integration", slug: "ai-integration", desc: "Chatbots & AI workflows for 24/7 smart operations." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3×", label: "Avg. Lead Increase" },
  { value: "20+", label: "Hours Saved/Week" },
  { value: "24/7", label: "Automation Running" },
];

const Index = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to get a free strategy call.");

  return (
    <>
      <Helmet>
        <title>Webflowra — Build. Automate. Scale. | Digital Marketing Agency</title>
        <meta name="description" content="Webflowra designs high-converting websites and builds smart marketing & workflow automation systems that grow your business on autopilot. Trusted by startups and growing businesses across India." />
        <link rel="canonical" href="https://webflowra.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Webflowra",
          "url": "https://webflowra.com",
          "logo": "https://webflowra.com/webflowra-logo.png",
          "description": "Webflowra is a digital marketing agency that builds growth systems — web design, marketing automation, workflow automation, and AI integration.",
          "contactPoint": { "@type": "ContactPoint", "telephone": "+91-7204931995", "contactType": "sales", "email": "contact@webflowra.com", "areaServed": "IN", "availableLanguage": ["English", "Hindi"] },
          "address": { "@type": "PostalAddress", "addressLocality": "Challakere", "addressRegion": "Karnataka", "addressCountry": "IN" },
          "sameAs": ["https://www.instagram.com/webflowra/", "https://www.facebook.com/profile.php?id=61587529013992", "https://www.linkedin.com/company/webflowra"],
          "foundingDate": "2024",
          "slogan": "Build. Automate. Scale."
        })}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20 scanlines">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.2) contrast(1.3)" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary" />
          <ParticleNetwork />
          <div className="absolute inset-0 pattern-grid opacity-40" style={{ zIndex: 2 }} />
          <div className="absolute left-[15%] top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan/20 to-transparent opacity-40" style={{ zIndex: 2 }} />
          <div className="absolute left-[85%] top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan/20 to-transparent opacity-30" style={{ zIndex: 2 }} />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan/8 rounded-full blur-[120px]" style={{ zIndex: 2 }} />

          <div className="section-container relative" style={{ zIndex: 10 }}>
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded border border-cyan/30 bg-cyan/5 backdrop-blur-sm mb-10 animate-fade-in-up">
                <Terminal size={14} className="text-cyan" />
                <span className="terminal-text">
                  <span className="text-neon-magenta">$</span> initializing_growth_engine<span className="animate-blink">_</span>
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 animate-fade-in-up delay-100 glitch-text" data-text="Webflowra: Build. Automate. Scale.">
                Webflowra: Build. <span className="gradient-text">Automate.</span> Scale.
              </h1>

              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200 font-light">
                We architect high-converting websites and deploy intelligent automation systems that scale your business — <span className="text-cyan">on autopilot</span>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up delay-300">
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-3 group">
                  <span className="font-mono text-xs opacity-60">[</span>
                  Get a Free Strategy Call
                  <span className="font-mono text-xs opacity-60">]</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/services" className="btn-secondary flex items-center gap-2">
                  <Play size={16} />
                  Explore Services
                </Link>
              </div>

              <div className="animate-fade-in-up delay-400 terminal-text text-xs opacity-50">
                <span className="text-neon-magenta">→</span> trusted by startups, coaches & growing businesses across India
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" style={{ zIndex: 3 }} />
        </section>

        {/* ===== SOCIAL PROOF ===== */}
        <SocialProofStrip />

        {/* ===== STATS BAR ===== */}
        <section className="py-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10" />
          <div className="section-container relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <ScrollReveal key={i} direction="scale" delay={i * 0.08}>
                  <div className="text-center p-6">
                    <p className="stats-highlight mb-2">{stat.value}</p>
                    <p className="text-white/40 text-sm font-mono uppercase tracking-wider">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES OVERVIEW ===== */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="section-container relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
                  <span className="text-neon-magenta">$</span> webflowra.services()
                </p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
                  What <span className="gradient-text">Webflowra</span> Builds
                </h2>
                <p className="text-muted-foreground text-lg">Full-stack growth solutions — everything under one roof.</p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => (
                <ScrollReveal key={i} direction="scale" delay={i * 0.06}>
                  <Link to={`/services/${service.slug}`} className="block h-full">
                    <div className="group relative p-7 rounded border border-border hover:border-cyan/40 bg-card hover:bg-primary transition-all duration-500 h-full card-hover">
                      <div className="w-12 h-12 rounded flex items-center justify-center mb-5 bg-cyan/10 border border-cyan/20 group-hover:shadow-[0_0_20px_hsl(190_100%_50%/0.3)] transition-all">
                        <service.icon className="w-6 h-6 text-cyan" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-foreground group-hover:text-white mb-3 transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground group-hover:text-white/50 text-sm leading-relaxed mb-4 transition-colors">{service.desc}</p>
                      <span className="inline-flex items-center gap-2 text-cyan text-xs font-mono uppercase group-hover:gap-3 transition-all">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/services" className="btn-secondary inline-flex items-center gap-2 text-sm">
                  View All Webflowra Services <ArrowRight size={16} />
                </Link>
                <Link to="/faq" className="text-cyan text-sm font-mono hover:underline inline-flex items-center gap-2">
                  FAQs | Common Questions About Webflowra <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== WHY WEBFLOWRA ===== */}
        <section className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-10" />
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
                  <span className="text-neon-magenta">$</span> why.webflowra()
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Why businesses choose <span className="gradient-text">Webflowra</span>
                </h2>
                <p className="text-white/50 text-lg mb-8 leading-relaxed">
                  Most agencies build websites. Webflowra builds <span className="text-cyan">growth machines</span> — automated systems that generate leads, nurture prospects, and close deals while you sleep.
                </p>
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3 group">
                  Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Zap, title: "Automation-First", desc: "Every system we build runs on autopilot from day one." },
                    { icon: Shield, title: "Proven Results", desc: "50+ projects, 3× average lead increase for our clients." },
                    { icon: Clock, title: "Fast Delivery", desc: "Launch in weeks, not months. Agile sprints with clear milestones." },
                    { icon: CheckCircle, title: "Full-Stack", desc: "Web, marketing, automation & AI — all under one Webflowra roof." },
                  ].map((item, i) => (
                    <div key={i} className="cyber-card p-5 card-hover">
                      <item.icon className="w-8 h-8 text-cyan mb-3" />
                      <h3 className="text-white font-display font-bold text-sm mb-2">{item.title}</h3>
                      <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <TestimonialsSection />

        {/* ===== FINAL CTA ===== */}
        <section className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-20" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-light/8 rounded-full blur-[120px]" />
          <div className="section-container relative z-10">
            <ScrollReveal direction="scale">
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-20 h-px bg-cyan/50 mx-auto mb-10" />
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                  Ready to build your <span className="gradient-text">growth engine</span>?
                </h2>
                <p className="text-white/40 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                  Book a free strategy call and see how Webflowra can automate your business growth.
                </p>
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3 group text-base animate-pulse-glow">
                  ⚡ Book Free Strategy Call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/30 text-xs font-mono uppercase tracking-wider">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />Free Consult</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />No Commitment</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />24hr Response</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
