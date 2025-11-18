import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { MarqueeDemo } from "@/components/elements/MarqueeDemo";

const ToolbarHighlight = () => {
  return (
    <section className="py-16 md:py-16 bg-black/25 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-10 md:mb-12"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-gray-200">
                Testimonials
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gradient">
              What Developers Say
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Real feedback from developers I've collaborated with on various
              projects
            </p>
          </motion.div>
          <div className="w-screen relative">
            <MarqueeDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolbarHighlight;
