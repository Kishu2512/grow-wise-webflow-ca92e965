import iatamLogo from "@/assets/client-iatam.jpg";
import celebrityLogo from "@/assets/client-celebrity.jpg";
import astrologyLogo from "@/assets/client-astrology.png";
import vidimLogo from "@/assets/client-vidim.png";
import tridentLogo from "@/assets/client-trident.webp";

const SocialProofStrip = () => {
  const clients = [
    { name: "IATAM", logo: iatamLogo },
    { name: "Celebrity Aesthetics", logo: celebrityLogo },
    { name: "Durgaparameshwari Astrology", logo: astrologyLogo },
    { name: "Vidim Ayurveda", logo: vidimLogo },
    { name: "Trident Aesthetics", logo: tridentLogo },
  ];

  return (
    <section className="py-12 bg-primary border-y border-cyan/10 relative overflow-hidden">
      {/* Scanline BG */}
      <div className="absolute inset-0 pattern-grid opacity-20" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 relative z-10">
        <p className="text-center terminal-text text-xs mb-8 opacity-50 uppercase tracking-[0.3em]">
          <span className="text-neon-magenta">▸</span> trusted_clients.map()
        </p>

        <div className="flex items-center justify-between gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-1 min-w-[140px] h-20 md:h-24 px-4 flex items-center justify-center rounded border border-cyan/10 bg-white/5 hover:border-cyan/30 hover:bg-cyan/5 transition-all group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 w-auto max-w-[160px] object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
