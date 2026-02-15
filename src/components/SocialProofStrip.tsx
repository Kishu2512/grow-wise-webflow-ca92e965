import iatamLogo from "@/assets/client-iatam.jpg";
import celebrityLogo from "@/assets/client-celebrity.jpg";
import astrologyLogo from "@/assets/client-astrology.png";
import vidimLogo from "@/assets/client-vidim.png";
import tridentLogo from "@/assets/client-trident.webp";

interface Props { isActive: boolean; }

const SocialProofStrip = ({ isActive }: Props) => {
  const clients = [
    { name: "IATAM", logo: iatamLogo },
    { name: "Celebrity Aesthetics", logo: celebrityLogo },
    { name: "Durgaparameshwari Astrology", logo: astrologyLogo },
    { name: "Vidim Ayurveda", logo: vidimLogo },
    { name: "Trident Aesthetics", logo: tridentLogo },
  ];

  return (
    <div className="snap-panel bg-as-dark">
      <div className="section-container relative z-10 w-full">
        {isActive && (
          <div className="text-center">
            <span className="as-label opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Trusted By</span>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] mt-6 mb-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Companies that <span className="accent-text">grow</span>.
            </h2>

            <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-scale-in"
                  style={{ animationDelay: `${0.6 + index * 0.15}s` }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 md:h-16 w-auto object-contain opacity-25 hover:opacity-60 transition-opacity duration-500 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-8 left-8 panel-counter">02</div>
    </div>
  );
};

export default SocialProofStrip;
