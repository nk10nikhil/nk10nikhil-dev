import React from "react";
import { cn } from "@/lib/utils";

const techStacks = [
  {
    name: "React",
    icon: (
      <img src="/icons/react-original.svg" alt="React" className="h-6 w-6" />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <img
        src="/icons/nodejs-original-wordmark.svg"
        alt="Node.js"
        className="h-6 w-6"
      />
    ),
  },
  {
    name: "Express",
    icon: (
      <img
        src="/icons/express-original.svg"
        alt="Express"
        className="h-6 w-6"
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <img
        src="/icons/mongodb-original.svg"
        alt="MongoDB"
        className="h-6 w-6"
      />
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <img
        src="/icons/postgresql-original.svg"
        alt="PostgreSQL"
        className="h-6 w-6"
      />
    ),
  },
  {
    name: "Python",
    icon: (
      <img src="/icons/python-custom.svg" alt="Python" className="h-6 w-6" />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <img
        src="/icons/javascript-custom.svg"
        alt="JavaScript"
        className="h-6 w-6"
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <img
        src="/icons/typescript-original.svg"
        alt="TypeScript"
        className="h-6 w-6"
      />
    ),
  },
  {
    name: "HTML5",
    icon: <img src="/icons/html5-custom.svg" alt="HTML5" className="h-6 w-6" />,
  },
  {
    name: "CSS3",
    icon: <img src="/icons/css3-custom.svg" alt="CSS3" className="h-6 w-6" />,
  },
  {
    name: "Next.js",
    icon: (
      <img src="/icons/nextjs-original.svg" alt="Next.js" className="h-6 w-6" />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <img
        src="/icons/tailwindcss-original.svg"
        alt="Tailwind CSS"
        className="h-6 w-6"
      />
    ),
  },
  {
    name: "Git",
    icon: <img src="/icons/git-custom.svg" alt="Git" className="h-6 w-6" />,
  },
  {
    name: "Docker",
    icon: (
      <img src="/icons/docker-original.svg" alt="Docker" className="h-6 w-6" />
    ),
  },
  {
    name: "AWS",
    icon: (
      <img
        src="/icons/amazonwebservices-original-wordmark.svg"
        alt="AWS"
        className="h-6 w-6"
      />
    ),
  },
];

interface LogoScrollProps {
  className?: string;
}

const LogoScroll: React.FC<LogoScrollProps> = ({ className }) => {
  const loopStacks = [...techStacks, ...techStacks];

  return (
    <div className={cn("py-10 bg-black relative", className)}>
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1 bg-white/10"></div>
          <div className="text-white/40 text-sm uppercase tracking-wider font-medium">
            Wide Range of Tech Stack
          </div>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-black to-transparent"></div>

        <div className="w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="w-max flex items-center justify-center gap-2 animate-[scroll_30s_linear_infinite]">
            {loopStacks.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
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
