import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import webflowraLogo from "@/assets/webflowra-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to get a free strategy call.");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "Process" },
    { href: "#team", label: "Team" },
    { href: "#portfolio", label: "Work" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? "bg-primary/90 backdrop-blur-2xl border-b border-white/5" : "bg-transparent"
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="relative z-10">
            <img src={webflowraLogo} alt="Webflowra" className="w-28 md:w-32 h-auto opacity-90 hover:opacity-100 transition-opacity duration-500" />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/40 hover:text-white transition-all duration-500 text-xs tracking-[0.2em] uppercase animated-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase font-medium px-6 py-2.5 bg-cyan/10 text-cyan border border-cyan/20 hover:bg-cyan hover:text-primary transition-all duration-500"
            >
              Let's Talk
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/60 p-2">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-8 border-t border-white/5">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-white/40 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors duration-500" onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.15em] uppercase font-medium px-6 py-3 bg-cyan text-primary text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
