import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to book a free strategy call.");

  return (
    <section id="contact" className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-magenta/8 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative top line */}
          <div className="w-20 h-px bg-cyan/50 mx-auto mb-10" />

          <p className="terminal-text text-xs mb-6 opacity-40 uppercase tracking-[0.2em]">
            <span className="text-neon-magenta">$</span> initiate.connection()<span className="animate-blink">_</span>
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Ready to build your{" "}
            <span className="gradient-text">growth engine</span>?
          </h2>

          <p className="text-white/40 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Book a free strategy call and see how Webflowra can automate your business growth.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 group text-base animate-pulse-glow"
          >
            Book Free Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/30 text-xs font-mono uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />
              Free Consult
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />
              No Commitment
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />
              24hr Response
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
