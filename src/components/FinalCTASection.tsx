import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FinalCTASection = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to book a free strategy call.");

  return (
    <section id="contact" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden section-living organic-grain vignette-organic">
      <div className="absolute inset-0 pattern-cells opacity-20" />

      {/* Living blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bio-glow/5 blob animate-breathe" style={{ filter: 'blur(160px)' }} />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-bio-pulse/4 blob animate-drift delay-2000" style={{ filter: 'blur(100px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-bio-glow-warm/3 blob animate-drift delay-3000" style={{ filter: 'blur(80px)' }} />

      <div className="section-container relative z-10">
        <ScrollReveal direction="scale">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="pulse-dot" />
              <span className="organism-label">Begin</span>
            </div>
            <div className="w-12 h-px bg-bio-glow/30 mx-auto mb-12" />

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-10">
              Ready to grow<br />your <span className="bio-text">living<br />system</span>?
            </h2>

            <p className="text-white/20 text-lg mb-14 max-w-md mx-auto leading-relaxed">
              Book a free strategy call and discover how we can cultivate your growth ecosystem.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-living group animate-pulse-glow"
            >
              Book Free Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
            </a>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
              {["Free Consultation", "No Commitment", "24hr Response"].map((item, i) => (
                <span key={i} className="flex items-center gap-3 organism-label" style={{ color: 'hsl(0 0% 100% / 0.12)' }}>
                  <span className="pulse-dot" style={{ width: '4px', height: '4px' }} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
