import React from 'react';
import styled from 'styled-components';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledWrapper>
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative p-[1.5px] w-fit rounded-[0.9em] bg-gradient-to-r from-sky-500 to-pink-500 transition-all duration-400 ease-in-out group">
          <span className="absolute inset-0 m-auto rounded-[0.9em] -z-10 blur-0 transition-[filter] duration-400 ease-in-out bg-gradient-to-r from-sky-500 to-pink-500 group-hover:blur-[1.2em] group-active:blur-[0.2em]"></span>
          <button className="relative text-strong py-2 px-3 rounded-xl border-none bg-black text-white cursor-pointer shadow-[2px_2px_3px_rgba(0,0,0,0.7)] transition-all duration-300 ease-in-out" onClick={scrollToTop}>
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(0,0,0);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 3px 4px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
  }

  .svgIcon {
  width: 12px;
  transition-duration: 0.3s;
  }

  .svgIcon path {
  fill: white;
  }

  .button:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background-color: rgb(0, 0, 0);
  align-items: center;
  }

  .button:hover .svgIcon {
  transition-duration: 0.3s;
  transform: translateY(-200%);
  }

  .button::before {
  position: absolute;
  bottom: -20px;
  content: "Back to Top";
  color: white;
  font-size: 0px;
  }

  .button:hover::before {
  font-size: 13px;
  opacity: 1;
  bottom: unset;
  transition-duration: 0.3s;
  }
`;

export default BackToTopButton;
