import React from 'react';
import styled from 'styled-components';
import RotateCube from './RotateCube';

const SocialButton = () => {
  return (
    <StyledWrapper>
      <div className="main">
        <a className="card" href="https://www.instagram.com/nk10nikhil" target="_blank" rel="noreferrer">
          <svg fillRule="nonzero" height="30px" width="30px" viewBox="0,0,256,256" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="instagram">
            <g style={{ mixBlendMode: 'normal' }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset={0} strokeDasharray="none" strokeMiterlimit={10} strokeLinejoin="miter" strokeLinecap="butt" strokeWidth={1} stroke="none" fillRule="nonzero">
              <g transform="scale(8,8)">
                <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
              </g>
            </g>
          </svg>
        </a>
        <a className="card" href="https://twitter.com/nk10nikhil_" target="_blank" rel="noreferrer">
          <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="twitter">
            <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
          </svg>
        </a>
        <a className="card" href="https://www.facebook.com/nk10nikhil" target="_blank" rel="noreferrer">
            <svg height="30px" width="30px" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="facebook">
            <path d="M22.675,0 L17.325,0 C12.675,0 9,3.675 9,8.325 L9,12.675 L4.5,12.675 C4.225,12.675 4,12.9 4,13.175 L4,18.825 C4,19.1 4.225,19.325 4.5,19.325 L9,19.325 L9,36.5 C9,36.775 9.225,37 9.5,37 L15.175,37 C15.45,37 15.675,36.775 15.675,36.5 L15.675,19.325 L21.175,19.325 C21.45,19.325 21.675,19.1 21.675,18.825 L22.175,13.175 C22.175,12.9 21.95,12.675 21.675,12.675 L15.675,12.675 L15.675,9.175 C15.675,7.9 16.175,7 17.675,7 L22.675,7 C22.95,7 23.175,6.775 23.175,6.5 L23.175,1 C23.175,0.725 22.95,0.5 22.675,0.5 Z" />
            </svg>
        </a>
        <a className="card" href="https://www.youtube.com/c/nk10nikhil" target="_blank" rel="noreferrer">
            <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="youtube">
            <path d="M43.6,14.2c-0.5-1.9-2-3.4-3.9-3.9C36.5,10,24,10,24,10s-12.5,0-15.7,0.3c-1.9,0.5-3.4,2-3.9,3.9C4,17.5,4,24,4,24 s0,6.5,0.3,9.7c0.5,1.9,2,3.4,3.9,3.9C11.5,38,24,38,24,38s12.5,0,15.7-0.3c1.9-0.5,3.4-2,3.9-3.9C44,30.5,44,24,44,24 S44,17.5,43.6,14.2z M20,31V17l12,7L20,31z" />
            </svg>
        </a>
        <a className="card" href="https://www.linkedin.com/in/nk10nikhil" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="23px" width="23px" className="linkedin">
            <path fill="url(#paint0_linear_501_142)" d="M22.23,0C9.95,0,0,9.95,0,22.23v55.54C0,90.05,9.95,100,22.23,100h55.54C90.05,100,100,90.05,100,77.77V22.23C100,9.95,90.05,0,77.77,0H22.23z M30.34,84.48H15.67V38.1h14.67V84.48z M23.01,31.92c-4.69,0-8.49-3.8-8.49-8.49s3.8-8.49,8.49-8.49c4.69,0,8.49,3.8,8.49,8.49S27.7,31.92,23.01,31.92z M84.48,84.48H69.81V61.26c0-5.55-0.1-12.68-7.72-12.68c-7.72,0-8.9,6.03-8.9,12.26v23.64H38.52V38.1h14.08v6.34h0.2c1.96-3.72,6.75-7.64,13.91-7.64c14.88,0,17.63,9.8,17.63,22.54V84.48z" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" y2="87.6201" x2="96.1684" y1={0} x1={0} id="paint0_linear_501_142">
              <stop stopColor="#BF66FF" />
              <stop stopColor="#6248FF" offset="0.510417" />
              <stop stopColor="#00DDEB" offset={1} />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" y2="87.6201" x2="96.1684" y1={0} x1={0} id="paint1_linear_501_142">
              <stop stopColor="#BF66FF" />
              <stop stopColor="#6248FF" offset="0.510417" />
              <stop stopColor="#00DDEB" offset={1} />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" y2="87.6201" x2="96.1684" y1={0} x1={0} id="paint2_linear_501_142">
              <stop stopColor="#BF66FF" />
              <stop stopColor="#6248FF" offset="0.510417" />
              <stop stopColor="#00DDEB" offset={1} />
              </linearGradient>
            </defs>
            </svg>
        </a>
        <a className="card" href="https://discord.gg/nk10nikhil" target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" className="discord">
            <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z" />
          </svg>
        </a>
        <a className="card" href="www.github.com/nk10nikhil" target="_blank" rel="noreferrer">
          <svg height="30px" width="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="github">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
          </svg>
        </a>
        <a className="card" href="https://t.me/nk10nikhil" target="_blank" rel="noreferrer">
          <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="telegram">
            <path d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
            <path d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z" fill="#fff" />
            <path d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z" fill="#b0bec5" />
            <path d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z" fill="#cfd8dc" />
          </svg>
        </a>
        <a className="card" href="https://www.reddit.com/user/nk10nikhil" target="_blank" rel="noreferrer">
          <svg xmlSpace="preserve" viewBox="0 0 256 256" height={30} width={30} version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="reddit">
            <defs />
            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" style={{ stroke: 'none', borderRadius: '50%', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1 }}>
              <circle transform="matrix(1 0 0 1 0 0)" style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fillRule: 'nonzero', opacity: 1 }} r={45} cy={45} cx={45} />
              <path strokeLinecap="round" transform="matrix(1 0 0 1 0 0)" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fillRule: 'nonzero', opacity: 1 }} d="M 75.011 45 c -0.134 -3.624 -3.177 -6.454 -6.812 -6.331 c -1.611 0.056 -3.143 0.716 -4.306 1.823 c -5.123 -3.49 -11.141 -5.403 -17.327 -5.537 l 2.919 -14.038 l 9.631 2.025 c 0.268 2.472 2.483 4.262 4.955 3.993 c 2.472 -0.268 4.262 -2.483 3.993 -4.955 s -2.483 -4.262 -4.955 -3.993 c -1.421 0.145 -2.696 0.973 -3.4 2.204 L 48.68 17.987 c -0.749 -0.168 -1.499 0.302 -1.667 1.063 c 0 0.011 0 0.011 0 0.022 l -3.322 15.615 c -6.264 0.101 -12.36 2.025 -17.55 5.537 c -2.64 -2.483 -6.801 -2.36 -9.284 0.291 c -2.483 2.64 -2.36 6.801 0.291 9.284 c 0.515 0.481 1.107 0.895 1.767 1.186 c -0.045 0.66 -0.045 1.32 0 1.98 c 0 10.078 11.745 18.277 26.23 18.277 c 14.485 0 26.23 -8.188 26.23 -18.277 c 0.045 -0.66 0.045 -1.32 0 -1.98 C 73.635 49.855 75.056 47.528 75.011 45 z M 30.011 49.508 c 0 -2.483 2.025 -4.508 4.508 -4.508 c 2.483 0 4.508 2.025 4.508 4.508 s -2.025 4.508 -4.508 4.508 C 32.025 53.993 30.011 51.991 30.011 49.508 z M 56.152 62.058 v -0.179 c -3.199 2.405 -7.114 3.635 -11.119 3.468 c -4.005 0.168 -7.919 -1.063 -11.119 -3.468 c -0.425 -0.515 -0.347 -1.286 0.168 -1.711 c 0.447 -0.369 1.085 -0.369 1.544 0 c 2.707 1.98 6.007 2.987 9.362 2.83 c 3.356 0.179 6.667 -0.783 9.407 -2.74 c 0.492 -0.481 1.297 -0.47 1.779 0.022 C 56.655 60.772 56.644 61.577 56.152 62.058 z M 55.537 54.34 c -0.078 0 -0.145 0 -0.224 0 l 0.034 -0.168 c -2.483 0 -4.508 -2.025 -4.508 -4.508 s 2.025 -4.508 4.508 -4.508 s 4.508 2.025 4.508 4.508 C 59.955 52.148 58.02 54.239 55.537 54.34 z" />
            </g>
          </svg>
        </a>
        <p className="text">Connect<br />with<br /><br /><div className="flex justify-center"><RotateCube /></div><br />Nikhil Kumar</p>
        {/* <div className="main_back" /> */}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .main_back {
    position: absolute;
    border-radius: 10px;
    transform: rotate(90deg);
    width: 11em;
    height: 11em;
    background: rgba(0, 0, 0, 0.9);
    z-index: -2;
    box-shadow: inset 0px 0px 180px 1px;
  }

  .main {
    display: flex;
    flex-wrap: wrap;
    width: 14em;
    align-items: center;
    justify-content: center;
    z-index: -1;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-top-left-radius: 10px;
    background: lightgrey;
    transition: 0.4s ease-in-out, 0.2s background-color ease-in-out,
      0.2s background-image ease-in-out;
    background: rgba(100, 100, 100, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid transparent;
    -webkit-backdrop-filter: blur(5px);
  }

  .card .instagram {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: #cc39a4;
  }

  .card:nth-child(2) {
    border-radius: 0px;
  }

  .card:nth-child(2) .twitter {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: #03a9f4;
  }

  .card:nth-child(3) {
    border-top-right-radius: 10px;
    border-top-left-radius: 0px;
  }

  .card:nth-child(3) .facebook {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: #243c5a;
  }

  .card:nth-child(4) {
    border-radius: 0px;
  }

  .card:nth-child(4) .youtube {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: red;
  }

  .card:nth-child(5) {
    border-radius: 0px;
  }

  .card:nth-child(5) .linkedin {
    position: absolute;
    margin-left: 0.2em;
    margin-top: 0.2em;
    opacity: 0;
    transition: 0.2s ease-in-out;
  }

  .card:nth-child(6) {
    border-radius: 0px;
  }

  .card:nth-child(6) .discord {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: #8c9eff;
  }

  .card:nth-child(7) {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 0px;
  }

  .card:nth-child(7) .github {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: black;
  }

  .card:nth-child(8) {
    border-radius: 0px;
  }

  .card:nth-child(8) .telegram {
    opacity: 0;
    transition: 0.2s ease-in-out;
    fill: #29b6f6;
  }

  .card:nth-child(9) {
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0px;
  }

  .card:nth-child(9) .reddit {
    opacity: 0;
    transition: 0.2s ease-in-out;
  }

  .main:hover {
    width: 14em;
    cursor: pointer;
  }

  .main:hover .main_back {
    opacity: 0;
  }

  .main:hover .card {
    margin: 0.2em;
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
  }

  .main:hover .card:nth-child(5) {
    border: transparent;
  }

  .main:hover .text {
    opacity: 0;
    z-index: -3;
  }

  .main:hover .instagram {
    opacity: 1;
  }

  .main:hover .twitter {
    opacity: 1;
  }

  .main:hover .facebook {
    opacity: 1;
  }

  .main:hover .youtube {
    opacity: 1;
  }

  .main:hover .linkedin {
    opacity: 1;
  }

  .main:hover .discord {
    opacity: 1;
  }

  .main:hover .github {
    opacity: 1;
  }

  .main:hover .telegram {
    opacity: 1;
  }

  .main:hover .reddit {
    opacity: 1;
  }

  .card:nth-child(1):hover {
    background-color: #cc39a4;
  }

  .card:nth-child(1):hover .instagram {
    fill: white;
  }

  .card:nth-child(2):hover {
    background-color: #03a9f4;
  }

  .card:nth-child(2):hover .twitter {
    fill: white;
  }

  .card:nth-child(3):hover {
    background-color: #243c5a;
  }

  .card:nth-child(3):hover .facebook {
    fill: white;
  }

  .card:nth-child(4):hover {
    background-color: red;
  }

  .card:nth-child(4):hover .youtube {
    fill: white;
  }

  .card:nth-child(5):hover {
    animation: backgroundIMG 0.1s;
    animation-fill-mode: forwards;
  }

  .card:nth-child(5):hover .linkedin #paint0_linear_501_142 stop {
    stop-color: white;
  }

  .card:nth-child(5):hover .linkedin #paint1_linear_501_142 stop {
    stop-color: white;
  }

  .card:nth-child(5):hover .linkedin #paint2_linear_501_142 stop {
    stop-color: white;
  }

  @keyframes backgroundIMG {
    100% {
      background-image: linear-gradient(#bf66ff, #6248ff, #00ddeb);
    }
  }

  .card:nth-child(6):hover {
    background-color: #8c9eff;
  }

  .card:nth-child(6):hover .discord {
    fill: white;
  }

  .card:nth-child(7):hover {
    background-color: black;
  }

  .card:nth-child(7):hover .github {
    fill: white;
  }

  .card:nth-child(8):hover {
    background-color: #29b6f6;
  }

  .card:nth-child(8):hover .telegram > path:nth-of-type(1) {
    fill: white;
  }

  .card:nth-child(8):hover .telegram > path:nth-of-type(2) {
    fill: #29b6f6;
  }

  .card:nth-child(8):hover .telegram > path:nth-of-type(3) {
    fill: #29b6f6;
  }

  .card:nth-child(9):hover {
    background-color: rgb(255, 69, 0);
  }

  .card:nth-child(9) .reddit > g circle {
    fill: rgb(255, 69, 0);
  }

  .card:nth-child(9) .reddit > g path {
    fill: white;
  }

  .text {
    position: absolute;
    font-size: 1em;
    transition: 0.4s ease-in-out;
    color: #bdbdbd;
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.33em;
    z-index: 3;
  }`;

export default SocialButton;
