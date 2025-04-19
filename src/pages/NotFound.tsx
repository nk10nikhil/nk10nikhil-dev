import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import P5Background from "@/components/elements/P5Background";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import DigitalLamp from "@/components/universeio/DigitalLamp";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent min-h-screen relative"
    >
      {/* Background Elements */}
      <P5Background className="blur-sm" />
      <BlurBackground />
      <FloatingObjects />


      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100">404</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Page Not Found</p>
        <TextGenerateEffect words="Please click the button below to go back to the home page" className="" />
        <a className=" mt-5 relative p-[2px] w-fit rounded-[0.9em] bg-gradient-to-r from-sky-500 to-pink-500 transition-all duration-400 ease-in-out group"
          role="button"
          href="/"
        >
          <span className="absolute inset-0 m-auto rounded-[0.9em] -z-10 blur-0 transition-[filter] duration-400 ease-in-out bg-gradient-to-r from-sky-500 to-pink-500 group-hover:blur-[1.2em] group-active:blur-[0.2em]"></span>
          <button className="relative text-strong py-2 px-3 rounded-xl border-none bg-black text-white cursor-pointer shadow-[2px_2px_3px_rgba(0,0,0,0.7)] transition-all duration-300 ease-in-out">
            Go To Home
          </button>
        </a>
        <DigitalLamp />
      </div>
    </motion.div>
  );
};

export default NotFound;
