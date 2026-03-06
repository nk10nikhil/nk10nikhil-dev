import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Orb from "@/components/elements/Orb";
import LetterGlitch from "@/components/elements/LetterGlitch";

interface LoaderProps {
  isLoading: boolean;
  onTransitionEnd?: () => void;
}

const Loader = React.memo(({ isLoading, onTransitionEnd }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showVideo, setShowVideo] = useState(true);


  // Fallback timeout in case the intro video cannot autoplay/end event is missed.
  useEffect(() => {
    const introDuration = 4500;

    const timer = setTimeout(() => {
      setShowVideo(false);
    }, introDuration);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 100);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isLoading]);

  // Preload critical assets.
  useEffect(() => {
    const profile = new Image();
    profile.src = "/profile.png";

    const introVideo = document.createElement("video");
    introVideo.preload = "auto";
    introVideo.src = "/sign.webm";
  }, []);

  return (
    <StyledWrapper
      className={isVisible ? "visible" : "hidden"}
      onTransitionEnd={() => !isVisible && onTransitionEnd?.()}
    >
      {/* LetterGlitch Background */}
      <div className="glitch-background">
        <LetterGlitch
          glitchColors={["#1a0a2e", "#16213e", "#9500ff", "#b620e0"]}
          glitchSpeed={20}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
        />
      </div>

      {/* Intro Video Loading Screen */}
      {showVideo && (
        <VideoContainer className="video-container">
          <video
            src="/sign.webm"
            className="loading-video"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => setShowVideo(false)}
          />
        </VideoContainer>
      )}

      {/* Orb Container - shows after GIF */}
      {!showVideo && (
        <>
          <div className="orb-container">
            <Orb
              hue={265}
              hoverIntensity={0.8}
              rotateOnHover={true}
              forceHoverState={true}
            />
          </div>

          {/* Loader Animation */}
          <div className="loader-container">
            <div className="loader">
              <div className="box">
                <div className="logo">
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="profile-img"
                  />
                </div>
              </div>
              <div className="box" />
              <div className="box" />
              <div className="box" />
              <div className="box" />
            </div>
          </div>
        </>
      )}
    </StyledWrapper>
  );
});
Loader.displayName = "Loader";

const VideoContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .loading-video {
    max-width: 600px;
    max-height: 600px;
    width: auto;
    height: auto;
    object-fit: contain;

    @media (max-width: 768px) {
      position: fixed;
      left: 50vw;
      top: 50vh;
      transform: translate(-50%, -50%);
      max-width: 95vw;
      max-height: 95vh;
      z-index: 9999;
    }
  }

  filter: drop-shadow(0 0 20px rgba(149, 0, 255, 0.3));
`;

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(13, 13, 13, 0.95);
  z-index: 9999;
  transition:
    opacity 1s ease,
    backdrop-filter 1.2s ease;
  will-change: opacity, backdrop-filter, transform;

  &.visible {
    opacity: 1;
    backdrop-filter: none;
  }

  &.hidden {
    opacity: 0;
    backdrop-filter: blur(40px);
    transform: scale(1.05) translateZ(0);
    transition:
      opacity 1s ease,
      backdrop-filter 1.2s ease,
      transform 1.1s ease;
  }

  /* Center content for all screen sizes */
  .loader-container,
  .orb-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    .loader-container,
    .orb-container {
      width: 100vw;
      height: 100vh;
      min-width: 0;
      min-height: 0;
      margin: 0;
      padding: 0;
      position: fixed;
      left: 0;
      top: 0;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    .loader {
      --size: 180px;
      height: var(--size);
      aspect-ratio: 1;
    }
    .orb-container {
      display: none;
    }
  }

  /* ...existing styles below... */
  .glitch-background {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 0.3;
    transition: opacity 1s ease;
  }

  &.hidden .glitch-background {
    opacity: 0;
  }

  &.hidden .box {
    animation-duration: calc(var(--duration) * 1.5);
  }

  &.hidden .orb-container {
    transform: scale(1.2) translateZ(0);
    opacity: 0.5;
    transition:
      transform 1.2s ease,
      opacity 0.8s ease;
  }

  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    pointer-events: none;
    animation: fade-in-out 8s infinite ease-in-out;
    gap: 2rem;
  }

  .progress-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 280px;
  }

  .progress-bar {
    width: 100%;
    height: 4px;
    background: rgba(100, 100, 100, 0.2);
    border-radius: 2px;
    overflow: hidden;
    backdrop-filter: blur(3px);
  }

  .progress-text {
    color: rgba(212, 98, 255, 0.9);
    font-size: 14px;
    font-weight: 600;
    text-shadow: 0 0 8px rgba(212, 98, 255, 0.5);
  }

  @keyframes fade-in-out {
    0%,
    100% {
      opacity: 0.9;
    }
    50% {
      opacity: 0.7;
    }
  }

  .orb-container {
    width: 450px;
    height: 450px;
    position: relative;
    z-index: 1;
    margin: 0 auto;
    transition:
      transform 1.2s ease-out,
      opacity 1s ease-out;
    will-change: transform, opacity;
    animation: orbFadeIn 0.8s ease-in;
  }

  @keyframes orbFadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .loader {
    --size: 280px;
    --duration: 2s;
    --logo-color: grey;
    --background: linear-gradient(
      0deg,
      rgba(149, 0, 255, 0.08) 0%,
      rgba(240, 0, 255, 0.08) 100%
    );
    height: var(--size);
    aspect-ratio: 1;
    position: relative;
  }

  &.lite .loader {
    --duration: 2.8s;
  }

  .loader .box {
    position: absolute;
    background: rgba(100, 100, 100, 0.12);
    background: var(--background);
    border-radius: 50%;
    border-top: 1px solid rgba(100, 100, 100, 0.8);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px -0px;
    backdrop-filter: blur(3px);
    animation: ripple var(--duration) infinite ease-in-out;
    will-change: transform;
  }

  .loader .box:nth-child(1) {
    inset: 35%;
    z-index: 99;
    border-color: rgba(212, 98, 255, 0.85);
    background: transparent;
    box-shadow: inset 0 0 15px rgba(212, 98, 255, 0.2);
  }

  .loader .box:nth-child(2) {
    inset: 30%;
    z-index: 98;
    border-color: rgba(170, 92, 247, 0.75);
    border-top-color: rgba(184, 98, 255, 0.8);
    animation-delay: 0.2s;
  }

  .loader .box:nth-child(3) {
    inset: 20%;
    z-index: 97;
    border-color: rgba(148, 87, 235, 0.65);
    border-left-color: rgba(156, 92, 255, 0.7);
    animation-delay: 0.4s;
  }

  .loader .box:nth-child(4) {
    inset: 10%;
    z-index: 96;
    border-color: rgba(129, 83, 224, 0.55);
    border-right-color: rgba(140, 86, 235, 0.6);
    animation-delay: 0.6s;
  }

  .loader .box:nth-child(5) {
    inset: 0%;
    z-index: 95;
    border-color: rgba(108, 78, 212, 0.45);
    border-bottom-color: rgba(123, 82, 222, 0.5);
    animation-delay: 0.8s;
  }

  .loader .logo {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    padding: 18%;
    overflow: hidden;
    border-radius: 50%;
  }

  .loader .logo .profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    animation: profile-animation var(--duration) infinite ease-in-out;
    filter: drop-shadow(0 0 8px rgba(240, 0, 255, 0.6));
    border: 2px solid rgba(149, 0, 255, 0.4);
    will-change: transform, filter;
  }

  @keyframes profile-animation {
    0% {
      transform: scale(1) translateZ(0);
      filter: drop-shadow(0 0 8px rgba(240, 0, 255, 0.5));
    }
    50% {
      transform: scale(1.05) translateZ(0);
      filter: drop-shadow(0 0 15px rgba(94, 96, 255, 0.8));
    }
    100% {
      transform: scale(1) translateZ(0);
      filter: drop-shadow(0 0 8px rgba(240, 0, 255, 0.5));
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(1) translateZ(0);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    }
    50% {
      transform: scale(1.3) translateZ(0);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 20px -0px;
    }
    100% {
      transform: scale(1) translateZ(0);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    }
  }
`;

export default Loader;
