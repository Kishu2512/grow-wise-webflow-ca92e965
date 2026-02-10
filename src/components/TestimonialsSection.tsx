import { Quote, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const TestimonialsSection = () => {
  const testimonials = [
    { quote: "Webflowra transformed our website and lead system. We now get daily leads without manual work.", author: "Rahul", role: "Business Coach", rating: 5 },
    { quote: "Their automation saved us 20+ hours per week. Highly recommended.", author: "Sneha", role: "Agency Owner", rating: 5 },
    { quote: "Professional, fast, and results-driven team.", author: "Amit", role: "SaaS Founder", rating: 5 },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="tag-label">Transmissions</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground leading-[0.9] mb-16">
            CLIENT<br /><span className="gradient-text">FEEDBACK</span>
          </h2>
        </ScrollReveal>

        {/* Brutalist testimonial blocks — no rounding, hard lines */}
        <div className="grid md:grid-cols-3 gap-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="border border-border bg-card p-8 card-hover relative h-full">
                {/* Thick top accent */}
                <div className="absolute top-0 left-0 w-12 h-[3px] bg-cyan" />

                <div className="flex gap-0.5 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-cyan fill-cyan" />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 flex items-center justify-center bg-cyan/10 border border-cyan/20">
                    <span className="text-cyan font-mono font-bold text-sm">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
