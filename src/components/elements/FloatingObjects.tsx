
import { motion } from "framer-motion";
import { Square, Hexagon, Triangle, Star, Circle } from "lucide-react";

const FloatingObjects = () => {
  // Animation variants for floating elements
  const floatAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [-30, 15, -30],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  const rotateAnimation = {
    initial: { rotate: 0 },
    animate: { 
      rotate: 360,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Top right */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={floatAnimation}
        className="absolute top-[15%] right-[10%]"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={rotateAnimation}
          className="bg-purple-700/20 backdrop-blur-sm p-4 rounded-2xl"
        >
          <Square size={40} className="text-purple-400" />
        </motion.div>
      </motion.div>

      {/* Bottom left */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={floatAnimation}
        custom={1}
        style={{ animationDelay: "1.5s" }}
        className="absolute bottom-[20%] left-[15%]"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={rotateAnimation}
          className="bg-indigo-700/20 backdrop-blur-sm p-3 rounded-full"
        >
          <Hexagon size={30} className="text-indigo-400" />
        </motion.div>
      </motion.div>

      {/* Middle right */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={floatAnimation}
        custom={2}
        style={{ animationDelay: "2s" }}
        className="absolute top-[50%] right-[20%]"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={rotateAnimation}
          className="bg-blue-700/20 backdrop-blur-sm p-3 rounded-lg"
        >
          <Triangle size={25} className="text-blue-400" />
        </motion.div>
      </motion.div>

      {/* Top middle */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={floatAnimation}
        custom={3}
        style={{ animationDelay: "1s" }}
        className="absolute top-[30%] left-[30%]"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={rotateAnimation}
          className="bg-primary/20 backdrop-blur-sm p-3 rounded-xl"
        >
          <Star size={35} className="text-primary/70" />
        </motion.div>
      </motion.div>

      {/* Bottom right */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={floatAnimation}
        custom={4}
        style={{ animationDelay: "0.5s" }}
        className="absolute bottom-[25%] right-[25%]"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={rotateAnimation}
          className="bg-purple-600/20 backdrop-blur-sm p-2 rounded-full"
        >
          <Circle size={20} className="text-purple-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingObjects;
