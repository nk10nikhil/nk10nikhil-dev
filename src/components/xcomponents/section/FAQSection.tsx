import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A simple landing page takes 2-3 weeks, while a full-stack application can take 8-12 weeks. I provide detailed timelines during our initial consultation.",
    },
    {
      question: "What's your development process?",
      answer:
        "I follow an agile methodology: Discovery → Design → Development → Testing → Launch. You'll receive regular updates and have opportunities for feedback throughout the process.",
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer:
        "Yes! All packages include support periods. I also offer monthly maintenance plans for bug fixes, updates, security patches, and feature additions.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in React, Next.js, Node.js, TypeScript, and modern cloud platforms (AWS, Azure). I choose the best tech stack based on your project requirements.",
    },
    {
      question: "Can you work with my existing team?",
      answer:
        "Absolutely! I'm experienced in collaborating with design teams, backend developers, and project managers. I adapt to your team's workflow and tools.",
    },
    {
      question: "What if I need changes after launch?",
      answer:
        "All projects include revision rounds during development. Post-launch changes can be handled through support packages or separate change requests.",
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Yes, I'm happy to sign NDAs and work agreements to protect your intellectual property and maintain confidentiality.",
    },
    {
      question: "What payment terms do you offer?",
      answer:
        "Typically 50% upfront, 25% at midpoint, and 25% upon completion. For larger projects, I can arrange milestone-based payments.",
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
          <HelpCircle className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-purple-300 font-medium">FAQ</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Got questions? Find answers to common inquiries about my services
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all group"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-purple-400" />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
