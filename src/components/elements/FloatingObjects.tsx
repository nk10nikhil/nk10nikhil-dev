import React, { useMemo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Square, Hexagon, Triangle, Star, Circle } from "lucide-react";
import Particles from "@/components/elements/Particles";

// Move outside component - create ONCE, not on every render
const FLOATING_ITEMS = [
  {
    id: 1,
    Icon: Square,
    size: 40,
    className: "absolute top-[15%] right-[10%]",
    bgColor: "bg-purple-700/20",
    iconColor: "text-purple-400",
    delay: 0,
  },
  {
    id: 2,
    Icon: Hexagon,
    size: 30,
    className: "absolute bottom-[20%] left-[15%]",
    bgColor: "bg-indigo-700/20",
    iconColor: "text-indigo-400",
    delay: 1.5,
  },
  {
    id: 3,
    Icon: Triangle,
    size: 25,
    className: "absolute top-[50%] right-[20%]",
    bgColor: "bg-blue-700/20",
    iconColor: "text-blue-400",
    delay: 2,
  },
  {
    id: 4,
    Icon: Star,
    size: 35,
    className: "absolute top-[30%] left-[30%]",
    bgColor: "bg-primary/20",
    iconColor: "text-primary/70",
    delay: 1,
  },
  {
    id: 5,
    Icon: Circle,
    size: 20,
    className: "absolute bottom-[25%] right-[25%]",
    bgColor: "bg-purple-600/20",
    iconColor: "text-purple-300",
    delay: 0.5,
  },
  {
    id: 6,
    Icon: Star,
    size: 28,
    className: "absolute top-[10%] left-[20%]",
    bgColor: "bg-indigo-600/20",
    iconColor: "text-indigo-300",
    delay: 2.5,
  },
  {
    id: 7,
    Icon: Triangle,
    size: 22,
    className: "absolute bottom-[40%] right-[50%]",
    bgColor: "bg-blue-600/20",
    iconColor: "text-blue-300",
    delay: 1,
  },
];

const FloatingObjects = React.memo(() => {
  const prefersReducedMotion = useReducedMotion();
  const [isClient, setIsClient] = useState(false);
  const [particleQuantity, setParticleQuantity] = useState(100);
  const [animatedItems, setAnimatedItems] = useState(FLOATING_ITEMS.length);

  // Only render on client side after mount
  useEffect(() => {
    setIsClient(true);

    const connection = (navigator as any).connection as
      | {
          saveData?: boolean;
          effectiveType?: string;
        }
      | undefined;

    const saveData = connection?.saveData === true;
    const slowNetwork = /2g|slow-2g/.test(connection?.effectiveType ?? "");
    const lowCoreDevice = (navigator.hardwareConcurrency ?? 8) <= 4;

    if (prefersReducedMotion || saveData || slowNetwork) {
      setParticleQuantity(24);
      setAnimatedItems(3);
      return;
    }

    if (lowCoreDevice) {
      setParticleQuantity(55);
      setAnimatedItems(5);
      return;
    }

    setParticleQuantity(100);
    setAnimatedItems(FLOATING_ITEMS.length);
  }, [prefersReducedMotion]);

  // Animation variants - optimized with GPU acceleration
  const floatAnimation = useMemo(
    () => ({
      initial: { y: 0 },
      animate: prefersReducedMotion
        ? {}
        : {
            y: [-30, 15, -30],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut" as const,
            },
          },
    }),
    [prefersReducedMotion],
  );

  const rotateAnimation = useMemo(
    () => ({
      initial: { rotate: 0 },
      animate: prefersReducedMotion
        ? {}
        : {
            rotate: 360,
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear" as const,
            },
          },
    }),
    [prefersReducedMotion],
  );

  // Don't render until client-side
  if (!isClient) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
      style={{
        contain: "layout paint style",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      <Particles className="absolute inset-0" quantity={particleQuantity} />

      {FLOATING_ITEMS.slice(0, animatedItems).map(
        ({ id, Icon, size, className, bgColor, iconColor, delay }) => (
          <motion.div
            key={id}
            initial="initial"
            animate="animate"
            variants={floatAnimation}
            className={className}
            style={{
              willChange: prefersReducedMotion ? "auto" : "transform",
              animationDelay: `${delay}s`,
            }}
          >
            <motion.div
              initial="initial"
              animate="animate"
              variants={rotateAnimation}
              className={`${bgColor} backdrop-blur-sm p-${
                id === 5 ? "2" : id === 3 ? "3" : "4"
              } rounded-${
                id === 2
                  ? "full"
                  : id === 4
                    ? "xl"
                    : id === 3
                      ? "lg"
                      : id === 1
                        ? "2xl"
                        : "full"
              }`}
              style={{
                willChange: prefersReducedMotion ? "auto" : "transform",
              }}
            >
              <Icon size={size} className={iconColor} />
            </motion.div>
          </motion.div>
        ),
      )}
    </div>
  );
});

FloatingObjects.displayName = "FloatingObjects";

export default FloatingObjects;
