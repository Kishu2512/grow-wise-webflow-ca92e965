import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import webflowraLogo from "@/assets/webflowra-logo.png";

const Footer = () => {
  const quickLinks = [
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "Process" },
    { href: "#portfolio", label: "Work" },
    { href: "#team", label: "Team" },
  ];

  const services = ["Website Design", "Digital Marketing", "Marketing Automation", "Workflow Automation", "AI Integration"];

  return (
    <footer className="bg-primary pt-20 pb-10 relative">
      <div className="absolute top-0 left-0 right-0 cine-hr" />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div>
            <img src={webflowraLogo} alt="Webflowra" className="h-10 w-auto opacity-70 mb-6" />
            <p className="text-white/20 text-sm leading-relaxed mb-8">Building growth systems for businesses across India.</p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/webflowra/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-white/8 hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-500 group">
                <Instagram size={14} className="text-white/20 group-hover:text-cyan" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587529013992" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-white/8 hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-500 group">
                <Facebook size={14} className="text-white/20 group-hover:text-cyan" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="cine-label mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-white/20 hover:text-white/60 transition-colors duration-500 text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="cine-label mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/20 hover:text-white/60 transition-colors duration-500 text-sm">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="cine-label mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={12} className="text-cyan/30" />
                <a href="mailto:contact@webflowra.com" className="text-white/20 hover:text-white/60 transition-colors duration-500 text-sm">contact@webflowra.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={12} className="text-cyan/30" />
                <a href="tel:+917204931995" className="text-white/20 hover:text-white/60 transition-colors duration-500 text-sm">+91-7204931995</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={12} className="text-cyan/30 flex-shrink-0 mt-0.5" />
                <span className="text-white/20 text-sm">Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="cine-hr mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/10 text-xs tracking-wider">© 2026 Webflowra</p>
          <div className="flex gap-8">
            <a href="#" className="text-white/10 hover:text-white/30 transition-colors duration-500 text-xs tracking-wider">Privacy</a>
            <a href="#" className="text-white/10 hover:text-white/30 transition-colors duration-500 text-xs tracking-wider">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
