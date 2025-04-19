import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 100px;
    padding: 0px;
    background-color: #fcb;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .space {
    display: inline-block;
    width: 20px;
  }

  .title {
    display: inline-block;
    font-size: 80px;
    font-family: Helvetica, Arial, sans-serif;
    color: #0000;
    padding: 0px;
    margin: 0px;
    animation: blur-anime 2s ease-in-out infinite;
  }

  :root {
    --d: 1s;
    --c: #3be9;
    --f: #3bee;
    --n: 60px;
  }

  /* Delay classes */
  .delay0 { animation-delay: 0.0s; }
  .delay1 { animation-delay: 0.2s; }
  .delay2 { animation-delay: 0.4s; }
  .delay3 { animation-delay: 0.6s; }
  .delay4 { animation-delay: 0.8s; }
  .delay5 { animation-delay: 1.0s; }
  .delay6 { animation-delay: 1.2s; }
  .delay7 { animation-delay: 1.4s; }
  .delay8 { animation-delay: 1.6s; }
  .delay9 { animation-delay: 1.8s; }

  @keyframes blur-anime {
    0%, 60%, 100% {
      text-shadow: 0px 0px 0px var(--c), 0px 0px 0px var(--c), 0px 0px 0px var(--c), 0px 0px 0px var(--c);
    }
    30% {
      text-shadow: 0px var(--n) 0px var(--f), 0px calc(-1 * var(--n)) 0px var(--f),
                   var(--n) 0px 0px var(--f), calc(-1 * var(--n)) 0px 0px var(--f);
    }
  }
`;

const AnimatedText: React.FC = () => {
    const text = "Jumbling Some Random Words Here to Test the Animation Effect";

    return (
        <>
            <GlobalStyle />
            <div className="container">
                {text.split("").map((char, index) =>
                    char === " " ? (
                        <div key={index} className="space"></div>
                    ) : (
                        <div key={index} className={`title delay${index % 10}`}>{char}</div>
                    )
                )}
            </div>
        </>
    );
};

export default AnimatedText;
