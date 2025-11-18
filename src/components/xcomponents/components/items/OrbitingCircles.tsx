import { cn } from "@/lib/utils";
import React from "react";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              `absolute flex size-(--icon-size) transform-gpu animate-orbit items-center justify-center rounded-full`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

// import { cn } from "@/lib/utils";
// import React, { memo, useMemo } from "react";

// export interface OrbitingCirclesProps
//   extends React.HTMLAttributes<HTMLDivElement> {
//   className?: string;
//   children?: React.ReactNode;
//   reverse?: boolean;
//   duration?: number;
//   delay?: number;
//   radius?: number;
//   path?: boolean;
//   iconSize?: number;
//   speed?: number;
// }

// export const OrbitingCircles = memo(function OrbitingCircles({
//   className,
//   children,
//   reverse,
//   duration = 20,
//   radius = 160,
//   path = true,
//   iconSize = 30,
//   speed = 1,
//   ...props
// }: OrbitingCirclesProps) {
//   const calculatedDuration = useMemo(() => duration / speed, [duration, speed]);

//   const childrenArray = useMemo(
//     () => React.Children.toArray(children),
//     [children]
//   );

//   const pathElement = useMemo(() => {
//     if (!path) return null;

//     return (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         version="1.1"
//         className="pointer-events-none absolute inset-0 size-full"
//         aria-hidden="true"
//       >
//         <circle
//           className="stroke-black/10 stroke-1 dark:stroke-white/10"
//           cx="50%"
//           cy="50%"
//           r={radius}
//           fill="none"
//         />
//       </svg>
//     );
//   }, [path, radius]);

//   const orbitingElements = useMemo(
//     () =>
//       childrenArray.map((child, index) => {
//         const angle = (360 / childrenArray.length) * index;

//         return (
//           <div
//             key={index}
//             style={
//               {
//                 "--duration": `${calculatedDuration}s`,
//                 "--radius": `${radius}px`,
//                 "--angle": `${angle}deg`,
//                 "--icon-size": `${iconSize}px`,
//                 animationDelay: reverse
//                   ? `calc(var(--duration) * ${index / childrenArray.length})`
//                   : "0s",
//               } as React.CSSProperties
//             }
//             className={cn(
//               "absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full",
//               "will-change-transform", // Performance hint
//               "backface-visibility-hidden", // Prevent flickering
//               "[transform-style:preserve-3d]", // Better 3D rendering
//               { "[animation-direction:reverse]": reverse },
//               className
//             )}
//             {...props}
//           >
//             {child}
//           </div>
//         );
//       }),
//     [
//       childrenArray,
//       calculatedDuration,
//       radius,
//       iconSize,
//       reverse,
//       className,
//       props,
//     ]
//   );

//   return (
//     <>
//       {pathElement}
//       {orbitingElements}
//     </>
//   );
// });

// // Add optimized CSS for the orbit animation
// const orbitStyles = `
// @keyframes orbit {
//   0% {
//     transform:
//       rotate(0deg)
//       translateY(calc(var(--radius) - var(--icon-size) / 2))
//       rotate(0deg);
//   }
//   100% {
//     transform:
//       rotate(360deg)
//       translateY(calc(var(--radius) - var(--icon-size) / 2))
//       rotate(-360deg);
//   }
// }

// .animate-orbit {
//   animation: orbit var(--duration) linear infinite;
//   animation-play-state: running;
// }

// @media (prefers-reduced-motion: reduce) {
//   .animate-orbit {
//     animation-duration: calc(var(--duration) * 2);
//   }
// }

// .will-change-transform {
//   will-change: transform;
// }

// .backface-visibility-hidden {
//   backface-visibility: hidden;
// }

// [transform-style-preserve-3d] {
//   transform-style: preserve-3d;
// }
// `;

// // Inject styles once
// if (typeof document !== "undefined") {
//   const styleId = "orbiting-circles-styles";
//   if (!document.getElementById(styleId)) {
//     const styleSheet = document.createElement("style");
//     styleSheet.id = styleId;
//     styleSheet.textContent = orbitStyles;
//     document.head.appendChild(styleSheet);
//   }
// }

// export default OrbitingCircles;
