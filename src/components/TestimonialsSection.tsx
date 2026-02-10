import { Quote, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const TestimonialsSection = () => {
  const testimonials = [
    { quote: "Webflowra transformed our website and lead system. We now get daily leads without manual work.", author: "Rahul", role: "Business Coach", rating: 5 },
    { quote: "Their automation saved us 20+ hours per week. Highly recommended.", author: "Sneha", role: "Agency Owner", rating: 5 },
    { quote: "Professional, fast, and results-driven team.", author: "Amit", role: "SaaS Founder", rating: 5 },
  ];

  return (
    <section className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-magenta/5 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
              <span className="text-neon-magenta">$</span> feedback.stream()
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Client <span className="gradient-text">transmissions</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} direction="scale" delay={index * 0.1}>
              <div className="cyber-card p-7 card-hover relative h-full">
                <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-cyan/30" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-cyan/30" />
                <Quote className="w-8 h-8 text-cyan/15 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-cyan fill-cyan" />
                  ))}
                </div>
                <p className="text-white/60 text-sm mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded flex items-center justify-center bg-cyan/10 border border-cyan/20">
                    <span className="text-cyan font-mono font-bold text-sm">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                    <p className="terminal-text text-[10px] opacity-40">{testimonial.role}</p>
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
