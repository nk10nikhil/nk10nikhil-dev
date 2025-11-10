import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import BlurBackground from "@/components/elements/BlurBackground";
import BackgroundHero from "@/components/section/BackgrounHero";
import LogoScroll from "@/components/elements/LogoScroll";
import TestimonialMarquee from "@/components/services/TestimonialMarquee";
import { Sparkles } from "lucide-react";
import ProductivitySlider from "@/components/services/ProductivitySlider";

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

      {/* Main Body */}
      <section className="w-full px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Hero Section */}
          <BackgroundHero />
          <div className="w-full overflow-hidden">
            <LogoScroll />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="w-full px-4 md:px-6 pt-8 md:pt-16 max-w-7xl mx-auto bg-transparent hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          {/* Small badge indicator */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-cyber-blue" />
            <span className="text-sm font-semibold text-gray-200">
              Services
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 px-4"
          >
            What Digital Services I Offer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 md:mb-12 px-4"
          >
            Comprehensive digital solutions tailored to bring your vision to
            life with cutting-edge technology and creative excellence.
          </motion.p>

          {/* Slider */}
          <div className="w-screen overflow-hidden -mx-4 md:-mx-24">
            <ProductivitySlider />
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-8 md:pb-16 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 px-4"
        >
          {/* Small badge indicator */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-cyber-blue" />
            <span className="text-sm font-semibold text-gray-200">
              TESTIMONIALS
            </span>
          </motion.div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            What Our Clients Say
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience.
          </p>
        </motion.div>

        <div className="w-full overflow-hidden">
          <TestimonialMarquee />
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Services;
