import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  Sparkles,
} from "lucide-react";

type Cert = {
  id: string;
  title: string;
  institute: string;
  date: string;
  desc: string;
  img: string;
  url?: string;
  skills?: string[];
};

const Certification = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const certifications: Cert[] = [
    {
      id: "1",
      title: "IT Service Management",
      institute: "SkillFront",
      date: "Oct 2025",
      desc: "The ISO 20000 Foundation - IT Service Certification from SkillFront demonstrates a comprehensive understanding of IT service management principles, project management methodologies, and regulatory compliance. This credential validates expertise in delivering high-quality IT services, managing service lifecycles, and ensuring alignment with international standards. Holders are equipped to handle problem management, quality of service (QoS), and implement best practices for continual service improvement in dynamic enterprise environments. Credential ID: 02475660968055.",
      img: "/certificates/cert1.jpeg",
      url: "https://skillfront.com/certificate/02475660968055",
      skills: [
        "IT Service Management",
        "Project Management",
        "Quality of Service (QoS)",
        "Problem Management",
        "Regulatory Compliance",
        "ITIL",
        "Service Lifecycle",
        "Incident Management",
        "Process Optimization",
      ],
    },
    {
      id: "5",
      title: "Agile Scrum Master",
      institute: "Agile Enterprise Coach, London",
      date: "Jul 2025",
      desc: "The Agile Scrum Master certification from Agile Enterprise Coach, London, validates advanced knowledge in agile methodologies, Scrum framework, and software development life cycle (SDLC). This credential demonstrates the ability to lead cross-functional teams, facilitate agile ceremonies, and drive continuous improvement. Certified professionals excel in sprint planning, backlog refinement, and delivering high-quality software solutions in fast-paced environments. Credential ID: 1004190.",
      img: "/certificates/cert5.jpeg",
      url: "https://agilecoach.co.uk/certificate/1004190",
      skills: [
        "Agile Methodologies",
        "Scrum",
        "Software Development",
        "SDLC",
        "Sprint Planning",
        "Team Leadership",
        "Continuous Improvement",
        "Kanban",
        "Stakeholder Management",
      ],
    },
    {
      id: "6",
      title: "InnoFusion Hackathon",
      institute: "University of Engineering & Management",
      date: "Jul 2025",
      desc: "Awarded Scrum Master Certification at the InnoFusion Hackathon by University of Engineering & Management (UEM). Recognizes excellence in agile project delivery, team facilitation, and innovative problem-solving during competitive hackathon events. Credential ID: c0e3c0f8-8d89-47fe-8247-cdab6005a1dc.",
      img: "/certificates/cert6.jpeg",
      url: "https://uem.edu.in/certificate/c0e3c0f8-8d89-47fe-8247-cdab6005a1dc",
      skills: [
        "Hackathon",
        "Scrum",
        "Team Collaboration",
        "Rapid Prototyping",
        "Agile Delivery",
        "Presentation Skills",
        "Innovation",
      ],
    },
    {
      id: "2",
      title: "Google Analytics Certification",
      institute: "Google",
      date: "Jun 2025",
      desc: "The Google Analytics Certification demonstrates proficiency in digital analytics, data-driven decision making, and web performance optimization. Certified professionals are skilled in configuring analytics dashboards, interpreting user behavior, and leveraging insights to improve marketing strategies and website effectiveness. Credential ID: 153625685.",
      img: "/certificates/cert2.jpeg",
      url: "https://google.com/certificate/153625685",
      skills: [
        "Analytical Skills",
        "Google Analytics",
        "Digital Marketing",
        "Data Visualization",
        "Conversion Optimization",
        "SEO",
        "Reporting",
      ],
    },
    {
      id: "8",
      title: "Information Security Associate",
      institute: "SkillFront",
      date: "Jun 2025",
      desc: "The Information Security Associate certification from SkillFront validates expertise in information security principles, IT infrastructure protection, and regulatory compliance. Certified professionals are skilled in implementing security controls, managing vulnerabilities, and ensuring data privacy across enterprise systems. Credential ID: 67596819695188.",
      img: "/certificates/cert8.jpeg",
      url: "https://skillfront.com/certificate/67596819695188",
      skills: [
        "Information Security",
        "Information Technology",
        "Data Privacy",
        "Vulnerability Management",
        "Security Controls",
        "Risk Assessment",
      ],
    },
    {
      id: "3",
      title: "Introduction to Data Science",
      institute: "Cisco",
      date: "Jun 2025",
      desc: "The Introduction to Data Science certification from Cisco covers foundational concepts in data analysis, statistical modeling, and data-driven decision making. Certified individuals are proficient in handling large datasets, visualizing data, and applying analytical techniques to solve business problems. Credential ID: 60008bde-0559-4923-b77a-e50d78ca153b.",
      img: "/certificates/cert3.jpeg",
      url: "https://cisco.com/certificate/60008bde-0559-4923-b77a-e50d78ca153b",
      skills: [
        "Data Analysis",
        "Statistical Modeling",
        "Data Visualization",
        "Python",
        "Business Intelligence",
        "Machine Learning Basics",
      ],
    },
    {
      id: "9",
      title: "Microsoft Project Certification",
      institute: "Microsoft",
      date: "Jun 2025",
      desc: "The Microsoft Project Certification validates advanced skills in project management, artificial intelligence (AI), and cloud computing. Certified professionals are adept at building computer vision applications, integrating APIs, and leveraging Microsoft Azure for scalable solutions. Credential ID: E8V54IKAW5ZA.",
      img: "/certificates/cert9.jpeg",
      url: "https://microsoft.com/certificate/E8V54IKAW5ZA",
      skills: [
        "Artificial Intelligence (AI)",
        "Software Development",
        "Computer Vision",
        "API Integration",
        "AI/ML",
        "Microsoft Azure",
        "Cloud Computing",
        "Project Management",
      ],
    },
    {
      id: "10",
      title: "MongoDB Associate DBA",
      institute: "MongoDB",
      date: "Jun 2025",
      desc: "The MongoDB Associate Database Administrator certification demonstrates expertise in database management, performance optimization, and data security. Credential ID: MDBay8i5908j8.",
      img: "/certificates/cert10.jpeg",
      url: "https://mongodb.com/certificate/MDBay8i5908j8",
      skills: [
        "MongoDB",
        "Database Administration",
        "Data Security",
        "Performance Tuning",
        "Backup & Recovery",
        "NoSQL",
      ],
    },
    {
      id: "4",
      title: "Oracle Cloud Infrastructure",
      institute: "Oracle",
      date: "Jun 2025",
      desc: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate validates foundational knowledge in cloud architecture, AI integration, and scalable infrastructure solutions. Credential ID: 101915958OCI25AICFA.",
      img: "/certificates/cert4.jpeg",
      url: "https://oracle.com/certificate/101915958OCI25AICFA",
      skills: [
        "Oracle Cloud",
        "Cloud Architecture",
        "AI Foundations",
        "Infrastructure Management",
        "Automation",
      ],
    },
    {
      id: "11",
      title: "Six Sigma White Belt",
      institute: "The Council for Six Sigma Certification",
      date: "Jun 2025",
      desc: "Six Sigma White Belt Certification demonstrates understanding of process improvement, quality assurance, and lean methodologies. Credential ID: djQ0MDk2MS0yOTg.",
      img: "/certificates/cert11.jpeg",
      url: "https://sixsigma.org/certificate/djQ0MDk2MS0yOTg",
      skills: [
        "Six Sigma",
        "Quality Assurance",
        "Process Improvement",
        "Lean Methodologies",
        "Root Cause Analysis",
      ],
    },
    {
      id: "12",
      title: "AWS S3 Basics",
      institute: "Coursera",
      date: "May 2025",
      desc: "Amazon S3 Basics certification from Coursera covers cloud storage fundamentals, microservices architecture, and version control using AWS. Credential ID: JA4E5HLZFJI2.",
      img: "/certificates/cert12.jpeg",
      url: "https://coursera.org/certificate/JA4E5HLZFJI2",
      skills: [
        "Amazon Web Services (AWS)",
        "Microservices",
        "Version Control",
        "Cloud Storage",
        "DevOps",
      ],
    },
    {
      id: "13",
      title: "Pitch-a-Thon",
      institute: "Unstop",
      date: "May 2025",
      desc: "Pitch-a-Thon Hackathon by Unstop recognizes excellence in pitching innovative ideas, teamwork, and rapid prototyping in competitive environments. Credential ID: d489130b-7a07-4baa-9d1a-c99ebee6d310.",
      img: "/certificates/cert13.jpeg",
      url: "https://unstop.com/certificate/d489130b-7a07-4baa-9d1a-c99ebee6d310",
      skills: [
        "Pitching",
        "Hackathon",
        "Teamwork",
        "Innovation",
        "Presentation Skills",
      ],
    },
    {
      id: "17",
      title: "GitHub Foundations Certificate",
      institute: "GitHub",
      date: "Feb 2025",
      desc: "GitHub Foundations Certificate validates proficiency in Git, DevOps, version control, and CI/CD pipelines. Credential ID: https://www.credly.com/users/nk10nikhil. Expires Feb 2028.",
      img: "/certificates/cert17.jpeg",
      url: "https://www.credly.com/users/nk10nikhil",
      skills: [
        "Git",
        "DevOps",
        "Version Control",
        "CI/CD",
        "GitHub",
        "Open Source",
        "Collaboration",
      ],
    },
    {
      id: "14",
      title: "Professional Diploma in WEB3 NFT Business",
      institute: "MTF Institute of Management, Technology and Finance",
      date: "Jan 2025",
      desc: "Professional Diploma in WEB3 NFT Business covers advanced concepts in cryptocurrency, blockchain, and NFT ecosystems. Credential ID: UC-1adf9316-30a5-4bd5-9b48-b110d5b3dab4.",
      img: "/certificates/cert14.jpeg",
      url: "https://mtf.education/certificate/UC-1adf9316-30a5-4bd5-9b48-b110d5b3dab4",
      skills: [
        "Cryptocurrency",
        "Web3",
        "NFTs",
        "Blockchain",
        "Smart Contracts",
        "Decentralized Apps",
      ],
    },
    {
      id: "15",
      title: "Galgotias International Hackathon",
      institute: "Galgotias College of Engineering and Technology",
      date: "Dec 2024",
      desc: "Galgotias International Hackathon recognizes outstanding achievement in collaborative software development, rapid prototyping, and innovation. Credential ID: 2e045345-611c-4e34-bfdd-cd2e2db0c2e0.",
      img: "/certificates/cert15.jpeg",
      url: "https://galgotiasuniversity.edu.in/certificate/2e045345-611c-4e34-bfdd-cd2e2db0c2e0",
      skills: [
        "Hackathon",
        "Collaboration",
        "Software Development",
        "Innovation",
        "Problem Solving",
      ],
    },
    {
      id: "16",
      title: "Professional Diploma in Software Testing & Quality Assurance",
      institute: "MTF Institute of Management, Technology and Finance",
      date: "Dec 2024",
      desc: "Professional Diploma in Software Testing & Quality Assurance covers advanced testing methodologies, automation, and quality management systems. Credential ID: UC-a779177e-0890-47fb-a13a-7227e0792bc0.",
      img: "/certificates/cert16.jpeg",
      url: "https://mtf.education/certificate/UC-a779177e-0890-47fb-a13a-7227e0792bc0",
      skills: [
        "Software Testing",
        "Quality Assurance",
        "Automation",
        "Test Management",
        "Bug Tracking",
        "Continuous Integration",
      ],
    },
  ];

  const showSlider = useCallback(
    (type: "next" | "prev") => {
      if (isTransitioning || !listRef.current) return;

      const items =
        listRef.current.querySelectorAll<HTMLDivElement>(".cert-item");
      if (!items.length) return;

      setIsTransitioning(true);

      if (type === "next") {
        listRef.current.appendChild(items[0]);
        carouselRef.current?.classList.add("next");
      } else {
        listRef.current.prepend(items[items.length - 1]);
        carouselRef.current?.classList.add("prev");
      }

      window.setTimeout(() => {
        carouselRef.current?.classList.remove("next", "prev");
        setIsTransitioning(false);
      }, 500);
    },
    [isTransitioning]
  );

  const hasMultipleCerts = certifications.length > 1;

  useEffect(() => {
    if (showDetail || !hasMultipleCerts) return;

    const interval = window.setInterval(() => {
      showSlider("next");
    }, 5000);

    return () => window.clearInterval(interval);
  }, [showDetail, showSlider, hasMultipleCerts]);

  const handleSeeMore = () => {
    setShowDetail(true);
  };

  const handleBack = () => {
    setShowDetail(false);
  };

  return (
    <section className="relative pt-8 md:pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyber-blue/20 to-cyber-pink/20 border border-cyber-blue/30 mt-4"
          >
            <Sparkles className="w-4 h-4 text-cyber-blue" />
            <span className="text-sm font-semibold text-gray-200">
              Licenses & Credentials
            </span>
            <Sparkles className="w-4 h-4 text-cyber-pink" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-gradient">
            Professional Certifications
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Industry-recognized certifications and achievements
          </p>
        </motion.div>
      </div>
      {/* Carousel */}
      <div
        ref={carouselRef}
        className={`cert-carousel relative min-h-[680px] md:h-[600px] mt-[-180px] md:mt-[-120px] ${
          showDetail ? "show-detail" : ""
        }`}
      >
        {/* Animated background blob */}
        <div className="cert-blob absolute top-1/2 left-1/2 w-[500px] h-[300px] bg-gradient-to-br from-purple-600/30 to-indigo-600/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-[150px] -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"></div>

        <div
          ref={listRef}
          className="cert-list absolute w-[90%] max-w-[1140px] h-[85%] md:h-[80%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="cert-item absolute left-0 w-[70%] h-full transition-all duration-500"
              style={{
                zIndex: index === 1 ? 10 : 10 - index,
              }}
            >
              {/* Certificate Image */}
              <motion.img
                src={cert.img}
                alt={cert.title}
                className="cert-image absolute top-[30%] -translate-y-1/2 w-[50%] rounded-2xl shadow-2xl border border-purple-500/20 transition-all duration-1000"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Introduce Section */}
              <div className="introduce absolute top-1/2 -translate-y-1/2 w-[400px] pr-8 opacity-0 pointer-events-none md:block flex flex-col md:items-start items-center md:text-left text-center ">
                <motion.div
                  initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-sm text-purple-400 font-semibold mb-2 tracking-wider hidden md:block"
                >
                  {cert.institute}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-base text-white text-bold md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
                >
                  {cert.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-gray-400 text-sm mb-4 line-clamp-3"
                >
                  {cert.desc}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  onClick={handleSeeMore}
                  className="group px-5 py-2 border-b-2 border-purple-500 bg-transparent font-bold tracking-[3px] text-white hover:bg-purple-500/10 transition-all duration-300 md:flex flex-cols items-center gap-2 hidden"
                >
                  SEE MORE
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </div>

              {/* Detail Section */}
              <div className="detail absolute right-0 top-1/2 -translate-y-1/2 w-1/2 text-right opacity-0 pointer-events-none">
                <motion.h3
                  initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
                >
                  {cert.title}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-sm text-purple-400 font-semibold mb-3"
                >
                  {cert.institute} • {cert.date}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-gray-400 text-sm mb-4 max-h-[80px] overflow-auto scrollbar-thin scrollbar-thumb-purple-500/50"
                >
                  {cert.desc}
                </motion.p>

                {/* Skills */}
                {cert.skills && (
                  <motion.div
                    initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="border-t border-purple-500/30 pt-3 mb-4"
                  >
                    <div className="flex flex-wrap gap-2 justify-end">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="flex gap-3 justify-end"
                >
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium tracking-[2px] rounded hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm"
                    >
                      VIEW CERTIFICATE
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="arrows absolute bottom-4 md:bottom-6 w-[90%] max-w-[1140px] left-1/2 -translate-x-1/2 flex justify-between items-center">
          <button
            onClick={() => showSlider("prev")}
            disabled={isTransitioning}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-purple-500/50 bg-purple-900/30 backdrop-blur-sm text-white hover:bg-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={handleBack}
            className={`px-4 md:px-6 py-2 md:py-3 border-b-2 border-purple-500 bg-transparent font-bold tracking-[2px] md:tracking-[3px] text-white hover:bg-purple-500/10 transition-all text-sm md:text-base ${
              showDetail ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <span className="flex items-center gap-2">
              <X className="w-3 h-3 md:w-4 md:h-4" />
              BACK TO LIST
            </span>
          </button>

          <button
            onClick={() => showSlider("next")}
            disabled={isTransitioning}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-purple-500/50 bg-purple-900/30 backdrop-blur-sm text-white hover:bg-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cert-carousel {
            height: auto;
            padding-bottom: 3rem;
          }

          .cert-list {
            height: auto;
          }

          .cert-list .cert-item {
            width: 100%;
            font-size: 10px;
            padding: 1.5rem 1.25rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }

          .cert-list .cert-item .cert-image {
            position: relative;
            top: auto;
            right: auto;
            transform: none;
            width: 70%;
            margin: 0 auto 1.5rem;
          }

          .cert-list .cert-item .introduce,
          .cert-list .cert-item .detail {
            position: relative;
            top: 25%;
            transform: none;
            width: 100%;
            opacity: 0;
            pointer-events: none;
            text-align: center;
            padding: 0;
          }

          .cert-list .cert-item:nth-child(2) .introduce {
            opacity: 1;
            pointer-events: auto;
          }

          .cert-list .cert-item .detail {
            margin-top: 1.25rem;
            text-align: left;
          }

          .cert-list .cert-item .detail .flex {
            justify-content: flex-start;
          }

          .cert-carousel.show-detail .cert-item:nth-child(2) .introduce {
            opacity: 0;
            pointer-events: none;
          }

          .cert-carousel.show-detail .cert-item:nth-child(2) .cert-image {
            width: 85%;
            margin-bottom: 1.5rem;
          }

          .cert-carousel.show-detail .cert-item:nth-child(2) .detail {
            opacity: 1;
            pointer-events: auto;
            width: 100%;
            backdrop-filter: blur(10px);
            background: rgba(0, 0, 0, 0.3);
            padding: 1.25rem;
            border-radius: 1rem;
          }

          .cert-carousel.show-detail .cert-item:nth-child(2) .detail .flex {
            justify-content: center;
          }
        }


        .cert-carousel {
          position: relative;
        }

        .cert-item .cert-image {
          right: -100px;
        }

        .cert-list .cert-item:nth-child(1) {
          transform: translateX(-100%) translateY(-5%) scale(1.5);
          filter: blur(30px);
          opacity: 0;
          pointer-events: none;
        }

        .cert-list .cert-item:nth-child(2) {
          transform: translateX(0);
          filter: blur(0);
          z-index: 10;
        }

        .cert-list .cert-item:nth-child(2) .introduce {
          opacity: 1;
          pointer-events: auto;
        }

        .cert-list .cert-item:nth-child(3) {
          transform: translate(50%, 10%) scale(0.8);
          filter: blur(10px);
        }

        .cert-list .cert-item:nth-child(4) {
          transform: translate(90%, 20%) scale(0.5);
          filter: blur(30px);
        }

        .cert-list .cert-item:nth-child(5) {
          transform: translate(120%, 30%) scale(0.3);
          filter: blur(40px);
          opacity: 0;
        }

        .cert-list .cert-item:nth-child(n + 6) {
          opacity: 0;
          pointer-events: none;
        }

        /* Next Animation */
        .cert-carousel.next .cert-item:nth-child(1) {
          animation: transformFromPosition2 0.5s ease-in-out forwards;
        }

        @keyframes transformFromPosition2 {
          from {
            transform: translateX(0);
            filter: blur(0);
            opacity: 1;
          }
        }

        .cert-carousel.next .cert-item:nth-child(2) {
          animation: transformFromPosition3 0.7s ease-in-out forwards;
        }

        @keyframes transformFromPosition3 {
          from {
            transform: translate(50%, 10%) scale(0.8);
            filter: blur(10px);
          }
        }

        .cert-carousel.next .cert-item:nth-child(3) {
          animation: transformFromPosition4 0.9s ease-in-out forwards;
        }

        @keyframes transformFromPosition4 {
          from {
            transform: translate(90%, 20%) scale(0.5);
            filter: blur(30px);
          }
        }

        .cert-carousel.next .cert-item:nth-child(4) {
          animation: transformFromPosition5 1.1s ease-in-out forwards;
        }

        @keyframes transformFromPosition5 {
          from {
            transform: translate(120%, 30%) scale(0.3);
            filter: blur(40px);
            opacity: 0;
          }
        }

        /* Previous Animation */
        .cert-carousel.prev .cert-item:nth-child(5) {
          animation: transformFromPosition4 0.5s ease-in-out forwards;
        }

        .cert-carousel.prev .cert-item:nth-child(4) {
          animation: transformFromPosition3 0.7s ease-in-out forwards;
        }

        .cert-carousel.prev .cert-item:nth-child(3) {
          animation: transformFromPosition2 0.9s ease-in-out forwards;
        }

        .cert-carousel.prev .cert-item:nth-child(2) {
          animation: transformFromPosition1 1.1s ease-in-out forwards;
        }

        @keyframes transformFromPosition1 {
          from {
            transform: translateX(-100%) translateY(-5%) scale(1.5);
            filter: blur(30px);
            opacity: 0;
          }
        }

        /* Show Detail State */
        .cert-carousel.show-detail .cert-item:nth-child(3),
        .cert-carousel.show-detail .cert-item:nth-child(4),
        .cert-carousel.show-detail .cert-item:nth-child(5) {
          left: 100%;
          opacity: 0;
          pointer-events: none;
        }

        .cert-carousel.show-detail .cert-item:nth-child(2) {
          width: 100%;
        }

        .cert-carousel.show-detail .cert-item:nth-child(2) .introduce {
          opacity: 0;
          pointer-events: none;
        }

        .cert-carousel.show-detail .cert-item:nth-child(2) .cert-image {
          right: calc(60% - 40px);
          top: 20%;
          width: 40%;
        }

        .cert-carousel.show-detail .cert-item:nth-child(2) .detail {
          opacity: 1;
          pointer-events: auto;
          padding-right: 3rem;
          width: 55%;
          
        }

        .cert-carousel.show-detail .arrows button:first-child,
        .cert-carousel.show-detail .arrows button:last-child {
          opacity: 0;
          pointer-events: none;
        }

        .cert-carousel.show-detail .cert-blob {
          transform: translate(-100%, -50%) rotate(90deg);
          filter: blur(130px);
        }

        @media (max-width: 768px) {
          .cert-carousel {
            height: 450px;
          }

          .cert-list {
            height: 90%;
          }

          .cert-list .cert-item {
            width: 100%;
            font-size: 10px;
          }

          .cert-list .cert-item .cert-image {
            right: 0px;
            width: 100%;
            top: 30%;
          }

          .cert-list .cert-item:nth-child(2) .introduce {
            width: 95%;
            pr: 4;
          }

          .cert-carousel.show-detail .cert-item:nth-child(2) .cert-image {
            width: 30%;
            top: 30%;
            right: calc(58% - 40px);
          }

          .cert-carousel.show-detail .cert-item:nth-child(2) .detail {
            backdrop-filter: blur(10px);
            background: rgba(0, 0, 0, 0.3);
            padding: 1rem;
            border-radius: 1rem;
            padding-right: 1rem;
            width: 60%;
          }
        }
      `}</style>
    </section>
  );
};

export default Certification;
