import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Target,
  Clock,
  Award,
  Headphones,
  TrendingUp,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Precision & Quality",
    description: "Meticulous attention to detail in every line of code",
    stat: "99.9%",
    statLabel: "Accuracy",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Projects delivered within agreed timelines",
    stat: "95%",
    statLabel: "On Schedule",
  },
  {
    icon: Award,
    title: "Best Practices",
    description: "Following industry standards and modern methodologies",
    stat: "100%",
    statLabel: "Compliance",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always available to assist with your needs",
    stat: "24/7",
    statLabel: "Available",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Built to grow with your business",
    stat: "10x",
    statLabel: "Scalability",
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    description: "Dedicated to exceeding expectations",
    stat: "100%",
    statLabel: "Happy Clients",
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 md:py-16 px-2 md:px-4 relative overflow-hidden bg-transparent">
      {/* Static background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />

      <div
        className="container mx-auto max-w-7xl relative z-10 px-0 md:px-4"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16 px-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4 md:mb-6">
            <Award className="w-4 h-4 text-rose-400" />
            <span className="text-sm text-rose-300 font-medium">
              Why Choose Me
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-rose-200 to-white">
              Excellence in Every Project
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Combining technical expertise with creative problem-solving to
            deliver exceptional results.
          </p>
        </motion.div>

        {/* Mobile Grid - 2 Columns */}
        <div className="grid grid-cols-2 md:hidden gap-3 px-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative w-full"
              >
                <div className="relative h-full p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
                  <div className="relative flex-shrink-0 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-indigo-300" />
                    </div>
                    <div className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white text-[10px] font-bold shadow-md">
                      {reason.stat}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-semibold mb-1 text-white leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-white/50 text-[10px] leading-relaxed mb-1 line-clamp-2">
                      {reason.description}
                    </p>
                    <div className="text-[9px] text-white/40 font-medium">
                      {reason.statLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Grid - 3 Columns */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
                  <div className="relative mb-6">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-indigo-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white text-xs font-bold shadow-lg">
                      {reason.stat}
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-white">
                    {reason.title}
                  </h3>
                  <p className="text-white/60 mb-4 leading-relaxed text-sm lg:text-base">
                    {reason.description}
                  </p>
                  <div className="text-sm text-white/40 font-medium">
                    {reason.statLabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
