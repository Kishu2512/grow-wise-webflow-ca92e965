import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to book a free strategy call.");

  return (
    <section
      id="contact"
      className="py-20 md:py-28 section-navy relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pattern-grid opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal/20 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Ready to build your{" "}
            <span className="gradient-text">growth engine</span>?
          </h2>

          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Book a free strategy call and see how Webflowra can automate your
            business growth.
          </p>

          {/* CTA Button - Only Book Free Call */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 group inline-flex"
          >
            Book Free Call
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          {/* Trust Elements */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Free Consultation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              No Commitment Required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Response within 24hrs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
