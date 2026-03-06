import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/elements/ThemeProvider";
import {
  useState,
  useEffect,
  lazy,
  Suspense,
  useCallback,
  useMemo,
} from "react";
import BackToTopButton from "@/components/elements/BackToTopButton";
import Loader from "@/pages/Loader";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import { useRuntimeProfile } from "@/hooks/useRuntimeProfile";

// Eager load the main page for instant access
import Index from "@/pages/Index";

// Lazy load secondary pages (loaded after initial render)
const Projects = lazy(() => import("@/pages/Projects"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Services = lazy(() => import("@/pages/Services"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Lightweight fallback loader
const PAGE_LOADER_KEYFRAMES = `
  @keyframes riseIn {
    0% { transform: translateZ(-100px) scale(0.3); opacity: 0; }
    50% { transform: translateZ(0) scale(1); opacity: 1; }
    100% { transform: translateZ(30px) scale(0.5); opacity: 0.4; }
  }
  @keyframes cubeSpin {
    0% { transform: rotateX(0deg) rotateY(0deg); }
    100% { transform: rotateX(360deg) rotateY(360deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  @keyframes dots {
    0%, 20% { content: '.'; }
    40% { content: '..'; }
    60%, 100% { content: '...'; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes glow {
    0%, 100% { filter: drop-shadow(0 0 15px rgba(147, 51, 234, 0.7)); }
    50% { filter: drop-shadow(0 0 25px rgba(147, 51, 234, 0.9)); }
  }
  @keyframes orbitLCS {
    from { transform: rotate3d(1, 0, 1, 0deg) translateX(100px) rotate3d(1, 0, 1, 0deg); }
    to { transform: rotate3d(1, 0, 1, 360deg) translateX(100px) rotate3d(1, 0, 1, -360deg); }
  }
`;

const PAGE_LOADER_BLOCKS = Array.from({ length: 9 });

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-transparent">
    <div
      className="matrix-loader-wrapper"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <style>{PAGE_LOADER_KEYFRAMES}</style>

      <div
        className="matrix-loader"
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="cube"
          style={{
            width: 120,
            height: 120,
            position: "relative",
            transformStyle: "preserve-3d",
            animation: "cubeSpin 8s infinite linear",
          }}
        >
          {/* Layer 1 */}
          <div
            className="layer l1"
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
              gap: 4,
              transformStyle: "preserve-3d",
              border: "1px solid hsl(var(--border))",
              background: "rgba(255, 255, 255, 0.02)",
              boxShadow: "inset 0 0 10px rgba(147, 51, 234, 0.3)",
              borderRadius: 8,
              transform: "translateZ(-30px)",
            }}
          >
            {PAGE_LOADER_BLOCKS.map((_, i) => (
              <div
                key={i}
                className="block"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 4,
                  transform: "translateZ(-100px) scale(0.3)",
                  opacity: 0,
                  animation: "riseIn 2.5s infinite ease-in-out",
                  background: "hsl(var(--primary))",
                  boxShadow: "0 0 12px hsl(var(--primary)/0.7)",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          {/* Layer 2 */}
          <div
            className="layer l2"
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
              gap: 4,
              transformStyle: "preserve-3d",
              border: "1px solid hsl(var(--border))",
              background: "rgba(255, 255, 255, 0.02)",
              boxShadow: "inset 0 0 10px rgba(147, 51, 234, 0.3)",
              borderRadius: 8,
              transform: "translateZ(0)",
            }}
          >
            {PAGE_LOADER_BLOCKS.map((_, i) => (
              <div
                key={i}
                className="block"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 4,
                  transform: "translateZ(-100px) scale(0.3)",
                  opacity: 0,
                  animation: "riseIn 2.5s infinite ease-in-out",
                  background: "#8b5cf6",
                  boxShadow: "0 0 12px rgba(139, 92, 246, 0.7)",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          {/* Layer 3 */}
          <div
            className="layer l3"
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
              gap: 4,
              transformStyle: "preserve-3d",
              border: "1px solid hsl(var(--border))",
              background: "rgba(255, 255, 255, 0.02)",
              boxShadow: "inset 0 0 10px rgba(147, 51, 234, 0.3)",
              borderRadius: 8,
              transform: "translateZ(30px)",
            }}
          >
            {PAGE_LOADER_BLOCKS.map((_, i) => (
              <div
                key={i}
                className="block"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 4,
                  transform: "translateZ(-100px) scale(0.3)",
                  opacity: 0,
                  animation: "riseIn 2.5s infinite ease-in-out",
                  background: "#a855f7",
                  boxShadow: "0 0 12px rgba(168, 85, 247, 0.7)",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced visual elements */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="center-glow"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, hsl(var(--primary)/0.4) 0%, transparent 70%)",
            filter: "blur(10px)",
            zIndex: -1,
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: "-40px",
          background:
            "linear-gradient(to right, transparent, hsl(var(--primary)/0.05), transparent)",
          animation: "pulse 3s ease-in-out infinite",
        }}
      />

      {/* Floating orbital elements */}
      <div
        style={{
          position: "absolute",
          width: 200,
          height: 200,
          animation: "float 4s ease-in-out infinite",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 8,
            height: 8,
            background: "hsl(var(--primary))",
            borderRadius: "50%",
            animation: "orbitLCS 6s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 6,
            height: 6,
            background: "#8b5cf6",
            borderRadius: "50%",
            animation: "orbitLCS 8s linear infinite reverse",
          }}
        />
      </div>

      {/* Loading text */}
      <div
        style={{
          position: "absolute",
          bottom: -64,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <p
          className="text-lg font-medium text-foreground"
          style={{ animation: "pulse 1.5s ease-in-out infinite" }}
        >
          Loading
          <span
            style={{
              animation: "dots 1.5s steps(4, end) infinite",
            }}
          >
            ...
          </span>
        </p>
      </div>
    </div>
  </div>
);

// Inner app component with preloader hook
const AppContent = () => {
  const { lowPower } = useRuntimeProfile();
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [transitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    const connection = (
      navigator as Navigator & {
        connection?: {
          saveData?: boolean;
          effectiveType?: string;
        };
      }
    ).connection;

    const saveData = connection?.saveData === true;
    const slowNetwork = /2g|slow-2g/.test(connection?.effectiveType ?? "");
    if (saveData || slowNetwork || lowPower) {
      return;
    }

    const schedule =
      "requestIdleCallback" in window
        ? (cb: () => void) =>
            (window as any).requestIdleCallback(cb, { timeout: 2500 })
        : (cb: () => void) => window.setTimeout(cb, 1200);

    const id = schedule(() => {
      // Prefetch only likely next routes after initial paint.
      void import("@/pages/Projects");
      void import("@/pages/About");
    });

    const prefetchRemainingRoutes = () => {
      void import("@/pages/Contact");
      void import("@/pages/Services");
      void import("@/pages/NotFound");
      window.removeEventListener("pointerdown", prefetchRemainingRoutes);
      window.removeEventListener("keydown", prefetchRemainingRoutes);
    };

    window.addEventListener("pointerdown", prefetchRemainingRoutes, {
      once: true,
      passive: true,
    });
    window.addEventListener("keydown", prefetchRemainingRoutes, {
      once: true,
    });

    return () => {
      window.removeEventListener("pointerdown", prefetchRemainingRoutes);
      window.removeEventListener("keydown", prefetchRemainingRoutes);

      const cancelIdle = (window as any).cancelIdleCallback as
        | ((handle: any) => void)
        | undefined;
      if (typeof cancelIdle === "function") {
        try {
          cancelIdle(id);
        } catch {
          // ignore
        }
        return;
      }

      clearTimeout(id as any);
    };
  }, [lowPower]);

  useEffect(() => {
    // Keep fixed startup delay for branded intro timing consistency.
    let loaderTimer: number | undefined;

    const contentTimer = window.setTimeout(() => {
      setContentReady(true);

      // Start transitioning out the loader after content is ready.
      loaderTimer = window.setTimeout(() => {
        setLoading(false);
      }, 10);
    }, 6000);

    return () => {
      window.clearTimeout(contentTimer);
      if (loaderTimer !== undefined) {
        window.clearTimeout(loaderTimer);
      }
    };
  }, []);

  const handleTransitionEnd = useCallback(() => {
    setTransitionComplete(true);
  }, []);

  const contentStyle = useMemo(
    () => ({
      opacity: contentReady ? 1 : 0,
      transition: "opacity 0.4s ease-in",
      pointerEvents: contentReady ? ("auto" as const) : ("none" as const),
    }),
    [contentReady],
  );

  return (
    <>
      {/* Always render loader first when not complete */}
      {!transitionComplete && (
        <Loader isLoading={loading} onTransitionEnd={handleTransitionEnd} />
      )}

      <div
        className="relative z-[1] bg-background min-h-screen"
        {...(contentStyle && { style: contentStyle })}
      >
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <BackToTopButton />
      </div>
    </>
  );
};

export function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" forcedTheme="dark">
        <TooltipProvider delayDuration={200}>
          <Toaster />
          <Sonner />
          <AppContent />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
