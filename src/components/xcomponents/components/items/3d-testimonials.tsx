import React, { useRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

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
  /**
   * If true, automatically repeats children enough to fill the visible area
   */
  autoFill?: boolean;
  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;
  /**
   * ARIA live region politeness
   */
  ariaLive?: "off" | "polite" | "assertive";
  /**
   * ARIA role
   */
  ariaRole?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ariaLabel,
  ariaLive = "off",
  ariaRole = "region",
  ...props
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      {...props}
      ref={marqueeRef}
      data-slot="marquee"
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] gap-(--gap)",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      aria-label={ariaLabel}
      aria-live={ariaLive}
      role={ariaRole && typeof ariaRole === "string" ? ariaRole : "region"}
      tabIndex={0}
    >
      {React.useMemo(
        () => (
          <>
            {Array.from({ length: repeat }, (_, i) => (
              <div
                key={i}
                className={cn(
                  !vertical ? "flex-row gap-(--gap)" : "flex-col gap-(--gap)",
                  "flex shrink-0 justify-around",
                  !vertical && "animate-marquee flex-row",
                  vertical && "animate-marquee-vertical flex-col",
                  pauseOnHover && "group-hover:[animation-play-state:paused]",
                  reverse && "[animation-direction:reverse]"
                )}
              >
                {children}
              </div>
            ))}
          </>
        ),
        [repeat, children, vertical, pauseOnHover, reverse]
      )}
    </div>
  );
}

// import React, { useRef, useMemo, memo } from "react";
// import type { ComponentPropsWithoutRef } from "react";
// import { cn } from "@/lib/utils";

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
//   /**
//    * ARIA label for accessibility
//    */
//   ariaLabel?: string;
//   /**
//    * ARIA live region politeness
//    */
//   ariaLive?: "off" | "polite" | "assertive";
//   /**
//    * ARIA role
//    */
//   ariaRole?: string;
// }

// export const Marquee = memo(function Marquee({
//   className,
//   reverse = false,
//   pauseOnHover = false,
//   children,
//   vertical = false,
//   repeat = 4,
//   duration = 40,
//   ariaLabel,
//   ariaLive = "off",
//   ariaRole = "region",
//   ...props
// }: MarqueeProps) {
//   const marqueeRef = useRef<HTMLDivElement>(null);

//   const marqueeItems = useMemo(
//     () =>
//       Array.from({ length: repeat }, (_, i) => (
//         <div
//           key={i}
//           className={cn(
//             "flex shrink-0 justify-around gap-[--gap] will-change-transform",
//             {
//               "flex-row animate-marquee": !vertical,
//               "flex-col animate-marquee-vertical": vertical,
//               "group-hover:[animation-play-state:paused]": pauseOnHover,
//               "[animation-direction:reverse]": reverse,
//             }
//           )}
//           style={{
//             ["--marquee-duration" as any]: `${duration}s`,
//           }}
//         >
//           {children}
//         </div>
//       )),
//     [repeat, children, vertical, pauseOnHover, reverse, duration]
//   );

//   return (
//     <div
//       {...props}
//       ref={marqueeRef}
//       className={cn(
//         "group flex overflow-hidden p-2 gap-[--gap]",
//         {
//           "flex-row": !vertical,
//           "flex-col": vertical,
//         },
//         className
//       )}
//       aria-label={ariaLabel}
//       aria-live={ariaLive}
//       role={ariaRole}
//       tabIndex={0}
//     >
//       {marqueeItems}
//     </div>
//   );
// });

// // Optimized CSS for marquee animations
// const marqueeStyles = `
// @keyframes marquee {
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(calc(-100% - var(--gap, 1rem)));
//   }
// }

// @keyframes marquee-vertical {
//   0% {
//     transform: translateY(0);
//   }
//   100% {
//     transform: translateY(calc(-100% - var(--gap, 1rem)));
//   }
// }

// .animate-marquee {
//   animation: marquee var(--marquee-duration, 40s) linear infinite;
//   animation-play-state: running;
// }

// .animate-marquee-vertical {
//   animation: marquee-vertical var(--marquee-duration, 40s) linear infinite;
//   animation-play-state: running;
// }

// /* Performance optimizations */
// .animate-marquee,
// .animate-marquee-vertical {
//   will-change: transform;
//   backface-visibility: hidden;
//   transform: translate3d(0, 0, 0);
// }

// /* Reduced motion support */
// @media (prefers-reduced-motion: reduce) {
//   .animate-marquee,
//   .animate-marquee-vertical {
//     animation-duration: calc(var(--marquee-duration, 40s) * 2);
//   }

//   .group-hover\:\[animation-play-state\:paused\]:hover {
//     animation-play-state: running !important;
//   }
// }

// /* Hardware acceleration */
// .will-change-transform {
//   will-change: transform;
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
