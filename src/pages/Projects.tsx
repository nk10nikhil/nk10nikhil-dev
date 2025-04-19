import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import { ArrowUpRight, Github } from "lucide-react";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import P5Background from "@/components/elements/P5Background";
import StarOnGithubButton from "@/components/elements/StarOnGithubButton";
"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
  }
];

const Projects = () => {
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[-80px]">
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
          </div>
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
