import { Award } from "lucide-react";
import kishorImage from "@/assets/kishor-headshot.jpg";
import abidImage from "@/assets/abid-headshot.jpg";
import ScrollReveal from "./ScrollReveal";

const TeamSection = () => {
  const team = [
    {
      name: "Kishor",
      role: "Digital Marketing & Automation Lead",
      experience: "6+ yrs",
      description: "Expert in digital marketing, lead generation, and building automation systems that scale.",
      image: kishorImage,
      specialties: ["Marketing", "Automation", "Growth"],
    },
    {
      name: "Abid",
      role: "Sales Manager",
      experience: "5+ yrs",
      description: "Passionate about understanding client needs and delivering tailored solutions for growth.",
      image: abidImage,
      specialties: ["Sales", "Relations", "Strategy"],
    },
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-5" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <span className="tag-label">Crew</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground leading-[0.9]">
              THE<br /><span className="gradient-text">CREW</span>
            </h2>
            <p className="hidden md:block font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] max-w-[200px] text-right">
              The humans behind the machine
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {team.map((member, index) => (
            <ScrollReveal key={index} direction={index === 0 ? "left" : "right"} delay={0.1}>
              <div className="group border border-border bg-card hover:border-cyan/20 transition-all card-hover overflow-hidden">
                {/* Image with brutalist crop */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    style={{ filter: 'contrast(1.1) saturate(0.5)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                  {/* XP badge — brutalist */}
                  <div className="absolute top-0 right-0 bg-cyan px-3 py-1.5 font-mono text-[10px] font-bold text-primary uppercase tracking-wider">
                    {member.experience}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-display font-black text-foreground">{member.name}</h3>
                  <p className="font-mono text-[10px] text-cyan uppercase tracking-[0.2em] mt-1 mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((s, i) => (
                      <span key={i} className="tag-label text-[9px]">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
