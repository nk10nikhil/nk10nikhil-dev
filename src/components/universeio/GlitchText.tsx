
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: 'low' | 'medium' | 'high';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const GlitchText = ({ 
  text, 
  className = "", 
  glitchIntensity = 'medium',
  tag = 'h1' 
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  const intensityMap = {
    low: {
      interval: [3000, 10000],
      duration: [100, 300],
      frequency: 0.3
    },
    medium: {
      interval: [2000, 6000],
      duration: [200, 600],
      frequency: 0.5
    },
    high: {
      interval: [800, 3000],
      duration: [300, 800],
      frequency: 0.8
    }
  };
  
  const settings = intensityMap[glitchIntensity];
  
  useEffect(() => {
    // Start occasional glitch effect
    const startGlitchInterval = () => {
      const randomDelay = Math.random() * (settings.interval[1] - settings.interval[0]) + settings.interval[0];
      
      setTimeout(() => {
        // Only glitch if the randomness check passes
        if (Math.random() < settings.frequency) {
          setIsGlitching(true);
          
          // Glitch for a short duration
          const glitchDuration = Math.random() * (settings.duration[1] - settings.duration[0]) + settings.duration[0];
          setTimeout(() => {
            setIsGlitching(false);
            startGlitchInterval();
          }, glitchDuration);
        } else {
          startGlitchInterval();
        }
      }, randomDelay);
    };
    
    startGlitchInterval();
    
    return () => {
      // Cleanup timers when component unmounts
      setIsGlitching(false);
    };
  }, [settings.duration, settings.frequency, settings.interval]);
  
  const variants = {
    normal: { skew: 0, x: 0 },
    glitch: { 
      skew: [0, -2, 1, -1, 0],
      x: [0, -2, 1, -1, 0],
      transition: { 
        duration: 0.2,
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    }
  };
  
  const Component = tag;
  
  return (
    <motion.div
      className={`relative ${className}`}
      initial="normal"
      animate={isGlitching ? "glitch" : "normal"}
      variants={variants}
    >
      <Component className="relative">
        {text}
        {isGlitching && (
          <>
            <span className="absolute inset-0 text-cyber-blue" style={{ 
              clipPath: 'polygon(0 15%, 100% 15%, 100% 40%, 0 40%)',
              transform: 'translate(-2px, 0)',
              opacity: 0.8
            }}>
              {text}
            </span>
            <span className="absolute inset-0 text-cyber-pink" style={{ 
              clipPath: 'polygon(0 65%, 100% 65%, 100% 90%, 0 90%)',
              transform: 'translate(2px, 0)',
              opacity: 0.8
            }}>
              {text}
            </span>
          </>
        )}
      </Component>
    </motion.div>
  );
};

export default GlitchText;
