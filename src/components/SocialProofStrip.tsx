const SocialProofStrip = () => {
  const clients = [
    "StartupXYZ",
    "CoachPro",
    "TechFlow",
    "GrowthHub",
    "ScaleUp",
    "InnovateCo",
  ];

  return (
    <section className="py-12 bg-secondary border-y border-border">
      <div className="section-container">
        <p className="text-center text-muted-foreground text-sm font-medium mb-8">
          Trusted by forward-thinking brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                <span className="font-bold text-sm">{client[0]}</span>
              </div>
              <span className="font-semibold text-sm md:text-base">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
