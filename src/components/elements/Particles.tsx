import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";

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
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const location = useLocation();
  const isBlogPost =
    location.pathname.startsWith("/blogs/") && location.pathname !== "/blogs";

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const circlesRef = useRef<Circle[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const dprRef = useRef(1);
  const quantityRef = useRef(quantity);
  const staticityRef = useRef(staticity);
  const easeRef = useRef(ease);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    dprRef.current = Math.min(window.devicePixelRatio || 1, 2);
  }, []);

  useEffect(() => {
    if (isBlogPost || !canvasRef.current) {
      return;
    }

    contextRef.current = canvasRef.current.getContext("2d");

    const updateResponsiveSettings = () => {
      const isMobile = window.innerWidth < 768;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      quantityRef.current = isMobile
        ? Math.max(20, Math.floor(quantity * 0.45))
        : quantity;
      staticityRef.current = isMobile ? Math.max(staticity, 80) : staticity;
      easeRef.current = isMobile ? Math.max(ease, 80) : ease;

      const maxDpr = isMobile || prefersReducedMotion ? 1.25 : 2;
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
      size: Math.floor(Math.random() * 2) + 0.1,
      alpha: 0,
      targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
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

    const animate = () => {
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

        circle.x += circle.dx;
        circle.y += circle.dy;
        circle.translateX +=
          (mouseRef.current.x / (staticityRef.current / circle.magnetism) -
            circle.translateX) /
          easeRef.current;
        circle.translateY +=
          (mouseRef.current.y / (staticityRef.current / circle.magnetism) -
            circle.translateY) /
          easeRef.current;

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

    const onPointerMove = (event: MouseEvent) => {
      if (!canvasRef.current) {
        return;
      }

      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSizeRef.current;
      const x = event.clientX - rect.left - w / 2;
      const y = event.clientY - rect.top - h / 2;
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;

      if (inside) {
        mouseRef.current.x = x;
        mouseRef.current.y = y;
      }
    };

    resizeCanvas();
    drawParticles();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onPointerMove);
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [ease, isBlogPost, quantity, refresh, staticity]);

  if (isBlogPost) {
    return null;
  }

  return (
    <div
      className={cn(
        className,
        "pointer-events-none overflow-hidden dark:bg-gradient-to-tl from-black via-zinc-600/20 to-black",
      )}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
