"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import LogoScroll from "@/components/LogoScroll";
import { ArrowRight, Play, Sparkles } from "lucide-react";

function ElegantShape({
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
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 12,
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
            "backdrop-blur-[3px] border-2 border-white/[0.2]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]"
          )}
        />

        {/* Enhanced floating sparkles */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <Sparkles className="absolute top-2 right-4 w-3 h-3 text-white/40" />
          <Sparkles className="absolute bottom-3 left-6 w-2 h-2 text-white/30" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function BackgroundHero({
  badge = "Where Marketing Meets Influence",
  title1 = "Not Just Marketing",
  title2 = "We Create Experiences",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative h-auto w-full flex items-center pt-24 justify-center overflow-hidden bg-black pb-14">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-rose-500/[0.08] blur-3xl" />

      {/* Additional subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Enhanced floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.18]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.18]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.18]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.18]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.18]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center flex flex-col md:flex-row">
          <div>
            {/* Enhanced badge */}
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.15] mb-8 md:mb-12 backdrop-blur-sm hover:border-white/[0.25] transition-all duration-300"
            >
              <div className="relative">
                <img
                  src="/logo.jpg"
                  alt="webuiltu"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-sm text-white/90 tracking-wide font-medium">
                {badge}
              </span>
              <Sparkles className="w-4 h-4 text-indigo-400/70" />
            </motion.div>

            {/* Enhanced title */}
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/95 to-white/80">
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

            {/* Enhanced description */}
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide max-w-xl mx-auto px-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-marketing-600 font-bold pb-8">
                A premier marketing agency specializing in event organization
                and social media promotion to elevate your brand's presence.
              </p>
            </motion.div>

            {/* Enhanced buttons */}
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex-wrap gap-6 justify-center hidden md:flex md:mt-16"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-marketing flex items-center gap-2 group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-white/[0.15] rounded-md bg-white text-marketing-900 hover:border-marketing-300 hover:bg-white/95 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group"
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Get in Touch
              </motion.a>
            </motion.div>
          </div>

          <div className="md:ml-60">
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2 mt-8 md:mt-12 lg:-mt-8 md:justify-center items-center"
            >
              {/* Enhanced logo with glow effect */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <img
                  src="./logo.jpg"
                  alt="logo"
                  className="relative h-60 w-60 md:h-96 md:w-96 md:mt-14 rounded-full border-2 border-white/10 group-hover:border-white/20 transition-all duration-500"
                />

                {/* Rotating ring around logo */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border-2 border-transparent border-t-indigo-400/50 border-r-rose-400/30 rounded-full md:mt-14"
                />
              </motion.div>

              {/* Enhanced tagline */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="relative"
              >
                <div
                  className="w-[200px] h-[30px] mb-6 px-3 py-1 border border-marketing-200/50 rounded-full text-sm font-medium text-marketing-700 bg-white/90 backdrop-blur-sm animate-fade-in mx-auto flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: "0.3s" }}
                >
                  Connect | Engage | Groww
                </div>

                {/* Floating accent */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)] pointer-events-none" />
    </div>
  );
}
