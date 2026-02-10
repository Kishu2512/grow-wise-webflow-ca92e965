import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  isActive: boolean;
  onNext: () => void;
}

const HeroSection = ({ isActive, onNext }: HeroProps) => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to get a free strategy call.");

  return (
    <div className="snap-panel bg-as-black">
      {/* BG image — barely visible */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(0) contrast(1.3) brightness(0.15)",
          }}
        />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 w-full">
        <div className="max-w-5xl">
          {isActive && (
            <>
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <span className="as-label">Digital Growth Agency</span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold text-white leading-[0.9] mt-8 mb-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Build.
              </h1>
              <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] mb-0 opacity-0 animate-fade-in-up accent-text" style={{ animationDelay: '0.6s' }}>
                Automate.
              </h1>
              <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold text-white leading-[0.9] mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                Scale.
              </h1>

              <p className="text-white/20 text-lg max-w-md leading-relaxed mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                We architect high-converting websites and deploy intelligent automation
                that grows your business on autopilot.
              </p>

              <div className="flex items-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-anti"
                >
                  Get Started
                </a>
                <button onClick={onNext} className="btn-ghost">
                  Explore
                  <ArrowDown size={12} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Panel number */}
      <div className="absolute bottom-8 left-8 panel-counter">01</div>
    </div>
  );
};

export default HeroSection;
