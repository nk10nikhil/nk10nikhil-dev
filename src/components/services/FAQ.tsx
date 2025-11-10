import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Lightbulb,
  Shield,
  Clock,
  Users,
  Zap,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      category: "General",
      icon: HelpCircle,
      color: "from-marketing-500 to-marketing-600",
      questions: [
        {
          question: "What services does WeBuilt_U Agency offer?",
          answer:
            "We specialize in premium event organization, cutting-edge web development, strategic brand building, sponsorship management, influencer marketing, and comprehensive digital marketing solutions. Our integrated approach ensures all aspects of your brand experience work seamlessly together.",
        },
        {
          question:
            "How much does it cost to organize an event with WeBuilt_U?",
          answer:
            "Event costs vary based on scale, venue, duration, and specific requirements. We offer flexible packages starting from ₹50,000 for small corporate events to ₹10+ lakhs for large-scale productions. We provide detailed quotes after understanding your vision and budget constraints.",
        },
        {
          question:
            "What is the typical timeline for website development projects?",
          answer:
            "Standard websites take 4-6 weeks, while complex e-commerce or custom solutions may require 8-12 weeks. Our development process includes planning, design, development, testing, and deployment phases. We maintain transparent communication throughout and can accommodate urgent timelines when needed.",
        },
      ],
    },
    {
      category: "Technology",
      icon: Lightbulb,
      color: "from-marketing-600 to-marketing-700",
      questions: [
        {
          question: "Do you provide ongoing support after project completion?",
          answer:
            "Absolutely! We offer comprehensive post-launch support including 3 months free maintenance, 24/7 technical support, regular updates, performance monitoring, and dedicated account management. Extended support packages are available based on your long-term needs.",
        },
        {
          question:
            "Can you help with brand strategy and digital marketing campaigns?",
          answer:
            "Yes, our strategic team develops comprehensive brand strategies, creates compelling brand identities, and executes data-driven digital marketing campaigns across all channels. We focus on measurable ROI and sustainable growth for your business.",
        },
        {
          question: "What makes WeBuilt_U different from other agencies?",
          answer:
            "Our unique integrated approach combines events, technology, and marketing under one roof. With 500+ successful projects, 99% client retention rate, and presence across 25+ cities, we deliver exceptional results through innovation, reliability, and personalized service excellence.",
        },
      ],
    },
    {
      category: "Business",
      icon: Shield,
      color: "from-marketing-700 to-marketing-800",
      questions: [
        {
          question: "Do you work with startups and small businesses?",
          answer:
            "Definitely! We have tailored packages for startups and small businesses. Our scalable solutions grow with your business, and we offer flexible payment terms, phased implementations, and strategic guidance to help emerging businesses establish strong market presence.",
        },
        {
          question: "How do you ensure the quality and success of events?",
          answer:
            "Our proven methodology includes detailed planning, risk assessment, vendor management, real-time coordination, and post-event analysis. With experienced project managers, backup plans, and quality checkpoints, we ensure flawless execution and memorable experiences.",
        },
      ],
    },
    {
      category: "Support",
      icon: Users,
      color: "from-marketing-800 to-marketing-900",
      questions: [
        {
          question: "What kind of support do you provide after deployment?",
          answer:
            "We offer comprehensive post-deployment support including 24/7 monitoring, regular updates, performance optimization, bug fixes, feature enhancements, and dedicated support channels. Our support packages are flexible and can be customized to your needs.",
        },
        {
          question: "Do you provide training for our team?",
          answer:
            "Yes! We provide comprehensive training programs for your team, including user manuals, video tutorials, live training sessions, and ongoing support. We ensure your team is fully equipped to use and maintain the solutions effectively.",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const allQuestions = faqs.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      category: category.category,
      categoryIcon: category.icon,
      categoryColor: category.color,
      index: categoryIndex * 10 + questionIndex,
    }))
  );

  // Show only first 3 questions initially
  const visibleQuestions = showAll ? allQuestions : allQuestions.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (showAll) {
      setOpenIndex(null); // Close all FAQs when collapsing
    }
  };

  return (
    <section
      className="relative py-10 lg:py-16 overflow-hidden bg-black/20"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-marketing-500/30"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Question mark decorations */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl font-bold text-marketing-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ?
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 border border-white/20 rounded-full font-medium text-white/90 backdrop-blur-sm bg-white/10 text-sm">
            Help & Support
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Get answers to the most common questions about our services and
            solutions.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-2 md:mb-12"
          >
            {faqs.map((category, index) => (
              <motion.div
                key={category.category}
                whileHover={{ scale: 1.05, y: -2 }}
                className="hidden md:flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3 hover:bg-white/10 hover:border-marketing-500/30 transition-all duration-300 group"
              >
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                  {category.category}
                </span>
                <div className="text-xs text-marketing-400 bg-marketing-500/20 px-2 py-1 rounded-full">
                  {category.questions.length}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            <AnimatePresence>
              {visibleQuestions.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                  initial={
                    showAll && index >= 3 ? { opacity: 0, y: 20 } : false
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.3,
                    delay: showAll && index >= 3 ? (index - 3) * 0.1 : 0,
                  }}
                >
                  <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:from-white/10 hover:to-white/15 hover:border-marketing-500/20 transition-all duration-500 shadow-xl hover:shadow-2xl">
                    <motion.button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full text-left p-6 lg:p-8 flex items-center justify-between"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${faq.categoryColor} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-all duration-300`}
                        >
                          <faq.categoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-marketing-400 font-semibold uppercase tracking-wider">
                              {faq.category}
                            </span>
                            <div className="w-1 h-1 bg-marketing-500 rounded-full"></div>
                            <span className="text-xs text-white/60">
                              FAQ #{index + 1}
                            </span>
                          </div>
                          <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-marketing-300 transition-colors duration-300 leading-tight">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex-shrink-0 ml-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-marketing-500/20 flex items-center justify-center group-hover:bg-marketing-500/30 transition-colors">
                          <ChevronDown className="w-5 h-5 text-marketing-400 group-hover:text-marketing-300 transition-colors" />
                        </div>
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.2, 0.9, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                            <div className="border-t border-white/10 pt-6 lg:pt-8">
                              <div className="flex items-start space-x-4">
                                <div className="w-1 h-full bg-gradient-to-b from-marketing-500 to-marketing-600 rounded-full flex-shrink-0 mt-1"></div>
                                <p className="text-white/80 leading-relaxed text-base lg:text-lg font-light">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA - Only show when all FAQs are expanded */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-16 p-8 bg-gradient-to-r from-marketing-500/10 to-marketing-600/10 rounded-2xl border border-marketing-500/20 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Still have questions?
                </h3>
                <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Our team is here to
                  help you with any questions about our solutions.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Our Team
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* View More/Less Button */}
          {allQuestions.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-center"
            >
              <motion.button
                onClick={toggleShowAll}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span className="mr-3">
                  {showAll ? `Show Less` : `View More Questions`}
                </span>
                {showAll ? (
                  <ArrowUp className="w-5 h-5 inline group-hover:-translate-y-1 transition-transform" />
                ) : (
                  <ArrowDown className="w-5 h-5 inline group-hover:translate-y-1 transition-transform" />
                )}
              </motion.button>

              {!showAll && (
                <p className="text-white/60 text-sm mt-3">
                  {allQuestions.length - 3} more questions available
                </p>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
