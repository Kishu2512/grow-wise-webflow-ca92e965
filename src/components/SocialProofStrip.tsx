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
    <section className="py-16 bg-secondary border-y border-border overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <p className="text-center text-foreground text-base font-semibold mb-10 uppercase tracking-wider">
          Trusted by forward-thinking brands
        </p>
        
        {/* Horizontal logos - full width */}
        <div className="flex items-center justify-between gap-4 md:gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-1 min-w-[160px] h-24 md:h-28 px-6 flex items-center justify-center bg-white rounded-xl border border-border hover:shadow-lg transition-all"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 md:h-20 w-auto max-w-[200px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofStrip;
