import {
  Search,
  Lightbulb,
  Palette,
  Rocket,
  BarChart3,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Methodology = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <Search className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: "Discovery & Planning",
      description:
        "Understanding your vision, goals, and requirements to create a comprehensive project roadmap and strategy.",
      details: [
        "Requirements Analysis",
        "Project Scope",
        "Timeline Planning",
        "Resource Allocation",
        "Technology Stack",
        "Risk Assessment",
      ],
    },
    {
      icon: <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually stunning interfaces that provide exceptional user experiences and align with your brand.",
      details: [
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "User Flow Mapping",
        "Responsive Design",
        "Design System",
      ],
    },
    {
      icon: <Palette className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: "Development",
      description:
        "Building robust, scalable applications using cutting-edge technologies and following industry best practices.",
      details: [
        "Frontend Development",
        "Backend Architecture",
        "Database Design",
        "API Integration",
        "Code Quality",
        "Version Control",
      ],
    },
    {
      icon: <Rocket className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: "Testing & QA",
      description:
        "Rigorous testing and quality assurance to ensure flawless performance, security, and reliability across all platforms.",
      details: [
        "Unit Testing",
        "Integration Testing",
        "Performance Testing",
        "Security Testing",
        "Bug Fixing",
        "Cross-browser Testing",
      ],
    },
    {
      icon: <BarChart3 className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: "Deployment",
      description:
        "Smooth launch with proper deployment strategies, monitoring setup, and ensuring optimal performance from day one.",
      details: [
        "CI/CD Pipeline",
        "Cloud Deployment",
        "Performance Monitoring",
        "Security Setup",
        "Documentation",
        "Launch Support",
      ],
    },
    {
      icon: <Handshake className="h-8 w-8 md:h-10 md:w-10 text-white" />,
      title: "Support & Maintenance",
      description:
        "Ongoing support, updates, and optimization to keep your application running smoothly and evolving with your needs.",
      details: [
        "24/7 Monitoring",
        "Regular Updates",
        "Performance Optimization",
        "Bug Fixes",
        "Feature Enhancements",
        "Technical Support",
      ],
    },
  ];

  return (
    <section
      id="methodology"
      className="pt-10 md:pt-16 px-2 md:px-12 bg-transparent relative overflow-hidden"
      ref={ref}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Background gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-indigo-500 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -right-1/4 bottom-1/4 w-1/2 h-1/2 bg-rose-500 rounded-full filter blur-3xl"
      />

      <div className="container mx-auto relative z-10 px-2 md:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-10 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <Rocket className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300 font-medium">
              My Process
            </span>
          </motion.div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white">
              From Concept to Launch
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-lg md:text-2xl lg:text-3xl">
              A Systematic Approach
            </span>
          </h2>

          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Every successful project follows a proven process. My systematic
            approach ensures quality, efficiency, and exceptional results at
            every stage.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 max-w-5xl mx-auto relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mb-8 md:mb-12"
            >
              <div className="flex items-start relative group">
                {/* Icon Column */}
                <div className="mr-4 md:mr-8 relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-br from-indigo-500 to-rose-500 w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-indigo-500/30 transition-all duration-300"
                  >
                    {step.icon}
                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white text-[10px] md:text-xs font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 md:top-24 left-1/2 w-0.5 h-20 md:h-24 bg-gradient-to-b from-indigo-500/50 to-rose-500/50 -translate-x-1/2"></div>
                  )}
                </div>

                {/* Content Column */}
                <div className="flex-1 pt-1 md:pt-2 group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-lg md:text-3xl font-bold text-white mb-2 md:mb-3 group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-white/60 mb-3 md:mb-4 text-sm md:text-lg leading-relaxed hidden md:block">
                    {step.description}
                  </p>

                  {/* Details - Desktop only */}
                  <div className="mt-4 grid-cols-2 md:grid-cols-3 gap-2 hidden md:grid">
                    {step.details.map((detail, detailIndex) => (
                      <motion.span
                        key={detailIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.15 + detailIndex * 0.05,
                        }}
                        className="px-3 py-2 bg-white/[0.02] text-indigo-300 rounded-lg text-sm font-medium border border-white/[0.05] hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-200 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-rose-400 rounded-full mr-2 flex-shrink-0"></div>
                        {detail}
                      </motion.span>
                    ))}
                  </div>

                  {/* Details - Mobile (compact) */}
                  <div className="mt-3 flex flex-wrap gap-1.5 md:hidden">
                    {step.details.slice(0, 4).map((detail, detailIndex) => (
                      <span
                        key={detailIndex}
                        className="px-2 py-1 bg-white/[0.02] text-indigo-300 rounded-md text-[10px] font-medium border border-white/[0.05] flex items-center"
                      >
                        <div className="w-1 h-1 bg-gradient-to-r from-indigo-400 to-rose-400 rounded-full mr-1.5 flex-shrink-0"></div>
                        {detail}
                      </span>
                    ))}
                    {step.details.length > 3 && (
                      <span className="px-2 py-1 bg-white/[0.02] text-white/40 rounded-md text-[10px] font-medium border border-white/[0.05]">
                        +{step.details.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
