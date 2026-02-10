import { useState, useEffect, useRef, useCallback } from "react";

interface SideNavProps {
  sections: string[];
  activeIndex: number;
  onNavigate: (index: number) => void;
}

const SideNav = ({ sections, activeIndex, onNavigate }: SideNavProps) => {
  return (
    <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4">
      {sections.map((label, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className="group flex items-center gap-3 transition-all duration-300"
          aria-label={label}
        >
          {/* Label — appears on hover */}
          <span className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 ${
            i === activeIndex ? 'text-as-accent' : 'text-white/30'
          }`}>
            {label}
          </span>

          {/* Dot */}
          <span className={`block transition-all duration-500 ${
            i === activeIndex
              ? 'w-3 h-3 bg-as-accent shadow-[0_0_12px_hsl(200_100%_55%/0.5)]'
              : 'w-1.5 h-1.5 bg-white/15 hover:bg-white/30'
          }`} />
        </button>
      ))}

      {/* Progress */}
      <span className="mt-4 font-mono text-[10px] text-white/10 tracking-wider">
        {String(activeIndex + 1).padStart(2, '0')}/{String(sections.length).padStart(2, '0')}
      </span>
    </div>
  );
};

export default SideNav;
