import { ArrowRight } from "lucide-react";

interface Props { isActive: boolean; }

const FinalCTASection = ({ isActive }: Props) => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to book a free strategy call.");

  return (
    <div className="snap-panel bg-as-black">
      <div className="section-container relative z-10 w-full">
        {isActive && (
          <div className="max-w-4xl mx-auto text-center">
            <span className="as-label opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Let's Begin</span>

            <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-bold text-white leading-[0.85] mt-8 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Ready to<br /><span className="accent-text">grow</span>?
            </h2>

            <p className="text-white/20 text-lg mb-14 max-w-md mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              Book a free strategy call and discover how we can automate your growth.
            </p>

            <div className="opacity-0 animate-scale-in" style={{ animationDelay: '0.9s' }}>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-anti group"
              >
                Book Free Call
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-10 opacity-0 animate-fade-in" style={{ animationDelay: '1.1s' }}>
              {["Free Consultation", "No Commitment", "24hr Response"].map((item, i) => (
                <span key={i} className="as-label flex items-center gap-2">
                  <span className="w-1 h-1 bg-as-accent/30" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-8 left-8 panel-counter">11</div>
    </div>
  );
};

export default FinalCTASection;
