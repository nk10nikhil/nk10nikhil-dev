import { motion } from "framer-motion";
import { OrbitingCirclesDemo } from "@/components/items/OrbitingCirclesDemo";

const TechSkills = () => {
  return (
    <section className="pt-8 md:pt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Code Window */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <OrbitingCirclesDemo />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left md:block hidden"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient text-center">
              Technologies I Use
            </h2>
            <div className="text-muted-foreground text-lg text-center">
              These are the tools and technologies I am currently using in my
              projects. I am always eager to learn and explore new technologies.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;

// import { motion } from "framer-motion";
// import { OrbitingCirclesDemo } from "../items/OrbitingCirclesDemo";
// import { useRef, useEffect, useState } from "react";

// const TechSkills = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "50px",
//       }
//     );

//     const currentRef = sectionRef.current;
//     if (currentRef) {
//       observer.observe(currentRef);
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, []);

//   return (
//     <motion.section
//       ref={sectionRef}
//       initial={{ opacity: 0 }}
//       animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//       transition={{ duration: 0.4 }}
//       className="pt-6 md:pt-8 lg:pt-10"
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
//           {/* Left side - Orbiting Circles */}
//           <motion.div
//             initial={{ opacity: 0, x: -30, scale: 0.95 }}
//             animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : {}}
//             transition={{
//               duration: 0.5,
//               ease: [0.25, 0.46, 0.45, 0.94],
//               delay: 0.1,
//             }}
//             className="flex items-center justify-center order-2 md:order-1"
//             style={{ willChange: "transform, opacity" }}
//           >
//             <div className="w-full max-w-md">
//               <OrbitingCirclesDemo />
//             </div>
//           </motion.div>

//           {/* Right side - Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : {}}
//             transition={{
//               duration: 0.5,
//               ease: [0.25, 0.46, 0.45, 0.94],
//               delay: 0.2,
//             }}
//             className="text-center md:text-left order-1 md:order-2 space-y-4 md:space-y-6"
//             style={{ willChange: "transform, opacity" }}
//           >
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.3, duration: 0.4 }}
//               className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent"
//             >
//               Technologies I Use
//             </motion.h2>

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={isVisible ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: 0.4, duration: 0.4 }}
//               className="text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed"
//             >
//               These are the tools and technologies I'm currently using in my
//               projects. I'm always eager to learn and explore new technologies
//               to build better solutions.
//             </motion.div>

//             {/* Additional visual element for enhanced look */}
//             <motion.div
//               initial={{ opacity: 0, width: 0 }}
//               animate={isVisible ? { opacity: 1, width: "80px" } : {}}
//               transition={{ delay: 0.6, duration: 0.5 }}
//               className="hidden md:block h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto md:mx-0"
//             />
//           </motion.div>
//         </div>

//         {/* Mobile-only content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.3, duration: 0.4 }}
//           className="text-center mt-6 md:hidden block"
//         >
//           <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//             Technologies I Use
//           </h2>
//           <div className="text-muted-foreground text-base leading-relaxed">
//             These are the tools and technologies I'm currently using in my
//             projects. I'm always eager to learn and explore new technologies.
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default TechSkills;
