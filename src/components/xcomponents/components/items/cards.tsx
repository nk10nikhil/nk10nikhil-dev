import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

// import * as React from "react";
// import { cn } from "@/lib/utils";

// // Optimized Card component with performance enhancements
// const Card = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "rounded-xl border bg-card text-card-foreground shadow-sm",
//       "transition-all duration-200 ease-in-out",
//       "hover:shadow-md hover:border-border/70",
//       "backdrop-blur-sm bg-card/95",
//       "transform-gpu", // Force GPU acceleration
//       className
//     )}
//     style={{
//       willChange: "transform, box-shadow, border-color",
//       contentVisibility: "auto",
//     }}
//     {...props}
//   />
// ));
// Card.displayName = "Card";

// // Optimized CardHeader with better spacing
// const CardHeader = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "flex flex-col space-y-2 p-6 pb-4",
//       "bg-gradient-to-b from-transparent to-transparent",
//       className
//     )}
//     style={{ willChange: "transform" }}
//     {...props}
//   />
// ));
// CardHeader.displayName = "CardHeader";

// // Enhanced CardTitle with better typography
// const CardTitle = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLHeadingElement>
// >(({ className, ...props }, ref) => (
//   <h3
//     ref={ref}
//     className={cn(
//       "text-2xl font-bold leading-tight tracking-tight",
//       "bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent",
//       "transition-all duration-300",
//       "hover:from-primary hover:to-primary/80",
//       className
//     )}
//     style={{ willChange: "color, background-image" }}
//     {...props}
//   />
// ));
// CardTitle.displayName = "CardTitle";

// // Optimized CardDescription
// const CardDescription = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLParagraphElement>
// >(({ className, ...props }, ref) => (
//   <p
//     ref={ref}
//     className={cn(
//       "text-sm text-muted-foreground leading-relaxed",
//       "transition-colors duration-200",
//       "group-hover:text-foreground/80", // Works when parent has group class
//       "line-clamp-3", // Prevent text overflow
//       className
//     )}
//     style={{ willChange: "color" }}
//     {...props}
//   />
// ));
// CardDescription.displayName = "CardDescription";

// // Enhanced CardContent with better performance
// const CardContent = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn("p-6 pt-0", "space-y-4", className)}
//     style={{ contentVisibility: "auto" }}
//     {...props}
//   />
// ));
// CardContent.displayName = "CardContent";

// // Optimized CardFooter
// const CardFooter = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "flex items-center p-6 pt-4",
//       "bg-gradient-to-t from-transparent to-transparent",
//       "border-t border-border/50",
//       "transition-colors duration-200",
//       className
//     )}
//     style={{ willChange: "transform" }}
//     {...props}
//   />
// ));
// CardFooter.displayName = "CardFooter";

// // Additional enhanced Card variants
// interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
//   variant?: "default" | "gradient" | "glass" | "elevated";
// }

// const EnhancedCard = React.forwardRef<HTMLDivElement, CardProps>(
//   ({ className, variant = "default", ...props }, ref) => {
//     const variantStyles = {
//       default: "bg-card border shadow-sm",
//       gradient:
//         "bg-gradient-to-br from-card via-card/95 to-card/90 border-0 shadow-lg",
//       glass: "bg-card/80 backdrop-blur-md border border-white/10 shadow-lg",
//       elevated:
//         "bg-card shadow-xl border-0 hover:shadow-2xl transform hover:-translate-y-1",
//     };

//     return (
//       <div
//         ref={ref}
//         className={cn(
//           "rounded-xl transition-all duration-300 ease-out",
//           variantStyles[variant],
//           "transform-gpu",
//           className
//         )}
//         style={{
//           willChange: "transform, box-shadow, opacity",
//           contentVisibility: "auto",
//         }}
//         {...props}
//       />
//     );
//   }
// );
// EnhancedCard.displayName = "EnhancedCard";

// // Shimmer loading component for better UX
// const CardSkeleton = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "rounded-xl border bg-card/50 animate-pulse",
//       "transform-gpu",
//       className
//     )}
//     style={{ willChange: "opacity" }}
//     {...props}
//   />
// ));
// CardSkeleton.displayName = "CardSkeleton";

// // Compact card variant for dense layouts
// const CompactCard = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "rounded-lg border bg-card text-card-foreground shadow-xs",
//       "transition-all duration-150 ease-in-out",
//       "hover:shadow-sm hover:border-border/60",
//       "transform-gpu",
//       "p-4", // Reduced padding
//       className
//     )}
//     style={{
//       willChange: "transform, box-shadow",
//       contentVisibility: "auto",
//     }}
//     {...props}
//   />
// ));
// CompactCard.displayName = "CompactCard";

// export {
//   Card,
//   CardHeader,
//   CardFooter,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   EnhancedCard,
//   CardSkeleton,
//   CompactCard,
// };
