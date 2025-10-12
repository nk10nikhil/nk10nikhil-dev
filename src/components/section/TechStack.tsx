import { color, motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#007ACC",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "#000000",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#000000",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    color: "#764ABC",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#336791",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    color: "#E535AB",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    color: "#FF9900",
  },
];

const TechStack = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          ></motion.div>
          <h2 className="text-[2.16rem] md:text-6xl font-bold mb-4 heading-gradient mt-[-50px]">
            <div className="inline-flex items-center gap-0 px-0 py-2 rounded-full">
              <motion.span
                animate={{ rotate: 0 }}
                transition={{ duration: 0, repeat: Infinity, ease: "linear" }}
                className="text-primary"
              >
                ⚡
              </motion.span>
            </div>
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mb-20">
            Leveraging cutting-edge technologies to build
            <span className="text-primary font-semibold">
              {" "}
              scalable, performant
            </span>
            , and
            <span className="text-primary font-semibold">
              {" "}
              beautiful applications
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, duration: 0.5 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center"
            >
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-xl glass-morphism flex items-center justify-center p-4 mb-3">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 md:mt-10"
        >
          <p className="text-muted-foreground text-sm md:text-base">
            And always learning more...
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block md:mt-2 text-2xl"
            >
              🚀
            </motion.div>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
