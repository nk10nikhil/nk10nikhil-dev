import React, { useEffect } from "react";

const GradientChangingText: React.FC = () => {
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
      @property --color-1 {
        syntax: "<color>";
        inherits: false;
        initial-value: hsl(98 100% 62%);
      }

      @property --color-2 {
        syntax: "<color>";
        inherits: false;
        initial-value: hsl(204 100% 59%);
      }

      @keyframes gradient-change {
        to {
          --color-1: hsl(210 100% 59%);
          --color-2: hsl(310 100% 59%);
        }
      }

      body {
        background: hsl(204 100% 5%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: system-ui, sans-serif;
        font-size: min(200%, 4vmin);
        margin: 0;
        padding: 5vmin;
      }

      article {
        animation: gradient-change 2s linear infinite alternate;
        background: linear-gradient(
          to right in oklch, 
          var(--color-1), 
          var(--color-2)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
        text-align: center;
      }

      h1 {
        font-size: 10vmin;
        line-height: 1.1;
        margin: 0;
      }

      p {
        font-family: "Dank Mono", ui-monospace, monospace;
        margin: 0;
      }
    `;
        document.head.appendChild(style);
    }, []);

    return (
        <article>
            <h1>Animated Gradient Text</h1>
        </article>
    );
};

export default GradientChangingText;
