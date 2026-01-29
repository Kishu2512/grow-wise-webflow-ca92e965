import { XCircle, AlertTriangle } from "lucide-react";
import worriedBusinessman from "@/assets/worried-businessman.png";

const ProblemSection = () => {
  const problems = [
    "Your website looks outdated and doesn't convert visitors into leads",
    "You're wasting hours on manual follow-ups and admin work",
    "Leads come in, but nothing happens after",
    "Your marketing feels random, not systematic",
    "You're working harder, but revenue isn't scaling",
  ];

  return (
    <section className="py-20 md:py-28 section-navy relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pattern-grid opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-destructive/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/20 border border-destructive/30 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-destructive text-sm font-medium">Common Challenges</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Is your business stuck because…
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Illustration */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl transform -rotate-3" />
              <img
                src={worriedBusinessman}
                alt="Overwhelmed business owner thinking about challenges"
                className="relative rounded-2xl shadow-2xl max-w-md w-full border border-white/10"
              />
            </div>
          </div>

          {/* Problems List */}
          <div className="order-1 lg:order-2 space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-destructive/30 rounded-xl group hover:bg-destructive/10 hover:border-destructive/50 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-white/80 text-lg leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
