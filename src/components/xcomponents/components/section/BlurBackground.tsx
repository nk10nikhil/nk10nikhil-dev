

import React, { memo, useEffect, useState } from "react";

const BlurBackground = memo(() => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Injected CSS Styles */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-20px) translateX(10px) scale(1.02); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(15px) translateX(-15px) scale(1.03); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-10px) translateX(5px) scale(1.01); }
        }
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-100px) translateX(50px) rotate(90deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-200px) translateX(-25px) rotate(180deg);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-150px) translateX(75px) rotate(270deg);
            opacity: 0.8;
          }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 12s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 8s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
      `}</style>

      {/* Background Container */}
      <div
        className="fixed inset-0 -z-20 overflow-hidden"
        style={{
          contain: "layout style paint",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      >
        {/* Main background with subtle gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-purple-950/10 to-background"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at ${mousePosition.x}% ${
              mousePosition.y
            }%,
                rgba(139, 92, 246, 0.15) 0%,
                transparent 50%),
              radial-gradient(ellipse 60% 40% at ${100 - mousePosition.x}% ${
              100 - mousePosition.y
            }%,
                rgba(99, 102, 241, 0.1) 0%,
                transparent 50%),
              var(--background)
            `,
          }}
        />

        {/* Animated gradient orbs with enhanced colors */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(147, 51, 234, 0.25) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)",
            filter: "blur(100px)",
            transform: "translateZ(0)",
          }}
        />

        <div
          className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[60%] rounded-full animate-float-medium"
          style={{
            background:
              "radial-gradient(circle, rgba(79, 70, 229, 0.3) 0%, rgba(79, 70, 229, 0.15) 50%, transparent 70%)",
            filter: "blur(120px)",
            transform: "translateZ(0)",
          }}
        />

        <div
          className="absolute top-[40%] right-[5%] w-[40%] h-[40%] rounded-full animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)",
            filter: "blur(80px)",
            transform: "translateZ(0)",
          }}
        />

        <div
          className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full animate-float-fast"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, rgba(236, 72, 153, 0.15) 50%, transparent 70%)",
            filter: "blur(90px)",
            transform: "translateZ(0)",
          }}
        />

        {/* New floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float-particle"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: `rgba(255, 255, 255, ${
                  Math.random() * 0.1 + 0.05
                })`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 30 + 20}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced overlay with gradient */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
              linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, transparent 50%)
            `,
          }}
        />

        {/* Enhanced noise texture with color */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E"),
              radial-gradient(ellipse at center, rgba(147, 51, 234, 0.05) 0%, transparent 50%)
            `,
            transform: "translateZ(0)",
          }}
        />

        {/* Subtle animated grid */}
        <div
          className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: "translateZ(0)",
          }}
        />
      </div>
    </>
  );
});

BlurBackground.displayName = "BlurBackground";

export default BlurBackground;
