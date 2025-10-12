import { motion } from "framer-motion";
import { Code, Server, Palette, Globe, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "Frontend Development",
    description:
      "Building responsive, performant user interfaces with modern frameworks like React, focusing on accessibility and intuitive design.",
  },
  {
    icon: <Server className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "Backend Development",
    description:
      "Creating robust and scalable API solutions with Node.js, Express, and other powerful server-side technologies.",
  },
  {
    icon: <Palette className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "UI/UX Design",
    description:
      "Designing beautiful and functional user experiences that solve real user problems and enhance engagement.",
  },
  {
    icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "Full-Stack Solutions",
    description:
      "Delivering end-to-end web applications with comprehensive testing, deployment, and maintenance strategies.",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Small badge indicator */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-primary">What I Do</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions to transform your ideas into powerful
            digital experiences.
            <br />I offer a wide range of services to help you build your
            digital products and grow your business. From frontend development
            to full-stack solutions, I've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-morphism p-6 md:p-8 rounded-xl group relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <span className="flex flex-row sm:flex-col">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-primary/10 rounded-full h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center mb-0 sm:mb-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 mt-4 sm:mt-0 ml-3 sm:ml-0 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </span>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
