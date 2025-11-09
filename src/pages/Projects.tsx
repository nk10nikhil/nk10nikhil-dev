"use client";
import { useEffect, useState, useRef, createContext, useContext } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import StarOnGithubButton from "@/components/elements/StarOnGithubButton";
import { cn } from "@/lib/utils";
import React from "react";
import { gsap } from "gsap";

// Three.js integration for enhanced visuals
const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

// Enhanced Card Components with 3D effects
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
  const Tag = as || "div";

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
          "py-2 flex items-center justify-center",
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

// Enhanced Project Data with more details
const projects = [
  {
    id: 1,
    title: "Full Stack Authentication System",
    description:
      "A full stack authentication system with user registration, login, and password reset functionality. Built with Node.js, Express, React, and Tailwind CSS, using JWT and MongoDB.",
    longDescription:
      "Complete full stack auth system: registration, login, password reset. Node.js + Express backend, React + Tailwind frontend, JWT for authentication, MongoDB for data.",
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
    category: "Automation",
  },
  {
    id: 11,
    title: "E-commerce Platform with Secure Payments",
    description:
      "Built a full-stack e-commerce platform that processes 6,000+ transactions monthly with Razorpay integration, JWT, and optimized UI.",
    longDescription:
      "Architected a secure e-commerce platform with React, Next.js, Tailwind, Node.js, Express, MongoDB, handling 6,000+ transactions monthly. Razorpay payments, JWT auth, and optimized with lazy loading & code splitting.",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "JWT",
    ],
    image: "/projects/ecommerce.png",
    demoLink: "https://myprojectbazaar.vercel.app/",
    githubLink: "https://github.com/nk10nikhil/myprojectbazaar",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 12,
    title: "QR-Based Ticketing System",
    description:
      "Built under SIH hackathon for 3,000+ attendees, secure QR check-ins, REST APIs, real-time dashboards.",
    longDescription:
      "Led a team to build a QR-based ticketing system under 36 hours. React, Next.js, Node.js, MongoDB, JWT, with real-time dashboards, improving check-in efficiency by 30%.",
    tags: ["React", "Next.js", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/projects/ticketing.png",
    demoLink: "https://myeventorg.vercel.app/",
    githubLink: "https://github.com/nk10nikhil/myeventorg",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 13,
    title: "Predictive Analytics Dashboard",
    description:
      "Built an AI dashboard using React, Flask & Scikit-learn for 87% model accuracy on 1,500+ entries.",
    longDescription:
      "Developed a predictive analytics dashboard with React, Flask, Scikit-learn, Pandas, NumPy, Matplotlib. Automated real-time updates via REST APIs, reduced latency by 25%, and visualized data effectively.",
    tags: ["React", "Flask", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    image: "/projects/analytics.png",
    demoLink: "https://mycollegeorg.vercel.app/",
    githubLink: "https://github.com/nk10nikhil/mycollegeorg",
    featured: false,
    category: "AI/ML",
  },
  {
    id: 14,
    title: "Real-Time Chat Application",
    description:
      "Secure chat app for 2,500+ users with WebSockets, JWT encryption, Framer Motion animations.",
    longDescription:
      "Built a real-time chat app with React, Next.js, WebSocket, MongoDB, Express, JWT encryption, supporting 2,500+ users. Tested with Jest & Cypress, achieving 95% coverage, deployed on Vercel.",
    tags: [
      "React",
      "Next.js",
      "WebSocket",
      "MongoDB",
      "Express",
      "JWT",
      "Framer Motion",
    ],
    image: "/projects/chatapp.png",
    demoLink: "https://networkup.vercel.app/",
    githubLink: "https://github.com/nk10nikhil/networkup",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 15,
    title: "Glamour Grid – Salon Branding Website",
    description:
      "A modern accessible branding website for salons built with Next.js & Tailwind.",
    longDescription:
      "Crafted a salon branding website focusing on WCAG/ARIA accessibility, vibrant UI with Tailwind CSS and component-based Next.js.",
    tags: ["Next.js", "Tailwind CSS", "React", "WCAG", "ARIA"],
    image: "/projects/salon.png",
    demoLink: "https://glamourgrid.vercel.app/",
    githubLink: "https://github.com/nk10nikhil/glamourgrid",
    featured: false,
    category: "Frontend",
  },
  {
    id: 16,
    title: "Our Restaurant – Booking & Branding Web App",
    description:
      "Responsive restaurant web app with real-time booking and Google Maps integration.",
    longDescription:
      "Developed a branded restaurant website using React, integrating Google Maps API for location & real-time booking system, increasing reservations by 30%.",
    tags: ["React", "JavaScript", "CSS", "Google Maps API"],
    image: "/projects/restaurant.png",
    demoLink: "https://restaurantworld.vercel.app/",
    githubLink: "https://github.com/nk10nikhil/restaurantworld",
    featured: true,
    category: "Frontend",
  },
  {
    id: 17,
    title: "Everyday Life – E-Commerce Website",
    description:
      "Sleek responsive e-commerce site for household items, optimized for performance.",
    longDescription:
      "Built a minimalist e-commerce platform showcasing household products with lazy loading, Webpack, Lighthouse audits, reducing load times by 50%.",
    tags: ["React", "JavaScript", "CSS", "Webpack", "Lighthouse"],
    image: "/projects/everydaylife.png",
    demoLink: "https://everydaylife.vercel.app/",
    githubLink: "https://github.com/nk10nikhil/everydaylife",
    featured: true,
    category: "Frontend",
  },
  {
    id: 18,
    title: "WeBuilt_U – Agency Website",
    description:
      "Official site for WeBuilt_U, designed with Tailwind, Framer Motion & Vite.",
    longDescription:
      "Developed WeBuilt_U's marketing site to showcase services and client work, built with React, Tailwind CSS, Framer Motion, boosting engagement by 60%.",
    tags: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    image: "/projects/webuilt.png",
    demoLink: "https://webuiltu.vercel.app/",
    githubLink: "https://github.com/nk10nikhil/webuiltu",
    featured: false,
    category: "Frontend",
  },
  {
    id: 19,
    title: "Harbour Haven - Beverage Store",
    description:
      "A modern beverage store website built with React and Tailwind CSS, featuring a responsive design and smooth animations.",
    longDescription:
      "Developed a modern beverage store website using React and Tailwind CSS, featuring a responsive design, smooth animations, and an intuitive user interface. The site includes product listings, a shopping cart, and a checkout process.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    image: "/projects/harbor.png",
    demoLink: "https://harborhaven.vercel.app/",
    githubLink: "https://github.com/nk10nikhil/harbourhaven",
    featured: true,
    category: "Frontend",
  },
];

export function ProjectCard({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-[-40px]">
      {filteredProjects.map((project, index) => (
        <CardContainer className="inter-var">
          {/* Desktop View */}
          <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[27rem] h-auto rounded-xl p-6 border hidden md:block">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {project.title}
            </CardItem>

            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description}
            </CardItem>

            <CardItem
              translateZ="100"
              rotateX={3}
              rotateZ={-3}
              className="w-full mt-4"
            >
              <img
                src={project.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={project.title}
              />
            </CardItem>

            <div className="flex justify-between items-center">
              <CardItem
                translateZ={100}
                translateX={15}
                rotateX={5}
                as="button"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 p-6"
              >
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

            <div className="flex justify-between items-center mt-5">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="planeHelper"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-gradient-to-br from-primary via-purple-500 to-indigo-400 hover:bg-primary/90"
              >
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardItem>

              <CardItem
                translateZ={20}
                translateX={40}
                as="p"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                >
                  <Github className="mr-1 h-4 w-4" /> Code
                </a>
              </CardItem>
            </div>
          </CardBody>

          {/* Mobile View */}
          <CardBody
            className={cn(
              "bg-gradient-to-br from-gray-900/20 to-purple-900/10 relative group/card",
              "dark:hover:shadow-2xl dark:hover:shadow-emerald-500/20",
              "dark:bg-transparent border-white/20 border-2",
              "w-full h-48 rounded-2xl p-4",
              "backdrop-blur-sm shadow-2xl",
              "flex items-start", // Mobile layout
              "md:hidden" // Hide on desktop, show on mobile
            )}
          >
            {/* Mobile Layout - Image on right, content clipped */}
            <div className="flex w-full h-full overflow-hidden">
              {/* Content Section */}
              <div className="flex-1 pr-4 overflow-hidden flex flex-col justify-between">
                <div>
                  <CardItem
                    translateZ="50"
                    className="text-lg font-bold text-white mb-2 line-clamp-2"
                  >
                    {project.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-xs mb-3 line-clamp-3"
                  >
                    {project.description}
                  </CardItem>
                </div>

                {/* Tags - Hidden on mobile for space */}
                <CardItem translateZ={40} className="">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                </CardItem>
              </div>

              {/* Image Section */}
              <div className="flex-shrink-0 w-32 h-full relative">
                <CardItem
                  translateZ="100"
                  rotateX={3}
                  rotateZ={-3}
                  className="w-full h-full"
                >
                  <div className="relative overflow-hidden rounded-lg h-full">
                    <img
                      src={project.image}
                      className="h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-300"
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardItem>
              </div>
            </div>

            {/* Action Buttons - Mobile optimized */}
            <div className="flex justify-end items-center absolute bottom-3 left-4 right-4">
              <CardItem
                translateZ={20}
                translateX={10}
                as="button"
                className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 backdrop-blur-sm transition-all duration-300 hidden"
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-1 h-3 w-3" /> Code
                </a>
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={-10}
                as="button"
                className="px-3 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="mr-1 h-3 w-3" /> Demo
                </a>
              </CardItem>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-bold">
                  Featured
                </span>
              </div>
            )}
          </CardBody>
        </CardContainer>
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
      <BlurBackground />
      <FloatingObjects />
      <Navbar />

      <main className="pt-10 md:pt-20">
        <section className="container mx-auto px-4 md:px-6 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 md:mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto pb-5">
              Here are some of the projects I've worked on recently. You can
              view the live demos and source code on GitHub.
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
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          <ProjectCard selectedCategory={selectedCategory} />
        </section>
      </main>
      <section className="container mx-auto px-4 md:px-6 md:pt-0">
        <br />
      </section>
      <Footer />
    </motion.div>
  );
};

export default Projects;
