
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { MarqueeDemo } from "../elements/MarqueeDemo";

const ToolbarHighlight = () => {
  return (
    <section className="py-16 md:py-24 bg-black/25">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient">
              Other Developers Review
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Here are some reviews from other developers who have used our services
            </p>
          </motion.div>
          <MarqueeDemo />
        </div>
      </div>
    </section>
  );
};

export default ToolbarHighlight;
