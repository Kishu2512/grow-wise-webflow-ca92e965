import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import webflowraLogo from "@/assets/webflowra-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi Webflowra! I'd like to get a free strategy call.");

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Webflowra" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-xl border-b border-cyan/10">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col items-start">
            <img src={webflowraLogo} alt="Webflowra — Digital Marketing Agency" className="w-36 md:w-44 h-auto" />
            <span className="terminal-text text-[9px] md:text-[10px] mt-0.5 opacity-60">
              // web + workflow + growth
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-xs font-mono uppercase tracking-widest px-4 py-2 rounded transition-colors ${
                  location.pathname === link.href || location.pathname.startsWith(link.href + "/")
                    ? "text-cyan bg-cyan/10"
                    : "text-white/60 hover:text-cyan hover:bg-cyan/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2.5 px-5"
            >
              ⚡ Strategy Call
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cyan p-2">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-cyan/10">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white/60 hover:text-cyan transition-colors text-xs font-mono uppercase tracking-widest px-4 py-3 hover:bg-cyan/5 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-neon-magenta mr-2">&gt;</span>
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-3 px-5 text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                ⚡ Strategy Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
