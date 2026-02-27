import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What industries does Webflowra serve?",
    answer:
      "Webflowra works primarily with small and medium businesses across industries such as professional services, SaaS, e-commerce, local service providers, startups, and B2B companies. Our systems-driven approach is designed to adapt to different business models, helping companies streamline marketing, automate operations, and scale sustainably without increasing manual effort.",
  },
  {
    question: "How does Webflowra's automation differ from other agencies?",
    answer:
      "Unlike traditional agencies that focus only on campaigns or websites, Webflowra builds complete growth systems. We connect websites, marketing tools, CRM, and internal workflows into a single automated ecosystem. This means leads are captured, nurtured, followed up, and managed automatically — reducing dependency on manual work and improving consistency.",
  },
  {
    question: "What tools does Webflowra use for workflow automation?",
    answer:
      "Webflowra uses a modern automation stack that may include tools like Zapier, Make (Integromat), HubSpot, Google Workspace, Notion, Airtable, CRM platforms, and custom API integrations. Tool selection depends on the client's business needs, scale, and existing systems.",
  },
  {
    question: "Is Webflowra suitable for small and medium businesses?",
    answer:
      "Yes. Webflowra is specifically designed for small and medium businesses that want scalable systems without enterprise-level complexity. Our solutions focus on clarity, automation, and ROI — making growth predictable and manageable.",
  },
  {
    question: "Where is Webflowra based and who do you work with?",
    answer:
      "Webflowra is based in Challakere, Chitradurga, Karnataka and works with clients globally. We collaborate with founders, business owners, and growth teams who want to move from hustle-driven growth to system-driven scale.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FAQ = () => {
  const whatsappNumber = "917204931995";
  const whatsappMessage = encodeURIComponent(
    "Hi Webflowra! I have a question about your services."
  );

  return (
    <>
      <Helmet>
        <title>FAQs About Webflowra | Digital Marketing & Automation Agency</title>
        <meta
          name="description"
          content="Answers to common questions about Webflowra's services, automation approach, tools, and industries we serve."
        />
        <link rel="canonical" href="https://webflowra.com/faq" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-15" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan/8 rounded-full blur-[120px]" />
          <div className="section-container relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <p className="terminal-text text-xs mb-4 opacity-50 uppercase tracking-[0.2em]">
                  <span className="text-neon-magenta">$</span> webflowra.faq()
                </p>
                <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                  Common Questions About{" "}
                  <span className="gradient-text">Webflowra</span>
                </h1>
                <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
                  Everything you need to know about our services, approach, and
                  how Webflowra can help your business grow.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-20 md:py-28 bg-background relative">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <ScrollReveal key={i} delay={i * 0.06}>
                    <AccordionItem
                      value={`faq-${i}`}
                      className="border border-border rounded bg-card px-6 hover:border-cyan/30 transition-colors"
                    >
                      <AccordionTrigger className="text-left text-foreground font-display font-semibold text-base md:text-lg hover:no-underline hover:text-cyan transition-colors py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </ScrollReveal>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 section-navy relative overflow-hidden scanlines">
          <div className="absolute inset-0 pattern-grid opacity-15" />
          <div className="section-container text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Still have questions?
              </h2>
              <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto">
                Reach out to Webflowra — we're happy to help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  ⚡ Chat on WhatsApp <ArrowRight size={18} />
                </a>
                <Link
                  to="/contact"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Contact Webflowra
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
