import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  Code2,
  Brain,
  Blocks,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const skillsData = [
  {
    category: "Software Development",
    color: "bg-cyber-pink",
    gradient: "from-cyan-500 to-blue-500",
    icon: Code2,
    skills: [
      { name: "Python", level: 85 },
      { name: "C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "C#", level: 70 },
      { name: "Rust", level: 60 },
    ],
  },
  {
    category: "AI & Machine Learning",
    color: "bg-cyber-green",
    gradient: "from-pink-500 to-purple-500",
    icon: Brain,
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "Scikit-Learn", level: 70 },
      { name: "OpenCV", level: 65 },
      { name: "Keras", level: 60 },
    ],
  },
  {
    category: "Full Stack Web Development",
    color: "bg-cyber-yellow",
    gradient: "from-green-500 to-emerald-500",
    icon: Blocks,
    skills: [
      { name: "Nextjs", level: 95 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "Express.js", level: 65 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skillBarVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  }),
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const SkillsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isMobile, currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % skillsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + skillsData.length) % skillsData.length
    );
  };

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      handlePrev();
    } else if (info.offset.x < -threshold) {
      handleNext();
    }
  };

  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (isMobile) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 4000);
    }
  };

  return (
    <section
      id="skills"
      className="relative px-6 bg-gradient-to-b from-cyber-dark/50 via-cyber-dark/80 to-cyber-dark/50 pt-16 md:pt-16 overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-purple pointer-events-none" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyber-blue/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl pointer-events-none animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-cyber-blue/20 to-cyber-pink/20 border border-cyber-blue/30"
          >
            <Sparkles className="w-4 h-4 text-cyber-blue" />
            <span className="text-sm font-semibold text-gray-200">
              Expertise & Capabilities
            </span>
            <Sparkles className="w-4 h-4 text-cyber-pink" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
            Technical Roles
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            I have experience working in various technical roles. Here are some
            of the key areas where I've developed expertise recently.
          </p>
        </motion.div>

        {/* Mobile Carousel View */}
        {isMobile ? (
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mb-4 px-2">
              <button
                onClick={() => {
                  handlePrev();
                  resetAutoPlay();
                }}
                className="p-2 rounded-full bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 active:scale-95"
                aria-label="Previous skill"
              >
                <ChevronLeft className="w-5 h-5 text-gray-300" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {skillsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                      resetAutoPlay();
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-gradient-to-r from-cyber-blue to-cyber-pink"
                        : "w-2 bg-gray-600"
                    }`}
                    aria-label={`Go to skill ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  handleNext();
                  resetAutoPlay();
                }}
                className="p-2 rounded-full bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 active:scale-95"
                aria-label="Next skill"
              >
                <ChevronRight className="w-5 h-5 text-gray-300" />
              </button>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  className="w-full"
                >
                  <SkillCard
                    category={skillsData[currentIndex]}
                    categoryIndex={currentIndex}
                    isMobile={true}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Swipe Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center text-xs text-gray-500 mt-4"
            >
              Swipe or tap arrows to navigate
            </motion.p>
          </div>
        ) : (
          /* Desktop Grid View */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <SkillCard
                  category={category}
                  categoryIndex={categoryIndex}
                  isMobile={false}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 md:mt-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
        />
      </div>
    </section>
  );
};

// Extracted Skill Card Component
const SkillCard = ({
  category,
  categoryIndex,
  isMobile,
}: {
  category: (typeof skillsData)[0];
  categoryIndex: number;
  isMobile: boolean;
}) => {
  return (
    <div className="cyber-box p-6 md:p-8 h-full backdrop-blur-sm bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-500 border border-gray-800/50 hover:border-gray-700 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      {/* Glow Effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-8 relative">
        <motion.div
          initial={isMobile ? false : { scale: 0, rotate: -180 }}
          whileInView={isMobile ? false : { scale: 1, rotate: 0 }}
          animate={isMobile ? { scale: 1, rotate: 0 } : undefined}
          viewport={{ once: true }}
          transition={
            isMobile
              ? undefined
              : {
                  delay: categoryIndex * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }
          }
          className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} group-hover:scale-110 transition-transform duration-300`}
        >
          <category.icon className="w-6 h-6 text-white" />
        </motion.div>
        <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 group-hover:from-white group-hover:to-gray-100 transition-all duration-300">
          {category.category}
        </h3>
      </div>

      {/* Skills List */}
      <div className="space-y-5 relative">
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="space-y-2"
            initial={isMobile ? false : { opacity: 0, x: -20 }}
            whileInView={isMobile ? false : { opacity: 1, x: 0 }}
            animate={isMobile ? { opacity: 1, x: 0 } : undefined}
            viewport={{ once: true, margin: "-50px" }}
            transition={
              isMobile
                ? undefined
                : {
                    duration: 0.5,
                    delay: categoryIndex * 0.15 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
          >
            {/* Skill Name & Level */}
            <div className="flex justify-between items-center">
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
              <motion.span
                className="text-xs font-mono text-gray-500 group-hover:text-gray-400 transition-colors duration-300 tabular-nums"
                initial={isMobile ? false : { opacity: 0 }}
                whileInView={isMobile ? false : { opacity: 1 }}
                animate={isMobile ? { opacity: 1 } : undefined}
                viewport={{ once: true }}
                transition={
                  isMobile
                    ? undefined
                    : {
                        delay: categoryIndex * 0.15 + index * 0.08 + 0.3,
                      }
                }
              >
                {skill.level}%
              </motion.span>
            </div>

            {/* Progress Bar Container */}
            <div className="h-2 bg-gray-800/80 rounded-full overflow-hidden relative group/bar">
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-10 group-hover/bar:opacity-20 transition-opacity duration-300`}
              />

              {/* Progress Bar */}
              <motion.div
                className={`h-full rounded-full relative bg-gradient-to-r ${category.gradient} shadow-lg`}
                custom={skill.level}
                variants={skillBarVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    delay: isMobile
                      ? 0.5
                      : categoryIndex * 0.15 + index * 0.08 + 1,
                    ease: "easeInOut",
                  }}
                />

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} blur-md opacity-50`}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <div
          className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${category.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform rotate-45 translate-x-10 -translate-y-10`}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
