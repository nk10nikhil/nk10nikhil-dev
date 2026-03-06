import { useRef, useEffect } from "react";
import { useRuntimeProfile } from "@/hooks/useRuntimeProfile";

const LetterGlitch = ({
  glitchColors = ["#2b4539", "#61dca3", "#61b3dc"],
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789",
}: {
  glitchColors?: string[];
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  characters?: string;
}) => {
  const profile = useRuntimeProfile();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const letters = useRef<
    {
      char: string;
      color: string;
      targetColor: string;
      colorProgress: number;
    }[]
  >([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const lastGlitchTime = useRef(Date.now());
  const lastFrameTime = useRef(0);
  const profileRef = useRef({ lowPower: false, reducedMotion: false });
  const inViewRef = useRef(true);
  const pageVisibleRef = useRef(true);
  const activeUntilRef = useRef(0);
  const dirtyRef = useRef(true);
  const runningRef = useRef(false);

  const lettersAndSymbols = Array.from(characters);

  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  const getRandomChar = () => {
    return lettersAndSymbols[
      Math.floor(Math.random() * lettersAndSymbols.length)
    ];
  };

  const getRandomColor = () => {
    return glitchColors[Math.floor(Math.random() * glitchColors.length)];
  };

  const hexToRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (_m, r, g, b) => {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const interpolateColor = (
    start: { r: number; g: number; b: number },
    end: { r: number; g: number; b: number },
    factor: number,
  ) => {
    const result = {
      r: Math.round(start.r + (end.r - start.r) * factor),
      g: Math.round(start.g + (end.g - start.g) * factor),
      b: Math.round(start.b + (end.b - start.b) * factor),
    };
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
  };

  const calculateGrid = (width: number, height: number) => {
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  };

  const initializeLetters = (columns: number, rows: number) => {
    grid.current = { columns, rows };
    const totalLetters = columns * rows;
    letters.current = Array.from({ length: totalLetters }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
    }));
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);
    drawLetters();
  };

  const drawLetters = () => {
    if (!context.current || letters.current.length === 0) return;
    const ctx = context.current;
    const { width, height } = canvasRef.current!.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = "top";

    letters.current.forEach((letter, index) => {
      const x = (index % grid.current.columns) * charWidth;
      const y = Math.floor(index / grid.current.columns) * charHeight;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });

    dirtyRef.current = false;
  };

  const updateLetters = (ratio: number) => {
    if (!letters.current || letters.current.length === 0) return;

    const updateCount = Math.max(1, Math.floor(letters.current.length * ratio));

    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.current.length);
      if (!letters.current[index]) continue;

      letters.current[index].char = getRandomChar();
      letters.current[index].targetColor = getRandomColor();
      dirtyRef.current = true;

      if (!smooth) {
        letters.current[index].color = letters.current[index].targetColor;
        letters.current[index].colorProgress = 1;
      } else {
        letters.current[index].colorProgress = 0;
      }
    }
  };

  const handleSmoothTransitions = () => {
    let needsRedraw = false;
    letters.current.forEach((letter) => {
      if (letter.colorProgress < 1) {
        letter.colorProgress += 0.05;
        if (letter.colorProgress > 1) letter.colorProgress = 1;

        const startRgb = hexToRgb(letter.color);
        const endRgb = hexToRgb(letter.targetColor);
        if (startRgb && endRgb) {
          letter.color = interpolateColor(
            startRgb,
            endRgb,
            letter.colorProgress,
          );
          needsRedraw = true;
        }
      }
    });

    if (needsRedraw) {
      dirtyRef.current = true;
      drawLetters();
    }
  };

  const animate = () => {
    if (!runningRef.current) {
      return;
    }

    const { lowPower, reducedMotion } = profileRef.current;
    const frameInterval = 1000 / (reducedMotion ? 12 : lowPower ? 20 : 30);
    const nowMs = performance.now();
    if (frameInterval && nowMs - lastFrameTime.current < frameInterval) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    lastFrameTime.current = nowMs;

    const effectiveGlitchSpeed = reducedMotion
      ? glitchSpeed * 4
      : lowPower
        ? glitchSpeed * 2
        : glitchSpeed;
    const updateRatio = reducedMotion ? 0.008 : lowPower ? 0.02 : 0.05;
    const activePhase = nowMs <= activeUntilRef.current;

    const now = Date.now();
    if (activePhase && now - lastGlitchTime.current >= effectiveGlitchSpeed) {
      updateLetters(updateRatio);
      lastGlitchTime.current = now;
    }

    if (activePhase && smooth && !lowPower && !reducedMotion) {
      handleSmoothTransitions();
    }

    if (dirtyRef.current) {
      drawLetters();
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    profileRef.current = {
      reducedMotion: profile.reducedMotion,
      lowPower: profile.lowPower,
    };

    context.current = canvas.getContext("2d");
    resizeCanvas();
    activeUntilRef.current =
      performance.now() + (profile.lowPower ? 3000 : 6000);

    const startAnimation = () => {
      if (runningRef.current || !inViewRef.current || !pageVisibleRef.current) {
        return;
      }
      runningRef.current = true;
      animationRef.current = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      runningRef.current = false;
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          startAnimation();
          return;
        }
        stopAnimation();
      },
      { threshold: 0.1, rootMargin: "120px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const onVisibilityChange = () => {
      pageVisibleRef.current = document.visibilityState === "visible";
      if (pageVisibleRef.current) {
        startAnimation();
        return;
      }
      stopAnimation();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    onVisibilityChange();
    startAnimation();

    let resizeTimeout: number | undefined;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        stopAnimation();
        resizeCanvas();
        dirtyRef.current = true;
        startAnimation();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      stopAnimation();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [glitchSpeed, profile.lowPower, profile.reducedMotion, smooth]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
      {outerVignette && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0)_60%,_rgba(0,0,0,0.9)_100%)]"></div>
      )}
      {centerVignette && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_60%)]"></div>
      )}
    </div>
  );
};

export default LetterGlitch;
