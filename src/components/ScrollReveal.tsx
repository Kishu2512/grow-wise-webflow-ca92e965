// ScrollReveal is not used in Anti-Scroll mode
// Kept as empty export for compatibility
const ScrollReveal = ({ children }: { children: React.ReactNode; className?: string; direction?: string; delay?: number; once?: boolean }) => {
  return <>{children}</>;
};

export default ScrollReveal;
