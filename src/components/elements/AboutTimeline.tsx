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
            const items = slide.querySelectorAll('.item');
            slide.appendChild(items[0]);
        };
    
        const handlePrev = () => {
            const slide = slideRef.current;
            const items = slide.querySelectorAll('.item');
            slide.prepend(items[items.length - 1]);
        };

    const data = [
        {
            title: "2025 - Building",
            icon: "https://cdn-icons-png.flaticon.com/128/3281/3281307.png", // Construction/building blocks icon
            content: (
                <div className="glass-morphism p-6 rounded-xl">
                    <p className="text-neutral-300 text-sm font-normal mb-5">
                        By 2025, I've shipped production-level apps, contributed to GSoC, and scaled frontend systems. Deep-diving into system design and AI integrations.
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
                                                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/aisaas.png')",
                                            }}
                                        >
                                            <div className="content">
                                                <div className="name">AI Solutions</div>
                                                <div className="description">
                                                    Advanced AI-powered applications with natural language processing and machine learning capabilities
                                                </div>
                                                <button>View Projects</button>
                                            </div>
                                        </div>

                                        <div
                                            className="item"
                                            style={{
                                                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/payment.png')",
                                            }}
                                        >
                                            <div className="content">
                                                <div className="name">FinTech</div>
                                                <div className="description">
                                                    Secure payment processing systems with real-time transaction monitoring and fraud detection
                                                </div>
                                                <button>View Projects</button>
                                            </div>
                                        </div>

                                        <div
                                            className="item"
                                            style={{
                                                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/social_media.png')",
                                            }}
                                        >
                                            <div className="content">
                                                <div className="name">Social Platforms</div>
                                                <div className="description">
                                                    Feature-rich social media applications with real-time messaging and content sharing
                                                </div>
                                                <button>View Projects</button>
                                            </div>
                                        </div>

                                        <div
                                            className="item"
                                            style={{
                                                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/data_protection_cloud.png')",
                                            }}
                                        >
                                            <div className="content">
                                                <div className="name">Cloud Solutions</div>
                                                <div className="description">
                                                    Scalable cloud infrastructure with robust data protection and disaster recovery systems
                                                </div>
                                                <button>View Projects</button>
                                            </div>
                                        </div>

                                        <div
                                            className="item"
                                            style={{
                                                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/dataautomation.png')",
                                            }}
                                        >
                                            <div className="content">
                                                <div className="name">Automation</div>
                                                <div className="description">
                                                    Intelligent data automation systems that streamline workflows and increase operational efficiency
                                                </div>
                                                <button>View Projects</button>
                                            </div>
                                        </div>

                                        <div
                                            className="item"
                                            style={{
                                                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/blog.png')",
                                            }}
                                        >
                                            <div className="content">
                                                <div className="name">Content Platforms</div>
                                                <div className="description">
                                                    Modern content management systems with SEO optimization and analytics integration
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
            title: "2024 - Exploration",
            icon: "https://cdn-icons-png.flaticon.com/128/4727/4727430.png", // Exploration/discovery icon
            content: (
                <div className="glass-morphism p-6 rounded-xl">
                    <p className="text-neutral-300 text-sm font-normal mb-5">
                        A year of exploration. Dived into Next.js, TypeScript, and GraphQL. Experimented with AI/ML models, building small projects to understand their potential.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <img src="/about/1.jpg" alt="coding exploration" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/2.jpg" alt="ai experimentation" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/3.jpg" alt="project creation" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/4.jpg" alt="learning journey" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                    </div>
                </div>
            ),
        },
        {
            title: "2023 - College",
            icon: "https://cdn-icons-png.flaticon.com/128/3976/3976631.png", // Graduation/education icon
            content: (
                <div className="glass-morphism p-6 rounded-xl">
                    <p className="text-neutral-300 text-sm font-normal mb-5">
                        Joined B.Tech in Computer Science and Design. First semester and I was already knee-deep in full-stack web dev. Learned React, Tailwind, and shipped projects.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <img src="/about/5.jpg" alt="college campus" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/6.jpg" alt="team collaboration" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/7.jpg" alt="peer learning" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/8.jpg" alt="first project" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                    </div>
                </div>
            ),
        },
        {
            title: "JEE Drop Year",
            icon: "https://cdn-icons-png.flaticon.com/128/3324/3324735.png", // Brain/study icon
            content: (
                <div className="glass-morphism p-6 rounded-xl">
                    <p className="text-neutral-300 text-sm font-normal mb-5">
                        Took a year off to crack JEE. I discovered a love for teaching peers, breaking down problems, and simplifying concepts. That year made me sharper and more self-aware.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <img src="/about/5.jpg" alt="study materials" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/3.jpg" alt="teaching session" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/7.jpg" alt="problem solving" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/1.jpg" alt="self study" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                    </div>
                </div>
            ),
        },
        {
            title: "Class 12 - The Hustle",
            icon: "https://cdn-icons-png.flaticon.com/128/2382/2382600.png", // Clock/time management icon
            content: (
                <div className="glass-morphism p-6 rounded-xl">
                    <p className="text-neutral-300 text-sm font-normal mb-5">
                        Board pressure. Competitive exams. And somewhere in between, I was still coding. Class 12 was intense but taught me discipline and problem-solving.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <img src="/about/2.jpg" alt="exam prep" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/4.jpg" alt="discipline" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/6.jpg" alt="discipline" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/8.jpg" alt="discipline" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                    </div>
                </div>
            ),
        },
        {
            title: "Class 10 - Foundations",
            icon: "https://cdn-icons-png.flaticon.com/128/3406/3406983.png", // Foundation building blocks icon
            content: (
                <div className="glass-morphism p-6 rounded-xl">
                    <p className="text-neutral-300 text-sm font-normal mb-5">
                        My journey began with curiosity. Class 10 was the year I first opened a C++ book and built my first "Hello World" program. Found myself spending hours learning how websites worked.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                        <img src="/about/1.jpg" alt="coding exploration" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/2.jpg" alt="ai experimentation" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/3.jpg" alt="project creation" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
                        <img src="/about/4.jpg" alt="learning journey" className="rounded-lg object-cover h-24 md:h-36 w-full shadow-md hover:shadow-purple-500/20 transition-all duration-300" />
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
        [0, 1],// Use 0.9 or adjust based on your layout to stop at last icon
        [0, 1]
    );

    const heightTransform = useTransform(adjustedScrollProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(adjustedScrollProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-transparent font-sans md:px-10"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto pt-8 pb-12 px-4 md:px-8 lg:px-10">
                <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-400 inline-block">
                    Journey Timeline
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
