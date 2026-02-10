import iatamLogo from "@/assets/client-iatam.jpg";
import celebrityLogo from "@/assets/client-celebrity.jpg";
import astrologyLogo from "@/assets/client-astrology.png";
import vidimLogo from "@/assets/client-vidim.png";
import tridentLogo from "@/assets/client-trident.webp";
import ScrollReveal from "./ScrollReveal";

const SocialProofStrip = () => {
  const clients = [
    { name: "IATAM", logo: iatamLogo },
    { name: "Celebrity Aesthetics", logo: celebrityLogo },
    { name: "Durgaparameshwari Astrology", logo: astrologyLogo },
    { name: "Vidim Ayurveda", logo: vidimLogo },
    { name: "Trident Aesthetics", logo: tridentLogo },
  ];

  return (
    <section className="py-10 bg-primary border-y-2 border-cyan/10 relative">
      <div className="section-container">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-8 h-px bg-cyan/40" />
          <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">
            Trusted Clients
          </p>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-1 min-w-[130px] h-16 md:h-20 px-4 flex items-center justify-center border border-cyan/8 bg-white/[0.02] hover:border-cyan/25 hover:bg-cyan/[0.03] transition-all group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 md:h-14 w-auto max-w-[140px] object-contain opacity-40 group-hover:opacity-80 transition-opacity grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
