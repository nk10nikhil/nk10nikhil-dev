import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap } from "lucide-react";
import ProductivitySlider from "@/components/elements/ProductivitySlider";

export default function ServicesGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-8 mt-4 md:mt-0 md:py-8 px-2 md:px-4 relative overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10 px-0" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 md:mb-16 px-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 md:mt-8"
          >
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300 font-medium">
              What I Offer
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white">
              Services & Expertise
            </span>
          </h2>

          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto px-2">
            Comprehensive development solutions tailored to bring your ideas to
            life with cutting-edge technology and best practices.
          </p>
        </motion.div>

        {/* Desktop Slider */}
        <ProductivitySlider />
      </div>
    </section>
  );
}
