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
    <section className="py-20 section-living relative">
      <div className="bio-divider mb-16" />
      <div className="section-container">
        <ScrollReveal direction="fade">
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="pulse-dot" />
            <p className="organism-label">Symbiotic Partners</p>
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap">
            {clients.map((client, index) => (
              <div key={index} className="group transition-all duration-700">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 md:h-14 w-auto object-contain opacity-15 group-hover:opacity-50 transition-all duration-700 grayscale group-hover:grayscale-0"
                  style={{ filter: 'grayscale(100%) hue-rotate(80deg)' }}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SocialProofStrip;
