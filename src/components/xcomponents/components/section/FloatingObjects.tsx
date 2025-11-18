import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Square, Hexagon, Triangle, Star, Circle } from "lucide-react";

const FloatingObjects = React.memo(() => {
  // Animation variants for floating elements - optimized with GPU acceleration
  const floatAnimation = useMemo(
    () => ({
      initial: { y: 0 },
      animate: {
        y: [-30, 15, -30],
        transition: {
          duration: 8, // Slower animation for smoother performance
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      },
    }),
    []
  );

  const rotateAnimation = useMemo(
    () => ({
      initial: { rotate: 0 },
      animate: {
        rotate: 360,
        transition: {
          duration: 20, // Slower rotation
          repeat: Infinity,
          ease: "linear" as const,
        },
      },
    }),
    []
  );

  const floatingItems = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {floatingItems.map(
        ({ id, Icon, size, className, bgColor, iconColor, delay }) => (
          <motion.div
            key={id}
            initial="initial"
            animate="animate"
            variants={floatAnimation}
            className={className}
            style={{
              willChange: "transform",
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
              style={{ willChange: "transform" }}
            >
              <Icon size={size} className={iconColor} />
            </motion.div>
          </motion.div>
        )
      )}
    </div>
  );
});

FloatingObjects.displayName = "FloatingObjects";

export default FloatingObjects;

// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import { Square, Hexagon, Triangle, Star, Circle } from "lucide-react";

// const FloatingObjects = React.memo(() => {
//   // Optimized animations with reduced complexity and better performance
//   const floatAnimation = useMemo(
//     () => ({
//       animate: {
//         y: [-20, 10, -20],
//         transition: {
//           duration: 6, // Faster for better perceived performance
//           repeat: Infinity,
//           ease: "easeInOut",
//         },
//       },
//     }),
//     []
//   );

//   const rotateAnimation = useMemo(
//     () => ({
//       animate: {
//         rotate: 360,
//         transition: {
//           duration: 15,
//           repeat: Infinity,
//           ease: "linear",
//         },
//       },
//     }),
//     []
//   );

//   // Pre-calculated styles for better performance
//   const floatingItems = useMemo(
//     () => [
//       {
//         id: 1,
//         Icon: Square,
//         size: 40,
//         className: "absolute top-[15%] right-[10%]",
//         bgColor: "bg-purple-700/20",
//         iconColor: "text-purple-400",
//         delay: 0,
//         padding: "p-4",
//         borderRadius: "rounded-2xl",
//       },
//       {
//         id: 2,
//         Icon: Hexagon,
//         size: 30,
//         className: "absolute bottom-[20%] left-[15%]",
//         bgColor: "bg-indigo-700/20",
//         iconColor: "text-indigo-400",
//         delay: 1.5,
//         padding: "p-4",
//         borderRadius: "rounded-full",
//       },
//       {
//         id: 3,
//         Icon: Triangle,
//         size: 25,
//         className: "absolute top-[50%] right-[20%]",
//         bgColor: "bg-blue-700/20",
//         iconColor: "text-blue-400",
//         delay: 2,
//         padding: "p-3",
//         borderRadius: "rounded-lg",
//       },
//       {
//         id: 4,
//         Icon: Star,
//         size: 35,
//         className: "absolute top-[30%] left-[30%]",
//         bgColor: "bg-primary/20",
//         iconColor: "text-primary/70",
//         delay: 1,
//         padding: "p-4",
//         borderRadius: "rounded-xl",
//       },
//       {
//         id: 5,
//         Icon: Circle,
//         size: 20,
//         className: "absolute bottom-[25%] right-[25%]",
//         bgColor: "bg-purple-600/20",
//         iconColor: "text-purple-300",
//         delay: 0.5,
//         padding: "p-2",
//         borderRadius: "rounded-full",
//       },
//     ],
//     []
//   );

//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
//       {floatingItems.map(
//         ({
//           id,
//           Icon,
//           size,
//           className,
//           bgColor,
//           iconColor,
//           delay,
//           padding,
//           borderRadius,
//         }) => (
//           <motion.div
//             key={id}
//             initial={false} // Skip initial animation for faster load
//             animate="animate"
//             variants={floatAnimation}
//             className={className}
//             style={{
//               willChange: "transform", // GPU acceleration
//               transform: "translateZ(0)", // Force GPU layer
//             }}
//           >
//             <motion.div
//               initial={false}
//               animate="animate"
//               variants={rotateAnimation}
//               className={`${bgColor} ${padding} ${borderRadius} backdrop-blur-sm shadow-lg border border-white/10`}
//               style={{
//                 willChange: "transform",
//                 transform: "translateZ(0)",
//               }}
//             >
//               <Icon
//                 size={size}
//                 className={iconColor}
//                 strokeWidth={1.5} // Smoother strokes
//               />
//             </motion.div>
//           </motion.div>
//         )
//       )}
//     </div>
//   );
// });

// FloatingObjects.displayName = "FloatingObjects";

// export default FloatingObjects;
