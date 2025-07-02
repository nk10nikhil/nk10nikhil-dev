import React from 'react';
import styled from 'styled-components';
import Orb from './Orb';

const Loader = () => {
    return (
        <StyledWrapper>
            <div className="orb-container">
                <Orb hue={265} hoverIntensity={0.8} rotateOnHover={true} forceHoverState={true} />
            </div>
            <div className="loader-container">
                <div className="loader">
                    <div className="box">
                        <div className="logo">
                            <img src="/profile.png" alt="Profile" className="profile-img" />
                        </div>
                    </div>
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                    <div className="box" />
                </div>
            </div>
        </StyledWrapper>
    );
}

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
  
  .loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
    pointer-events: none;
    animation: fade-in-out 8s infinite ease-in-out;
  }
  
  @keyframes fade-in-out {
    0%, 100% { opacity: 0.9; }
    50% { opacity: 0.7; }
  }

  .orb-container {
    width: 450px;
    height: 450px;
    position: relative;
    z-index: 1;
    margin: 0 auto;
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

.loader .box {
  position: absolute;
  background: rgba(100, 100, 100, 0.12);
  background: var(--background);
  border-radius: 50%;
  border-top: 1px solid rgba(100, 100, 100, 0.8);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px -0px;
  backdrop-filter: blur(3px);
  animation: ripple var(--duration) infinite ease-in-out;
}

.loader .box:nth-child(1) {
  inset: 35%;
  z-index: 99;
  border-color: rgba(170, 92, 247, 0.8);
  background: transparent;
}

.loader .box:nth-child(2) {
  inset: 30%;
  z-index: 98;
  border-color: rgba(170, 92, 247, 0.7);
  animation-delay: 0.2s;
}

.loader .box:nth-child(3) {
  inset: 20%;
  z-index: 97;
  border-color: rgba(170, 92, 247, 0.6);
  animation-delay: 0.4s;
}

.loader .box:nth-child(4) {
  inset: 10%;
  z-index: 96;
  border-color: rgba(170, 92, 247, 0.5);
  animation-delay: 0.6s;
}

.loader .box:nth-child(5) {
  inset: 0%;
  z-index: 95;
  border-color: rgba(170, 92, 247, 0.4);
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
}

@keyframes profile-animation {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 8px rgba(240, 0, 255, 0.5));
  }
  50% {
    transform: scale(1.05);
    filter: drop-shadow(0 0 15px rgba(94, 96, 255, 0.8));
  }
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 8px rgba(240, 0, 255, 0.5));
  }
}

  @keyframes ripple {
    0% {
      transform: scale(1);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    }
    50% {
      transform: scale(1.3);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 20px -0px;
    }
    100% {
      transform: scale(1);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    }
  }

  /* Profile image uses profile-animation instead */
`;

export default Loader;
