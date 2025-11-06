import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Database,
  Lock,
  Globe,
  Cpu,
  Rocket,
} from "lucide-react";

const ServiceOfferings = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Full-stack web applications with React, Next.js, and modern technologies. Scalable, performant, and SEO-optimized.",
      features: [
        "React & Next.js",
        "TypeScript",
        "Responsive Design",
        "API Integration",
      ],
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Cross-platform mobile apps with React Native and Flutter. Native performance with a single codebase.",
      features: [
        "React Native",
        "Flutter",
        "iOS & Android",
        "App Store Deploy",
      ],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure on AWS, Azure, and GCP. DevOps, CI/CD, and serverless architectures.",
      features: [
        "AWS/Azure/GCP",
        "Docker & K8s",
        "CI/CD Pipelines",
        "Auto-scaling",
      ],
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed in Figma. User-centered design that converts visitors to customers.",
      features: [
        "Figma Design",
        "Prototyping",
        "Design Systems",
        "User Testing",
      ],
      gradient: "from-pink-600 to-rose-600",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Robust APIs and microservices with Node.js, Python, and databases. Secure, scalable, and well-documented.",
      features: [
        "Node.js/Python",
        "REST & GraphQL",
        "MongoDB/PostgreSQL",
        "Authentication",
      ],
      gradient: "from-green-600 to-emerald-600",
    },
    {
      icon: Lock,
      title: "Security & Testing",
      description:
        "Comprehensive security audits and automated testing. Protect your users and ensure code quality.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Unit & E2E Tests",
        "Code Reviews",
      ],
      gradient: "from-red-600 to-orange-600",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-purple-900/30 rounded-full px-4 py-2 mb-6 border border-purple-700/30"
        >
          <Globe className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-purple-300 font-medium">
            WHAT I OFFER
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300"
        >
          Comprehensive Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          End-to-end solutions tailored to your business needs
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Glow effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
            ></div>

            {/* Card */}
            <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
              {/* Icon */}
              <div
                className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="mt-6 flex items-center gap-2 text-purple-400 font-medium cursor-pointer"
              >
                <span>Learn More</span>
                <Rocket className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceOfferings;
