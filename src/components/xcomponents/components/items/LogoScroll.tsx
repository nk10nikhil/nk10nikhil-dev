import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3,
  FaGit,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const techStacks = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3 className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Git", icon: <FaGit className="text-orange-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
];

interface LogoScrollProps {
  className?: string;
}

const LogoScroll: React.FC<LogoScrollProps> = ({ className }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return;

    // Clone the content for an infinite loop effect
    const scrollerContent = Array.from(scrollerInnerRef.current.children);
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollerInnerRef.current?.appendChild(clone);
    });
  }, []);

  return (
    <div className={cn("py-10 bg-black relative", className)}>
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1 bg-white/10"></div>
          <div className="text-white/40 text-sm uppercase tracking-wider font-medium">
            Widerange of Tech Stack
          </div>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-20 z-10 bg-linear-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-20 z-10 bg-linear-to-l from-black to-transparent"></div>

        <div
          ref={scrollerRef}
          className="w-full relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        >
          <div
            ref={scrollerInnerRef}
            className="w-max flex items-center justify-center gap-2 animate-[scroll_30s_linear_infinite]"
          >
            {techStacks.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-4 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 scale-75 md:scale-75 lg:scale-100 gap-2"
              >
                {tech.icon}
                <span className="text-white/60 hover:text-white/90 transition-colors duration-300 font-semibold text-xl">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoScroll;

// import React, { useEffect, useRef, useCallback } from "react";
// import { cn } from "@/lib/utils";
// import {
//   FaReact,
//   FaNodeJs,
//   FaPython,
//   FaJs,
//   FaHtml5,
//   FaCss3,
//   FaGit,
//   FaDocker,
//   FaAws,
// } from "react-icons/fa";
// import {
//   SiExpress,
//   SiMongodb,
//   SiPostgresql,
//   SiTypescript,
//   SiNextdotjs,
//   SiTailwindcss,
// } from "react-icons/si";

// // Memoized tech stack data for better performance
// const techStacks = [
//   { name: "React", icon: <FaReact className="text-blue-400" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
//   { name: "Express", icon: <SiExpress className="text-gray-400" /> },
//   { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//   { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
//   { name: "Python", icon: <FaPython className="text-yellow-400" /> },
//   { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
//   { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
//   { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
//   { name: "CSS3", icon: <FaCss3 className="text-blue-400" /> },
//   {
//     name: "Next.js",
//     icon: <SiNextdotjs className="text-black dark:text-white" />,
//   },
//   { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
//   { name: "Git", icon: <FaGit className="text-orange-600" /> },
//   { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
//   { name: "AWS", icon: <FaAws className="text-orange-400" /> },
// ];

// interface LogoScrollProps {
//   className?: string;
// }

// const LogoScroll: React.FC<LogoScrollProps> = React.memo(({ className }) => {
//   const scrollerRef = useRef<HTMLDivElement>(null);
//   const scrollerInnerRef = useRef<HTMLDivElement>(null);
//   const animationFrameRef = useRef<number>(0);
//   const isPausedRef = useRef(false);

//   // Optimized animation with requestAnimationFrame
//   const animateScroll = useCallback(() => {
//     if (!scrollerInnerRef.current || isPausedRef.current) return;

//     scrollerInnerRef.current.style.transform = `translateX(-${
//       (performance.now() / 50) % 100
//     }%)`;
//     animationFrameRef.current = requestAnimationFrame(animateScroll);
//   }, []);

//   const handleMouseEnter = useCallback(() => {
//     isPausedRef.current = true;
//   }, []);

//   const handleMouseLeave = useCallback(() => {
//     isPausedRef.current = false;
//     animateScroll();
//   }, [animateScroll]);

//   useEffect(() => {
//     if (!scrollerInnerRef.current) return;

//     // Start animation
//     animateScroll();

//     // Cleanup
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [animateScroll]);

//   return (
//     <div className={cn("py-8 bg-black relative", className)}>
//       <div className="container mx-auto px-4 mb-6">
//         <div className="flex items-center gap-3 mb-8">
//           <div className="h-px flex-1 bg-white/10"></div>
//           <div className="text-white/40 text-sm uppercase tracking-wider font-medium whitespace-nowrap">
//             Wide Range of Tech Stack
//           </div>
//           <div className="h-px flex-1 bg-white/10"></div>
//         </div>
//       </div>

//       <div
//         className="relative w-full overflow-hidden"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         {/* Gradient overlays */}
//         <div className="absolute left-0 top-0 h-full w-16 z-10 bg-linear-to-r from-black to-transparent pointer-events-none"></div>
//         <div className="absolute right-0 top-0 h-full w-16 z-10 bg-linear-to-l from-black to-transparent pointer-events-none"></div>

//         <div ref={scrollerRef} className="w-full relative overflow-hidden">
//           <div
//             ref={scrollerInnerRef}
//             className="flex items-center justify-center gap-3 min-w-max will-change-transform"
//             style={{
//               transition: "transform 0.1s linear",
//               transform: "translateX(0%)",
//             }}
//           >
//             {/* Double the items for seamless loop without cloning DOM nodes */}
//             {[...techStacks, ...techStacks].map((tech, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-center px-4 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-200 hover:scale-105 gap-2 flex-shrink-0"
//                 style={{
//                   transform: "translateZ(0)",
//                   willChange: "transform, background-color",
//                 }}
//               >
//                 <div className="flex-shrink-0">{tech.icon}</div>
//                 <span className="text-white/70 hover:text-white transition-colors duration-200 font-semibold text-lg whitespace-nowrap">
//                   {tech.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes smooth-scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .scroller-inner {
//           animation: smooth-scroll 40s linear infinite;
//         }

//         .scroller-inner:hover {
//           animation-play-state: paused;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .scroller-inner {
//             animation: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// });

// LogoScroll.displayName = "LogoScroll";

// export default LogoScroll;
