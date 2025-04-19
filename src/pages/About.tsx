
import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import P5Background from "@/components/elements/P5Background";
import { TextRevealCard } from "@/components/elements/TextRevealCard";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardsRef = useRef(null);

  const workExperience = [
    {
      title: "Aspiring Software Developer",
      company: "Open to Opportunities",
      period: "Present",
      description:
        "Eager to start a career in software development. Passionate about learning new technologies and contributing to meaningful projects.",
      technologies: ["React", "Node.js", "Git", "CSS"],
    },
  ];

  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Galgotias College of Engineering and Technology",
      period: "2023 - 2027",
      description:
        "Pursuing a Bachelor's degree in Computer Science with a focus on software development and cloud computing.",
    },
    {
      degree: "Higher Secondary School",
      institution: "Army Public School",
      period: "2020 - 2022",
      description:
        "Completed Higher Secondary School with a focus on Computer Science and Mathematics.",
    },
  ];

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent min-h-screen relative"
    >

      <style>{`
        .cards:hover .card {
          background: radial-gradient(
            10rem circle at var(--xPos) var(--yPos),
            rgba(0, 255, 241, 0.2),
            rgba(255, 255, 255, 0.05)
          );
        }
        .card:hover {
          transform: scale(0.97);
        }
        .card:hover::before {
          opacity: 1;
        }
      `}</style>

      {/* Background Elements */}
      {/* <P5Background className="blur-sm" /> */}
      <BlurBackground />
      <FloatingObjects />
      <Navbar />

      <main className="pt-10 md:pt-16">
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 md:mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient flex justify-center">About Me</h1>
              <TextRevealCard text="Passionate Full-Stack Developer dedicated to crafting exceptional digital experiences." revealText="Transforming creative visions into impactful digital experiences" className="mt-0 flex justify-center" children={undefined}>
              </TextRevealCard>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-1 max-w-sm mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="sticky top-24 glass-morphism rounded-xl overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/profile.png"
                      alt="Nikhil Kumar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h2 className="text-xl font-semibold">Nikhil Kumar</h2>
                    <p className="text-muted-foreground mb-4">Full-Stack Developer</p>
                    <div className="flex justify-center space-x-3 mb-4">
                      <Button size="sm" className="bg-purple-500 hover:bg-primary/90" asChild>
                        <a href="https://drive.google.com/file/d/1eRYLTV2WoG46IpshJPg6iXnp1ekZaAg5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-1" /> Resume
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href="mailto:nk10nikhil@gmail.com">
                          Contact Me
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="md:col-span-2 space-y-8">

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold mb-4">My Story</h2>
                  <div className="glass-morphism rounded-xl p-6 space-y-4">
                    <p>
                      I am a Full-Stack Developer with a passion for creating exceptional digital experiences. I have a keen interest in web development and cloud computing. I am proficient in React, Node.js, and MongoDB.
                    </p>
                    <p>
                      I am currently pursuing a Bachelor's degree in Computer Science and Engineering. I have worked on several projects that have helped me gain experience in software development. I am always eager to learn new technologies and contribute to meaningful projects.
                    </p>
                    <p>
                      I am looking for opportunities to work with a team of talented developers and contribute to projects that make a difference. I am excited about the future of technology and am eager to be a part of it.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
                  <div className="space-y-6">
                    {workExperience.map((job, index) => (
                      <div key={index} className="glass-morphism rounded-xl p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-medium">{job.title}</h3>
                          <span className="text-sm text-primary">{job.period}</span>
                        </div>
                        <p className="text-muted-foreground mb-3">{job.company}</p>
                        <p className="mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-4">Education</h2>
                  <div
                    className="cards space-y-6"
                    ref={cardsRef}
                    onMouseMove={(e) => {
                      const cards = cardsRef.current.querySelectorAll('.card');
                      cards.forEach((card) => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        card.style.setProperty('--xPos', `${x}px`);
                        card.style.setProperty('--yPos', `${y}px`);
                      });
                    }}
                  >
                    {education.map((edu, index) => (
                      <div key={index} className="card glass-morphism rounded-xl p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-medium">{edu.degree}</h3>
                          <span className="text-sm text-primary">{edu.period}</span>
                        </div>
                        <p className="text-muted-foreground mb-3">{edu.institution}</p>
                        <p>{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="glass-morphism rounded-xl p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">GitHub Foundatons Certification</h3>
                        <p className="text-sm text-muted-foreground">Github</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-primary" asChild>
                        <a href="https://www.credly.com/badges/acb873a5-62a5-4b73-8803-1a43b1a8a5cb/print" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="glass-morphism rounded-xl p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Professional Diploma in WEB3 NFT Business</h3>
                        <p className="text-sm text-muted-foreground">MTF Institute</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-primary" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="glass-morphism rounded-xl p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Professional Diploma in Software Testing & Quality Assurance</h3>
                        <p className="text-sm text-muted-foreground">MTF Institute</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-primary" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="glass-morphism rounded-xl p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Scrum Master Certification</h3>
                        <p className="text-sm text-muted-foreground">Agile Enterprise Coach, London</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-primary" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="glass-morphism rounded-xl p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">NIELT: NSQF Level I & II (IT)</h3>
                        <p className="text-sm text-muted-foreground">NIELT</p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-primary" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default About;
