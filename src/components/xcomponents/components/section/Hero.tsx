import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingTeddy from "@/components/items/FloatingTeddy";
import { useEffect, useState, useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const targetCount = 30;
  const heroTextRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const words = [
    // replace imgpath with lucid icons now
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];

  // Defer GSAP animation until component is visible and loaded
  useGSAP(
    () => {
      if (!loaded || hasAnimated.current) return;

      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        if (heroTextRef.current) {
          gsap.fromTo(
            heroTextRef.current.querySelectorAll("h1"),
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.15,
              duration: 0.8,
              ease: "power2.out",
              force3D: true, // GPU acceleration
            }
          );
          hasAnimated.current = true;
        }
      });
    },
    { dependencies: [loaded], scope: heroTextRef }
  );

  useEffect(() => {
    // Simulating content load - reduced delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    // Counter animation - optimized
    if (count < targetCount) {
      const interval = setTimeout(() => {
        setCount((prev) => {
          const increment = Math.max(1, Math.floor((targetCount - prev) / 8));
          return Math.min(prev + increment, targetCount);
        });
      }, 80);

      return () => clearTimeout(interval);
    }
  }, [count, loaded]);

  const techStack = useMemo(
    () => [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "AWS",
      "Express.js",
      "DSA",
      "C / C++",
      "Python",
      "Java",
    ],
    []
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background gradients - simplified */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-700/30 rounded-full"
          style={{ filter: "blur(60px)", willChange: "transform" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-700/20 rounded-full"
          style={{ filter: "blur(60px)", willChange: "transform" }}
        />
        <div
          className="absolute top-2/3 left-1/3 w-72 h-72 bg-blue-700/20 rounded-full"
          style={{ filter: "blur(60px)", willChange: "transform" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16 z-10 mt-[-5px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              ref={heroTextRef}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight pt-10">
                <span className="text-gradient">Software Engineer</span>
                <br /> Crafting Cutting-Edge Innovative Solutions
              </h1>

              <div className="hero-text">
                <h1>
                  Creating
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word, index) => (
                        <span
                          key={index}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center p-2">
                            src={word.imgPath}
                            alt={word.text}
                            className="w-full h-full object-contain mt-5" width=
                            {96}
                            height={96}
                            priority={index < 20}
                          </div>
                          <span className="text-gradient">{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              I'm a passionate Software Engineer with a strong focus on building
              scalable, high-performance web applications and crafting seamless
              user experiences. I specialize in developing Full-Stack solutions
              using modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                className="px-6 py-3 text-lg bg-linear-to-br from-primary via-purple-500 to-indigo-400 animate-glow hover:bg-primary/90"
                asChild
              >
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                className="px-6 py-3 text-lg border border-input bg-background hover:bg-linear-to-br from-primary via-purple-500 to-indigo-400 hover:bg-primary/90"
              >
                <a
                  href="/personal/Nikhil_Kumar_SDE_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full md:w-1/2 flex justify-center overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="my-16" />

              <div className="absolute z-20 top-[650px] md:top-[200px]">
                <FloatingTeddy />
              </div>

              <div className="max-w-xl sm:max-w-xl md:max-w-xl relative">
                <div className="glass-morphism rounded-xl p-2 md:p-3 backdrop-blur-xl animate-float">
                  <div className="code-window bg-card p-3 rounded-lg">
                    <div className="flex items-center justify-start gap-1.5 mb-4">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <pre className="text-xs md:text-sm overflow-x-auto">
                      <code>
                        <span className="code-line">
                          <span className="number">1</span>
                          <span className="keyword">class</span>{" "}
                          <span className="function">SoftwateEngineer</span>{" "}
                          {"{"}
                        </span>
                        <span className="code-line">
                          <span className="number">2</span>
                          {"  "}
                          <span className="keyword">constructor</span>() {"{"}
                        </span>
                        <span className="code-line">
                          <span className="number">3</span>
                          {"    "}
                          <span className="variable">this</span>.
                          <span className="property">name</span> ={" "}
                          <span className="string">"Nikhil Kumar"</span>;
                        </span>
                        <span className="code-line">
                          <span className="number">4</span>
                          {"    "}
                          <span className="variable">this</span>.
                          <span className="property">skills</span> = [
                          <span className="string">"Next.js"</span>,{" "}
                          <span className="string">"Cloud"</span>,{" "}
                          <span className="string">"AI/ML"</span>];
                        </span>
                        <span className="code-line">
                          <span className="number">5</span>
                          {"    "}
                          <span className="variable">this</span>.
                          <span className="property">passions</span> = [
                          <span className="string">"DSA"</span>,{" "}
                          <span className="string">"C++"</span>];
                        </span>
                        <span className="code-line">
                          <span className="number">6</span>
                          {"  "}
                          {"}"}
                        </span>
                        <span className="code-line">
                          <span className="number">7</span>
                          {"}"}
                        </span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 h-12 w-12 rounded-lg bg-indigo-600/80 animate-float"
                style={{ animationDelay: "1.5s", willChange: "transform" }}
              />
              <div
                className="absolute -bottom-3 -left-3 h-8 w-8 rounded-full bg-primary/80 animate-float"
                style={{ animationDelay: "0.7s", willChange: "transform" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

// import { Button } from "../ui/button";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Download,
//   Code,
//   Lightbulb,
//   Palette,
//   Cpu,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import FloatingTeddy from "../items/FloatingTeddy";
// import { useEffect, useState, useMemo, useRef, useCallback } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// // Preload critical images
// const preloadImages = () => {
//   const images = [
//     "/images/ideas.svg",
//     "/images/concepts.svg",
//     "/images/designs.svg",
//     "/images/code.svg",
//   ];

//   images.forEach((src) => {
//     const img = new Image();
//     img.src = src;
//   });
// };

// const Hero = () => {
//   const [loaded, setLoaded] = useState(false);
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const heroTextRef = useRef<HTMLDivElement>(null);
//   const hasAnimated = useRef(false);
//   const animationFrameRef = useRef<number>(0);

//   // Optimized words array with Lucide icons
//   const words = useMemo(
//     () => [
//       { text: "Ideas", icon: Lightbulb },
//       { text: "Concepts", icon: Code },
//       { text: "Designs", icon: Palette },
//       { text: "Code", icon: Cpu },
//     ],
//     []
//   );

//   // Preload on component mount
//   useEffect(() => {
//     preloadImages();
//     setLoaded(true);

//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, []);

//   // Word rotation animation
//   useEffect(() => {
//     if (!loaded) return;

//     const interval = setInterval(() => {
//       setCurrentWordIndex((prev) => (prev + 1) % words.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [loaded, words.length]);

//   // Optimized GSAP animation
//   useGSAP(
//     () => {
//       if (!loaded || hasAnimated.current || !heroTextRef.current) return;

//       animationFrameRef.current = requestAnimationFrame(() => {
//         const ctx = gsap.context(() => {
//           gsap.fromTo(
//             heroTextRef.current!.querySelectorAll("h1"),
//             {
//               y: 30,
//               opacity: 0,
//               willChange: "transform, opacity",
//             },
//             {
//               y: 0,
//               opacity: 1,
//               stagger: 0.1,
//               duration: 0.6,
//               ease: "power2.out",
//               force3D: true,
//               immediateRender: false,
//             }
//           );
//         }, heroTextRef);

//         hasAnimated.current = true;
//         return () => ctx.revert();
//       });
//     },
//     { dependencies: [loaded], scope: heroTextRef }
//   );

//   const techStack = useMemo(
//     () => [
//       "Next.js",
//       "React",
//       "TypeScript",
//       "MongoDB",
//       "AWS",
//       "Express.js",
//       "DSA",
//       "C / C++",
//       "Python",
//       "Java",
//     ],
//     []
//   );

//   const renderCodeWindow = useCallback(
//     () => (
//       <div className="max-w-xl sm:max-w-xl md:max-w-xl relative">
//         <div className="glass-morphism rounded-xl p-2 md:p-3 backdrop-blur-xl animate-float">
//           <div className="code-window bg-card p-3 rounded-lg">
//             <div className="flex items-center justify-start gap-1.5 mb-4">
//               <div className="h-3 w-3 rounded-full bg-red-500" />
//               <div className="h-3 w-3 rounded-full bg-yellow-500" />
//               <div className="h-3 w-3 rounded-full bg-green-500" />
//             </div>
//             <pre className="text-xs md:text-sm overflow-x-auto">
//               <code>
//                 <span className="code-line">
//                   <span className="number">1</span>
//                   <span className="keyword">class</span>{" "}
//                   <span className="function">SoftwareEngineer</span> {"{"}
//                 </span>
//                 <span className="code-line">
//                   <span className="number">2</span>
//                   {"  "}
//                   <span className="keyword">constructor</span>() {"{"}
//                 </span>
//                 <span className="code-line">
//                   <span className="number">3</span>
//                   {"    "}
//                   <span className="variable">this</span>.
//                   <span className="property">name</span> ={" "}
//                   <span className="string">"Nikhil Kumar"</span>;
//                 </span>
//                 <span className="code-line">
//                   <span className="number">4</span>
//                   {"    "}
//                   <span className="variable">this</span>.
//                   <span className="property">skills</span> = [
//                   <span className="string">"Next.js"</span>,{" "}
//                   <span className="string">"Cloud"</span>,{" "}
//                   <span className="string">"AI/ML"</span>];
//                 </span>
//                 <span className="code-line">
//                   <span className="number">5</span>
//                   {"    "}
//                   <span className="variable">this</span>.
//                   <span className="property">passions</span> = [
//                   <span className="string">"DSA"</span>,{" "}
//                   <span className="string">"C++"</span>];
//                 </span>
//                 <span className="code-line">
//                   <span className="number">6</span>
//                   {"  "}
//                   {"}"}
//                 </span>
//                 <span className="code-line">
//                   <span className="number">7</span>
//                   {"}"}
//                 </span>
//               </code>
//             </pre>
//           </div>
//         </div>
//       </div>
//     ),
//     []
//   );

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.4 }}
//       className="min-h-screen flex flex-col justify-center relative overflow-hidden"
//     >
//       {/* Optimized background gradients */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
//         <div
//           className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-700/30 rounded-full"
//           style={{
//             filter: "blur(60px)",
//             willChange: "transform, opacity",
//             transform: "translate3d(0, 0, 0)",
//           }}
//         />
//         <div
//           className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-700/20 rounded-full"
//           style={{
//             filter: "blur(60px)",
//             willChange: "transform, opacity",
//             transform: "translate3d(0, 0, 0)",
//           }}
//         />
//         <div
//           className="absolute top-2/3 left-1/3 w-72 h-72 bg-blue-700/20 rounded-full"
//           style={{
//             filter: "blur(60px)",
//             willChange: "transform, opacity",
//             transform: "translate3d(0, 0, 0)",
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-4 md:px-6 py-10 md:py-16 z-10 mt-[-5px]">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
//           {/* Left Content */}
//           <div className="w-full md:w-1/2 space-y-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1, duration: 0.3 }}
//               ref={heroTextRef}
//             >
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight pt-8 md:pt-10">
//                 <span className="text-gradient bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
//                   Software Engineer
//                 </span>
//                 <br />
//                 <span className="bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
//                   Crafting Cutting-Edge
//                 </span>
//                 <br />
//                 <span className="bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
//                   Innovative Solutions
//                 </span>
//               </h1>

//               <div className="hero-text mt-6">
//                 <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
//                   Creating{" "}
//                   <span className="inline-block min-w-[200px] md:min-w-[280px]">
//                     <AnimatePresence mode="wait">
//                       <motion.span
//                         key={currentWordIndex}
//                         initial={{ y: 20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         exit={{ y: -20, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeOut" }}
//                         className="flex items-center gap-2 md:gap-3 text-gradient bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
//                       >
//                         {(() => {
//                           const { text, icon: Icon } = words[currentWordIndex];
//                           return (
//                             <>
//                               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center p-2 shadow-lg">
//                                 <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
//                               </div>
//                               <span>{text}</span>
//                             </>
//                           );
//                         })()}
//                       </motion.span>
//                     </AnimatePresence>
//                   </span>
//                 </h1>
//               </div>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.3 }}
//               className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
//             >
//               I'm a passionate Software Engineer with a strong focus on building
//               scalable, high-performance web applications and crafting seamless
//               user experiences. I specialize in developing Full-Stack solutions
//               using modern technologies.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.3 }}
//               className="flex flex-wrap gap-3"
//             >
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-br from-primary via-purple-500 to-indigo-400 hover:from-primary/90 hover:via-purple-500/90 hover:to-indigo-400/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//                 asChild
//               >
//                 <Link to="/projects">
//                   View Projects <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </Button>
//               <Button
//                 size="lg"
//                 variant="outline"
//                 asChild
//                 className="border-2 hover:bg-gradient-to-br hover:from-primary hover:via-purple-500 hover:to-indigo-400 hover:text-white hover:border-transparent transition-all duration-300"
//               >
//                 <a
//                   href="/personal/Nikhil_Kumar_SDE_Resume.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Download CV <Download className="ml-2 h-4 w-4" />
//                 </a>
//               </Button>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.3 }}
//               className="flex flex-wrap gap-2 pt-2"
//             >
//               {techStack.map((tech) => (
//                 <motion.span
//                   key={tech}
//                   whileHover={{ scale: 1.05 }}
//                   className="px-3 py-1.5 rounded-full text-sm bg-secondary/80 text-secondary-foreground backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
//                 >
//                   {tech}
//                 </motion.span>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right Content */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.4 }}
//             className="w-full md:w-1/2 flex justify-center overflow-hidden"
//           >
//             <div className="flex flex-col items-center justify-center relative">
//               <div className="my-12 md:my-16" />

//               <div className="absolute z-20 top-[600px] md:top-[180px]">
//                 <FloatingTeddy />
//               </div>

//               {renderCodeWindow()}

//               {/* Enhanced floating elements */}
//               <motion.div
//                 className="absolute -top-4 -right-4 h-12 w-12 rounded-lg bg-indigo-600/80"
//                 animate={{
//                   y: [0, -10, 0],
//                   rotate: [0, 5, 0],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 1.5,
//                 }}
//                 style={{ willChange: "transform" }}
//               />
//               <motion.div
//                 className="absolute -bottom-3 -left-3 h-8 w-8 rounded-full bg-primary/80"
//                 animate={{
//                   y: [0, -8, 0],
//                   scale: [1, 1.1, 1],
//                 }}
//                 transition={{
//                   duration: 2.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.7,
//                 }}
//                 style={{ willChange: "transform" }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;
