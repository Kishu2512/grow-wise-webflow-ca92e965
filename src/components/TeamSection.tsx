import { Award } from "lucide-react";
import kishorImage from "@/assets/kishor-headshot.jpg";
import abidImage from "@/assets/abid-headshot.jpg";
import ScrollReveal from "./ScrollReveal";

const TeamSection = () => {
  const team = [
    {
      name: "Kishor",
      role: "Digital Marketing & Automation Lead",
      experience: "6+ years",
      description: "Expert in digital marketing, lead generation, and building automation systems that scale.",
      image: kishorImage,
    },
    {
      name: "Abid",
      role: "Sales Manager",
      experience: "5+ years",
      description: "Passionate about understanding client needs and delivering tailored solutions for growth.",
      image: abidImage,
    },
  ];

  return (
    <section id="team" className="py-32 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 cine-hr" />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="cine-label mb-6 block">The Team</span>
            <div className="w-12 h-px bg-cyan/30 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-[0.95]">
              Meet the <span className="gradient-text">people</span><br />behind the work.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <ScrollReveal key={index} direction={index === 0 ? "left" : "right"} delay={0.15}>
              <div className="group relative overflow-hidden card-hover">
                {/* Cinematic portrait */}
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    style={{ filter: 'saturate(0.4) contrast(1.1)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                  {/* Experience */}
                  <div className="absolute top-6 right-6">
                    <span className="cine-label bg-cyan/90 text-primary px-3 py-1.5 font-bold" style={{ color: 'hsl(222 47% 8%)' }}>
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 bg-card border border-border border-t-0">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="cine-label mb-4 block">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
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
