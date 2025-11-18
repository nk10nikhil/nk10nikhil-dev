"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll } from "motion/react";
import React from "react";

interface ScrollProgressProps {
  className?: string;
}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-linear-to-r from-[#ff57bc] via-[#bf0f70] to-[#aa00ff]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
});

ScrollProgress.displayName = "ScrollProgress";
