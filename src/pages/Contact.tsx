import { useEffect } from "react";
import { motion } from "framer-motion";
import ContactSection from "@/components/section/ContactSection";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
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
      <BlurBackground />
      <FloatingObjects />

      {/* Content */}
      <main className="">
        <section className="container mx-auto px-4 md:px-6 max-w-8xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center pt-20 md:pt-32"
          >
            <h1 className="text-4xl md:text-5xl font-bold heading-gradient mb-2">
              Contact Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-0 pb-5">
              Have a question or want to work together? Feel free to reach out
              at any below Social Link.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
              {/* Left Side - Benefits */}
              <div className="flex flex-col items-start space-y-4 text-left pl-32 hidden md:block">
                <h2 className="text-2xl font-semibold mb-4">What You'll Get</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      Quick response within 24 hours
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      Professional consultation and guidance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      Custom solutions tailored to your needs
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      Long-term support and maintenance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground">
                      Competitive pricing and flexible packages
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Social Buttons */}
              <div className="flex flex-col items-center md:items-start space-y-4 pl-0 md:pl-24 pt-0 md:pt-8">
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
