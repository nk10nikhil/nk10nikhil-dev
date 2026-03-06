import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Star,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CardSwap, { Card } from "@/components/ui/card-swap";
import { useInView } from "@/hooks/useInView";
import { useRuntimeProfile } from "@/hooks/useRuntimeProfile";

const projects = [
  {
    id: 1,
    title: "Full-Stack Authentication System",
    description:
      "A full-stack authentication system with user registration, login, and password reset functionalities.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/project10.avif",
    link: "https://github.com/nk10nikhil",
    github: "https://github.com/nk10nikhil",
    stars: 24,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Our Restaurant – Booking & Branding Web App",
    description:
      "Responsive restaurant web app with real-time booking and Google Maps integration.",
    tags: ["React", "JavaScript", "CSS", "Google Maps API"],
    image: "/projects/project7.avif",
    link: "https://restaurantworld.vercel.app/",
    github: "https://github.com/nk10nikhil/restaurantworld",
    stars: 19,
    category: "Frontend",
  },
  {
    id: 3,
    title: "Everyday Life – E-Commerce Website",
    description:
      "Sleek responsive e-commerce site for household items, optimized for performance.",
    tags: ["React", "JavaScript", "CSS", "Webpack", "Lighthouse"],
    image: "/projects/project19.avif",
    link: "https://everydaylife.vercel.app/",
    github: "https://github.com/nk10nikhil/everydaylife",
    stars: 21,
    category: "Frontend",
  },
  {
    id: 4,
    title: "Harbour Haven - Beverage Store",
    description:
      "A modern beverage store website built with React and Tailwind CSS, featuring a responsive design and smooth animations.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    image: "/projects/project17.avif",
    link: "https://harborhaven.vercel.app/",
    github: "https://github.com/nk10nikhil/harbourhaven",
    stars: 20,
    category: "Frontend",
  },
  {
    id: 5,
    title: "E-commerce Platform with Secure Payments",
    description:
      "Built a full-stack e-commerce platform that processes 6,000+ transactions monthly with Razorpay integration, JWT, and optimized UI.",
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
    image: "/projects/project18.avif",
    link: "https://myprojectbazaar.vercel.app/",
    github: "https://github.com/nk10nikhil/myprojectbazaar",
    stars: 34,
    category: "Full Stack",
  },
];

const FeaturedProjects = () => {
  const { ref } = useInView({
    threshold: 0.2,
    rootMargin: "120px 0px",
  });
  const { isMobile, lowPower } = useRuntimeProfile();
  const constrained = isMobile || lowPower;

  return (
    <section
      ref={ref}
      className="relative min-h-[300px] overflow-hidden bg-primary/5 pt-10 text-primary md:min-h-[300px] md:pt-16"
    >
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center">
          {/* Small badge indicator */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-gray-200">
              Industry Standards Projects
            </span>
          </motion.div>
        </div>
        {/* Left Side - Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient text-center lg:text-left">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg text-center lg:text-left">
              A collection of my software projects demonstrating my skills in
              both
              <span className="text-primary font-semibold">
                {" "}
                Full-Stack
              </span>{" "}
              and
              <span className="text-primary font-semibold"> AI/ML</span>{" "}
              development.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold text-lg">Modern Tech Stack</h4>
                  <p className="text-muted-foreground">
                    Built with React, Next.js, Node.js, and more
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold text-lg">Production Ready</h4>
                  <p className="text-muted-foreground">
                    Scalable, performant, and user-friendly applications
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold text-lg">Open Source</h4>
                  <p className="text-muted-foreground">
                    Available on GitHub for collaboration and learning
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="mt-4 bg-gradient-to-br from-primary via-purple-500 to-indigo-400 text-white hover:opacity-90 transition-opacity"
              asChild
            >
              <Link to="/projects">
                View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Side - Card Stack */}
          <div
            className={`relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] ${
              constrained
                ? "-translate-x-[150px] -translate-y-[140px] md:-translate-x-[230px] md:-translate-y-[130px]"
                : "-translate-x-[180px] -translate-y-[80px] md:-translate-x-100px] md:-translate-y-[130px]"
            } transform`}
          >
            <CardSwap
              width={constrained ? 580 : 600}
              height={constrained ? 300 : 300}
              cardDistance={constrained ? 50 : 50}
              verticalDistance={constrained ? 60 : 60}
              delay={constrained ? 2700 : 2700}
              pauseOnHover={true}
              skewAmount={constrained ? 4 : 4}
              easing={constrained ? "elastic" : "elastic"}
              autoplayEnabled={true}
            >
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden cursor-pointer group shadow-2xl border-0 backdrop-blur-sm"
                >
                  {/* Title Header with Category Badge */}
                  <div className="relative p-3 pb-2 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-black/95 border-b border-gray-700/50">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base md:text-lg font-bold text-white line-clamp-1 flex-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 whitespace-nowrap">
                        {project.category}
                      </span>
                    </div>

                    {/* Decorative gradient line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  </div>

                  {/* Landscape Layout: Image Left, Content Right */}
                  <div className="flex h-[calc(100%-52px)]">
                    {/* Left Side - Project Image with Overlay Effects */}
                    <div className="relative w-[70%] overflow-hidden">
                      {/* Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />

                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Hover Overlay with Quick Actions */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4 text-white" />
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border border-primary/30 transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 text-primary" />
                        </a>
                      </div>

                      {/* Stars Badge */}
                      <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-[10px] text-white font-semibold">
                          {project.stars}
                        </span>
                      </div>
                    </div>

                    {/* Right Side - Project Content */}
                    <div className="w-[50%] p-3 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-black/95 flex flex-col justify-between backdrop-blur-sm">
                      <div className="space-y-2">
                        {/* Description */}
                        <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors">
                          {project.description}
                        </p>

                        {/* Tags with Better Styling */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={tag}
                              className="text-[10px] px-2 py-1 rounded-md bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 font-medium hover:border-primary/40 hover:from-primary/20 hover:to-primary/10 transition-all"
                              style={{
                                animationDelay: `${index * 0.1}s`,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action Bar */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-700/50 mt-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-semibold text-[11px] group/link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View Project</span>
                          <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>

                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-[10px] text-gray-400">
                            Live
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
