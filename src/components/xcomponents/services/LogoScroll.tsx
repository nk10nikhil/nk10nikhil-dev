
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const companies = [
  "Cornitos",
  "Oggy Holidays",
  "Banarsi Jeera",
  "Sun Drop",
  "Bisleri",
  "Nykaa",
  "Skippi Ice Pops",
  "Internshala",
  "Suzuki",
  "Physics Wallah",
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
    <div className={cn("py-2 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] relative", className)}>
      <div className="container mx-auto px-0 mb-4">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10"></div>
          <div className="text-white/40 text-sm uppercase tracking-wider font-medium">Trusted By Leading Companies</div>
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
            className="w-max flex items-center justify-center gap-1 animate-[scroll_20s_linear_infinite]"
          >
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-8 py-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 scale-75 md:scale-75 lg:scale-100"
              >
                <span className="text-white/60 hover:text-white/90 transition-colors duration-300 font-semibold text-xl">
                  {company}
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
