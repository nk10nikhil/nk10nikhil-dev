import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  Download,
  Briefcase,
  GraduationCap,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  TrendingUp,
  BookOpen,
  Coffee,
  Gamepad2,
  Heart,
  Zap,
  Globe,
} from "lucide-react";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import { cn } from "@/lib/utils";
import Certification from "@/components/section/Certification";

// Optimized viewport configuration for better performance
const viewportConfig = {
  triggerOnce: true,
  threshold: 0.1,
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [headerRef, headerInView] = useInView(viewportConfig);
  const [valuesRef, valuesInView] = useInView(viewportConfig);
  const [skillsRef, skillsInView] = useInView(viewportConfig);
  const [experienceRef, experienceInView] = useInView(viewportConfig);

  // Memoize static data arrays to prevent re-creation on every render
  const values = useMemo(
    () => [
      {
        icon: Rocket,
        title: "Innovation",
        desc: "Always exploring new technologies and pushing boundaries",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Users,
        title: "Collaboration",
        desc: "Believe in the power of teamwork and open-source",
        color: "from-purple-500 to-pink-500",
      },
      {
        icon: TrendingUp,
        title: "Growth",
        desc: "Committed to continuous learning and improvement",
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: Target,
        title: "Quality",
        desc: "Focused on writing clean, scalable, and maintainable code",
        color: "from-orange-500 to-red-500",
      },
    ],
    []
  );

  const funFacts = useMemo(
    () => [
      {
        icon: Coffee,
        text: "Coffee enthusiast with 300+ cups/year",
        color: "from-amber-500 to-orange-500",
      },
      {
        icon: Gamepad2,
        text: "Gamer who codes game logic for fun",
        color: "from-purple-500 to-pink-500",
      },
      {
        icon: BookOpen,
        text: "Read 25+ tech books this year",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Heart,
        text: "Passionate open-source contributor",
        color: "from-rose-500 to-pink-500",
      },
    ],
    []
  );

  const topSkills = useMemo(
    () => [
      "Full-Stack Development",
      "React & Next.js",
      "Node.js & MongoDB",
      "DSA & Problem Solving",
      "AI/ML Integration",
      "Cloud Computing",
      "JWT Authentication",
      "RESTful APIs",
    ],
    []
  );

  const workExperience = useMemo(
    () => [
      {
        title: "Chief Technology Officer",
        company: "WeBuilt_U",
        period: "Jan 2025 - Present",
        description:
          "Built WeBuilt_U's website from the ground up, leading full-stack development and tech strategy. Managing dev team, optimizing workflows, and ensuring performance, scalability, and seamless UX.",
        technologies: [
          "React",
          "Next.js",
          "Node.js",
          "MongoDB",
          "Team Leadership",
        ],
      },
      {
        title: "Open Source Developer",
        company: "GoFr Summer of Code",
        period: "Jun 2025 - Aug 2025",
        description:
          "Contributed to scalable web apps and secure auth systems. Key projects: GoFr Dev Dashboard (Next.js, MongoDB) and OpenAuth Gateway (JWT). Enhanced clean architecture and performance optimization.",
        technologies: ["Next.js", "MongoDB", "JWT", "REST APIs"],
      },
      {
        title: "Professional Freelancer",
        company: "Freelancer.com",
        period: "Jan 2024 - Jan 2025",
        description:
          "Delivered full-stack web solutions for clients—building responsive UIs, secure backends, dynamic features. Integrated payment systems, optimized performance, deployed via GitHub, Vercel, Netlify.",
        technologies: ["React", "Node.js", "Firebase", "Payment Integration"],
      },
      {
        title: "Team Leader",
        company: "Smart India Hackathon 2024",
        period: "Aug 2024 - Dec 2024",
        description:
          "Led a 6-member team to build a QR-based ticketing system serving 3,000+ attendees in 36 hours. Designed REST APIs, real-time dashboards, achieved 90+ Lighthouse score.",
        technologies: ["React", "Next.js", "MongoDB", "QR System", "REST APIs"],
      },
    ],
    []
  );

  const education = useMemo(
    () => [
      {
        degree: "Bachelor of Technology - Computer Science & Design",
        institution: "Galgotias College of Engineering and Technology",
        period: "Oct 2023 - Nov 2027",
        grade: "8.52 CGPA",
        description:
          "Pursuing B.Tech in CS & Design, focusing on Full-Stack Development, DSA, UI/UX, Logic Theory, and building innovative web applications. Active in open-source, hackathons, and technical problem-solving.",
        highlights: [
          "Smart India Hackathon 2024 Team Leader",
          "Open Source Contributor",
          "8.52 CGPA",
        ],
      },
      {
        degree: "Higher Secondary Education (PCM)",
        institution: "Army Public School (APS)",
        period: "Jul 2020 - Jul 2022",
        grade: "A1",
        description:
          "NDA-qualified, Class Representative, House Captain, Football Vice-Captain. Developed leadership, teamwork, strategic thinking, discipline, and analytical skills through academics and extracurriculars.",
        highlights: [
          "NDA Qualified",
          "House Captain",
          "Football Vice-Captain",
          "Chess Player",
        ],
      },
    ],
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent min-h-screen"
    >
      {/* Background Elements */}
      <BlurBackground />
      <FloatingObjects />

      <main className="pt-10 md:pt-16">
        {/* Hero Section */}
        <section
          className="container mx-auto px-4 md:px-6 pt-12"
          ref={headerRef}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16 text-center max-w-7xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">
                About Me
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                Nikhil Kumar
              </span>
            </h1>
          </motion.div>

          {/* Main Content Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar - Sticky Profile Card */}
              <aside className="lg:w-80 xl:w-96 flex-shrink-0 md:pb-16">
                <div className="lg:sticky lg:top-20">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={headerInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="glass-morphism rounded-2xl overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src="/profile.png"
                          alt="Nikhil Kumar"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-center mb-2">
                          Nikhil Kumar
                        </h2>
                        <p className="text-muted-foreground text-center mb-1">
                          Full-Stack Software Engineer
                        </p>
                        <p className="text-sm text-muted-foreground/80 text-center mb-4 flex items-center justify-center gap-1">
                          <MapPin className="w-4 h-4" /> Noida, India
                        </p>

                        <div className="flex justify-center gap-3 mb-4">
                          <Button
                            size="sm"
                            className="bg-purple-500 hover:bg-purple-600 flex-1"
                            asChild
                          >
                            <a
                              href="/assets/Nikhil_Kumar_SDE_Resume.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Download className="h-4 w-4 mr-1" /> Resume
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                            asChild
                          >
                            <a href="mailto:nk10nikhil@gmail.com">
                              <Mail className="h-4 w-4 mr-1" /> Contact
                            </a>
                          </Button>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-3 pt-4 border-t border-white/10">
                          <Button size="icon" variant="ghost" asChild>
                            <a
                              href="https://github.com/nk10nikhil"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          </Button>
                          <Button size="icon" variant="ghost" asChild>
                            <a
                              href="https://linkedin.com/in/nk10nikhil"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                          </Button>
                          <Button size="icon" variant="ghost" asChild>
                            <a
                              href="https://nk10nikhil.vercel.app"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Globe className="h-5 w-5" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </aside>

              {/* Right Content - Scrollable */}
              <div className="flex-1 min-w-0">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-16"
                >
                  {/* Bio Section */}
                  <div className="space-y-6">
                    <div className="glass-morphism rounded-2xl p-6 md:p-8">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Lightbulb className="w-6 h-6 text-purple-400" />
                        Who I Am
                      </h2>
                      <div className="space-y-4 text-white/80 leading-relaxed">
                        <p>
                          I'm{" "}
                          <span className="text-white font-semibold">
                            Nikhil Kumar
                          </span>
                          , a Computer Science & Design undergrad passionate
                          about building{" "}
                          <span className="text-purple-400 font-medium">
                            scalable, secure, and user-focused
                          </span>{" "}
                          digital solutions. As{" "}
                          <span className="text-white font-semibold">
                            Co-Founder & CTO at WeBuilt_U
                          </span>
                          , I've led full-stack development from the ground
                          up—architecting platforms, managing agile teams, and
                          delivering products that drive real-world impact.
                        </p>
                        <p>
                          My journey spans{" "}
                          <span className="text-purple-400 font-medium">
                            freelance projects, open-source contributions, and
                            hackathon leadership
                          </span>
                          , where I've built everything from e-commerce
                          platforms handling thousands of transactions to
                          authentication gateways and performance-optimized
                          dashboards. I specialize in{" "}
                          <span className="text-white font-semibold">
                            React, Next.js, Node.js, MongoDB, and JWT-based
                            authentication
                          </span>
                          , with a strong focus on accessibility, performance,
                          and clean architecture.
                        </p>
                        <p>
                          Beyond development, I thrive in{" "}
                          <span className="text-purple-400 font-medium">
                            community-driven innovation
                          </span>
                          —as an open-source contributor (GoFr, GirlScript),
                          campus ambassador, and hackathon lead (Smart India
                          Hackathon). I'm certified in MongoDB, Oracle Cloud,
                          and IT Service Management, and I'm constantly
                          exploring{" "}
                          <span className="text-white font-semibold">
                            AI/ML, Web3, and Cloud technologies
                          </span>{" "}
                          to expand my impact.
                        </p>
                      </div>
                    </div>

                    {/* Quick Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="glass-morphism rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                        <GraduationCap className="w-8 h-8 text-purple-400 mb-2" />
                        <h3 className="font-semibold mb-1">Education</h3>
                        <p className="text-sm text-muted-foreground">
                          B.Tech in CS & Design
                        </p>
                        <p className="text-xs text-muted-foreground/60">
                          CGPA: 8.52
                        </p>
                      </div>
                      <div className="glass-morphism rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                        <Briefcase className="w-8 h-8 text-blue-400 mb-2" />
                        <h3 className="font-semibold mb-1">Role</h3>
                        <p className="text-sm text-muted-foreground">
                          Co-Founder & CTO
                        </p>
                        <p className="text-xs text-muted-foreground/60">
                          WeBuilt_U
                        </p>
                      </div>
                      <div className="glass-morphism rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                        <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                        <h3 className="font-semibold mb-1">Focus</h3>
                        <p className="text-sm text-muted-foreground">
                          Full-Stack Development
                        </p>
                        <p className="text-xs text-muted-foreground/60">
                          MERN • AI/ML • Cloud
                        </p>
                      </div>
                      <div className="glass-morphism rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                        <Heart className="w-8 h-8 text-rose-400 mb-2" />
                        <h3 className="font-semibold mb-1">Passion</h3>
                        <p className="text-sm text-muted-foreground">
                          Open Source & Innovation
                        </p>
                        <p className="text-xs text-muted-foreground/60">
                          Community Builder
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Core Values */}
                  <motion.div
                    ref={valuesRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold mb-8 text-center">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                        Core Values
                      </span>
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                          <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="glass-morphism rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                          >
                            <div
                              className={cn(
                                "w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br flex items-center justify-center",
                                value.color
                              )}
                            >
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                              {value.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {value.desc}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Fun Facts */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="hidden md:block"
                  >
                    <h2 className="text-3xl font-bold mb-8 text-center">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white">
                        Fun Facts
                      </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {funFacts.map((fact, index) => {
                        const Icon = fact.icon;
                        return (
                          <motion.div
                            key={fact.text}
                            initial={{
                              opacity: 0,
                              x: index % 2 === 0 ? -20 : 20,
                            }}
                            animate={valuesInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              duration: 0.5,
                              delay: 0.4 + index * 0.1,
                            }}
                            whileHover={{ scale: 1.02 }}
                            className="glass-morphism rounded-xl p-5 flex items-center gap-4 hover:shadow-xl transition-all duration-300"
                          >
                            <div
                              className={cn(
                                "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0",
                                fact.color
                              )}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-white/80">{fact.text}</p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Top Skills */}
                  <motion.div
                    ref={skillsRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold mb-8 text-center">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
                        Top Skills
                      </span>
                    </h2>
                    <div className="glass-morphism rounded-2xl p-6 md:p-8">
                      <div className="flex flex-wrap gap-3 justify-center">
                        {topSkills.map((skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              skillsInView ? { opacity: 1, scale: 1 } : {}
                            }
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-sm font-medium hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Work Experience */}
                  <motion.div
                    ref={experienceRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold mb-8 text-center">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-white">
                        Work Experience
                      </span>
                    </h2>
                    <div className="space-y-6">
                      {workExperience.map((job, index) => (
                        <motion.div
                          key={job.title}
                          initial={{ opacity: 0, x: -30 }}
                          animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.15 }}
                          whileHover={{ scale: 1.01 }}
                          className="glass-morphism rounded-2xl p-6 md:p-8 relative overflow-hidden group"
                        >
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

                          <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                              <h3 className="text-xl font-bold">{job.title}</h3>
                              <span className="text-sm text-purple-400 flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {job.period}
                              </span>
                            </div>
                            <p className="text-muted-foreground mb-4 font-medium">
                              {job.company}
                            </p>
                            <p className="text-white/80 mb-4 leading-relaxed">
                              {job.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Education */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold mb-8 text-center">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-white">
                        Education
                      </span>
                    </h2>
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <motion.div
                          key={edu.degree}
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -30 : 30,
                          }}
                          animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: 0.4 + index * 0.15,
                          }}
                          whileHover={{ scale: 1.01 }}
                          className="glass-morphism rounded-2xl p-6 md:p-8 relative overflow-hidden group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-500" />

                          <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                              <h3 className="text-xl font-bold">
                                {edu.degree}
                              </h3>
                              <span className="text-sm text-orange-400 flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {edu.period}
                              </span>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                              <p className="text-muted-foreground font-medium">
                                {edu.institution}
                              </p>
                              <span className="text-sm text-green-400 font-semibold">
                                Grade: {edu.grade}
                              </span>
                            </div>
                            <p className="text-white/80 mb-4 leading-relaxed">
                              {edu.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {edu.highlights.map((highlight) => (
                                <span
                                  key={highlight}
                                  className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-medium text-orange-300"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Top Certifications */}
                  <Certification />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default About;
