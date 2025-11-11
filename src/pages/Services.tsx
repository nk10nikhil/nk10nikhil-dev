import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import BlurBackground from "@/components/elements/BlurBackground";
import BackgroundHero from "@/components/section/BackgrounHero";
import LogoScroll from "@/components/elements/LogoScroll";
import TestimonialMarquee from "@/components/services/TestimonialMarquee";
import ServicesGrid from "@/components/services/ServicesGrid";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import Methodology from "@/components/services/Methodology";
import Newsletter from "@/components/services/Newsletter";

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
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <BlurBackground />
      </div>

      {/* Content */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <BackgroundHero />
          <div className="w-full overflow-hidden">
            <LogoScroll />
          </div>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <ServicesGrid />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Methodology Section */}
      <Methodology />

      {/* Testimonials Section */}
      <TestimonialMarquee />

      {/* Newsletter Section */}
      <Newsletter />

      <Footer />
    </motion.div>
  );
};

export default Services;
