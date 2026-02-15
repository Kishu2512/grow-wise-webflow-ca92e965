import { Globe, BarChart3, Mail, Workflow, Bot } from "lucide-react";

interface Props { isActive: boolean; }

const ServicesSection = ({ isActive }: Props) => {
  const services = [
    { icon: Globe, title: "Web Design", desc: "High-converting, mobile-first websites." },
    { icon: BarChart3, title: "Digital Marketing", desc: "SEO, ads, funnels, lead gen." },
    { icon: Mail, title: "Marketing Automation", desc: "Email, WhatsApp, CRM flows." },
    { icon: Workflow, title: "Workflow Automation", desc: "Zapier, Make, AI tools." },
    { icon: Bot, title: "AI Integration", desc: "Chatbots & smart workflows." },
  ];

  return (
    <div className="snap-panel bg-as-black">
      <div className="section-container relative z-10 w-full">
        {isActive && (
          <>
            <div className="mb-16">
              <span className="as-label opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>Services</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.9] mt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                What we <span className="accent-text">do</span>.
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-fade-in-up bg-as-black p-8 group hover:bg-as-dark transition-colors duration-500"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <service.icon className="w-5 h-5 text-as-accent/40 group-hover:text-as-accent mb-6 transition-colors duration-300" />
                  <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/20 text-xs leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-8 left-8 panel-counter">05</div>
    </div>
  );
};

export default ServicesSection;
