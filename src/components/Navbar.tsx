import { useState, useEffect } from "react";
import webflowraLogo from "@/assets/webflowra-logo.png";

interface NavbarProps {
  activeSection: number;
  totalSections: number;
}

const Navbar = ({ activeSection, totalSections }: NavbarProps) => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to get a free strategy call.");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="relative z-10">
            <img src={webflowraLogo} alt="Webflowra" className="w-24 h-auto opacity-60 hover:opacity-100 transition-opacity duration-300" />
          </a>

          {/* Progress bar */}
          <div className="hidden md:flex items-center gap-6">
            <div className="w-32 h-px bg-white/5 relative">
              <div
                className="absolute left-0 top-0 h-full bg-as-accent transition-all duration-700"
                style={{ width: `${((activeSection + 1) / totalSections) * 100}%` }}
              />
            </div>
            <span className="font-mono text-[10px] text-white/15 tracking-wider">
              {String(activeSection + 1).padStart(2, '0')}
            </span>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.2em] uppercase font-bold px-5 py-2 bg-as-accent text-as-black transition-all duration-300 hover:scale-105"
          >
            Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
