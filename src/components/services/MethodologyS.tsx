import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Lightbulb, Code, TestTube, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery & Planning",
    description:
      "Understanding your vision, goals, and requirements to create a comprehensive project roadmap.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Code,
    number: "02",
    title: "Design & Development",
    description:
      "Crafting beautiful interfaces and robust functionality using modern technologies and best practices.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TestTube,
    number: "03",
    title: "Testing & Refinement",
    description:
      "Rigorous testing and optimization to ensure flawless performance across all devices and scenarios.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description:
      "Smooth deployment and ongoing maintenance to keep your project running at peak performance.",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Methodology() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
          >
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">
              My Process
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white">
              How I Work
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A proven methodology that ensures quality, efficiency, and success
            in every project.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={cn(
                    "relative lg:grid lg:grid-cols-2 gap-8 items-center",
                    isLeft ? "" : "lg:text-right"
                  )}
                >
                  {/* Content */}
                  <div
                    className={cn(
                      "relative",
                      isLeft ? "lg:pr-16" : "lg:pl-16 lg:col-start-2"
                    )}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
                    >
                      {/* Number badge */}
                      <div
                        className={cn(
                          "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6",
                          `bg-gradient-to-br ${step.color}`,
                          "text-white font-bold text-lg"
                        )}
                      >
                        {step.number}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/60 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center icon - only visible on desktop */}
                  <div
                    className={cn(
                      "hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
                      "w-16 h-16 rounded-2xl items-center justify-center",
                      "bg-black border-2 border-white/10",
                      "shadow-lg shadow-white/5"
                    )}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        `bg-gradient-to-br ${step.color}`
                      )}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Mobile icon */}
                  <div className="lg:hidden mb-4">
                    <div
                      className={cn(
                        "inline-flex w-12 h-12 rounded-xl items-center justify-center",
                        `bg-gradient-to-br ${step.color}`
                      )}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
