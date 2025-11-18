"use client";

import { easeInOut, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMemo, memo } from "react";

const ElegantShape = memo(function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 1.8, // Reduced from 2.4s
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 0.9 }, // Reduced from 1.2s
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 12, 0], // Reduced motion range
        }}
        transition={{
          duration: 10, // Reduced from 12s
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[1px] border border-white/10", // Reduced blur and border
            "shadow-[0_4px_24px_0_rgba(255,255,255,0.05)]", // Reduced shadow
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" // Reduced opacity
          )}
        />
      </motion.div>
    </motion.div>
  );
});

export default function BackgroundHero({
  badge = "Nikhil Kumar",
  title1 = "Elevate Your",
  title2 = "Digital Development",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 }, // Reduced from 30px
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8, // Reduced from 1s
          delay: 0.3 + i * 0.15, // Reduced delays
          ease: easeInOut,
        },
      }),
    }),
    []
  );

  const shapes = useMemo(
    () => [
      {
        delay: 0.2, // Reduced delays
        width: 500, // Reduced sizes
        height: 120,
        rotate: 12,
        gradient: "from-indigo-500/[0.12]", // Reduced opacity
        className: "left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]",
      },
      {
        delay: 0.3,
        width: 400,
        height: 100,
        rotate: -15,
        gradient: "from-rose-500/[0.12]",
        className: "right-[-5%] md:right-[0%] top-[70%] md:top-[75%]",
      },
      {
        delay: 0.25,
        width: 250, // Reduced from 300
        height: 70, // Reduced from 80
        rotate: -8,
        gradient: "from-violet-500/[0.12]",
        className: "left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]",
      },
      {
        delay: 0.35,
        width: 180, // Reduced from 200
        height: 50, // Reduced from 60
        rotate: 20,
        gradient: "from-amber-500/[0.12]",
        className: "right-[15%] md:right-[20%] top-[10%] md:top-[15%]",
      },
      {
        delay: 0.4,
        width: 120, // Reduced from 150
        height: 35, // Reduced from 40
        rotate: -25,
        gradient: "from-cyan-500/[0.12]",
        className: "left-[20%] md:left-[25%] top-[5%] md:top-[10%]",
      },
    ],
    []
  );

  // Preload profile image
  useMemo(() => {
    const img = new Image();
    img.src = "/profile.png";
  }, []);

  return (
    <div className="relative h-auto w-full flex items-center pt-20 justify-center overflow-hidden bg-[#030303]/10">
      {/* Reduced background blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/3 via-transparent to-rose-500/3 blur-2xl" />

      <div className="absolute inset-0 overflow-hidden">
        {shapes.map((shape, index) => (
          <ElegantShape key={index} {...shape} />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/2 border border-white/6 mb-6 md:mb-8"
          >
            <img
              src="/profile.png"
              alt="nk10nikhil"
              width={18} // Slightly smaller
              height={18}
              className="rounded-full"
              loading="eager"
              decoding="sync"
            />
            <span className="text-xs text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-sm sm:text-base md:text-lg text-white/40 leading-relaxed font-light tracking-wide max-w-md mx-auto">
              Crafting exceptional digital experiences through innovative design
              and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Reduced overlay opacity */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/60 pointer-events-none" />
    </div>
  );
}
