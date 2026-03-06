import { useEffect } from "react";
import { motion } from "framer-motion";
import BlurBackground from "@/components/section/BlurBackground";
import BackgroundHero from "@/components/section/BackgrounHero";
import LogoScroll from "@/components/elements/LogoScroll";
import TestimonialMarquee from "@/components/section/TestimonialMarquee";
import ServicesGrid from "@/components/section/ServicesGrid";
import WhyChooseUs from "@/components/section/WhyChooseUs";
import Methodology from "@/components/section/Methodology";
import Newsletter from "@/components/section/Newsletter";
import FloatingObjects from "@/components/elements/FloatingObjects";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent min-h-screen relative w-full overflow-x-hidden"
    >
      {/* Backgroud Elements */}
      <BlurBackground />
      <FloatingObjects />

      <BackgroundHero />
      <LogoScroll />
      <ServicesGrid />
      <WhyChooseUs />
      <Methodology />
      <TestimonialMarquee />
      <Newsletter />
    </motion.div>
  );
};

export default Services;
