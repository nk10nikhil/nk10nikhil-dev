
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/section/Navbar";
import Hero from "@/components/section/Hero";
import TechStack from "@/components/section/TechStack";
import FeaturedProjects from "@/components/section/FeaturedProjects";
import Services from "@/components/section/Services";
import ContactSection from "@/components/section/ContactSection";
import Footer from "@/components/section/Footer";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import CodeSnippet from "@/components/section/CodeSnippet";
import TechnologyHighlight from "@/components/section/TechnologyHighlight";
import ToolbarHighlight from "@/components/section/ToolbarHighlight";
import SkillsSection from "@/components/section/SkillsSection";
import TechSkills from "@/components/section/TechSkills";

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
        duration: 0.8,
        filter: { duration: 1.2, ease: "easeOut" },
        opacity: { duration: 0.6, ease: "easeIn" },
      }}
      className="bg-transparent min-h-screen relative"
    >
      {/* Background Elements */}
      <BlurBackground />
      <FloatingObjects />

      {/* Content */}
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <FeaturedProjects />
        <SkillsSection />
        <Services />
        <ToolbarHighlight />
        <TechnologyHighlight />
        <CodeSnippet />
        <TechSkills />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
