import styled from "styled-components";
import { useEffect, useState } from "react";

const FloatingTeddy = () => {
  const [loaded, setLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const targetCount = 20;

  useEffect(() => {
    // Simulating content load
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    // Counter animation
    if (count < targetCount) {
      const interval = setTimeout(() => {
        setCount((prev) => {
          const increment = Math.max(1, Math.floor((targetCount - prev) / 10));
          return Math.min(prev + increment, targetCount);
        });
      }, 100);

      return () => clearTimeout(interval);
    }
  }, [count, loaded]);

  return (
    <StyledWrapper>
      <div className="card">
        {/* Image with Counter */}
        <div className="image-container">
          <div className="floating-wrapper">
            <img src="/robo.png" alt="Floating Teddy" className="image" />
            {/* Counter Card */}
            <div
              className={`counter-card ${
                loaded ? "opacity-100" : "opacity-0"
              } transition-opacity duration-700`}
            >
              <div className="glass-card rounded-3xl p-6 backdrop-blur-xl min-h-[100px] min-w-[200px] flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                  {count}
                  <span className="text-white/80">+</span>
                </div>
                <div className="text-md text-white/80">Full Stack Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container {
    position: relative;
    display: inline-block;
  }

  .floating-wrapper {
    position: relative;
    animation: move 6s ease-in-out infinite;
    display: inline-block;
  }

  .image {
    width: 200px;
    height: 200px;
    z-index: 10;
  }

  .counter-card {
    position: absolute;
    bottom: 100%; /* Align bottom of the counter card */
    left: 100%; /* Align left side of the counter card with the right side of the image */
    transform: translate(
      -50%,
      50%
    ); /* Adjust to clip bottom-left of the counter card with top-right of the image */
    z-index: 20;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  @keyframes move {
    0% {
      transform: translateX(2em) translateY(2em);
    }
    25% {
      transform: translateY(-1em) translateX(-1em);
      rotate: -10deg;
    }
    50% {
      transform: translateY(1em) translateX(-1em);
    }
    75% {
      transform: translateY(-1.25em) translateX(1em);
      rotate: 10deg;
    }
    100% {
      transform: translateX(2em) translateY(2em);
    }
  }
`;

export default FloatingTeddy;

// import { useEffect, useState, useCallback, memo } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const FloatingTeddy = memo(() => {
//   const [loaded, setLoaded] = useState(false);
//   const [count, setCount] = useState(0);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const targetCount = 20;

//   // Optimized loading with intersection observer
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoaded(true);
//     }, 1000); // Reduced from 6000ms

//     return () => clearTimeout(timer);
//   }, []);

//   // Optimized counter animation with requestAnimationFrame
//   useEffect(() => {
//     if (!loaded) return;

//     let startTime: number;
//     let animationFrame: number;
//     const duration = 1500; // Reduced from multiple intervals

//     const animateCounter = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);

//       // Easing function for smooth animation
//       const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//       const currentCount = Math.floor(easeOutQuart * targetCount);

//       setCount(currentCount);

//       if (progress < 1) {
//         animationFrame = requestAnimationFrame(animateCounter);
//       }
//     };

//     animationFrame = requestAnimationFrame(animateCounter);

//     return () => {
//       if (animationFrame) {
//         cancelAnimationFrame(animationFrame);
//       }
//     };
//   }, [loaded]);

//   const handleImageLoad = useCallback(() => {
//     setImageLoaded(true);
//   }, []);

//   const floatingAnimation = {
//     animate: {
//       y: [0, -20, 0],
//       x: [0, 15, 0],
//       rotate: [0, -5, 5, 0],
//     },
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   };

//   const counterAnimation = {
//     initial: { scale: 0, opacity: 0, y: 20 },
//     animate: {
//       scale: 1,
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 20,
//         delay: 0.3,
//       },
//     },
//   };

//   return (
//     <div className="relative flex justify-center items-center p-4">
//       <motion.div className="relative inline-block" {...floatingAnimation}>
//         {/* Optimized Image with lazy loading */}
//         <div className="relative z-10">
//           <img
//             src="/robo.png"
//             alt="Floating Robot"
//             className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 transition-opacity duration-300"
//             style={{
//               opacity: imageLoaded ? 1 : 0,
//               contentVisibility: "auto",
//             }}
//             loading="lazy"
//             decoding="async"
//             onLoad={handleImageLoad}
//           />

//           {/* Loading skeleton */}
//           {!imageLoaded && (
//             <div className="absolute inset-0 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-gray-700/50 rounded-full animate-pulse" />
//           )}
//         </div>

//         {/* Counter Card */}
//         <AnimatePresence>
//           {loaded && (
//             <motion.div
//               className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20"
//               {...counterAnimation}
//             >
//               <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 backdrop-blur-xl min-h-[80px] md:min-h-[100px] min-w-[140px] md:min-w-[200px] flex flex-col items-center justify-center text-center border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl">
//                 <motion.div
//                   className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2 tracking-tight"
//                   key={count}
//                   initial={{ scale: 1.2, opacity: 0.8 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ type: "spring", stiffness: 500 }}
//                 >
//                   {count}
//                   <span className="text-white/80">+</span>
//                 </motion.div>
//                 <div className="text-xs md:text-sm text-white/80 font-medium">
//                   Full Stack Projects
//                 </div>

//                 {/* Decorative elements */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl md:rounded-3xl blur-sm -z-10" />
//                 <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Floating particles background */}
//         <div className="absolute inset-0 -z-10 overflow-hidden">
//           {[...Array(3)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white/30 rounded-full"
//               animate={{
//                 y: [0, -30, 0],
//                 x: [0, Math.sin(i) * 20, 0],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 3 + i,
//                 repeat: Infinity,
//                 delay: i * 0.5,
//                 ease: "easeInOut",
//               }}
//               style={{
//                 left: `${20 + i * 30}%`,
//                 top: `${40 + i * 20}%`,
//               }}
//             />
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// });

// // CSS is now in Tailwind with some custom styles
// const styles = `
//   .glass-card {
//     background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
//     backdrop-filter: blur(20px);
//     -webkit-backdrop-filter: blur(20px);
//     border: 1px solid rgba(255, 255, 255, 0.2);
//     box-shadow:
//       0 8px 32px 0 rgba(0, 0, 0, 0.36),
//       inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
//   }
// `;

// // Add styles to document head
// if (typeof document !== "undefined") {
//   const styleSheet = document.createElement("style");
//   styleSheet.innerText = styles;
//   document.head.appendChild(styleSheet);
// }

// export default FloatingTeddy;
