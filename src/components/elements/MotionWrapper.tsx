import { motion, MotionProps, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface OptimizedMotionProps extends MotionProps {
  children: ReactNode;
}

export function OptimizedMotion({ children, ...props }: OptimizedMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      {...props}
      style={{
        ...props.style,
        willChange: "auto", // Let browser decide
      }}
    >
      {children}
    </motion.div>
  );
}
