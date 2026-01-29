import { Linkedin, Award } from "lucide-react";
import kishorImage from "@/assets/kishor-headshot.jpg";
import nishchithaImage from "@/assets/nishchitha-headshot.jpg";
import veenaImage from "@/assets/veena-headshot.jpg";
import abidImage from "@/assets/abid-headshot.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Kishor",
      role: "Digital Marketing & Automation Lead",
      experience: "6+ years of experience",
      description:
        "Expert in digital marketing strategies, lead generation, and building automation systems that scale businesses.",
      image: kishorImage,
      specialties: ["Digital Marketing", "Automation", "Growth Strategy"],
    },
    {
      name: "Nishchitha",
      role: "Development Lead",
      experience: "4+ years of experience",
      description:
        "Skilled developer specializing in building high-performance, conversion-focused websites and web applications.",
      image: nishchithaImage,
      specialties: ["Web Development", "UI/UX", "Performance"],
    },
    {
      name: "Veena AM",
      role: "Quality Analyst",
      experience: "3+ years of experience",
      description:
        "Dedicated to ensuring flawless user experiences through rigorous testing and quality assurance processes.",
      image: veenaImage,
      specialties: ["Quality Assurance", "Testing", "User Experience"],
    },
    {
      name: "Abid",
      role: "Sales Manager",
      experience: "5+ years of experience",
      description:
        "Passionate about understanding client needs and delivering tailored solutions that drive business growth.",
      image: abidImage,
      specialties: ["Sales Strategy", "Client Relations", "Business Growth"],
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 section-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Meet The Team
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Our Experts
          </h2>
          <p className="text-white/60 text-lg">
            A dedicated team of professionals committed to your growth
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-accent/90 rounded-full">
                  <Award size={12} className="text-primary" />
                  <span className="text-primary text-[10px] font-semibold">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-display font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-accent text-sm font-medium">{member.role}</p>
                  </div>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                  >
                    <Linkedin size={14} className="text-white" />
                  </a>
                </div>

                <p className="text-white/60 text-sm mb-3 line-clamp-2">{member.description}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-white/10 text-white/80 text-[10px] rounded-full"
                    >
                      {specialty}
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
