import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { MarqueeDemo } from "@/components/items/MarqueeDemo";

const ToolbarHighlight = () => {
  return (
    <section className="py-16 md:py-16 bg-black/25 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-10 md:mb-12"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-gray-200">
                Testimonials
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gradient">
              What Developers Say
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Real feedback from developers I've collaborated with on various
              projects
            </p>
          </motion.div>
          <div className="w-screen relative">
            <MarqueeDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolbarHighlight;

// import { motion, lazy, Suspense } from "framer-motion";
// import { Sparkles } from "lucide-react";

// // Lazy load the marquee component
// const MarqueeDemo = lazy(() => import("../items/MarqueeDemo"));

// // Loading fallback for marquee
// const MarqueeSkeleton = () => (
//   <div className="w-full h-32 bg-linear-to-r from-gray-900/50 to-gray-800/50 rounded-lg animate-pulse flex items-center justify-center">
//     <div className="flex gap-4">
//       {[...Array(3)].map((_, i) => (
//         <div key={i} className="w-64 h-20 bg-gray-700/50 rounded-lg" />
//       ))}
//     </div>
//   </div>
// );

// const ToolbarHighlight = () => {
//   return (
//     <section className="py-12 md:py-16 bg-black/25 overflow-x-hidden relative">
//       {/* Background enhancements */}
//       <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

//       <div className="container mx-auto px-4 md:px-6 relative z-10">
//         <div className="flex flex-col items-center justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-50px" }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//             className="text-center mb-8 md:mb-10"
//           >
//             {/* Badge */}
//             <motion.div
//               initial={{ scale: 0, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{
//                 delay: 0.2,
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 20,
//               }}
//               className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
//             >
//               <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
//               <span className="text-xs md:text-sm font-semibold text-gray-200">
//                 Testimonials
//               </span>
//             </motion.div>

//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-linear-to-r from-primary to-purple-400 bg-clip-text text-transparent">
//               What Developers Say
//             </h2>
//             <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
//               Real feedback from developers I've collaborated with on various
//               projects
//             </p>
//           </motion.div>

//           {/* Marquee with Suspense */}
//           <div className="w-full relative">
//             <Suspense fallback={<MarqueeSkeleton />}>
//               <MarqueeDemo />
//             </Suspense>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ToolbarHighlight;
