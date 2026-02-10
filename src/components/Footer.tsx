import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import webflowraLogo from "@/assets/webflowra-logo.png";

interface Props { isActive: boolean; }

const Footer = ({ isActive }: Props) => {
  const quickLinks = [
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "Process" },
    { href: "#portfolio", label: "Work" },
    { href: "#team", label: "Team" },
  ];
  const services = ["Website Design", "Digital Marketing", "Marketing Automation", "Workflow Automation", "AI Integration"];

  return (
    <div className="snap-panel bg-as-black items-end">
      <div className="section-container relative z-10 w-full py-16">
        {isActive && (
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <img src={webflowraLogo} alt="Webflowra" className="h-8 w-auto opacity-50 mb-4" />
                <p className="text-white/15 text-sm leading-relaxed mb-6">Building growth systems for businesses across India.</p>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/webflowra/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-white/5 hover:border-as-accent/30 hover:bg-as-accent/5 transition-all duration-300">
                    <Instagram size={12} className="text-white/15 hover:text-as-accent" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61587529013992" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-white/5 hover:border-as-accent/30 hover:bg-as-accent/5 transition-all duration-300">
                    <Facebook size={12} className="text-white/15 hover:text-as-accent" />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="as-label mb-4">Navigation</h4>
                <ul className="space-y-2">
                  {quickLinks.map((l, i) => (
                    <li key={i}><a href={l.href} className="text-white/15 hover:text-white/40 text-sm transition-colors duration-300">{l.label}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="as-label mb-4">Services</h4>
                <ul className="space-y-2">
                  {services.map((s, i) => (
                    <li key={i}><a href="#services" className="text-white/15 hover:text-white/40 text-sm transition-colors duration-300">{s}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="as-label mb-4">Contact</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Mail size={11} className="text-as-accent/25" />
                    <a href="mailto:contact@webflowra.com" className="text-white/15 hover:text-white/40 text-sm transition-colors">contact@webflowra.com</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={11} className="text-as-accent/25" />
                    <a href="tel:+917204931995" className="text-white/15 hover:text-white/40 text-sm transition-colors">+91-7204931995</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={11} className="text-as-accent/25 mt-0.5" />
                    <span className="text-white/15 text-sm">Bangalore, Karnataka</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="as-line mb-6" />
            <div className="flex items-center justify-between">
              <p className="text-white/8 text-xs tracking-wider">© 2026 Webflowra</p>
              <div className="flex gap-6">
                <a href="#" className="text-white/8 hover:text-white/20 text-xs tracking-wider transition-colors">Privacy</a>
                <a href="#" className="text-white/8 hover:text-white/20 text-xs tracking-wider transition-colors">Terms</a>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-8 left-8 panel-counter">12</div>
    </div>
  );
};

export default Footer;
