/**
 * Optimized animation variants for better performance
 * Uses transform-only animations (GPU accelerated) instead of layout changes
 */

export const fadeInUp = {
  initial: { opacity: 0, y: 20, willChange: "transform, opacity" },
  animate: {
    opacity: 1,
    y: 0,
    willChange: "auto",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1], // Custom easing for smoother animation
    },
  },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20, willChange: "transform, opacity" },
  animate: {
    opacity: 1,
    y: 0,
    willChange: "auto",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30, willChange: "transform, opacity" },
  animate: {
    opacity: 1,
    x: 0,
    willChange: "auto",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30, willChange: "transform, opacity" },
  animate: {
    opacity: 1,
    x: 0,
    willChange: "auto",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8, willChange: "transform, opacity" },
  animate: {
    opacity: 1,
    scale: 1,
    willChange: "auto",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Hover animations - only transform-based for performance
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeOut" },
};

export const hoverScaleLarge = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeOut" },
};

export const hoverLift = {
  y: -5,
  transition: { duration: 0.2, ease: "easeOut" },
};

// Optimized transition config for smoother animations
export const smoothTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.4,
};

export const quickTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1],
  duration: 0.2,
};

// Viewport animation config - optimized for performance
export const viewportConfig = {
  once: true, // Animate only once when in view
  amount: 0.1, // Trigger when 10% is visible
  margin: "0px 0px -100px 0px", // Trigger slightly before element enters viewport
};

export const viewportConfigStrict = {
  once: true,
  amount: 0.3, // Trigger when 30% is visible
  margin: "0px 0px -50px 0px",
};

/**
 * Debounce function for scroll events
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for high-frequency events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Request animation frame throttle for smooth animations
 */
export const rafThrottle = <T extends (...args: any[]) => any>(
  func: T
): ((...args: Parameters<T>) => void) => {
  let rafId: number | null = null;

  return (...args: Parameters<T>) => {
    if (rafId) return;

    rafId = requestAnimationFrame(() => {
      func(...args);
      rafId = null;
    });
  };
};
