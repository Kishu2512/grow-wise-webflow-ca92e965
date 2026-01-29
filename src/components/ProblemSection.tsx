import { XCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Your website looks outdated and doesn't convert visitors into leads",
    "You're wasting hours on manual follow-ups and admin work",
    "Leads come in, but nothing happens after",
    "Your marketing feels random, not systematic",
    "You're working harder, but revenue isn't scaling",
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Is your business stuck because…
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-destructive/5 border border-destructive/20 rounded-xl group hover:bg-destructive/10 transition-colors"
            >
              <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-foreground/80 text-lg">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
