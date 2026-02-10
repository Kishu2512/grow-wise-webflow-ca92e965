import { useState, useEffect, useRef, useCallback } from "react";
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
import SideNav from "@/components/SideNav";

const sectionLabels = [
  "Home", "Clients", "Problem", "Solution", "Services",
  "Process", "Why Us", "Team", "Work", "Reviews", "Contact", "Info"
];

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const scrollTop = container.scrollTop;
    const vh = window.innerHeight;
    const index = Math.round(scrollTop / vh);
    if (index !== activeIndex) {
      setActiveIndex(index);
      setVisited(prev => new Set(prev).add(index));
    }
  }, [activeIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navigateTo = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({ top: index * window.innerHeight, behavior: "smooth" });
  }, []);

  const goNext = useCallback(() => {
    navigateTo(Math.min(activeIndex + 1, sectionLabels.length - 1));
  }, [activeIndex, navigateTo]);

  return (
    <div className="h-screen overflow-hidden bg-background">
      <Navbar activeSection={activeIndex} totalSections={sectionLabels.length} />
      <SideNav sections={sectionLabels} activeIndex={activeIndex} onNavigate={navigateTo} />

      <div ref={containerRef} className="snap-container">
        <HeroSection isActive={visited.has(0)} onNext={goNext} />
        <SocialProofStrip isActive={visited.has(1)} />
        <ProblemSection isActive={visited.has(2)} />
        <SolutionSection isActive={visited.has(3)} />
        <ServicesSection isActive={visited.has(4)} />
        <HowItWorksSection isActive={visited.has(5)} />
        <WhyUsSection isActive={visited.has(6)} />
        <TeamSection isActive={visited.has(7)} />
        <PortfolioSection isActive={visited.has(8)} />
        <TestimonialsSection isActive={visited.has(9)} />
        <FinalCTASection isActive={visited.has(10)} />
        <Footer isActive={visited.has(11)} />
      </div>
    </div>
  );
};

export default Index;
