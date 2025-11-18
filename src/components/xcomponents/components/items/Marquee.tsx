import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] gap-(--gap)",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around gap-(--gap)", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// import { cn } from "@/lib/utils";
// import type { ComponentPropsWithoutRef } from "react";
// import { memo, useMemo } from "react";

// interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
//   /**
//    * Optional CSS class name to apply custom styles
//    */
//   className?: string;
//   /**
//    * Whether to reverse the animation direction
//    * @default false
//    */
//   reverse?: boolean;
//   /**
//    * Whether to pause the animation on hover
//    * @default false
//    */
//   pauseOnHover?: boolean;
//   /**
//    * Content to be displayed in the marquee
//    */
//   children: React.ReactNode;
//   /**
//    * Whether to animate vertically instead of horizontally
//    * @default false
//    */
//   vertical?: boolean;
//   /**
//    * Number of times to repeat the content
//    * @default 4
//    */
//   repeat?: number;
//   /**
//    * Animation duration in seconds
//    * @default 40
//    */
//   duration?: number;
// }

// export const Marquee = memo(function Marquee({
//   className,
//   reverse = false,
//   pauseOnHover = false,
//   children,
//   vertical = false,
//   repeat = 4,
//   duration = 40,
//   ...props
// }: MarqueeProps) {
//   const repeatedChildren = useMemo(
//     () =>
//       Array.from({ length: repeat }, (_, i) => (
//         <div
//           key={i}
//           className={cn(
//             "flex shrink-0 justify-around gap-[--gap] will-change-transform",
//             {
//               "animate-marquee flex-row": !vertical,
//               "animate-marquee-vertical flex-col": vertical,
//               "group-hover:[animation-play-state:paused]": pauseOnHover,
//               "[animation-direction:reverse]": reverse,
//             }
//           )}
//           style={{
//             // Use CSS custom properties for better performance
//             ["--marquee-duration" as any]: `${duration}s`,
//           }}
//         >
//           {children}
//         </div>
//       )),
//     [repeat, vertical, pauseOnHover, reverse, duration, children]
//   );

//   return (
//     <div
//       {...props}
//       className={cn(
//         "group flex overflow-hidden p-2",
//         "gap-[--gap] [--duration:40s] [--gap:1rem]",
//         {
//           "flex-row": !vertical,
//           "flex-col": vertical,
//         },
//         className
//       )}
//       // Add accessibility attributes
//       aria-live="polite"
//       aria-relevant="additions"
//     >
//       {repeatedChildren}
//     </div>
//   );
// });

// // Optimized CSS styles for marquee animations
// const marqueeStyles = `
// @keyframes marquee {
//     0% {
//         transform: translateX(0);
//     }
//     100% {
//         transform: translateX(calc(-100% - var(--gap, 1rem)));
//     }
// }

// @keyframes marquee-vertical {
//     0% {
//         transform: translateY(0);
//     }
//     100% {
//         transform: translateY(calc(-100% - var(--gap, 1rem)));
//     }
// }

// .animate-marquee {
//     animation: marquee var(--marquee-duration, 40s) linear infinite;
//     animation-play-state: running;
// }

// .animate-marquee-vertical {
//     animation: marquee-vertical var(--marquee-duration, 40s) linear infinite;
//     animation-play-state: running;
// }

// /* Performance optimizations */
// .animate-marquee,
// .animate-marquee-vertical {
//     will-change: transform;
//     backface-visibility: hidden;
//     transform: translate3d(0, 0, 0);
// }

// /* Reduced motion support */
// @media (prefers-reduced-motion: reduce) {
//     .animate-marquee,
//     .animate-marquee-vertical {
//         animation-duration: calc(var(--marquee-duration, 40s) * 2);
//     }

//     .group-hover\:\[animation-play-state\:paused\]:hover {
//         animation-play-state: running !important;
//     }
// }

// /* Pause animation when tab is hidden */
// @media (prefers-reduced-motion: no-preference) {
//     .animate-marquee,
//     .animate-marquee-vertical {
//         animation-play-state: running;
//     }

//     /* Pause when not in viewport for better performance */
//     .animate-marquee:not(:in-viewport),
//     .animate-marquee-vertical:not(:in-viewport) {
//         animation-play-state: paused;
//     }
// }

// /* Hardware acceleration */
// .will-change-transform {
//     will-change: transform;
// }
// `;

// // Inject optimized styles once
// if (typeof document !== "undefined") {
//   const styleId = "marquee-optimized-styles";
//   if (!document.getElementById(styleId)) {
//     const styleSheet = document.createElement("style");
//     styleSheet.id = styleId;
//     styleSheet.textContent = marqueeStyles;
//     document.head.appendChild(styleSheet);
//   }
// }

// export default Marquee;
