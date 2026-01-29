const SocialProofStrip = () => {
  const clients = [
    { name: "IATAM", initials: "IA" },
    { name: "Celebrity Aesthetics", initials: "CA" },
    { name: "Durgaparameshwari Astrology", initials: "DA" },
    { name: "Vidim Ayurveda", initials: "VA" },
    { name: "Trident Aesthetics", initials: "TA" },
  ];

  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="section-container">
        <p className="text-center text-foreground/60 text-sm font-medium mb-10 uppercase tracking-wider">
          Trusted by forward-thinking brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl hover:border-accent/30 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-bold text-sm text-accent">{client.initials}</span>
              </div>
              <span className="font-semibold text-sm md:text-base text-foreground group-hover:text-accent transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
