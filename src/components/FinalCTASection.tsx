import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const FinalCTASection = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to book a free strategy call.");

  return (
    <section id="contact" className="py-24 md:py-32 section-navy relative overflow-hidden scanlines">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/8 rounded-full blur-[150px]" />

      <div className="section-container relative z-10">
        <ScrollReveal direction="scale">
          <div className="max-w-4xl">
            {/* Brutalist oversized CTA */}
            <div className="border-l-4 border-l-cyan pl-8 md:pl-12 mb-12">
              <p className="font-mono text-[10px] text-cyan/40 uppercase tracking-[0.3em] mb-4">
                $ initiate.connection()<span className="animate-blink">_</span>
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-black text-white leading-[0.85]">
                READY TO<br />BUILD YOUR<br /><span className="gradient-text">GROWTH ENGINE</span>?
              </h2>
            </div>

            <p className="text-white/35 text-lg mb-10 max-w-lg">
              Book a free strategy call. See how Webflowra can automate your business growth.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 group animate-pulse-glow"
            >
              Book Free Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-14 flex flex-wrap gap-8 font-mono text-[10px] text-white/20 uppercase tracking-[0.2em]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan animate-pulse" /> Free Consult
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan animate-pulse" /> No Commitment
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan animate-pulse" /> 24hr Response
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTASection;
