import { Helmet } from "react-helmet-async";
import { Award, Check, Info, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import kishorImage from "@/assets/kishor-headshot.jpg";
import abidImage from "@/assets/abid-headshot.jpg";

const team = [
  {
    name: "Kishor",
    role: "Digital Marketing & Automation Lead",
    experience: "6+ yrs",
    description: "Expert in digital marketing strategies, lead generation, and building automation systems that scale at Webflowra.",
    image: kishorImage,
    specialties: ["Marketing", "Automation", "Growth"],
  },
  {
    name: "Abid",
    role: "Sales Manager",
    experience: "5+ yrs",
    description: "Passionate about understanding client needs and delivering tailored Webflowra solutions for growth.",
    image: abidImage,
    specialties: ["Sales", "Client Relations", "Strategy"],
  },
];

const reasons = [
  "Growth-focused, not just design",
  "Automation-first approach",
  "AI-ready systems",
  "Fast delivery timelines",
  "Transparent pricing",
  "Long-term support",
];

const stats = [
  { value: "50+", label: "Projects Deployed" },
  { value: "3×", label: "Avg. Lead Increase" },
  { value: "80%", label: "Time Saved" },
  { value: "24/7", label: "Automation Running" },
];

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Webflowra — Our Story, Mission & Crew</title>
        <meta name="description" content="Learn about Webflowra, the digital marketing agency that builds growth systems. Meet the Webflowra crew and discover why businesses trust Webflowra." />
        <link rel="canonical" href="https://webflowra.com/about" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-15" />
          <div className="section-container relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
                  <span className="text-neon-magenta">$</span> webflowra.about()
                </p>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                  About <span className="gradient-text">Webflowra</span>
                </h1>
                <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
                  Webflowra is a digital marketing agency that builds growth systems — not just websites. We fuse web design, digital marketing, and workflow automation into a complete business engine that runs 24/7.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Why Webflowra */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <ScrollReveal key={i} direction="scale" delay={i * 0.1}>
                    <div className={`p-7 rounded border text-center card-hover ${i % 2 === 0 ? "bg-primary border-cyan/20" : "bg-card border-border"}`}>
                      <p className="stats-highlight mb-2">{stat.value}</p>
                      <p className={i % 2 === 0 ? "text-white/50 text-sm" : "text-muted-foreground text-sm"}>{stat.label}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal direction="right">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                  Why choose <span className="gradient-text">Webflowra</span>?
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded border border-transparent hover:border-cyan/20 hover:bg-cyan/5 transition-all">
                      <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 bg-cyan/10 border border-cyan/20">
                        <Check className="w-3.5 h-3.5 text-cyan" />
                      </div>
                      <span className="text-foreground text-sm font-medium">{reason}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Team / Crew */}
        <section id="team" className="py-20 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-15" />
          <div className="section-container relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  The Webflowra <span className="gradient-text">Crew</span>
                </h2>
                <p className="text-white/40">The humans behind the Webflowra machine.</p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {team.map((member, index) => (
                <ScrollReveal key={index} direction={index === 0 ? "left" : "right"} delay={0.1}>
                  <div className="group cyber-card overflow-hidden card-hover h-full">
                    <div className="relative h-60 overflow-hidden">
                      <img src={member.image} alt={`${member.name} - Webflowra ${member.role}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" style={{ filter: 'contrast(1.05) saturate(0.7)' }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-cyan/90 rounded text-[10px] font-mono font-bold text-primary">
                        <Award size={10} />{member.experience}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-white">{member.name}</h3>
                      <p className="terminal-text text-xs mt-1 opacity-60">{member.role}</p>
                      <p className="text-white/40 text-sm mt-3 mb-4">{member.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((s, i) => (
                          <span key={i} className="px-3 py-1 bg-cyan/10 border border-cyan/20 text-cyan/70 text-[10px] font-mono uppercase rounded">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-background relative">
          <div className="section-container">
            <div className="max-w-3xl mx-auto p-6 rounded border border-border bg-card">
              <div className="flex items-start gap-4">
                <Info size={20} className="text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Disclaimer</h3>
                  <p className="text-muted-foreground text-sm">
                    Webflowra is an independent digital marketing agency and platform. Webflowra is not affiliated with, endorsed by, or connected to Webflow, Inc. in any way. The name "Webflowra" represents the fusion of web, workflow, and growth — which is the core of what <Link to="/" className="text-cyan hover:underline">Webflowra</Link> delivers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background relative">
          <div className="section-container text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Want to work with <span className="gradient-text">Webflowra</span>?
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Contact Webflowra <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
                  View Webflowra Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
