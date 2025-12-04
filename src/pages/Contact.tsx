import { useEffect } from "react";
import { motion } from "framer-motion";
import ContactSection from "@/components/section/ContactSection";
import BlurBackground from "@/components/section/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import SocialButton from "@/components/elements/SocialButton";
import { CheckCircle } from "lucide-react";

const BenefitsList = () => {
  const benefits = [
    "Quick response within 24 hours guaranteed",
    "Professional consultation and strategic guidance",
    "Custom solutions tailored precisely to your needs",
    "Long-term support and maintenance options",
    "Competitive pricing and flexible package deals",
  ];

  return (
    <div className="flex flex-col space-y-4 p-6 md:p-8 bg-white/5 border border-purple-500/10 rounded-2xl shadow-xl backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-4 text-white border-b border-purple-500/20 pb-2">
        Why Connect?
      </h2>
      <div className="space-y-4">
        {benefits.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
            <p className="text-gray-300 leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent min-h-screen relative"
    >
      {/* Background Elements */}
      <BlurBackground />
      <FloatingObjects />

      {/* Content */}
      <main className="">
        <section className="container mx-auto px-4 md:px-6 max-w-8xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center pt-16 md:pt-20"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto mb-8"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4 tracking-tight">
                Let's Connect
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Have a project in mind? Let's collaborate and bring your ideas
                to life
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start md:pt-10">
              {/* Left Side - Benefits */}
              <div className="hidden md:block">
                <BenefitsList />
              </div>
              {/* Right Side - Social Buttons */}
              <div className="flex flex-col items-center md:items-start space-y-4 pl-0 md:pl-24 pt-0 md:pt-16">
                <SocialButton />
              </div>
            </div>
          </motion.div>
          <ContactSection />
        </section>
      </main>
    </motion.div>
  );
};

export default Contact;
