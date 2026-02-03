import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";
import webflowraLogo from "@/assets/webflowra-logo.png";

const Footer = () => {
  const quickLinks = [
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#team", label: "Our Team" },
  ];

  const services = [
    "Website Design",
    "Digital Marketing",
    "Marketing Automation",
    "Workflow Automation",
    "AI Integration",
  ];

  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col items-start mb-4">
              <img
                src={webflowraLogo}
                alt="Webflowra"
                className="h-20 w-auto"
              />
              <p className="text-cyan-light text-xs font-medium mt-1 italic">
                Where Web, Workflow & Growth Flow Together.
              </p>
            </div>
            <p className="text-white/60 mb-6">
              Building growth systems for businesses
              across India.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/webflowra/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Instagram
                  size={18}
                  className="text-white group-hover:text-primary"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587529013992"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Facebook
                  size={18}
                  className="text-white group-hover:text-primary"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a
                  href="mailto:contact@webflowra.com"
                  className="text-white/60 hover:text-accent transition-colors"
                >
                  contact@webflowra.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a
                  href="tel:+917204931995"
                  className="text-white/60 hover:text-accent transition-colors"
                >
                  +91-7204931995
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-white/60">Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Webflowra. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
