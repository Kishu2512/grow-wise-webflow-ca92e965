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
      <div className="bio-divider absolute top-0 left-0 right-0" />

      {/* Organic blob */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-bio-glow/3 blob animate-drift" style={{ filter: 'blur(100px)' }} />

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="pulse-dot" />
              <span className="organism-label">The Nucleus</span>
            </div>
            <div className="w-12 h-px bg-bio-glow/30 mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-[0.95]">
              Meet the <span className="bio-text">minds</span><br />behind the growth.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <ScrollReveal key={index} direction={index === 0 ? "left" : "right"} delay={0.15}>
              <div className="group relative overflow-hidden rounded-3xl">
                {/* Portrait */}
                <div className="relative h-[400px] overflow-hidden rounded-t-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    style={{ filter: 'saturate(0.5) contrast(1.05) hue-rotate(20deg)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Experience badge — organic */}
                  <div className="absolute top-6 right-6">
                    <span className="organism-label bg-bio-glow/90 text-bio-deep px-4 py-2 rounded-full font-bold text-[11px]" style={{ color: 'hsl(160 40% 6%)' }}>
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 bg-card border border-border/50 border-t-0 rounded-b-3xl">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="organism-label mb-4 block">{member.role}</p>
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
