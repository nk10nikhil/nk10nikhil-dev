import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Software Development',
    color: 'bg-cyber-pink',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'C#', level: 70 },
      { name: 'Rust', level: 60 },
    ],
  },
  {
    category: 'AI & Machine Learning',
    color: 'bg-cyber-green',
    skills: [
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 75 },
      { name: 'Scikit-Learn', level: 70 },
      { name: 'OpenCV', level: 65 },
      { name: 'Keras', level: 60 },
    ],
  },
  {
    category: 'Blockchain Development',
    color: 'bg-cyber-yellow',
    skills: [
      { name: 'Solidity', level: 80 },
      { name: 'Web3.js', level: 75 },
      { name: 'Truffle', level: 70 },
      { name: 'Hardhat', level: 65 },
      { name: 'Ethers.js', level: 60 },
    ],
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative px-6 bg-cyber-dark/50 py-16 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Technical Roles 
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I also have experience of working in various technical roles. Here are some of the roles I have worked in recently:
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="cyber-box p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-cyber-blue">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-xs font-mono text-cyber-green">{skill.level}%</span>
                    </div>

                    {/* Progress bar container */}
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor:
                            category.category === 'Software Development'
                              ? '#00FFFF' // cyber-blue
                              : category.category === 'AI & Machine Learning'
                                ? '#FF00FF' // cyber-pink
                                : '#00FF00', // cyber-green
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
