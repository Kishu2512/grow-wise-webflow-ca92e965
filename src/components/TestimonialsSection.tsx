import { Star } from "lucide-react";

interface Props { isActive: boolean; }

const TestimonialsSection = ({ isActive }: Props) => {
  const testimonials = [
    { quote: "Webflowra transformed our website and lead system. We now get daily leads without manual work.", author: "Rahul", role: "Business Coach" },
    { quote: "Their automation saved us 20+ hours per week. Highly recommended.", author: "Sneha", role: "Agency Owner" },
    { quote: "Professional, fast, and results-driven team.", author: "Amit", role: "SaaS Founder" },
  ];

  return (
    <div className="snap-panel bg-as-dark">
      <div className="section-container relative z-10 w-full">
        {isActive && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="as-label opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>Testimonials</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.9] mt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                What clients <span className="accent-text">say</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-fade-in-up text-center"
                  style={{ animationDelay: `${0.5 + index * 0.15}s` }}
                >
                  <div className="flex gap-1 justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-as-accent/30 fill-as-accent/30" />
                    ))}
                  </div>
                  <p className="text-white/40 text-base font-light leading-relaxed italic mb-8">
                    "{t.quote}"
                  </p>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="as-label mt-1">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-8 left-8 panel-counter">10</div>
    </div>
  );
};

export default TestimonialsSection;
