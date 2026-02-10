import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FinalCTASection = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to book a free strategy call.");

  return (
    <section id="contact" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden section-dark film-grain vignette">
      <div className="absolute inset-0 pattern-grid opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[200px] animate-breathe" />

      <div className="section-container relative z-10">
        <ScrollReveal direction="scale">
          <div className="max-w-3xl mx-auto text-center">
            <span className="cine-label mb-8 block">Let's Begin</span>
            <div className="w-12 h-px bg-cyan/30 mx-auto mb-12" />

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-10">
              Ready to build<br />your <span className="gradient-text">growth<br />engine</span>?
            </h2>

            <p className="text-white/25 text-lg mb-14 max-w-md mx-auto leading-relaxed">
              Book a free strategy call and discover how we can automate your growth.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group animate-pulse-glow"
            >
              Book Free Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
            </a>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
              {["Free Consultation", "No Commitment", "24hr Response"].map((item, i) => (
                <span key={i} className="flex items-center gap-2 cine-label" style={{ color: 'hsl(0 0% 100% / 0.15)' }}>
                  <span className="w-1 h-1 bg-cyan/40 rounded-full" />
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
