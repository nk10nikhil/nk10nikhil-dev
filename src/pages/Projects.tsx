import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import { ArrowUpRight, Github } from "lucide-react";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import P5Background from "@/components/elements/P5Background";
import StarOnGithubButton from "@/components/elements/StarOnGithubButton";
"use client";
import { cn } from "@/lib/utils";
import { useRef, createContext, useContext } from "react";
import React from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardItem = ({
  as,
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: any; // Change React.ElementType to any to fix typing issues
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();
  const Tag = as || 'div';

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-60 w-40 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-5 flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "2000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

const projects = [
  {
    id: 1,
    title: "Full Stack Authentication System",
    description:
      "A full stack authentication system with user registration, login, and password reset functionality. The backend is built with Node.js and Express, while the frontend is built with React and Tailwind CSS.",
    longDescription:
      "A full stack authentication system with user registration, login, and password reset functionality. The backend is built with Node.js and Express, while the frontend is built with React and Tailwind CSS. The system uses JWT for authentication and MongoDB for storing user data.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    image: "/projects/data_protection_cloud.png",
    demoLink: "https://github.com/nk10nikhil",
    githubLink: "https://github.com/nk10nikhil",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Suduko Solver",
    description:
      "A web application that solves Sudoku puzzles using a backtracking algorithm.",
    longDescription:
      "A web application that solves Sudoku puzzles using a backtracking algorithm. The application is built with Next.js and MongoDB for storing user data. It also supports OAuth authentication using Google and Facebook.",
    tags: ["Next.js", "MongoDB", "JWT", "OAuth"],
    image: "/projects/sudoku.png",
    demoLink: "https://github.com/nk10nikhil",
    githubLink: "https://github.com/nk10nikhil",
    featured: true,
    category: "Algorithms",
  },
  {
    id: 3,
    title: "SocioPulse – Social Media Web Application (Next.js, Firebase)",
    description:
      "Built a feature-rich social media platform with user authentication, real-time chat, and media sharing capabilities.",
    longDescription:
      "Built a feature-rich social media platform with user authentication, real-time chat, and media sharing capabilities using Next.js and Firebase.",
    tags: ["Next.js", "Firebase", "Real-time Chat", "Media Sharing"],
    image: "/projects/social_media.png",
    demoLink: "https://github.com/nk10nikhil",
    githubLink: "https://github.com/nk10nikhil",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "WriteMyBlog – Online Blogging Platform (Next.js, PostgreSQL)",
    description:
      "Created a web application for users to write, edit, and publish blogs online, with an interactive WYSIWYG editor and SEO-friendly features.",
    longDescription:
      "Created a web application for users to write, edit, and publish blogs online, with an interactive WYSIWYG editor and SEO-friendly features using Next.js and PostgreSQL.",
    tags: ["Next.js", "PostgreSQL", "WYSIWYG Editor", "SEO"],
    image: "/projects/blog.png",
    demoLink: "https://github.com/nk10nikhil",
    githubLink: "https://github.com/nk10nikhil",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 5,
    title: "Full-Stack Q&A System (Next.js, Appwrite)",
    description:
      "Designed a Q&A platform allowing users to post questions, upvote/downvote answers, and follow topics.",
    longDescription:
      "Designed a Q&A platform allowing users to post questions, upvote/downvote answers, and follow topics using Next.js and Appwrite.",
    tags: ["Next.js", "Appwrite", "Q&A", "Voting"],
    image: "/projects/qna.png",
    demoLink: "https://github.com/nk10nikhil",
    githubLink: "https://github.com/nk10nikhil",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "AI-Powered SaaS Platform (Next.js, Prisma, Neon DB)",
    description:
      "Developed a software-as-a-service (SaaS) platform with AI-driven features, database management with Prisma, and scalable cloud deployment.",
    longDescription:
      "Developed a software-as-a-service (SaaS) platform with AI-driven features, database management with Prisma, and scalable cloud deployment using Next.js, Prisma, and Neon DB.",
    tags: ["Next.js", "Prisma", "Neon DB", "AI"],
    image: "/projects/aisaas.png",
    demoLink: "https://github.com/nk10nikhil",
    githubLink: "https://github.com/nk10nikhil",
    featured: true,
    category: "AI/ML",
  },
  {
    id: 7,
    title: "Secure LMS with Payment Gateway (Next.js, Stripe)",
    description:
      "Built a learning management system (LMS) with secure course access, student progress tracking, and integrated payment solutions using Stripe.",
    longDescription:
      "Built a learning management system (LMS) with secure course access, student progress tracking, and integrated payment solutions using Stripe and Next.js.",
    tags: ["Next.js", "Stripe", "LMS", "Payment Gateway"],
    image: "/projects/payment.png",
    demoLink: "https://github.com/nk10nikhil",
    githubLink: "https://github.com/nk10nikhil",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 8,
    title: "Workout Tracking System (Python, Google Sheets API)",
    description:
      "Developed an automated workout tracker that logs fitness data to Google Sheets, enabling easy tracking and visualization of progress.",
    longDescription:
      "Developed an automated workout tracker that logs fitness data to Google Sheets, enabling easy tracking and visualization of progress using Python and Google Sheets API.",
    tags: ["Python", "Google Sheets API", "Fitness", "Automation"],
    image: "/projects/workout.png",
    demoLink: "https://github.com/nk10nikhil",
    githubLink: "https://github.com/nk10nikhil",
    featured: true,
    category: "Automation",
  },
  {
    id: 9,
    title: "Flight Deal Finder (Python, APIs)",
    description:
      "Developed an automated flight deal finder that scrapes and alerts users about discounted airline tickets.",
    longDescription:
      "Developed an automated flight deal finder that scrapes and alerts users about discounted airline tickets using Python and various APIs.",
    tags: ["Python", "APIs", "Web Scraping", "Automation"],
    image: "/projects/flight.png",
    demoLink: "https://github.com/nk10nikhil",
    githubLink: "https://github.com/nk10nikhil",
    featured: true,
    category: "Automation",
  },
  {
    id: 10,
    title: "Data Entry Job Automation (Python, Selenium)",
    description:
      "Automated repetitive data entry tasks using Python and Selenium, improving efficiency and reducing manual errors.",
    longDescription:
      "Automated repetitive data entry tasks using Python and Selenium, improving efficiency and reducing manual errors.",
    tags: ["Python", "Selenium", "Automation", "Data Entry"],
    image: "/projects/dataautomation.png",
    demoLink: "https://github.com/nk10nikhil",
    githubLink: "https://github.com/nk10nikhil",
    featured: true,
    category: "Automation",
  }
];

export function ProjectCard({ selectedCategory }: { selectedCategory: string }) {
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-[-20px]">
      {filteredProjects.map((project, index) => (
        (<CardContainer className="inter-var">
          <CardBody
            className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[27rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white">
              {project.title}
            </CardItem>

            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              {project.description}
            </CardItem>

            <CardItem translateZ="100" rotateX={3} rotateZ={-3} className="w-full mt-4">
              <img
                src={project.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={project.title} />
            </CardItem>

            <div className="flex justify-between items-center">
              <CardItem
                translateZ={100}
                translateX={15}
                rotateX={5}
                as="button"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </CardItem>
            </div>

            <div className="flex justify-between items-center mt-20">

              <CardItem
                translateZ={20}
                translateX={-40}
                as="planeHelper"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-gradient-to-br from-primary via-purple-500 to-indigo-400 hover:bg-primary/90">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex">
                  Live Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </CardItem>

              <CardItem
                translateZ={20}
                translateX={40}
                as="p"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex">
                  <Github className="mr-1 h-4 w-4" /> Code
                </a>
              </CardItem>

            </div>
          </CardBody>
        </CardContainer>)
      ))}
    </div>
  );
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Full Stack", "AI/ML", "Automation", "Algorithms"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent min-h-screen relative"
    >
      {/* Background Elements */}
      {/* <P5Background className="blur-sm" /> */}
      <BlurBackground />
      <FloatingObjects />
      <Navbar />

      <main className="py-10 md:py-20">
        <section className="container mx-auto px-4 md:px-6 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 heading-gradient">My Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto pb-5">
              Here are some of the projects I've worked on recently. You can view the live demos and source code on GitHub.
            </p>
            <span className="flex justify-center items-center gap-10 m-0">
              <StarOnGithubButton />
            </span>
          </motion.div>

          {/* Category Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[-80px]">
            {projects.map((project, index) => (
              <CardContainer>
                <CardBody>
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="glass-morphism rounded-xl overflow-hidden"
                  >
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white p-6">
                      <h2 className="text-xl font-semibold">{project.title}</h2>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300 px-6 py-2">
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardItem>
                    <CardItem
                      translateZ="100" rotateX={20} rotateZ={-10} className="w-full aspect-video overflow-hidden px-1">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center">
                      <CardItem
                        translateZ={100}
                        translateX={15}
                        rotateX={5}
                        as="button"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 p-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={`${project.id}-${tag}`}
                              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-purple-200"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>
                      </CardItem>
                    </div>
                    <div className="flex space-x-3 mb-5 ml-5">
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="px-4 py-2 rounded-xl text-xs font-normal bg-gradient-to-br from-primary via-purple-500 to-indigo-400 hover:bg-primary/90 dark:text-white">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex">
                          Live Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                        </a>
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="outline px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black hover:bg-purple-500 text-white text-xs font-bold">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex">
                          <Github className="mr-1 h-4 w-4" /> Code
                        </a>
                      </CardItem>
                    </div>
                  </motion.div>
                </CardBody>
              </CardContainer>
            ))}
          </div> */}
          <ProjectCard selectedCategory={selectedCategory} />

        </section>
      </main>
      <section className="container mx-auto px-4 md:px-6 pt-12">
        <br />
      </section>
      <Footer />
    </motion.div>
  );
};

export default Projects;
