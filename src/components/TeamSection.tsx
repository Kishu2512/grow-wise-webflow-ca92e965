import { Award } from "lucide-react";
import kishorImage from "@/assets/kishor-headshot.jpg";
import abidImage from "@/assets/abid-headshot.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Kishor",
      role: "Digital Marketing & Automation Lead",
      experience: "6+ yrs",
      description: "Expert in digital marketing strategies, lead generation, and building automation systems that scale.",
      image: kishorImage,
      specialties: ["Marketing", "Automation", "Growth"],
    },
    {
      name: "Abid",
      role: "Sales Manager",
      experience: "5+ yrs",
      description: "Passionate about understanding client needs and delivering tailored solutions for growth.",
      image: abidImage,
      specialties: ["Sales", "Client Relations", "Strategy"],
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
      <div className="absolute inset-0 pattern-grid opacity-15" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
            <span className="text-neon-magenta">$</span> team.render()
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            The <span className="gradient-text">Crew</span>
          </h2>
          <p className="text-white/40">The humans behind the machine.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group cyber-card overflow-hidden card-hover">
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  style={{ filter: 'contrast(1.05) saturate(0.7)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />

                {/* XP badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-cyan/90 rounded text-[10px] font-mono font-bold text-primary">
                  <Award size={10} />
                  {member.experience}
                </div>

                {/* Scanline overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white">
                  {member.name}
                </h3>
                <p className="terminal-text text-xs mt-1 opacity-60">{member.role}</p>

                <p className="text-white/40 text-sm mt-3 mb-4">{member.description}</p>

                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan/10 border border-cyan/20 text-cyan/70 text-[10px] font-mono uppercase rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
