import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const FloatingTeddy = () => {
  const [loaded, setLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const targetCount = 30;

  useEffect(() => {
    // Simulating content load
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    // Counter animation
    if (count < targetCount) {
      const interval = setTimeout(() => {
        setCount((prev) => {
          const increment = Math.max(1, Math.floor((targetCount - prev) / 10));
          return Math.min(prev + increment, targetCount);
        });
      }, 100);

      return () => clearTimeout(interval);
    }
  }, [count, loaded]);

  return (
    <StyledWrapper>
      <div className="card">
        {/* Image with Counter */}
        <div className="image-container">
          <div className="floating-wrapper">
            <img src="/robo.png" alt="Floating Teddy" className="image" />
            {/* Counter Card */}
            <div
              className={`counter-card ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
            >
              <div className="glass-card rounded-3xl p-6 backdrop-blur-xl min-h-[100px] min-w-[200px] flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                  {count}
                  <span className="text-white/80">+</span>
                </div>
                <div className="text-md text-white/80">Full Stack Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container {
    position: relative;
    display: inline-block;
  }

  .floating-wrapper {
    position: relative;
    animation: move 6s ease-in-out infinite;
    display: inline-block;
  }

  .image {
    width: 200px;
    height: 200px;
    z-index: 10;
  }

  .counter-card {
    position: absolute;
    bottom: 100%; /* Align bottom of the counter card */
    left: 100%; /* Align left side of the counter card with the right side of the image */
    transform: translate(-50%, 50%); /* Adjust to clip bottom-left of the counter card with top-right of the image */
    z-index: 20;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  @keyframes move {
    0% {
      transform: translateX(2em) translateY(2em);
    }
    25% {
      transform: translateY(-1em) translateX(-1em);
      rotate: -10deg;
    }
    50% {
      transform: translateY(1em) translateX(-1em);
    }
    75% {
      transform: translateY(-1.25em) translateX(1em);
      rotate: 10deg;
    }
    100% {
      transform: translateX(2em) translateY(2em);
    }
  }
`;

export default FloatingTeddy;