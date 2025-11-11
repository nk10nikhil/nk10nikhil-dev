import { motion } from "framer-motion";
import { OrbitingCirclesDemo } from "@/components/elements/OrbitingCirclesDemo";

const TechSkills = () => {
  return (
    <section className="pt-8 md:pt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Code Window */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <OrbitingCirclesDemo />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left md:block hidden"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient text-center">
              Technologies I Use
            </h2>
            <div className="text-muted-foreground text-lg text-center">
              These are the tools and technologies I am currently using in my
              projects. I am always eager to learn and explore new technologies.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
