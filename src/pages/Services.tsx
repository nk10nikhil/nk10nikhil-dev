import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import BlurBackground from "@/components/elements/BlurBackground";
import BackgroundHero from "@/components/section/BackgrounHero";
import LogoScroll from "@/components/elements/LogoScroll";

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
      className="bg-transparent min-h-screen relative overflow-hidden"
    >
      {/* Background Elements */}
      <BlurBackground />

      {/* Content */}
      <Navbar />

      {/* Main Body */}
      <main className="pb-10">
        <section className="mx-0 px-0 mb-0 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Hero Section */}
            <BackgroundHero />
            <LogoScroll />

            {/* Why Choose Me Section */}
            {/* <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-black/50 blur-xl opacity-70"></div>
              <div className="relative glass-card rounded-xl p-10 backdrop-blur-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                  Why Choose Me?
                </h2>
                <p className="text-white/80 text-lg  leading-relaxed">
                  We blend technical expertise with strategic thinking to
                  deliver solutions that drive real business value. Our approach
                  is collaborative, transparent, and focused on long-term
                  success.
                </p>
                <ScrollingSections />
              </div>
            </div> */}
          </motion.div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Services;
