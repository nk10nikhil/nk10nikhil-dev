import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

export default function Particles({
  quantity = 200,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(false);
  const isBlogPost =
    location.pathname.startsWith("/blogs/") && location.pathname !== "/blogs";
  const disabledRoutes = new Set([""]);
  const isRouteDisabled = disabledRoutes.has(location.pathname);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const circlesRef = useRef<Circle[]>([]);
  const canvasSizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const dprRef = useRef(1);
  const quantityRef = useRef(quantity);
  const staticityRef = useRef(staticity);
  const easeRef = useRef(ease);
  const isMobileRef = useRef(false);
  const lowPowerRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const visibleRef = useRef(true);
  const pageVisibleRef = useRef(true);
  const runningRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    updateViewport();
    dprRef.current = Math.min(window.devicePixelRatio || 1, 2);

    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    if (isBlogPost || isRouteDisabled || !isDesktop || !canvasRef.current) {
      return;
    }

    contextRef.current = canvasRef.current.getContext("2d");

    const updateResponsiveSettings = () => {
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const connection = (navigator as any).connection as
        | {
            saveData?: boolean;
            effectiveType?: string;
          }
        | undefined;

      const saveData = connection?.saveData === true;
      const slowNetwork = /2g|slow-2g/.test(connection?.effectiveType ?? "");
      const lowCoreDevice = (navigator.hardwareConcurrency ?? 8) <= 4;
      const lowPower = saveData || slowNetwork || lowCoreDevice;

      isMobileRef.current = isMobile;
      reducedMotionRef.current = prefersReducedMotion;
      lowPowerRef.current = lowPower;

      quantityRef.current = prefersReducedMotion
        ? Math.max(10, Math.floor(quantity * 0.2))
        : lowPower
          ? Math.max(18, Math.floor(quantity * 0.4))
          : isMobile
            ? Math.max(24, Math.floor(quantity * 0.65))
            : quantity;

      staticityRef.current = isMobile ? Math.max(staticity, 80) : staticity;
      easeRef.current = isMobile ? Math.max(ease, 80) : ease;

      const maxDpr = prefersReducedMotion ? 1 : lowPower || isMobile ? 1.25 : 2;
      dprRef.current = Math.min(window.devicePixelRatio || 1, maxDpr);
    };

    const resizeCanvas = () => {
      if (
        !canvasContainerRef.current ||
        !canvasRef.current ||
        !contextRef.current
      ) {
        return;
      }

      updateResponsiveSettings();

      circlesRef.current.length = 0;
      canvasSizeRef.current.w = canvasContainerRef.current.offsetWidth;
      canvasSizeRef.current.h = canvasContainerRef.current.offsetHeight;

      canvasRef.current.width = canvasSizeRef.current.w * dprRef.current;
      canvasRef.current.height = canvasSizeRef.current.h * dprRef.current;
      canvasRef.current.style.width = `${canvasSizeRef.current.w}px`;
      canvasRef.current.style.height = `${canvasSizeRef.current.h}px`;

      contextRef.current.setTransform(1, 0, 0, 1, 0, 0);
      contextRef.current.scale(dprRef.current, dprRef.current);
    };

    const clearContext = () => {
      if (!contextRef.current) {
        return;
      }

      contextRef.current.clearRect(
        0,
        0,
        canvasSizeRef.current.w,
        canvasSizeRef.current.h,
      );
    };

    const remapValue = (
      value: number,
      start1: number,
      end1: number,
      start2: number,
      end2: number,
    ): number => {
      const remapped =
        ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
      return remapped > 0 ? remapped : 0;
    };

    const circleParams = (): Circle => ({
      x: Math.floor(Math.random() * canvasSizeRef.current.w),
      y: Math.floor(Math.random() * canvasSizeRef.current.h),
      translateX: 0,
      translateY: 0,
      size: isMobileRef.current
        ? Math.random() * 2.2 + 0.7
        : Math.floor(Math.random() * 2) + 0.1,
      alpha: 0,
      targetAlpha: parseFloat(
        (isMobileRef.current
          ? Math.random() * 0.45 + 0.3
          : Math.random() * 0.6 + 0.1
        ).toFixed(2),
      ),
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      magnetism: 0.1 + Math.random() * 4,
    });

    const drawCircle = (circle: Circle, update = false) => {
      if (!contextRef.current) {
        return;
      }

      const { x, y, translateX, translateY, size, alpha } = circle;
      contextRef.current.translate(translateX, translateY);
      contextRef.current.beginPath();
      contextRef.current.arc(x, y, size, 0, 2 * Math.PI);
      contextRef.current.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      contextRef.current.fill();
      contextRef.current.setTransform(
        dprRef.current,
        0,
        0,
        dprRef.current,
        0,
        0,
      );

      if (!update) {
        circlesRef.current.push(circle);
      }
    };

    const drawParticles = () => {
      clearContext();

      for (let i = 0; i < quantityRef.current; i += 1) {
        drawCircle(circleParams());
      }
    };

    let lastFrame = 0;

    const animate = (t = 0) => {
      if (!runningRef.current) {
        return;
      }

      const frameInterval = reducedMotionRef.current
        ? 1000 / 12
        : lowPowerRef.current
          ? 1000 / 24
          : 0;

      if (frameInterval && t - lastFrame < frameInterval) {
        animationFrameRef.current = window.requestAnimationFrame(animate);
        return;
      }

      lastFrame = t;
      clearContext();

      circlesRef.current.forEach((circle, index) => {
        const edge = [
          circle.x + circle.translateX - circle.size,
          canvasSizeRef.current.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSizeRef.current.h - circle.y - circle.translateY - circle.size,
        ];

        const closestEdge = edge.reduce((a, b) => Math.min(a, b));
        const remapClosestEdge = parseFloat(
          remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
        );

        if (remapClosestEdge > 1) {
          circle.alpha += 0.02;
          if (circle.alpha > circle.targetAlpha) {
            circle.alpha = circle.targetAlpha;
          }
        } else {
          circle.alpha = circle.targetAlpha * remapClosestEdge;
        }

        const drift = reducedMotionRef.current
          ? 0.35
          : lowPowerRef.current
            ? 0.65
            : 1;

        circle.x += circle.dx * drift;
        circle.y += circle.dy * drift;
        // Remove mouse influence: translateX and translateY remain unchanged

        if (
          circle.x < -circle.size ||
          circle.x > canvasSizeRef.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSizeRef.current.h + circle.size
        ) {
          circlesRef.current.splice(index, 1);
          drawCircle(circleParams());
          return;
        }

        drawCircle(circle, true);
      });

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (
        runningRef.current ||
        !visibleRef.current ||
        !pageVisibleRef.current
      ) {
        return;
      }
      runningRef.current = true;
      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      runningRef.current = false;
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (visibleRef.current) {
          startAnimation();
          return;
        }
        stopAnimation();
      },
      { threshold: 0.05, rootMargin: "120px" },
    );

    if (canvasContainerRef.current) {
      observer.observe(canvasContainerRef.current);
    }

    const onVisibilityChange = () => {
      pageVisibleRef.current = document.visibilityState === "visible";
      if (pageVisibleRef.current) {
        startAnimation();
        return;
      }
      stopAnimation();
    };

    resizeCanvas();
    drawParticles();
    document.addEventListener("visibilitychange", onVisibilityChange);
    onVisibilityChange();
    startAnimation();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      stopAnimation();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [
    ease,
    isBlogPost,
    isDesktop,
    isRouteDisabled,
    quantity,
    refresh,
    staticity,
  ]);

  if (isBlogPost || isRouteDisabled || !isDesktop) {
    return null;
  }

  return (
    // <></>
    <div
      // className={cn(
      //   className,
      //   "overflow-hidden dark:bg-gradient-to-tl from-black/10 via-zinc-800/20 to-black/10",
      // )}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full pointer-events-none" />
    </div>
  );
}
