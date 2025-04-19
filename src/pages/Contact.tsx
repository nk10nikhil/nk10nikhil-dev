import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import ContactSection from "@/components/section/ContactSection";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import P5Background from "@/components/elements/P5Background";
import SocialButton from "@/components/elements/SocialButton";

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
      {/* <P5Background className="blur-sm" /> */}
      <BlurBackground />
      <FloatingObjects />

      {/* Content */}
      <Navbar />
      <main className="">
        <section className="container mx-auto px-4 md:px-6 max-w-8xl">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center pt-20 md:pt-32"
            >
            <h1 className="text-4xl md:text-5xl font-bold heading-gradient mb-2">Contact Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-0 pb-5">
              Have a question or want to work together? Feel free to reach out at any below Social Link.
            </p>
            <div className="flex justify-center"><SocialButton /></div>
          </motion.div>
          <ContactSection />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Contact;
