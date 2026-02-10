import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const TestimonialsSection = () => {
  const testimonials = [
    { quote: "Webflowra transformed our website and lead system. We now get daily leads without manual work.", author: "Rahul", role: "Business Coach" },
    { quote: "Their automation saved us 20+ hours per week. Highly recommended.", author: "Sneha", role: "Agency Owner" },
    { quote: "Professional, fast, and results-driven team.", author: "Amit", role: "SaaS Founder" },
  ];

  return (
    <section className="py-32 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 cine-hr" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="cine-label mb-6 block">Testimonials</span>
            <div className="w-12 h-px bg-cyan/30 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-[0.95]">
              What clients <span className="gradient-text">say</span>.
            </h2>
          </div>
        </ScrollReveal>

        {/* Cinematic testimonials — large quotes, spacious */}
        <div className="max-w-4xl mx-auto space-y-16">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.15}>
              <div className="text-center group">
                <div className="flex gap-1 justify-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-cyan/30 fill-cyan/30" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-foreground/70 font-light leading-relaxed italic mb-10 max-w-2xl mx-auto">
                  "{testimonial.quote}"
                </p>

                <div>
                  <p className="text-foreground font-semibold text-sm">{testimonial.author}</p>
                  <p className="cine-label mt-1">{testimonial.role}</p>
                </div>

                {index < testimonials.length - 1 && (
                  <div className="cine-hr mt-16" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
