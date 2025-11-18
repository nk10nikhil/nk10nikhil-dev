import { useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/section/Hero";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";

// Lazy load sections that are below the fold
const TechStack = lazy(() => import("@/components/section/TechStack"));
const FeaturedProjects = lazy(
  () => import("@/components/section/FeaturedProjects")
);
const Certification = lazy(() => import("@/components/section/Certification"));
const SkillsSection = lazy(() => import("@/components/section/SkillsSection"));
const Services = lazy(() => import("@/components/section/Services"));
const ToolbarHighlight = lazy(
  () => import("@/components/section/ToolbarHighlight")
);
const TechnologyHighlight = lazy(
  () => import("@/components/section/TechnologyHighlight")
);
const TechSkills = lazy(() => import("@/components/section/TechSkills"));
const ContactSection = lazy(
  () => import("@/components/section/ContactSection")
);

// Lightweight section loader
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse w-full max-w-4xl mx-auto px-4">
      <div className="h-8 bg-secondary rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-secondary rounded w-full mb-2"></div>
      <div className="h-4 bg-secondary rounded w-5/6"></div>
    </div>
  </div>
);

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
        <Suspense fallback={<SectionLoader />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FeaturedProjects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Certification />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ToolbarHighlight />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TechnologyHighlight />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TechSkills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </main>
    </motion.div>
  );
};

export default Index;
