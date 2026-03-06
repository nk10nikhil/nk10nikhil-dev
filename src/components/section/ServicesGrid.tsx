import { motion, useReducedMotion } from "framer-motion";
import { Zap } from "lucide-react";
import ProductivitySlider from "@/components/elements/ProductivitySlider";
import { useInView } from "react-intersection-observer";

export default function ServicesGrid() {
  const reduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: "100px",
  });

  const headerAnim = reduceMotion
    ? { opacity: inView ? 1 : 0 }
    : { opacity: inView ? 1 : 0, y: inView ? 0 : 18 };

  const sliderAnim = reduceMotion
    ? { opacity: inView ? 1 : 0 }
    : { opacity: inView ? 1 : 0, y: inView ? 0 : 22 };

  return (
    <section
      ref={ref}
      id="services-grid"
      className="relative overflow-x-clip bg-transparent py-10 md:py-14"
      aria-labelledby="services-grid-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl px-3 md:px-4">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={headerAnim}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8 text-center md:mb-12"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 md:mb-6">
            <Zap className="h-4 w-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">
              What I Offer
            </span>
          </div>

          <h2
            id="services-grid-heading"
            className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
              Services & Expertise
            </span>
          </h2>

          <p className="mx-auto max-w-2xl px-1 text-base text-white/60 md:text-lg">
            Comprehensive development solutions tailored to bring your ideas to
            life with cutting-edge technology and best practices.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
          animate={sliderAnim}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.08 }}
        >
          <ProductivitySlider />
        </motion.div>
      </div>
    </section>
  );
}
