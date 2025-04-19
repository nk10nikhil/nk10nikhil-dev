
import { motion } from "framer-motion";
import HoverCard from "../elements/HoverCard";

const TechnologyHighlight = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-secondary/15">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Problem Solving
            </h2>
            <p className="text-muted-foreground text-lg">
              I have a strong foundation in Data Structures and Algorithms. I have
              solved over 500 problems on various online judges like Codeforces, CodeChef,
              LeetCode, and HackerRank. I am proficient in C++, Java, and Python
            </p>
          </motion.div>

          {/* Right side - Technology Pills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center md:justify-center"
          >
            <HoverCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHighlight;
