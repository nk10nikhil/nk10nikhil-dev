import React, { useRef, useEffect } from 'react';

const CardGlowEffect = () => {
  const cardsRef = useRef(null);

  const handleMouseMove = (e) => {
    const cards = cardsRef.current.querySelectorAll('.card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--xPos', `${x}px`);
      card.style.setProperty('--yPos', `${y}px`);
    });
  };

  useEffect(() => {
    const loadFont = (url) => {
      const link = document.createElement('link');
      link.href = url;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    };

    loadFont('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
  }, []);

  return (
    <>
      <style>{`
        :root {
          --prime: #ff6e48;
          --ciBlue: #00fff1;
          --ciRed: #ff00aa;
          --ciWhite: #ffffff;
          --ciGreen: #46fcb4;
          --ciSecond: #0c1016;
        }

        body, html {
          width: 100%;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          font-size: 20px;
          margin: 0;
          padding: 0;
          color: var(--ciWhite);
          font-family: 'Roboto', sans-serif;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          width: 90%;
          padding: 2rem;
        }

        .cards:hover .card {
          background: radial-gradient(
            100rem circle at var(--xPos) var(--yPos),
            rgba(0, 255, 241, 0.2),
            rgba(255, 255, 255, 0.05)
          );
        }

        .card {
          width: 20rem;
          height: 15rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          transition: all 0.15s ease-in-out;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          overflow: hidden;
        }

        .card:hover {
          transform: scale(0.97);
        }

        .card:hover::before {
          opacity: 1;
        }

        .card::before {
          content: "";
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: inherit;
          background: radial-gradient(
            60rem circle at var(--xPos) var(--yPos),
            rgba(0, 255, 241, 0.1),
            transparent 35%
          );
          opacity: 0;
          transition: all 0.15s ease-in-out;
          pointer-events: none;
        }

        .card-content {
          background-color: rgba(19, 22, 28, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: inherit;
          transition: all 0.25s;
          height: calc(100% - 0.1rem);
          width: calc(100% - 0.1rem);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <div
        className="cards"
        ref={cardsRef}
        onMouseMove={handleMouseMove}
      >
        {[...Array(6)].map((_, index) => (
          <div className="card" key={index}>
            <div className="card-content" />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardGlowEffect;
