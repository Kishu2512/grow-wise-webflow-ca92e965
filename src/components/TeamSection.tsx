import kishorImage from "@/assets/kishor-headshot.jpg";
import abidImage from "@/assets/abid-headshot.jpg";

interface Props { isActive: boolean; }

const TeamSection = ({ isActive }: Props) => {
  const team = [
    {
      name: "Kishor",
      role: "Digital Marketing & Automation Lead",
      experience: "6+ yrs",
      description: "Expert in digital marketing, lead generation, and building automation systems that scale.",
      image: kishorImage,
    },
    {
      name: "Abid",
      role: "Sales Manager",
      experience: "5+ yrs",
      description: "Passionate about understanding client needs and delivering tailored solutions for growth.",
      image: abidImage,
    },
  ];

  return (
    <div className="snap-panel bg-as-dark">
      <div className="section-container relative z-10 w-full">
        {isActive && (
          <>
            <div className="text-center mb-16">
              <span className="as-label opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>Team</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.9] mt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                The <span className="accent-text">people</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-fade-in-up group"
                  style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                >
                  <div className="relative h-[350px] overflow-hidden mb-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s]"
                      style={{ filter: 'saturate(0) contrast(1.15)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-as-dark via-transparent to-transparent" />

                    <div className="absolute top-4 right-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase bg-as-accent text-as-black px-3 py-1 font-bold">
                        {member.experience}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 bg-as-black border border-white/5 border-t-0">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="as-label mb-3">{member.role}</p>
                    <p className="text-white/20 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-8 left-8 panel-counter">08</div>
    </div>
  );
};

export default TeamSection;
