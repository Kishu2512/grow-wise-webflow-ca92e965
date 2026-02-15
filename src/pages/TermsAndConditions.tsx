import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => (
  <>
    <Helmet>
      <title>Webflowra Terms & Conditions — Service Agreement</title>
      <meta name="description" content="Webflowra's terms and conditions outline the rules and guidelines for using Webflowra's services. Read before engaging with Webflowra." />
      <link rel="canonical" href="https://webflowra.com/terms-and-conditions" />
    </Helmet>
    <Navbar />
    <main className="min-h-screen bg-background pt-20">
      <section className="py-20 section-navy relative overflow-hidden scanlines">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="section-container relative z-10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 text-center">
            Webflowra <span className="gradient-text">Terms & Conditions</span>
          </h1>
          <p className="text-white/40 text-center mb-4">Last updated: February 2026</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="section-container max-w-3xl mx-auto prose prose-sm text-foreground">
          <h2 className="text-xl font-display font-bold mb-4">1. Services</h2>
          <p className="text-muted-foreground mb-6">Webflowra provides web design, digital marketing, marketing automation, workflow automation, and AI integration services. By engaging Webflowra, you agree to these terms.</p>

          <h2 className="text-xl font-display font-bold mb-4">2. Client Responsibilities</h2>
          <p className="text-muted-foreground mb-6">Clients must provide accurate information, timely feedback, and required content/assets for Webflowra to deliver services effectively.</p>

          <h2 className="text-xl font-display font-bold mb-4">3. Payment Terms</h2>
          <p className="text-muted-foreground mb-6">Payment terms are agreed upon before project commencement. Webflowra reserves the right to pause work if payments are overdue.</p>

          <h2 className="text-xl font-display font-bold mb-4">4. Intellectual Property</h2>
          <p className="text-muted-foreground mb-6">Upon full payment, clients own the deliverables created by Webflowra. Webflowra retains the right to showcase work in our portfolio.</p>

          <h2 className="text-xl font-display font-bold mb-4">5. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-6">Webflowra is not liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>

          <h2 className="text-xl font-display font-bold mb-4">6. Modifications</h2>
          <p className="text-muted-foreground mb-6">Webflowra reserves the right to update these terms. Continued use of Webflowra services constitutes acceptance of updated terms.</p>

          <h2 className="text-xl font-display font-bold mb-4">7. Contact</h2>
          <p className="text-muted-foreground mb-6">For questions about these terms, contact Webflowra at <a href="mailto:contact@webflowra.com" className="text-cyan hover:underline">contact@webflowra.com</a>.</p>

          <div className="mt-8">
            <Link to="/" className="text-cyan hover:underline text-sm">← Back to Webflowra Home</Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default TermsAndConditions;
