import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Webflowra — Build. Automate. Scale. | Digital Marketing Agency</title>
        <meta name="description" content="Webflowra designs high-converting websites and builds smart marketing & workflow automation systems that grow your business on autopilot. Trusted by startups and growing businesses across India." />
        <link rel="canonical" href="https://webflowra.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Webflowra",
          "url": "https://webflowra.com",
          "logo": "https://webflowra.com/webflowra-logo.png",
          "description": "Webflowra is a digital marketing agency that builds growth systems — web design, marketing automation, workflow automation, and AI integration.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7204931995",
            "contactType": "sales",
            "email": "contact@webflowra.com",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.instagram.com/webflowra/",
            "https://www.facebook.com/profile.php?id=61587529013992",
            "https://www.linkedin.com/company/webflowra"
          ],
          "foundingDate": "2024",
          "slogan": "Build. Automate. Scale."
        })}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <SocialProofStrip />
        <TestimonialsSection />
        <FinalCTASection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
