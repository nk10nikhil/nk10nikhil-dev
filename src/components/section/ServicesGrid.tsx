import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Smartphone,
  Globe,
  Palette,
  Database,
  Zap,
  Shield,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ProductivitySlider from"@/components/elements/ProductivitySlider";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver seamless user experiences.",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2,
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    description:
      "End-to-end development from frontend to backend with scalable architecture.",
    gradient: "from-green-500 to-emerald-500",
    delay: 0.3,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user experience at the forefront.",
    gradient: "from-orange-500 to-red-500",
    delay: 0.4,
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Efficient database architecture and optimization for data-driven applications.",
    gradient: "from-indigo-500 to-violet-500",
    delay: 0.5,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Speed optimization and performance tuning for lightning-fast applications.",
    gradient: "from-yellow-500 to-amber-500",
    delay: 0.6,
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description:
      "Robust security implementations to protect your data and users.",
    gradient: "from-red-500 to-rose-500",
    delay: 0.7,
  },
  {
    icon: Layers,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs designed for scalability and reliability.",
    gradient: "from-teal-500 to-cyan-500",
    delay: 0.8,
  },
];

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

        {/* Mobile Services Grid - 2 Columns Horizontal Layout */}
        <div className="grid grid-cols-2 gap-3 w-full md:hidden px-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: service.delay }}
                className="relative group w-full"
              >
                {/* Card - Horizontal Layout */}
                <div className="relative h-full p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm active:bg-white/[0.04] active:border-white/[0.1] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    {/* Icon - Left Side */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center",
                          `bg-gradient-to-br ${service.gradient}`,
                          "shadow-md"
                        )}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Glow effect */}
                      <div
                        className={cn(
                          "absolute inset-0 rounded-lg blur-lg opacity-0 group-active:opacity-20 transition-opacity duration-300",
                          `bg-gradient-to-br ${service.gradient}`
                        )}
                      />
                    </div>

                    {/* Content - Right Side */}
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h3 className="text-sm font-semibold mb-1.5 text-white group-active:text-indigo-300 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/50 text-xs leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl opacity-0 group-active:opacity-100 transition-opacity duration-300",
                    `bg-gradient-to-r ${service.gradient}`
                  )}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Slider */}
        <div className="md:block hidden">
          <ProductivitySlider />
        </div>
      </div>
    </section>
  );
}
