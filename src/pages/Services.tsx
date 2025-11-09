import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import BlurBackground from "@/components/elements/BlurBackground";
import BackgroundHero from "@/components/section/BackgrounHero";
import LogoScroll from "@/components/elements/LogoScroll";
import TestimonialMarquee from "@/components/services/TestimonialMarquee";
import { Sparkles } from "lucide-react";
import ProductivitySlider from "@/components/services/ProductivitySlider";
import TeamCarousel from "@/components/services/TeamCarousel";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const members = [
    {
      name: "Luffy",
      role: "Founder",
      img: "https://ik.imagekit.io/gopichakradhar/luffy/o1.jpeg",
    },
    {
      name: "Monkey D. Luffy",
      role: "Creative Director",
      img: "https://ik.imagekit.io/gopichakradhar/luffy/o2.jpeg",
    },
    {
      name: "Lucy",
      role: "UX Designer",
      img: "https://ik.imagekit.io/gopichakradhar/luffy/o3.jpeg",
    },
    {
      name: "Luffy kun",
      role: "Marketing Manager",
      img: "https://ik.imagekit.io/gopichakradhar/luffy/o5.jpeg",
    },
  ];

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

      {/* Services Section */}
      <section className="container mx-0 px-0 pt-8 md:pt-16 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Small badge indicator */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-center justify-center mx-auto"
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
            className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
          >
            What Digital Services I Offer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-12"
          >
            Comprehensive digital solutions tailored to bring your vision to
            life with cutting-edge technology and creative excellence.
          </motion.p>

          {/* Slider */}
          <ProductivitySlider />
        </motion.div>
      </section>

      {/* Why Choose Me Section */}
      {/* <section className="container mx-0 px-0 py-8 md:py-16 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-center justify-center mx-auto"
          >
            <Sparkles className="w-4 h-4 text-cyber-blue" />
            <span className="text-sm font-semibold text-gray-200">
              WHY CHOOSE ME
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            Why Choose Me
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            I offer a unique blend of creativity, technical expertise, and a
            commitment to delivering exceptional results that exceed
            expectations.
          </p>
          <TeamCarousel members={members} />
        </motion.div>
      </section> */}

      {/* Special Features Section */}

      {/* Testimonials Section */}
      <section className="container mx-0 px-0 py-4 md:py-4 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            What Our Clients Say
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience.
          </p>
        </motion.div>

        <div className="w-screen">
          <TestimonialMarquee />
        </div>
      </section>

      {/* Work with us Section */}

      <Footer />
    </motion.div>
  );
};

export default Services;
