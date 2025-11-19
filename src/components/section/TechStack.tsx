import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Sparkles } from "lucide-react";

const technologies = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    color: "#61DAFB", // Official Cyan
    description:
      "A powerful JavaScript library for building interactive user interfaces with component-based architecture.",
    link: "https://react.dev/",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    color: "#3178C6", // Official TS Blue
    description:
      "Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    color: "#5FA04E", // Vibrant Node Green (Distinct from Mongo)
    description:
      "JavaScript runtime built on Chrome's V8 engine for building fast, scalable network applications.",
    link: "https://nodejs.org/",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    color: "#47A248", // MongoDB Leaf Green
    description:
      "NoSQL database that provides high performance, high availability, and easy scalability for modern apps.",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    color: "#303030", // Dark Grey (Distinct from Next.js Black)
    description:
      "Fast, unopinionated, minimalist web framework for Node.js to build robust APIs and web applications.",
    link: "https://expressjs.com/",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    color: "#000000", // Pure Black
    description:
      "React framework with hybrid static & server rendering, TypeScript support, and smart bundling.",
    link: "https://nextjs.org/",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    color: "#764ABC", // Royal Purple
    description:
      "Predictable state container for JavaScript apps that helps you write applications that behave consistently.",
    link: "https://redux.js.org/",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4", // Sky Blue/Teal
    description:
      "Utility-first CSS framework for rapidly building custom user interfaces with highly composable classes.",
    link: "https://tailwindcss.com/",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    color: "#336791", // Official Elephant Blue (Distinct from Docker)
    description:
      "Powerful, open source object-relational database system with strong reputation for reliability.",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    color: "#2496ED", // Docker Blue
    description:
      "Platform for developing, shipping, and running applications in containers for consistent environments.",
    link: "https://www.docker.com/",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    color: "#E10098", // Magenta Pink
    description:
      "Query language for APIs providing a complete and understandable description of the data in your API.",
    link: "https://graphql.org/",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    color: "#FF9900", // AWS Orange
    description:
      "Comprehensive cloud platform offering over 200 services from data centers globally for scalable solutions.",
    link: "https://aws.amazon.com/",
  },
];

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [clickedTech, setClickedTech] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const contentTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeTech = clickedTech || hoveredTech;

  const handleClick = (techName: string) => {
    if (clickedTech === techName) {
      handleClose();
    } else {
      setIsExiting(false);
      setContentVisible(false);
      setClickedTech(techName);

      // Delay content appearance until after box animation
      if (contentTimeoutRef.current) {
        clearTimeout(contentTimeoutRef.current);
      }
      contentTimeoutRef.current = setTimeout(() => {
        setContentVisible(true);
      }, 300);
    }
  };

  const handleClose = () => {
    setIsExiting(true);
    setContentVisible(false);

    if (contentTimeoutRef.current) {
      clearTimeout(contentTimeoutRef.current);
    }

    setTimeout(() => {
      setClickedTech(null);
      setHoveredTech(null);
      setIsExiting(false);
    }, 300);
  };

  const handleHoverStart = (techName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    if (!clickedTech) {
      setIsExiting(false);
      setContentVisible(false);
      setHoveredTech(techName);

      // Delay content appearance until after box animation
      if (contentTimeoutRef.current) {
        clearTimeout(contentTimeoutRef.current);
      }
      contentTimeoutRef.current = setTimeout(() => {
        setContentVisible(true);
      }, 300);
    }
  };

  const handleHoverEnd = () => {
    if (!clickedTech) {
      setIsExiting(true);
      setContentVisible(false);

      if (contentTimeoutRef.current) {
        clearTimeout(contentTimeoutRef.current);
      }

      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredTech(null);
        setIsExiting(false);
      }, 100);
    }
  };

  const handleLearnMore = (link: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(link, "_blank", "noopener,noreferrer");
  };

  // Function to get dynamic positioning based on screen size and column index
  const getCardPosition = (index: number) => {
    const isMobile = window.innerWidth < 768;
    const isSmallMobile = window.innerWidth < 640;

    if (isSmallMobile) {
      // Mobile - 3 columns
      const mobileColIndex = index % 3;
      if (mobileColIndex === 0) return "left-0"; // First column - left align
      if (mobileColIndex === 1) return "left-1/2 -translate-x-1/2"; // Middle column - center
      return "right-0"; // Last column - right align
    } else if (isMobile) {
      // Tablet - 4 columns
      const tabletColIndex = index % 4;
      if (tabletColIndex === 0) return "left-0"; // First column
      if (tabletColIndex === 3) return "right-0"; // Last column
      return "left-1/2 -translate-x-1/2"; // Middle columns - center
    } else {
      // Desktop - 6 columns
      const desktopColIndex = index % 6;
      if (desktopColIndex === 0 || desktopColIndex === 1) return "left-0"; // Left side
      if (desktopColIndex === 4 || desktopColIndex === 5) return "right-0"; // Right side
      return "left-1/2 -translate-x-1/2"; // Middle - center
    }
  };

  // Function to get dynamic width based on screen size
  const getCardWidth = () => {
    if (window.innerWidth < 640) return "90vw";
    if (window.innerWidth < 768) return "80vw";
    return "400px";
  };

  // Function to get dynamic height based on screen size
  const getCardHeight = () => {
    if (window.innerWidth < 640) return "160px";
    return "200px";
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (contentTimeoutRef.current) {
        clearTimeout(contentTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-16 bg-gradient-to-b from-background to-secondary/30 overflow-visible">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* Small badge indicator */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyber-blue" />
            <span className="text-sm font-semibold text-gray-200">
              Tech Stack
            </span>
          </motion.div>
          <h2 className="text-[2.16rem] md:text-4xl font-bold mb-4 heading-gradient mt-[-50px] md:pt-12 pt-6">
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

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onHoverStart={() => handleHoverStart(tech.name)}
              onHoverEnd={handleHoverEnd}
              onClick={() => handleClick(tech.name)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="relative w-20 h-20">
                <motion.div
                  animate={{
                    width:
                      activeTech === tech.name && !isExiting
                        ? getCardWidth()
                        : "80px",
                    height:
                      activeTech === tech.name && !isExiting
                        ? getCardHeight()
                        : "80px",
                  }}
                  transition={{
                    duration: 0.3,
                    delay:
                      activeTech === tech.name && !isExiting
                        ? 0.2
                        : isExiting
                        ? 0.15
                        : 0,
                  }}
                  className={`absolute top-0 rounded-xl glass-morphism flex items-center justify-center overflow-visible ${
                    activeTech === tech.name && !isExiting
                      ? getCardPosition(index)
                      : "left-1/2 -translate-x-1/2"
                  }`}
                  style={{
                    zIndex: activeTech === tech.name ? 50 : 1,
                  }}
                >
                  {/* Circle Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        activeTech === tech.name && !isExiting
                          ? tech.color
                          : "transparent",
                    }}
                    animate={{
                      opacity: activeTech === tech.name && !isExiting ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: activeTech === tech.name && !isExiting ? 0.4 : 0,
                    }}
                  >
                    <motion.div
                      className="absolute rounded-full border-8"
                      style={{
                        borderColor: tech.color,
                        filter: `drop-shadow(0 0 10px ${tech.color}) drop-shadow(0 0 60px ${tech.color})`,
                      }}
                      animate={{
                        width: "100%",
                        height: "100%",
                        borderRadius:
                          activeTech === tech.name && !isExiting
                            ? "20px"
                            : "50%",
                      }}
                      transition={{
                        duration: 0.3,
                        delay: activeTech === tech.name && !isExiting ? 0.4 : 0,
                      }}
                    />
                  </motion.div>

                  {/* Icon */}
                  <motion.img
                    src={tech.icon}
                    alt={tech.name}
                    className="relative z-10"
                    style={{
                      filter:
                        activeTech === tech.name && !isExiting
                          ? "brightness(0) invert(1)"
                          : "none",
                    }}
                    animate={{
                      scale: activeTech === tech.name && !isExiting ? 0 : 1,
                      width:
                        activeTech === tech.name && !isExiting ? "0px" : "48px",
                      height:
                        activeTech === tech.name && !isExiting ? "0px" : "48px",
                    }}
                    transition={{
                      duration: 0.3,
                      delay: activeTech === tech.name && !isExiting ? 0 : 0.3,
                    }}
                  />

                  {/* Large Icon on Hover */}
                  <AnimatePresence>
                    {activeTech === tech.name && !isExiting && (
                      <motion.img
                        src={tech.icon}
                        alt={tech.name}
                        className="absolute hidden md:block"
                        style={{
                          filter: "brightness(0) invert(1)",
                        }}
                        initial={{
                          scale: 0,
                          rotate: 315,
                          top: "50%",
                          right: "50%",
                          translateX: "50%",
                          translateY: "-50%",
                        }}
                        animate={{
                          scale: 1,
                          rotate: 15,
                          top: "20%",
                          right: "20%",
                          width: "150px",
                          height: "150px",
                        }}
                        exit={{
                          scale: 0,
                          rotate: 315,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.4,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Content Card - Only visible after delay */}
                  <AnimatePresence>
                    {activeTech === tech.name &&
                      !isExiting &&
                      contentVisible && (
                        <motion.div
                          className="absolute left-4 md:left-8 top-0 w-[85%] md:w-[50%] p-4 z-20"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{
                            duration: 0.2,
                          }}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-white text-xl md:text-2xl font-bold uppercase leading-tight">
                              {tech.name}
                            </h3>
                            {clickedTech && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleClose();
                                }}
                                className="text-white/80 hover:text-white text-2xl leading-none md:hidden"
                              >
                                ×
                              </button>
                            )}
                          </div>
                          <p className="text-white/90 text-xs md:text-xs mb-3 leading-relaxed">
                            {tech.description}
                          </p>
                          <button
                            onClick={(e) => handleLearnMore(tech.link, e)}
                            className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-lg text-xs md:text-sm font-semibold hover:bg-white/30 transition-colors cursor-pointer"
                          >
                            Learn More →
                          </button>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Tech Name Below Icon (hidden on hover) */}
              <motion.span
                className="text-sm font-medium mt-3"
                animate={{
                  opacity: activeTech === tech.name ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                {tech.name}
              </motion.span>
            </motion.div>
          ))}
        </div>

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
