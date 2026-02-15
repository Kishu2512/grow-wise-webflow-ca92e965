import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyUsSection from "@/components/WhyUsSection";
import TeamSection from "@/components/TeamSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background md:snap-y md:snap-mandatory md:h-screen md:overflow-y-auto scroll-smooth">
      <Navbar />
      <div className="md:snap-start md:snap-always"><HeroSection /></div>
      <div className="md:snap-start md:snap-always"><SocialProofStrip /></div>
      <div className="md:snap-start md:snap-always"><ProblemSection /></div>
      <div className="md:snap-start md:snap-always"><SolutionSection /></div>
      <div className="md:snap-start md:snap-always"><ServicesSection /></div>
      <div className="md:snap-start md:snap-always"><HowItWorksSection /></div>
      <div className="md:snap-start md:snap-always"><WhyUsSection /></div>
      <div className="md:snap-start md:snap-always"><TeamSection /></div>
      <div className="md:snap-start md:snap-always"><PortfolioSection /></div>
      <div className="md:snap-start md:snap-always"><TestimonialsSection /></div>
      <div className="md:snap-start md:snap-always"><FinalCTASection /></div>
      <div className="md:snap-start md:snap-always"><Footer /></div>
    </div>
  );
};

export default Index;
