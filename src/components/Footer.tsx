import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import webflowraLogo from "@/assets/webflowra-logo.png";

const Footer = () => {
  const quickLinks = [
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "Process" },
    { href: "#portfolio", label: "Cases" },
    { href: "#team", label: "Crew" },
  ];

  const services = ["Website Design", "Digital Marketing", "Marketing Automation", "Workflow Automation", "AI Integration"];

  return (
    <footer className="bg-primary pt-16 pb-8 relative border-t-2 border-cyan/15">
      <div className="absolute inset-0 pattern-grid opacity-3" />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-8 bg-cyan" />
              <img src={webflowraLogo} alt="Webflowra" className="h-12 w-auto" />
            </div>
            <p className="text-white/30 text-sm mb-6">Building growth systems for businesses across India.</p>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/webflowra/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-cyan/20 bg-cyan/5 hover:bg-cyan hover:border-cyan transition-all group">
                <Instagram size={14} className="text-cyan group-hover:text-primary" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587529013992" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-cyan/20 bg-cyan/5 hover:bg-cyan hover:border-cyan transition-all group">
                <Facebook size={14} className="text-cyan group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[10px] text-cyan/40 uppercase tracking-[0.3em] mb-5">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-white/30 hover:text-cyan transition-colors text-sm font-mono text-xs">
                    <span className="text-cyan/30 mr-2">▸</span>{link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[10px] text-cyan/40 uppercase tracking-[0.3em] mb-5">Services</h4>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/30 hover:text-cyan transition-colors font-mono text-xs">
                    <span className="text-cyan/30 mr-2">▸</span>{s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] text-cyan/40 uppercase tracking-[0.3em] mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={12} className="text-cyan" />
                <a href="mailto:contact@webflowra.com" className="text-white/30 hover:text-cyan transition-colors font-mono text-xs">contact@webflowra.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={12} className="text-cyan" />
                <a href="tel:+917204931995" className="text-white/30 hover:text-cyan transition-colors font-mono text-xs">+91-7204931995</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={12} className="text-cyan flex-shrink-0 mt-0.5" />
                <span className="text-white/30 font-mono text-xs">Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-cyan/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-white/15 uppercase tracking-wider">© 2026 Webflowra. All systems operational.</p>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-[10px] text-white/15 hover:text-cyan transition-colors uppercase tracking-wider">Privacy</a>
            <a href="#" className="font-mono text-[10px] text-white/15 hover:text-cyan transition-colors uppercase tracking-wider">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
