import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
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
        <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-black to-transparent"></div>

        <div
          ref={scrollerRef}
          className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
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
