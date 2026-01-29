import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Webflowra transformed our website and lead system. We now get daily leads without manual work.",
      author: "Rahul",
      role: "Business Coach",
      rating: 5,
    },
    {
      quote:
        "Their automation saved us 20+ hours per week. Highly recommended.",
      author: "Sneha",
      role: "Agency Owner",
      rating: 5,
    },
    {
      quote: "Professional, fast, and results-driven team.",
      author: "Amit",
      role: "SaaS Founder",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            What our clients say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-card rounded-2xl border border-border card-hover"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-accent/20" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
