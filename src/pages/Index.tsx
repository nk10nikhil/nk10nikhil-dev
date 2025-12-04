import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/section/Hero";
import BlurBackground from "@/components/section/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import TechStack from "@/components/section/TechStack";
import FeaturedProjects from "@/components/section/FeaturedProjects";
import Certification from "@/components/section/Certification";
import SkillsSection from "@/components/section/SkillsSection";
import Services from "@/components/section/Services";
import ToolbarHighlight from "@/components/section/ToolbarHighlight";
import TechnologyHighlight from "@/components/section/TechnologyHighlight";
import TechSkills from "@/components/section/TechSkills";
import ContactSection from "@/components/section/ContactSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.6,
        opacity: { duration: 0.5, ease: "easeIn" },
      }}
      className="bg-transparent min-h-screen relative"
    >
      {/* Background Elements */}
      <BlurBackground />
      <FloatingObjects />

      {/* Content */}
      <main>
        <Hero />
        <TechStack />
        <FeaturedProjects />
        <Certification />
        <SkillsSection />
        <Services />
        <ToolbarHighlight />
        <TechnologyHighlight />
        <TechSkills />
        <ContactSection />
      </main>
    </motion.div>
  );
};

export default Index;
