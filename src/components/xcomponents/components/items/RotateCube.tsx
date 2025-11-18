import styled from "styled-components";

const RotateCube = () => {
  return (
    <StyledWrapper>
      <div className="spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .spinner {
    width: 40.4px;
    height: 40.4px;
    --clr: #de00ff;
    --clr-alpha: rgb(247, 197, 159, 0.1);
    animation: spinner 1.8s infinite ease;
    transform-style: preserve-3d;
  }

  .spinner > div {
    background-color: var(--clr-alpha);
    height: 100%;
    position: absolute;
    width: 100%;
    border: 3.5px solid var(--clr);
  }

  .spinner div:nth-of-type(1) {
    transform: translateZ(-35.2px) rotateY(180deg);
  }

  .spinner div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  .spinner div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  .spinner div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  .spinner div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  .spinner div:nth-of-type(6) {
    transform: translateZ(35.2px);
  }

  @keyframes spinner {
    0% {
      transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
    }

    50% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
    }

    100% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
    }
  }
`;

export default RotateCube;

// import { memo } from "react";

// const RotateCube = memo(() => {
//   return (
//     <div className="flex items-center justify-center p-4">
//       <div className="spinner-3d">
//         {[...Array(6)].map((_, index) => (
//           <div key={index} className={`cube-face cube-face-${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// });

// RotateCube.displayName = "RotateCube";

// // Optimized CSS as string to inject
// const cubeStyles = `
// .spinner-3d {
//   width: 40.4px;
//   height: 40.4px;
//   --clr: #de00ff;
//   --clr-alpha: rgba(247, 197, 159, 0.1);
//   animation: spinner-rotate 1.6s infinite ease-in-out;
//   transform-style: preserve-3d;
//   will-change: transform;
//   backface-visibility: hidden;
// }

// .cube-face {
//   background-color: var(--clr-alpha);
//   height: 100%;
//   position: absolute;
//   width: 100%;
//   border: 3.5px solid var(--clr);
//   backface-visibility: hidden;
//   transform-style: preserve-3d;
// }

// .cube-face-1 {
//   transform: translateZ(-35.2px) rotateY(180deg);
// }

// .cube-face-2 {
//   transform: rotateY(-270deg) translateX(50%);
//   transform-origin: top right;
// }

// .cube-face-3 {
//   transform: rotateY(270deg) translateX(-50%);
//   transform-origin: center left;
// }

// .cube-face-4 {
//   transform: rotateX(90deg) translateY(-50%);
//   transform-origin: top center;
// }

// .cube-face-5 {
//   transform: rotateX(-90deg) translateY(50%);
//   transform-origin: bottom center;
// }

// .cube-face-6 {
//   transform: translateZ(35.2px);
// }

// @keyframes spinner-rotate {
//   0% {
//     transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
//   }
//   50% {
//     transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
//   }
//   100% {
//     transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
//   }
// }

// /* Performance optimizations */
// .spinner-3d,
// .cube-face {
//   transform-style: preserve-3d;
//   backface-visibility: hidden;
//   -webkit-backface-visibility: hidden;
//   -webkit-transform-style: preserve-3d;
// }

// /* Reduced motion support */
// @media (prefers-reduced-motion: reduce) {
//   .spinner-3d {
//     animation-duration: 3.2s;
//   }
// }

// /* Hardware acceleration */
// .spinner-3d {
//   transform: translate3d(0, 0, 0);
// }
// `;

// // Inject styles once
// if (typeof document !== "undefined") {
//   const styleId = "rotate-cube-styles";
//   if (!document.getElementById(styleId)) {
//     const styleSheet = document.createElement("style");
//     styleSheet.id = styleId;
//     styleSheet.textContent = cubeStyles;
//     document.head.appendChild(styleSheet);
//   }
// }

// export default RotateCube;
