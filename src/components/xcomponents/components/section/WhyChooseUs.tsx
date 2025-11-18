// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useMemo } from "react";
// import {
//   Target,
//   Clock,
//   Award,
//   Headphones,
//   TrendingUp,
//   Users,
// } from "lucide-react";

// const reasons = [
//   {
//     icon: Target,
//     title: "Precision & Quality",
//     description: "Meticulous attention to detail in every line of code",
//     stat: "99.9%",
//     statLabel: "Accuracy",
//   },
//   {
//     icon: Clock,
//     title: "On-Time Delivery",
//     description: "Projects delivered within agreed timelines",
//     stat: "95%",
//     statLabel: "On Schedule",
//   },
//   {
//     icon: Award,
//     title: "Best Practices",
//     description: "Following industry standards and modern methodologies",
//     stat: "100%",
//     statLabel: "Compliance",
//   },
//   {
//     icon: Headphones,
//     title: "24/7 Support",
//     description: "Always available to assist with your needs",
//     stat: "24/7",
//     statLabel: "Available",
//   },
//   {
//     icon: TrendingUp,
//     title: "Scalable Solutions",
//     description: "Built to grow with your business",
//     stat: "10x",
//     statLabel: "Scalability",
//   },
//   {
//     icon: Users,
//     title: "Client Satisfaction",
//     description: "Dedicated to exceeding expectations",
//     stat: "100%",
//     statLabel: "Happy Clients",
//   },
// ];

// export default function WhyChooseUs() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   // Memoized animation variants for better performance
//   const containerVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0 },
//       visible: {
//         opacity: 1,
//         transition: {
//           staggerChildren: 0.1,
//           duration: 0.4,
//         },
//       },
//     }),
//     []
//   );

//   const itemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: 20 },
//       visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//           type: "spring",
//           stiffness: 300,
//           damping: 24,
//           duration: 0.5,
//         },
//       },
//       hover: {
//         y: -5,
//         transition: {
//           type: "spring",
//           stiffness: 400,
//           damping: 25,
//         },
//       },
//     }),
//     []
//   );

//   const iconVariants = useMemo(
//     () => ({
//       hover: {
//         scale: 1.1,
//         transition: {
//           type: "spring",
//           stiffness: 400,
//           damping: 10,
//         },
//       },
//     }),
//     []
//   );

//   return (
//     <section className="py-12 md:py-16 px-2 md:px-4 relative overflow-hidden bg-transparent">
//       {/* Enhanced Background Elements */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow" />
//         <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl animate-pulse-slower" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl" />
//       </div>

//       <div
//         className="container mx-auto max-w-7xl relative z-10 px-0 md:px-4"
//         ref={ref}
//       >
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="text-center mb-8 md:mb-16 px-2"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{
//               type: "spring",
//               stiffness: 300,
//               damping: 20,
//               duration: 0.5,
//             }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 backdrop-blur-sm mb-4 md:mb-6"
//           >
//             <Award className="w-4 h-4 text-rose-400" />
//             <span className="text-sm text-rose-300 font-medium">
//               Why Choose Me
//             </span>
//           </motion.div>

//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
//             <span className="bg-gradient-to-r from-white via-rose-200 to-cyan-200 bg-clip-text text-transparent">
//               Excellence in Every Project
//             </span>
//           </h2>

//           <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
//             Combining technical expertise with creative problem-solving to
//             deliver exceptional results.
//           </p>
//         </motion.div>

//         {/* Mobile Grid - 2 Columns Horizontal Layout */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid grid-cols-2 md:hidden gap-3 px-2"
//         >
//           {reasons.map((reason, index) => {
//             const Icon = reason.icon;
//             return (
//               <motion.div
//                 key={reason.title}
//                 variants={itemVariants}
//                 whileHover="hover"
//                 className="relative group w-full"
//               >
//                 {/* Card - Vertical Compact Layout */}
//                 <div className="relative h-full p-3 rounded-xl bg-white/3 border border-white/10 backdrop-blur-sm active:bg-white/5 transition-all duration-300 shadow-lg shadow-black/5">
//                   {/* Enhanced background glow */}
//                   <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   {/* Icon - Top with badge */}
//                   <div className="relative shrink-0 mb-2 z-10">
//                     <motion.div
//                       variants={iconVariants}
//                       className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center border border-white/10 backdrop-blur-sm"
//                     >
//                       <Icon className="w-5 h-5 text-indigo-300" />
//                     </motion.div>

//                     {/* Floating stat badge - Top Right */}
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={inView ? { scale: 1 } : {}}
//                       transition={{
//                         type: "spring",
//                         stiffness: 300,
//                         delay: 0.5 + index * 0.1,
//                       }}
//                       className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white text-[10px] font-bold shadow-lg border border-white/20"
//                     >
//                       {reason.stat}
//                     </motion.div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1 min-w-0 z-10 relative">
//                     {/* Title */}
//                     <h3 className="text-xs font-semibold mb-1 text-white group-hover:text-indigo-300 transition-colors duration-300 leading-tight">
//                       {reason.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-white/60 text-[10px] leading-relaxed mb-1 line-clamp-2">
//                       {reason.description}
//                     </p>

//                     {/* Stat label */}
//                     <div className="text-[9px] text-white/40 font-medium">
//                       {reason.statLabel}
//                     </div>
//                   </div>

//                   {/* Bottom accent line */}
//                   <motion.div
//                     className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl bg-gradient-to-r from-indigo-500 to-rose-500"
//                     initial={{ scaleX: 0 }}
//                     whileHover={{ scaleX: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Desktop Grid - 3 Columns */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
//         >
//           {reasons.map((reason, index) => {
//             const Icon = reason.icon;
//             return (
//               <motion.div
//                 key={reason.title}
//                 variants={itemVariants}
//                 whileHover="hover"
//                 className="relative group"
//               >
//                 <div className="relative h-full p-6 lg:p-8 rounded-2xl bg-white/3 border border-white/10 backdrop-blur-sm transition-all duration-300 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-indigo-500/10">
//                   {/* Enhanced background effects */}
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                   {/* Animated border glow */}
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-rose-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />

//                   {/* Icon with gradient background */}
//                   <div className="relative mb-6 z-10">
//                     <motion.div
//                       variants={iconVariants}
//                       className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center border border-white/10 backdrop-blur-sm shadow-lg"
//                     >
//                       <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-indigo-300" />
//                     </motion.div>

//                     {/* Floating stat badge */}
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={inView ? { scale: 1 } : {}}
//                       transition={{
//                         type: "spring",
//                         stiffness: 300,
//                         delay: 0.5 + index * 0.1,
//                       }}
//                       className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white text-xs font-bold shadow-xl border border-white/20"
//                     >
//                       {reason.stat}
//                     </motion.div>
//                   </div>

//                   {/* Content */}
//                   <div className="relative z-10">
//                     <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors duration-300">
//                       {reason.title}
//                     </h3>

//                     <p className="text-white/60 mb-4 leading-relaxed text-sm lg:text-base">
//                       {reason.description}
//                     </p>

//                     {/* Stat label */}
//                     <div className="text-sm text-white/40 font-medium">
//                       {reason.statLabel}
//                     </div>
//                   </div>

//                   {/* Corner accent */}
//                   <motion.div
//                     className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-2xl"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
