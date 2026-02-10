import { Menu, X } from "lucide-react";
import { useState } from "react";
import webflowraLogo from "@/assets/webflowra-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to get a free strategy call.");

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#how-it-works", label: "Process" },
    { href: "#team", label: "Crew" },
    { href: "#portfolio", label: "Cases" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-xl border-b-2 border-cyan/15">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-cyan" />
            <img src={webflowraLogo} alt="Webflowra" className="w-32 md:w-36 h-auto" />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-cyan transition-colors text-[11px] font-mono uppercase tracking-[0.2em] px-5 py-2 border-l border-white/5 hover:bg-cyan/5"
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
              className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] px-5 py-2.5 bg-cyan text-primary border-2 border-cyan hover:shadow-[3px_3px_0_hsl(190_100%_40%)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            >
              ⚡ Strategy Call
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cyan p-2">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-2 border-t border-cyan/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white/50 hover:text-cyan text-[11px] font-mono uppercase tracking-[0.2em] px-4 py-3 border-b border-white/5 hover:bg-cyan/5"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-neon-magenta mr-2">▸</span>{link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 mx-4 mb-2 text-center font-mono text-[10px] font-bold uppercase tracking-[0.15em] px-5 py-3 bg-cyan text-primary"
              onClick={() => setIsOpen(false)}
            >
              ⚡ Strategy Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
