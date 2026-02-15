import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";
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
        <meta name="description" content="Contact Webflowra for a free strategy call. Reach out to Webflowra via WhatsApp, email, or phone. Webflowra is based in Bangalore, India." />
        <link rel="canonical" href="https://webflowra.com/contact" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
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
                <p className="text-white/40 text-lg">
                  Ready to build your growth engine? Get in touch with <Link to="/" className="text-cyan hover:underline">Webflowra</Link> today.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* WhatsApp CTA */}
              <ScrollReveal direction="left">
                <div className="cyber-card p-8 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-cyan/10 border border-cyan/20 mb-6">
                    <MessageCircle className="w-8 h-8 text-cyan" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-white mb-3">WhatsApp Webflowra</h2>
                  <p className="text-white/40 text-sm mb-6">Get a response within 24 hours. Chat directly with the Webflowra team.</p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-3 group mt-auto"
                  >
                    ⚡ Free Strategy Call
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal direction="right">
                <div className="cyber-card p-8 h-full">
                  <h2 className="text-xl font-display font-bold text-white mb-6">Webflowra Contact Details</h2>
                  <ul className="space-y-5">
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded flex items-center justify-center bg-cyan/10 border border-cyan/20">
                        <Mail size={18} className="text-cyan" />
                      </div>
                      <div>
                        <p className="terminal-text text-[10px] opacity-40">email</p>
                        <a href="mailto:contact@webflowra.com" className="text-white/70 hover:text-cyan transition-colors text-sm font-mono">contact@webflowra.com</a>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded flex items-center justify-center bg-cyan/10 border border-cyan/20">
                        <Phone size={18} className="text-cyan" />
                      </div>
                      <div>
                        <p className="terminal-text text-[10px] opacity-40">phone</p>
                        <a href="tel:+917204931995" className="text-white/70 hover:text-cyan transition-colors text-sm font-mono">+91-7204931995</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded flex items-center justify-center bg-cyan/10 border border-cyan/20 flex-shrink-0">
                        <MapPin size={18} className="text-cyan" />
                      </div>
                      <div>
                        <p className="terminal-text text-[10px] opacity-40">location</p>
                        <span className="text-white/70 text-sm font-mono">Bangalore, Karnataka, India</span>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-3 text-white/30 text-xs font-mono uppercase tracking-wider">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />Free Consult
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />No Commitment
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />24hr Response
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
