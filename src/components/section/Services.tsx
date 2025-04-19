
import { motion } from "framer-motion";
import { Code, Server, Palette, Globe } from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Frontend Development",
    description:
      "Building responsive, performant user interfaces with modern frameworks like React, focusing on accessibility and intuitive design.",
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Backend Development",
    description:
      "Creating robust and scalable API solutions with Node.js, Express, and other powerful server-side technologies.",
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "UI/UX Design",
    description:
      "Designing beautiful and functional user experiences that solve real user problems and enhance engagement.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Services</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I offer a wide range of services to help you build your digital products and grow your
            business. From frontend development to full-stack solutions, I've got you covered.
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
              className="glass-morphism p-6 md:p-8 rounded-xl"
            >
              <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
