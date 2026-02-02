import { Menu, X } from "lucide-react";
import { useState } from "react";
import webflowraLogo from "@/assets/webflowra-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to get a free strategy call.");

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#team", label: "Our Team" },
    { href: "#portfolio", label: "Portfolio" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-lg border-b border-white/10">
      <div className="section-container">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo with tagline below */}
          <a href="#" className="flex flex-col items-start">
            <img src={webflowraLogo} alt="Webflowra" className="w-40 md:w-48 h-auto" />

            <span className="text-cyan-light text-[10px] md:text-xs font-medium mt-1 italic">
              Where Web, Workflow & Growth Flow Together.
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-accent transition-colors text-sm font-medium animated-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-3 px-6 rounded-lg inline-block"
            >
              Get Free Strategy Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-accent transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3 px-6 rounded-lg inline-block text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get Free Strategy Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
