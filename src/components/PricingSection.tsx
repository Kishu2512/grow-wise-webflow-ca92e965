import { Check, Sparkles } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹49,999",
      description: "Perfect for getting started",
      features: [
        "Custom Website Design",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Form Integration",
        "Basic Automation Setup",
        "30-Day Support",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "₹99,999",
      description: "Best for growing businesses",
      features: [
        "Everything in Starter",
        "Advanced SEO & Analytics",
        "Email Marketing Automation",
        "CRM Integration",
        "WhatsApp Automation",
        "90-Day Support",
      ],
      popular: true,
    },
    {
      name: "Scale",
      price: "₹1,99,999",
      description: "For serious scaling",
      features: [
        "Everything in Growth",
        "Full Workflow Automation",
        "AI Chatbot Integration",
        "Custom Integrations",
        "Priority Support",
        "12-Month Partnership",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Simple pricing. Real results.
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your growth goals
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all card-hover ${
                plan.popular
                  ? "bg-primary text-white border-accent scale-105 z-10"
                  : "bg-card border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-accent rounded-full">
                  <Sparkles size={14} className="text-primary" />
                  <span className="text-primary text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-xl font-display font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.popular ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span
                  className={`text-4xl font-display font-bold ${
                    plan.popular ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ml-2 ${
                    plan.popular ? "text-white/60" : "text-muted-foreground"
                  }`}
                >
                  one-time
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? "bg-accent/20" : "bg-accent/20"
                      }`}
                    >
                      <Check
                        size={12}
                        className={plan.popular ? "text-accent" : "text-accent"}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white/80" : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? "bg-accent text-primary hover:bg-accent/90"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
