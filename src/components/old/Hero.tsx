
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingTeddy from "../elements/FloatingTeddy";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-700/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-700/20 rounded-full filter blur-3xl" />
        <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-blue-700/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight pt-10">
                <span className="text-gradient">Full-Stack Developer</span>
                <br /> Crafting Cutting-Edge Digital Innovative Solutions
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              I'm a passionate software engineer with a strong interest in developing scalable
              applications and improving user experience. I specialize in building full-stack
              applications using modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://drive.google.com/file/d/1eRYLTV2WoG46IpshJPg6iXnp1ekZaAg5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["React", "Node.js", "TypeScript", "MongoDB", "AWS", "Next.js", "DSA", "C++"].map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="flex flex-col items-center justify-center">
              <FloatingTeddy />
              <div className="max-w-xs sm:max-w-sm md:max-w-xl relative">
                <div className="glass-morphism rounded-xl p-2 md:p-3 backdrop-blur-xl animate-float">
                  <div className="code-window bg-card p-3 rounded-lg">
                    <div className="flex items-center justify-start gap-1.5 mb-4">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <pre className="text-xs md:text-sm overflow-x-auto">
                      <code>
                        <span className="code-line">
                          <span className="number">1</span>
                          <span className="keyword">class</span>{" "}
                          <span className="function">FullStackDeveloper</span> {"{"}
                        </span>
                        <span className="code-line">
                          <span className="number">2</span>
                          {"  "}
                          <span className="keyword">constructor</span>() {"{"}
                        </span>
                        <span className="code-line">
                          <span className="number">3</span>
                          {"    "}
                          <span className="variable">this</span>.<span className="property">name</span>{" "}
                          = <span className="string">"Nikhil Kumar"</span>;
                        </span>
                        <span className="code-line">
                          <span className="number">4</span>
                          {"    "}
                          <span className="variable">this</span>.<span className="property">skills</span>{" "}
                          = [<span className="string">"React"</span>,{" "}
                          <span className="string">"Node.js"</span>,{" "}
                          <span className="string">"TypeScript"</span>];
                        </span>
                        <span className="code-line">
                          <span className="number">5</span>
                          {"    "}
                          <span className="variable">this</span>.<span className="property">passions</span>{" "}
                          = [<span className="string">"Clean Code"</span>,{" "}
                          <span className="string">"User Experience"</span>];
                        </span>
                        <span className="code-line">
                          <span className="number">6</span>
                          {"  "}
                          {"}"}
                        </span>
                        <span className="code-line">
                          <span className="number">7</span>
                          {"}"}
                        </span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 h-12 w-12 rounded-lg bg-indigo-600/80 animate-float" style={{ animationDelay: '1.5s' }} />
              <div className="absolute -bottom-3 -left-3 h-8 w-8 rounded-full bg-primary/80 animate-float" style={{ animationDelay: '0.7s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
