export const smoothAnimationConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
  },
};

// For scroll animations
export const scrollAnimationConfig = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: {
    duration: 0.4,
    ease: "easeOut",
  },
};

// Use will-change sparingly for better performance
export const performantMotionProps = {
  style: { willChange: "transform, opacity" },
  layout: false, // Disable layout animations unless needed
};
