import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Webflowra Privacy Policy — Data Protection & Privacy</title>
      <meta name="description" content="Webflowra's privacy policy explains how we collect, use, and protect your data. Your privacy matters to Webflowra." />
      <link rel="canonical" href="https://webflowra.com/privacy-policy" />
    </Helmet>
    <Navbar />
    <main className="min-h-screen bg-background pt-20">
      <section className="py-20 section-navy relative overflow-hidden scanlines">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="section-container relative z-10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 text-center">
            Webflowra <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-white/40 text-center mb-4">Last updated: February 2026</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="section-container max-w-3xl mx-auto prose prose-sm text-foreground">
          <h2 className="text-xl font-display font-bold mb-4">1. Information Webflowra Collects</h2>
          <p className="text-muted-foreground mb-6">Webflowra may collect personal information such as your name, email address, phone number, and business details when you contact us via WhatsApp, email, or our website. Webflowra collects this information to serve you better.</p>

          <h2 className="text-xl font-display font-bold mb-4">2. How Webflowra Uses Your Information</h2>
          <p className="text-muted-foreground mb-6">Webflowra uses your information to respond to inquiries, provide our services (web design, digital marketing, automation), send project updates, and improve our Webflowra services.</p>

          <h2 className="text-xl font-display font-bold mb-4">3. Data Protection</h2>
          <p className="text-muted-foreground mb-6">Webflowra takes reasonable measures to protect your personal data from unauthorized access, alteration, or destruction. We do not sell your data to third parties.</p>

          <h2 className="text-xl font-display font-bold mb-4">4. Third-Party Services</h2>
          <p className="text-muted-foreground mb-6">Webflowra may use third-party tools (analytics, CRM, email) to deliver our services. These tools have their own privacy policies.</p>

          <h2 className="text-xl font-display font-bold mb-4">5. Cookies</h2>
          <p className="text-muted-foreground mb-6">Webflowra's website may use cookies to improve your browsing experience and analyze traffic.</p>

          <h2 className="text-xl font-display font-bold mb-4">6. Contact Webflowra</h2>
          <p className="text-muted-foreground mb-6">For privacy concerns, contact Webflowra at <a href="mailto:contact@webflowra.com" className="text-cyan hover:underline">contact@webflowra.com</a>.</p>

          <div className="mt-8">
            <Link to="/" className="text-cyan hover:underline text-sm">← Back to Webflowra Home</Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default PrivacyPolicy;
