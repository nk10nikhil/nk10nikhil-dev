import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const TechStackGrid = () => {
  const categories = [
    {
      title: "Frontend",
      techs: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 92 },
        { name: "Tailwind CSS", level: 98 },
      ],
    },
    {
      title: "Backend",
      techs: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Express", level: 90 },
        { name: "GraphQL", level: 82 },
      ],
    },
    {
      title: "Database",
      techs: [
        { name: "MongoDB", level: 87 },
        { name: "PostgreSQL", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Firebase", level: 88 },
      ],
    },
    {
      title: "DevOps",
      techs: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 82 },
        { name: "CI/CD", level: 88 },
        { name: "Nginx", level: 80 },
      ],
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
          <Code2 className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-purple-300 font-medium">
            TECHNOLOGIES
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300"
        >
          Tech Stack Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          Cutting-edge technologies to build modern, scalable applications
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all group"
          >
            <h3 className="text-xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.techs.map((tech, techIndex) => (
                <div key={techIndex}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">{tech.name}</span>
                    <span className="text-xs text-purple-400">
                      {tech.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + techIndex * 0.1, duration: 1 }}
                      className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStackGrid;
