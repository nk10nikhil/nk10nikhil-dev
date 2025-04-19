import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const n = 19;
const rots = [
    { ry: 270, a: 0.5 },
    { ry: 0, a: 0.85 },
    { ry: 90, a: 0.4 },
    { ry: 180, a: 0.0 }
];

const AnimatedDice: React.FC = () => {
    const trayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const faces = document.querySelectorAll(".face");
        gsap.set(faces, {
            z: 200,
            rotateY: (i: number) => rots[i].ry,
            transformOrigin: "50% 50% -201px"
        });

        for (let i = 0; i < n; i++) {
            let die = document.querySelector(".die") as HTMLDivElement;
            let cube = die.querySelector(".cube") as HTMLDivElement;

            if (i > 0) {
                let clone = die.cloneNode(true) as HTMLDivElement;
                document.querySelector(".tray")?.append(clone);
                cube = clone.querySelector(".cube") as HTMLDivElement;
            }

            gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "power3.inOut", duration: 1 } })
                .fromTo(cube, { rotateY: -90 }, { rotateY: 90, ease: "power1.inOut", duration: 2 })
                .fromTo(cube.querySelectorAll(".face"), {
                    color: (j: number) => `hsl(${(i / n) * 75 + 130}, 67%, ${100 * [rots[3].a, rots[0].a, rots[1].a][j]}%)`
                }, {
                    color: (j: number) => `hsl(${(i / n) * 75 + 130}, 67%, ${100 * [rots[0].a, rots[1].a, rots[2].a][j]}%)`
                }, 0)
                .to(cube.querySelectorAll(".face"), {
                    color: (j: number) => `hsl(${(i / n) * 75 + 130}, 67%, ${100 * [rots[1].a, rots[2].a, rots[3].a][j]}%)`
                }, 1)
                .progress(i / n);
        }

        gsap.timeline()
            .from(".tray", { yPercent: -3, duration: 2, ease: "power1.inOut", yoyo: true, repeat: -1 }, 0)
            .fromTo(".tray", { rotate: -15 }, { rotate: 15, duration: 4, ease: "power1.inOut", yoyo: true, repeat: -1 }, 0)
            .from(".die", { duration: 0.01, opacity: 0, stagger: { each: -0.05, ease: "power1.in" } }, 0)
            .to(".tray", { scale: 1.2, duration: 2, ease: "power3.inOut", yoyo: true, repeat: -1 }, 0);

        const updateScale = () => {
            const h = n * 56;
            gsap.set(".tray", { height: h });
            gsap.set(".pov", { scale: window.innerHeight / h });
        };

        window.onload = window.onresize = updateScale;
        updateScale();
    }, []);

    return (
        <div>
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html, body {
            font-family: "Montserrat", sans-serif;
            font-weight: 900;
            background: #000;
          }

          .pov {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .tray {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .die {
            width: 400px;
            height: 55px;
            padding-bottom: 9px;
            perspective: 999px;
          }

          .cube {
            position: absolute;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
          }

          .face {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            backface-visibility: hidden;
          }
        `}
            </style>
            <div className="pov">
                <div className="tray" ref={trayRef}>
                    <div className="die">
                        <div className="cube">
                            <div className="face" style={{ fontSize: "60px" }}>HTML</div>
                            <div className="face" style={{ fontSize: "58px" }}>CSS</div>
                            <div className="face" style={{ fontSize: "55px" }}>JavaScript</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedDice;
