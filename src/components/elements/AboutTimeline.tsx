"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  icon: string;
  content: React.ReactNode;
}

export function AboutTimeline() {
  const slideRef = useRef(null);

  const handleNext = () => {
    const slide = slideRef.current;
    const items = slide.querySelectorAll(".item");
    slide.appendChild(items[0]);
  };

  const handlePrev = () => {
    const slide = slideRef.current;
    const items = slide.querySelectorAll(".item");
    slide.prepend(items[items.length - 1]);
  };

  const data = [
    {
      title: "2025 - Innovation",
      icon: "https://cdn-icons-png.flaticon.com/128/9542/9542268.png", // Colorful innovation/lightbulb icon
      content: (
        <div className="glass-morphism p-6 rounded-xl">
          <p className="text-neutral-300 text-sm font-normal mb-5">
            Leading tech innovation in 2025. Developing advanced cloud
            solutions, integrating AI into enterprise systems, and contributing
            to open source. Focused on creating future-ready digital
            experiences.
          </p>
          <div className="">
            {/* Images Slider */}
            <div>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
              />

              {/* Outer Box */}
              <div className="skills-image-slider box">
                <div className="container">
                  <div className="slide" ref={slideRef}>
                    {/* Slide Items */}
                    <div
                      className="item"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop')",
                      }}
                    >
                      <div className="content">
                        <div className="name">Cloud Architecture</div>
                        <div className="description">
                          Building resilient, scalable cloud infrastructures
                          with enhanced security protocols
                        </div>
                        <button>View Projects</button>
                      </div>
                    </div>

                    <div
                      className="item"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop')",
                      }}
                    >
                      <div className="content">
                        <div className="name">AI Integration</div>
                        <div className="description">
                          Creating AI-powered systems with advanced language
                          models and deep learning capabilities
                        </div>
                        <button>View Projects</button>
                      </div>
                    </div>

                    <div
                      className="item"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=2064&auto=format&fit=crop')",
                      }}
                    >
                      <div className="content">
                        <div className="name">Web3 Development</div>
                        <div className="description">
                          Pioneering decentralized applications with blockchain
                          technology and smart contracts
                        </div>
                        <button>View Projects</button>
                      </div>
                    </div>

                    <div
                      className="item"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2076&auto=format&fit=crop')",
                      }}
                    >
                      <div className="content">
                        <div className="name">DevOps Excellence</div>
                        <div className="description">
                          Implementing CI/CD pipelines and infrastructure as
                          code for seamless software delivery
                        </div>
                        <button>View Projects</button>
                      </div>
                    </div>

                    <div
                      className="item"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop')",
                      }}
                    >
                      <div className="content">
                        <div className="name">Edge Computing</div>
                        <div className="description">
                          Leveraging edge computing for low-latency applications
                          and enhanced real-time processing
                        </div>
                        <button>View Projects</button>
                      </div>
                    </div>

                    <div
                      className="item"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1624378515195-0d11f8e50ff9?q=80&w=2070&auto=format&fit=crop')",
                      }}
                    >
                      <div className="content">
                        <div className="name">API Ecosystems</div>
                        <div className="description">
                          Designing comprehensive API ecosystems for seamless
                          third-party integrations
                        </div>
                        <button>View Projects</button>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="button ">
                    <button className="prev " onClick={handlePrev}>
                      <i className="fa-solid  fa-arrow-left"></i>
                    </button>
                    <button className="next" onClick={handleNext}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Styles - with proper scoping and isolation */}
              <style>{`
        /* Scope all selectors to specific classes to prevent style leakage */
        .skills-image-slider .box,
        .skills-image-slider .container,
        .skills-image-slider .slide,
        .skills-image-slider .item,
        .skills-image-slider .content,
        .skills-image-slider .button {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          text-decoration: none;
        }

        /* Only apply these styles to elements within the slider */
        .skills-image-slider .box {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 500px;
          background: transparent;
          padding: 20px;
          margin: 40px 0;
          width: 100%;
        }

        .skills-image-slider .container {
          position: relative;
          max-width: 1000px;
          width: 100%;
          height: 400px;
          background: rgba(20, 20, 30, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-radius: 15px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skills-image-slider .slide {
          position: relative;
          height: 100%;
          width: 100%;
        }

        .skills-image-slider .slide .item {
          width: 200px;
          height: 300px;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          border-radius: 20px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
          background-position: center;
          background-size: cover;
          display: inline-block;
          transition: 0.5s;
        }

        .skills-image-slider .slide .item:nth-child(1),
        .skills-image-slider .slide .item:nth-child(2) {
          top: 0;
          left: 0;
          transform: translate(0, 0);
          border-radius: 0;
          width: 100%;
          height: 100%;
        }

        .skills-image-slider .slide .item:nth-child(2) .content {
          display: block;
        }

        .skills-image-slider .slide .item:nth-child(3) {
          left: 50%;
        }

        .skills-image-slider .slide .item:nth-child(4) {
          left: calc(50% + 220px);
        }

        .skills-image-slider .slide .item:nth-child(5) {
          left: calc(50% + 440px);
        }

        .skills-image-slider .slide .item:nth-child(n + 6) {
          left: calc(50% + 440px);
          overflow: hidden;
        }

        .skills-image-slider .item .content {
          position: absolute;
          top: 50%;
          left: 20px;
          width: 300px;
          text-align: left;
          color: #eee;
          transform: translate(0, -50%);
          font-family: system-ui;
          display: none;
        }

        .skills-image-slider .content .name {
          font-size: 40px;
          text-transform: uppercase;
          font-weight: bold;
          opacity: 0;
          animation: sliderAnimate 1s ease-in-out 1 forwards;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .skills-image-slider .content .description {
          margin-top: 10px;
          margin-bottom: 20px;
          opacity: 0;
          animation: sliderAnimate 1s ease-in-out 0.3s 1 forwards;          
        }

        .skills-image-slider .content button {
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          opacity: 0;
          animation: sliderAnimate 1s ease-in-out 0.6s 1 forwards;
          background: linear-gradient(to right, #9333ea, #6366f1);
          color: white;
          border-radius: 6px;
          font-weight: 600;
          transition: transform 0.2s;
        }
        
        .skills-image-slider .content button:hover {
          transform: scale(1.05);
        }

        /* Rename animation to avoid conflicts */
        @keyframes sliderAnimate {
          from {
            opacity: 0;
            transform: translate(0, 100px);
            filter: blur(33px);
          }
          to {
            opacity: 1;
            transform: translate(0);
            filter: blur(0);
          }
        }

        .skills-image-slider .button {
          width: 100%;
          text-align: center;
          position: absolute;
          bottom: 20px;
        }

        .skills-image-slider .button button {
          width: 40px;
          height: 35px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          margin: 0 5px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          transition: 0.3s;
        }

        .skills-image-slider .button button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.1);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .skills-image-slider .container {
            height: 350px;
          }
          
          .skills-image-slider .content .name {
            font-size: 30px;
          }
          
          .skills-image-slider .content .description {
            font-size: 14px;
          }
        }
      `}</style>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024 - Growth",
      icon: "https://cdn-icons-png.flaticon.com/128/7307/7307030.png", // Colorful growth/chart icon
      content: (
        <div className="glass-morphism p-6 rounded-xl">
          <p className="text-neutral-300 text-sm font-normal mb-5">
            A year of professional growth and new technologies. Mastered
            advanced frameworks and contributed to multiple high-impact
            projects. Built a network of industry connections and mentors.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="https://images.unsplash.com/photo-1542903660-eedba2cda473?q=80&w=2070&auto=format&fit=crop"
              alt="coding mastery"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2006&auto=format&fit=crop"
              alt="project development"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop"
              alt="digital collaboration"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
              alt="tech advancement"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - Development",
      icon: "https://cdn-icons-png.flaticon.com/128/8637/8637109.png", // Colorful development/code icon
      content: (
        <div className="glass-morphism p-6 rounded-xl">
          <p className="text-neutral-300 text-sm font-normal mb-5">
            Expanded my tech stack with modern frameworks and languages.
            Developed practical applications using cutting-edge technologies
            including React, Next.js, and cloud platforms.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
              alt="programming setup"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop"
              alt="team programming"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop"
              alt="web development"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
              alt="coding frameworks"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022 - Foundations",
      icon: "https://cdn-icons-png.flaticon.com/128/10214/10214728.png", // Colorful foundations/building blocks icon
      content: (
        <div className="glass-morphism p-6 rounded-xl">
          <p className="text-neutral-300 text-sm font-normal mb-5">
            Built strong technical foundations in computer science and
            programming. Completed courses in data structures, algorithms, and
            system design. Created my first full-stack web application.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop"
              alt="learning resources"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop"
              alt="technical books"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=2070&auto=format&fit=crop"
              alt="online learning"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
              alt="coding practice"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021 - Exploration",
      icon: "https://cdn-icons-png.flaticon.com/128/9850/9850768.png", // Colorful exploration/compass icon
      content: (
        <div className="glass-morphism p-6 rounded-xl">
          <p className="text-neutral-300 text-sm font-normal mb-5">
            Began exploring different areas of technology to find my passion.
            Completed introductory courses in web development, mobile
            applications, and database management. Started with HTML, CSS, and
            JavaScript.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
              alt="early coding"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
              alt="web basics"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2064&auto=format&fit=crop"
              alt="learning journey"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?q=80&w=2039&auto=format&fit=crop"
              alt="tech discovery"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020 - Beginning",
      icon: "https://cdn-icons-png.flaticon.com/128/8687/8687487.png", // Colorful beginning/rocket launch icon
      content: (
        <div className="glass-morphism p-6 rounded-xl">
          <p className="text-neutral-300 text-sm font-normal mb-5">
            The start of my tech journey. Discovered my interest in computers
            and software. Wrote my first "Hello World" program and was
            captivated by the possibilities of technology and programming.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop"
              alt="first code"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop"
              alt="learning programming"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
              alt="tech inspiration"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop"
              alt="computer fascination"
              className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastIconRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 30%"],
  });

  // This ensures we only show progress up to the last icon
  const adjustedScrollProgress = useTransform(
    scrollYProgress,
    [0, 1], // Use 0.9 or adjust based on your layout to stop at last icon
    [0, 1]
  );

  const heightTransform = useTransform(
    adjustedScrollProgress,
    [0, 1],
    [0, height]
  );
  const opacityTransform = useTransform(
    adjustedScrollProgress,
    [0, 0.1],
    [0, 1]
  );

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-8 pb-12 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-400 inline-block">
          Professional Journey
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start md:pt-5 md:gap-10 group"
            ref={index === data.length - 1 ? lastIconRef : undefined}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div
                className="h-12 w-12 absolute left-2 md:left-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.2)] flex items-center justify-center group-hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="h-7 w-7"
                  initial={{ opacity: 0, filter: "grayscale(100%)" }}
                  whileInView={{ opacity: 1, filter: "grayscale(0%)" }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <h3 className="hidden md:block text-lg md:pl-20 md:text-2xl font-bold text-white/70 dark:text-white/70 py-4 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
            </div>

            <motion.div
              className="relative pl-20 pr-4 md:pl-4 w-full pb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="md:hidden block text-xl mb-3 text-left font-bold text-white/80">
                {item.title}
              </h3>
              {item.content}
            </motion.div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-visible w-[3px] bg-gradient-to-b from-transparent via-white/10 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent shadow-[0_0_15px_3px_rgba(139,92,246,0.5)] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
