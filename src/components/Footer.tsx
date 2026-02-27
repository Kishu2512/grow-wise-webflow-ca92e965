import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import webflowraLogo from "@/assets/webflowra-logo.png";

const Footer = () => {
  const quickLinks = [
    { href: "/services", label: "Webflowra Services" },
    { href: "/about", label: "About Webflowra" },
    { href: "/faq", label: "FAQs" },
    { href: "/contact", label: "Contact Webflowra" },
  ];

  const services = [
    { href: "/services/web-design", label: "Web Design" },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/marketing-automation", label: "Marketing Automation" },
    { href: "/services/workflow-automation", label: "Workflow Automation" },
    { href: "/services/ai-integration", label: "AI Integration" },
  ];

  return (
    <footer className="bg-primary pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-cyan/20" />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex flex-col items-start mb-4">
              <img src={webflowraLogo} alt="Webflowra — Digital Marketing Agency" className="h-16 w-auto" />
              <p className="terminal-text text-[10px] mt-1 opacity-40">// web + workflow + growth</p>
            </Link>
            <p className="text-white/40 text-sm mb-6">
              Webflowra builds growth systems for businesses across India.
            </p>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/webflowra/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded flex items-center justify-center border border-cyan/20 bg-cyan/5 hover:bg-cyan hover:border-cyan transition-all group" aria-label="Webflowra on Instagram">
                <Instagram size={16} className="text-cyan group-hover:text-primary" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587529013992" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded flex items-center justify-center border border-cyan/20 bg-cyan/5 hover:bg-cyan hover:border-cyan transition-all group" aria-label="Webflowra on Facebook">
                <Facebook size={16} className="text-cyan group-hover:text-primary" />
              </a>
              <a href="https://www.linkedin.com/company/webflowra" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded flex items-center justify-center border border-cyan/20 bg-cyan/5 hover:bg-cyan hover:border-cyan transition-all group" aria-label="Webflowra on LinkedIn">
                <Linkedin size={16} className="text-cyan group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-5 text-cyan/60">// Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-white/40 hover:text-cyan transition-colors text-sm font-mono">
                    <span className="text-neon-magenta mr-1">&gt;</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-5 text-cyan/60">// Webflowra Services</h4>
            <ul className="space-y-2.5">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.href} className="text-white/40 hover:text-cyan transition-colors text-sm font-mono">
                    <span className="text-neon-magenta mr-1">&gt;</span> {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-5 text-cyan/60">// Contact Webflowra</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-cyan" />
                <a href="mailto:contact@webflowra.com" className="text-white/40 hover:text-cyan transition-colors text-sm font-mono">contact@webflowra.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-cyan" />
                <a href="tel:+917204931995" className="text-white/40 hover:text-cyan transition-colors text-sm font-mono">+91-7204931995</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-cyan flex-shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm font-mono">Challakere, Chitradurga, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs font-mono">© 2026 Webflowra. All systems operational.</p>
            <div className="flex gap-6 text-xs font-mono">
              <Link to="/privacy-policy" className="text-white/20 hover:text-cyan transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="text-white/20 hover:text-cyan transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
