import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const ContactUs = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi Webflowra! I'd like to discuss a project.");

  return (
    <>
      <Helmet>
        <title>Contact Webflowra — Get a Free Strategy Call</title>
        <meta name="description" content="Contact Webflowra for a free strategy call. Reach out via WhatsApp, email, or phone. Webflowra is based in Challakere, Chitradurga, Karnataka." />
        <link rel="canonical" href="https://webflowra.com/contact" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-15" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[150px]" />
          <div className="section-container relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
                  <span className="text-neon-magenta">$</span> webflowra.contact()
                </p>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                  Contact <span className="gradient-text">Webflowra</span>
                </h1>
                <p className="text-white/40 text-lg max-w-xl mx-auto">
                  Ready to build your growth engine? Get in touch with <Link to="/" className="text-cyan hover:underline">Webflowra</Link> today.
                </p>
              </div>
            </ScrollReveal>

            {/* Main CTA Card */}
            <ScrollReveal direction="scale">
              <div className="max-w-2xl mx-auto cyber-card p-10 text-center mb-10">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-cyan/10 border border-cyan/20 mx-auto mb-6 animate-pulse-glow">
                  <MessageCircle className="w-10 h-10 text-cyan" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-3">Book Your Free Strategy Call</h2>
                <p className="text-white/40 text-sm mb-8 max-w-md mx-auto">Chat directly with the Webflowra team on WhatsApp. Get a personalized growth plan — no commitment, no cost.</p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-3 group text-base animate-pulse-glow"
                >
                  ⚡ Chat on WhatsApp Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/30 text-xs font-mono uppercase tracking-wider">
                  <span className="flex items-center gap-2"><Clock size={12} className="text-cyan" />24hr Response</span>
                  <span className="flex items-center gap-2"><Shield size={12} className="text-cyan" />No Commitment</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <ScrollReveal direction="scale" delay={0}>
                <a href="mailto:contact@webflowra.com" className="cyber-card p-6 text-center card-hover block h-full">
                  <Mail size={24} className="text-cyan mx-auto mb-3" />
                  <p className="terminal-text text-[10px] opacity-40 mb-1">email</p>
                  <p className="text-white/70 text-sm font-mono">contact@webflowra.com</p>
                </a>
              </ScrollReveal>
              <ScrollReveal direction="scale" delay={0.08}>
                <a href="tel:+917204931995" className="cyber-card p-6 text-center card-hover block h-full">
                  <Phone size={24} className="text-cyan mx-auto mb-3" />
                  <p className="terminal-text text-[10px] opacity-40 mb-1">phone</p>
                  <p className="text-white/70 text-sm font-mono">+91-7204931995</p>
                </a>
              </ScrollReveal>
              <ScrollReveal direction="scale" delay={0.16}>
                <div className="cyber-card p-6 text-center h-full">
                  <MapPin size={24} className="text-cyan mx-auto mb-3" />
                  <p className="terminal-text text-[10px] opacity-40 mb-1">location</p>
                  <p className="text-white/70 text-sm font-mono">Challakere, Chitradurga, Karnataka</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Google Maps Embed */}
            <ScrollReveal>
              <div className="max-w-3xl mx-auto mt-10">
                <div className="cyber-card overflow-hidden rounded">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61548.81673440844!2d76.61!3d14.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba37e2b8e0a06f%3A0x2f3e2c9f1e2a8b0a!2sChallakere%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Webflowra Office Location — Challakere, Chitradurga, Karnataka"
                    className="w-full"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services link */}
        <section className="py-16 bg-background relative">
          <div className="section-container text-center">
            <ScrollReveal>
              <p className="text-muted-foreground mb-6">Not sure what you need? Explore our services first.</p>
              <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
                View Webflowra Services <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
