import React, { useRef, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

// Global styles (replacing :root and body CSS)
const GlobalStyle = createGlobalStyle`
  :root {
    --space: 1rem;
    --bg: #09090b;
    --fg: #e3e3e3;
    --surface-1: #101012;
    --surface-2: #27272a;
    --surface-3: #52525b;
    --ease-out: cubic-bezier(0.5, 1, 0.89, 1);
    --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    height: 100%;
    display: grid;
    color: var(--fg);
    background: var(--bg);
    padding: var(--space);
    min-height: 100vh;
  }
`;

// Styled components for layout and cards
const Main = styled.main`
  display: grid;
  gap: var(--space);
  margin: auto;
  inline-size: min(var(--max, 15rem), 100%);
  grid-template-columns: repeat(var(--count, 1), 1fr);

  @media (min-width: 25rem) {
    --count: 2;
    --max: 30rem;
  }

  @media (min-width: 45rem) {
    --count: 4;
    --max: 60rem;
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-areas: "card";
  place-items: center;
  aspect-ratio: 4 / 5;
  border: 1px solid var(--surface-2);
  isolation: isolate;
  transition: border-color 200ms var(--ease-out);
  user-select: none;
  --active-color: ${(props) => props.activeColor || "var(--fg)"};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at bottom left, transparent 55%, var(--surface-1));
    pointer-events: none;
    box-shadow: var(--bg) -0.5cqi 0.5cqi 2.5cqi inset;
    transition: opacity 900ms var(--ease-out);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    aspect-ratio: 1;
    background: radial-gradient(circle, var(--bg), transparent 65%);
    opacity: 0;
    transition: opacity 800ms var(--ease-out);
  }

  > * {
    grid-area: card;
  }

  svg {
    position: relative;
    z-index: 1;
    width: 30%;
    height: auto;
    color: var(--surface-3);
    transition: 300ms var(--ease-out);
    transition-property: color, scale;
  }

  button {
    opacity: 0;
  }

  &:hover,
  &:focus-within {
    border-color: var(--active-color);
    transition: border-color 800ms var(--ease-in-out);

    svg {
      color: var(--active-color);
      scale: 1.1;
      transition: 300ms var(--ease-in-out);
    }

    &::before {
      opacity: 0;
    }

    &::after {
      opacity: 1;
    }
  }
`;

// PixelCanvas component to replace <pixel-canvas>
const PixelCanvas = ({ gap = 5, speed = 35, colors = "#f8fafc, #f1f5f9, #cbd5e1", noFocus = false }) => {
    const canvasRef = useRef(null);
    const parentRef = useRef(null);
    const animationRef = useRef(null);
    const pixelsRef = useRef([]);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const parsedColors = colors.split(",");

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            const rect = parentRef.current.getBoundingClientRect();
            canvas.width = Math.floor(rect.width);
            canvas.height = Math.floor(rect.height);
            createPixels(canvas, ctx);
        };

        const createPixels = (canvas, ctx) => {
            const pixels = [];
            const gapValue = Math.min(Math.max(gap, 4), 50);
            const speedValue = Math.min(Math.max(speed, 0), 100) * 0.001;

            for (let x = 0; x < canvas.width; x += gapValue) {
                for (let y = 0; y < canvas.height; y += gapValue) {
                    const color = parsedColors[Math.floor(Math.random() * parsedColors.length)];
                    const distance = Math.sqrt((x - canvas.width / 2) ** 2 + (y - canvas.height / 2) ** 2);
                    pixels.push(new Pixel(canvas, ctx, x, y, color, reducedMotion ? 0 : speedValue, reducedMotion ? 0 : distance));
                }
            }
            pixelsRef.current = pixels;
        };

        const animate = (fnName) => {
            const ctx = canvasRef.current.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            pixelsRef.current.forEach((pixel) => pixel[fnName]());
            if (!pixelsRef.current.every((pixel) => pixel.isIdle)) {
                animationRef.current = requestAnimationFrame(() => animate(fnName));
            }
        };

        const handleAppear = () => {
            cancelAnimationFrame(animationRef.current);
            animate("appear");
        };

        const handleDisappear = () => {
            cancelAnimationFrame(animationRef.current);
            animate("disappear");
        };

        resizeCanvas();
        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(parentRef.current);

        parentRef.current.addEventListener("mouseenter", handleAppear);
        parentRef.current.addEventListener("mouseleave", handleDisappear);
        if (!noFocus) {
            parentRef.current.addEventListener("focusin", handleAppear);
            parentRef.current.addEventListener("focusout", handleDisappear);
        }

        return () => {
            resizeObserver.disconnect();
            parentRef.current.removeEventListener("mouseenter", handleAppear);
            parentRef.current.removeEventListener("mouseleave", handleDisappear);
            if (!noFocus) {
                parentRef.current.removeEventListener("focusin", handleAppear);
                parentRef.current.removeEventListener("focusout", handleDisappear);
            }
        };
    }, [gap, speed, colors, noFocus]);

    return (
        <div ref={parentRef} style={{ width: "100%", height: "100%", display: "grid" }}>
            <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
        </div>
    );
};

// Pixel class (same logic as original)
class Pixel {
    constructor(canvas, context, x, y, color, speed, delay) {
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = Math.random() * 0.8 + 0.1 * speed;
        this.size = 0;
        this.sizeStep = Math.random() * 0.4;
        this.minSize = 0.5;
        this.maxSizeInteger = 2;
        this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize;
        this.delay = delay;
        this.counter = 0;
        this.counterStep = Math.random() * 4 + (canvas.width + canvas.height) * 0.01;
        this.isIdle = false;
        this.isReverse = false;
        this.isShimmer = false;
    }

    draw() {
        const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
    }

    appear() {
        this.isIdle = false;
        if (this.counter <= this.delay) {
            this.counter += this.counterStep;
            return;
        }

        if (this.size >= this.maxSize) {
            this.isShimmer = true;
        }

        if (this.isShimmer) {
            this.shimmer();
        } else {
            this.size += this.sizeStep;
        }

        this.draw();
    }

    disappear() {
        this.isShimmer = false;
        this.counter = 0;

        if (this.size <= 0) {
            this.isIdle = true;
            return;
        }

        this.size -= 0.1;
        this.draw();
    }

    shimmer() {
        if (this.size >= this.maxSize) {
            this.isReverse = true;
        } else if (this.size <= this.minSize) {
            this.isReverse = false;
        }

        this.size += this.isReverse ? -this.speed : this.speed;
    }
}

// Main App component
const PixelCanvasCards = () => {
    return (
        <>
            <GlobalStyle />
            <Main>
                <Card activeColor="#e0f2fe">
                    <PixelCanvas gap={10} speed={25} colors="#e0f2fe, #7dd3fc, #0ea5e9" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentcolor" viewBox="0 0 256 256">
                        <path d="M67.84,92.61L25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"></path>
                    </svg>
                    <button>Code</button>
                </Card>

                <Card activeColor="#fef08a">
                    <PixelCanvas gap={3} speed={20} colors="#fef08a, #fde047, #eab308" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentcolor" viewBox="0 0 256 256">
                        <path d="M180,146H158V110h22a34,34,0,1,0-34-34V98H110V76a34,34,0,1,0-34,34H98v36H76a34,34,0,1,0,34,34V158h36v22a34,34,0,1,0,34-34ZM158,76a22,22,0,1,1,22,22H158ZM54,76a22,22,0,0,1,44,0V98H76A22,22,0,0,1,54,76ZM98,180a22,22,0,1,1-22-22H98Zm12-70h36v36H110Zm70,92a22,22,0,0,1-22-22V158h22a22,22,0,0,1,0,44Z"></path>
                    </svg>
                    <button>Command</button>
                </Card>

                {/* Repeat Card as necessary */}
            </Main>
        </>
    );
};

export default PixelCanvasCards;
