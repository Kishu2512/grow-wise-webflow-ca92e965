const SocialProofStrip = () => {
  const clients = [
    { name: "IATAM", initials: "IA" },
    { name: "Celebrity Aesthetics", initials: "CA" },
    { name: "Durgaparameshwari Astrology", initials: "DA" },
    { name: "Vidim Ayurveda", initials: "VA" },
    { name: "Trident Aesthetics", initials: "TA" },
  ];

  return (
    <section className="py-16 section-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      
      <div className="section-container relative z-10">
        <p className="text-center text-white/60 text-sm font-medium mb-10 uppercase tracking-wider">
          Trusted by forward-thinking brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-accent/30 hover:bg-white/10 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/30">
                <span className="font-bold text-sm text-accent">{client.initials}</span>
              </div>
              <span className="font-semibold text-sm md:text-base text-white group-hover:text-accent transition-colors">
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
