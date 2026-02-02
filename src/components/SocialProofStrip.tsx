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
    <section className="py-12 bg-secondary border-y border-border overflow-hidden">
      <div className="section-container">
        <p className="text-center text-muted-foreground text-sm font-medium mb-8 uppercase tracking-wider">
          Trusted by forward-thinking brands
        </p>
        
        {/* Horizontal scrolling logos */}
        <div className="flex items-center justify-center gap-8 md:gap-12 overflow-x-auto pb-2 scrollbar-hide">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-16 md:h-20 px-4 flex items-center justify-center bg-white rounded-xl border border-border hover:shadow-lg transition-all"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 md:h-14 w-auto max-w-[140px] md:max-w-[180px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
