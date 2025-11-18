import { motion } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  Code,
  Rocket,
  CheckCircle,
} from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery & Planning",
      description:
        "We start by understanding your goals, target audience, and project requirements through detailed consultation.",
      duration: "1-2 weeks",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Lightbulb,
      title: "Design & Prototyping",
      description:
        "Creating wireframes, mockups, and interactive prototypes to visualize the final product before development.",
      duration: "2-3 weeks",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Building your solution with clean, scalable code following industry best practices and modern technologies.",
      duration: "4-8 weeks",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: CheckCircle,
      title: "Testing & QA",
      description:
        "Rigorous testing across devices and browsers to ensure quality, performance, and security standards.",
      duration: "1-2 weeks",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description:
        "Deploying to production with monitoring, optimization, and ongoing maintenance and support.",
      duration: "Ongoing",
      color: "from-orange-600 to-red-600",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-purple-900/30 rounded-full px-4 py-2 mb-6 border border-purple-700/30"
        >
          <Rocket className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-purple-300 font-medium">
            HOW I WORK
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300"
        >
          My Development Process
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          A proven methodology that ensures project success from concept to
          launch
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative mb-12 last:mb-0"
          >
            <div className="flex items-start gap-6">
              {/* Timeline Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-7 top-16 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-transparent"></div>
              )}

              {/* Icon */}
              <div
                className={`relative z-10 w-14 h-14 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <step.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {step.title}
                    </h3>
                    <span className="text-sm text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessTimeline;
