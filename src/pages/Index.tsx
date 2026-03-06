import {
  lazy,
  Suspense,
  useEffect,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { motion } from "framer-motion";
import Hero from "@/components/section/Hero";
import BlurBackground from "@/components/section/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import { useInView } from "@/hooks/useInView";

const TechStack = lazy(() => import("@/components/section/TechStack"));
const FeaturedProjects = lazy(
  () => import("@/components/section/FeaturedProjects"),
);
const Certification = lazy(() => import("@/components/section/Certification"));
const SkillsSection = lazy(() => import("@/components/section/SkillsSection"));
const Services = lazy(() => import("@/components/section/Services"));
const ToolbarHighlight = lazy(
  () => import("@/components/section/ToolbarHighlight"),
);
const TechnologyHighlight = lazy(
  () => import("@/components/section/TechnologyHighlight"),
);
const TechSkills = lazy(() => import("@/components/section/TechSkills"));
const ContactSection = lazy(
  () => import("@/components/section/ContactSection"),
);

type DeferredSectionProps = {
  minHeight?: number;
  children: ReactNode;
};

function DeferredSection({ minHeight = 460, children }: DeferredSectionProps) {
  const { ref, isInView } = useInView({ rootMargin: "300px 0px" });

  return (
    <section
      ref={ref as RefObject<HTMLElement>}
      style={{ minHeight: isInView ? undefined : minHeight }}
      className="optimize-render"
    >
      {isInView ? <Suspense fallback={null}>{children}</Suspense> : null}
    </section>
  );
}

const Index = () => {
  const [showFloatingEffects, setShowFloatingEffects] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const connection = (navigator as any).connection as
      | {
          saveData?: boolean;
          effectiveType?: string;
        }
      | undefined;

    const saveData = connection?.saveData === true;
    const slowNetwork = /2g|slow-2g/.test(connection?.effectiveType ?? "");
    const lowCoreDevice = (navigator.hardwareConcurrency ?? 8) <= 4;

    setShowFloatingEffects(!(saveData || slowNetwork || lowCoreDevice));
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
      {showFloatingEffects ? <FloatingObjects /> : null}

      {/* Content */}
      <main>
        <Hero />
        <DeferredSection minHeight={560}>
          <TechStack />
        </DeferredSection>
        <DeferredSection minHeight={520}>
          <FeaturedProjects />
        </DeferredSection>
        <DeferredSection minHeight={520}>
          <Certification />
        </DeferredSection>
        <DeferredSection minHeight={500}>
          <SkillsSection />
        </DeferredSection>
        <DeferredSection minHeight={500}>
          <Services />
        </DeferredSection>
        <DeferredSection minHeight={420}>
          <ToolbarHighlight />
        </DeferredSection>
        <DeferredSection minHeight={460}>
          <TechnologyHighlight />
        </DeferredSection>
        <DeferredSection minHeight={520}>
          <TechSkills />
        </DeferredSection>
        <DeferredSection minHeight={500}>
          <ContactSection />
        </DeferredSection>
      </main>
    </motion.div>
  );
};

export default Index;
