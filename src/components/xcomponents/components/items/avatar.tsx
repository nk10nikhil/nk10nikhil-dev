"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };

// "use client";

// import * as React from "react";

// import { cn } from "@/lib/utils";

// const Avatar = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentPropsWithoutRef<"div">
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
//       "bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700",
//       "border border-gray-300/50 dark:border-gray-600/50",
//       "shadow-sm",
//       "transition-all duration-200 ease-in-out",
//       "hover:scale-105 hover:shadow-md",
//       "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900",
//       className
//     )}
//     {...props}
//   />
// ));
// Avatar.displayName = "Avatar";

// const AvatarImage = React.forwardRef<
//   HTMLImageElement,
//   React.ImgHTMLAttributes<HTMLImageElement>
// >(({ className, loading = "lazy", decoding = "async", ...props }, ref) => (
//   <img
//     ref={ref}
//     className={cn(
//       "aspect-square h-full w-full object-cover",
//       "transition-opacity duration-200 ease-in-out",
//       "hover:opacity-90",
//       className
//     )}
//     loading={loading}
//     decoding={decoding}
//     {...props}
//   />
// ));
// AvatarImage.displayName = "AvatarImage";

// const AvatarFallback = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentPropsWithoutRef<"div">
// >(({ className, children, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "flex h-full w-full items-center justify-center rounded-full",
//       "bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700",
//       "text-gray-600 dark:text-gray-300 font-medium text-sm",
//       "border border-gray-400/30 dark:border-gray-500/30",
//       "shadow-inner",
//       "animate-pulse", // Subtle loading animation
//       className
//     )}
//     {...props}
//   >
//     {children}
//   </div>
// ));
// AvatarFallback.displayName = "AvatarFallback";

// export { Avatar, AvatarImage, AvatarFallback };
