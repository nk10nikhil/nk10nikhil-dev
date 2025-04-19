import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Full-Stack Authentication System",
    description:
      "A full-stack authentication system with user registration, login, and password reset functionalities.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/data_protection_cloud.png",
    link: "https://github.com/nk10nikhil"
  },
  {
    id: 2,
    title: "AI-Powered SaaS Platform",
    description:
      "A SaaS platform for creating, training, and deploying machine learning models with real-time collaboration.",
    tags: ["Next.js", "MongoDB", "Socket.io", "Express"],
    image: "/projects/aisaas.png",
    link: "https://github.com/nk10nikhil"
  },
  {
    id: 3,
    title: "Data Entry Job Automation - Python",
    description:
      "A Python script to automate data entry jobs by extracting data from PDFs and entering it into a Google Sheet.",
    tags: ["Python", "Pandas", "Google Sheets API"],
    image: "/projects/dataautomation.png",
    link: "https://github.com/nk10nikhil"
  },
  {
    id: 4,
    title: "Flight Deal Finder (Python, APIs)",
    description: "A Python script to find cheap flight deals by scraping data from flight booking websites.",
    tags: ["Python", "Requests", "BeautifulSoup"],
    image: "/projects/flight.png",
    link: "https://github.com/nk10nikhil"
  },
  {
    id: 5,
    title: "Full-Stack Q&A System (Next.js, Appwrite)",
    description: "A full-stack Q&A system with user authentication, asking questions, and answering questions.",
    tags: ["Next.js", "Appwrite", "Tailwind CSS"],
    image: "/projects/qna.png",
    link: "https://github.com/nk10nikhil"
  }
];

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleProjects = () => {
    const visibleProjects = [];
    const numVisible = window.innerWidth >= 1024 ? 3 : 1;

    for (let i = 0; i < numVisible; i++) {
      visibleProjects.push(projects[(currentIndex + i) % projects.length]);
    }

    return visibleProjects;
  };

  return (
    <section className="py-16 md:py-24 pb-20 md:pt-16 md:pb-20 bg-primary/5 text-primary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              A collection of my full stack projects demonstrating my skills in both front-end and back-end development.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 text-white max-w-60 bg-gradient-to-br from-primary via-purple-500 to-indigo-400 " asChild>
            <Link to="/projects">
              View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="flex justify-between items-center mb-6">
          <Button variant="outline" onClick={handlePrev}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button variant="outline" onClick={handleNext}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {getVisibleProjects().map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border-none shadow-lg glass-morphism h-full">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-white/90 p-0 px-2" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
