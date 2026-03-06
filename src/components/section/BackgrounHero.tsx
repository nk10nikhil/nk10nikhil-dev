"use client";

import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ShapeConfig = {
  className: string;
  delay: number;
  width: number;
  height: number;
  rotate: number;
  gradient: string;
};

const SHAPES: ShapeConfig[] = [
  {
    delay: 0.2,
    width: 560,
    height: 130,
    rotate: 12,
    gradient: "from-indigo-500/[0.14]",
    className: "left-[-10%] md:left-[-4%] top-[16%] md:top-[22%]",
  },
  {
    delay: 0.3,
    width: 460,
    height: 110,
    rotate: -14,
    gradient: "from-rose-500/[0.14]",
    className: "right-[-8%] md:right-[-1%] top-[68%] md:top-[74%]",
  },
  {
    delay: 0.4,
    width: 280,
    height: 76,
    rotate: -8,
    gradient: "from-violet-500/[0.14]",
    className: "left-[7%] md:left-[12%] bottom-[8%] md:bottom-[12%]",
  },
  {
    delay: 0.5,
    width: 190,
    height: 58,
    rotate: 18,
    gradient: "from-amber-500/[0.14]",
    className: "right-[14%] md:right-[19%] top-[10%] md:top-[15%]",
  },
];

const containerEase = [0.25, 0.4, 0.25, 1] as const;

const ElegantShape = memo(function ElegantShape({
  className,
  delay = 0,
  width = 300,
  height = 80,
  rotate = 0,
  gradient = "from-white/[0.08]",
  reducedMotion = false,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  reducedMotion?: boolean;
}) {
  return (
    <motion.div
      initial={
        reducedMotion
          ? { opacity: 0 }
          : { opacity: 0, y: -80, rotate: rotate - 8 }
      }
      animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, rotate }}
      transition={{
        duration: reducedMotion ? 0.45 : 1.0,
        delay,
        ease: "easeOut",
      }}
      className={cn("absolute pointer-events-none", className)}
      style={{ width, height }}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-full",
          "bg-gradient-to-r to-transparent",
          gradient,
          "border border-white/[0.12]",
          "shadow-[0_8px_22px_rgba(255,255,255,0.08)]",
        )}
      />
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
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#030303]/10 pt-24">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-indigo-500/[0.04] via-transparent to-rose-500/[0.04]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {SHAPES.map((shape) => (
          <ElegantShape
            key={shape.className}
            className={shape.className}
            delay={shape.delay}
            width={shape.width}
            height={shape.height}
            rotate={shape.rotate}
            gradient={shape.gradient}
            reducedMotion={!!reducedMotion}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: containerEase }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 md:mb-10"
          >
            <img
              src="/profile.png"
              alt="nk10nikhil"
              width={20}
              height={20}
              className="rounded-full"
              loading="eager"
              decoding="async"
            />
            <span className="text-sm tracking-wide text-white/60">{badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: containerEase }}
            className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:mb-8 md:text-8xl"
          >
            <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              {title1}
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
              {title2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.5, ease: containerEase }}
            className="mx-auto max-w-xl px-4 text-base font-light leading-relaxed tracking-wide text-white/45 sm:text-lg md:text-xl"
          >
            Crafting exceptional digital experiences through innovative design
            and cutting-edge technology.
          </motion.p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80" />
    </section>
  );
}
