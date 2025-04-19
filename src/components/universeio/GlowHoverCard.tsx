import React, { useEffect } from "react";
import styled from 'styled-components';

const GlowHoverCard = () => {
    useEffect(() => {
        const cards = document.querySelectorAll(".card");
        const wrapper = document.querySelector(".cards");

        const handleMouseMove = (event: MouseEvent) => {
            cards.forEach((card) => {
                const rect = (card as HTMLElement).getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                (card as HTMLElement).style.setProperty("--xPos", `${x}px`);
                (card as HTMLElement).style.setProperty("--yPos", `${y}px`);
            });
        };

        wrapper?.addEventListener("mousemove", handleMouseMove);

        return () => {
            wrapper?.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <StyledWrapper>
            <div className="cards">
                <div className="card">
                    <div className="card-content"></div>
                </div>
                <div className="card">
                    <div className="card-content"></div>
                </div>
                <div className="card">
                    <div className="card-content"></div>
                </div>
                <div className="card">
                    <div className="card-content"></div>
                </div>
                <div className="card">
                    <div className="card-content"></div>
                </div>
                <div className="card">
                    <div className="card-content"></div>
                </div>
            </div>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    $prime: #ff6e48;
$ciBlue: #00fff1;
$ciRed: #ff00aa;
$ciWhite: #ffffff;
$ciGreen: #46fcb4;
$ciSecond: #0c1016;

$roboto: "Roboto";

@font-face {
    font-family: $roboto;
    src: url("https://assets.codepen.io/907368/Roboto-Bold.ttf");
    font-weight: 700;
}

@font-face {
    font-family: $roboto;
    src: url("https://assets.codepen.io/907368/Roboto-Regular.ttf");
    font-weight: 500;
}

@font-face {
    font-family: $roboto;
    src: url("https://assets.codepen.io/907368/Roboto-Light.ttf");
    font-weight: 300;
}

body,
html {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $ciSecond;
    font-size: 20px;
    margin: 0;
    padding: 0;
    color: $ciWhite;
    font-family: $roboto;
    overflow-x: hidden;
}

* {
    box-sizing: border-box;
}

// Tutorial Start

.cards {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 90%;
    padding: 2rem;
    &:hover {
        .card {
            background: radial-gradient(
                100rem circle at var(--xPos) var(--yPos),
                rgba($ciBlue, 0.4),
                transparent 15%
            );
        }
    }
    .card {
        width: 20rem;
        height: 15rem;
        background: radial-gradient(
            150rem circle at 0 0,
            rgba($ciBlue, 0),
            transparent 0%
        );
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: all 0.15s;
        &:hover {
            transform: scale(0.97);
            &::before {
                opacity: 1;
            }
        }
        &::before {
            content: "";
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: inherit;
            background: radial-gradient(
                60rem circle at var(--xPos) var(--yPos),
                rgba($ciBlue, 0.1),
                transparent 35%
            );
            opacity: 0;
            transition: all 0.15s ease-in-out;
        }
        .card-content {
            background-color: #13161c;
            border-radius: inherit;
            transition: all 0.25s;
            height: calc(100% - 0.1rem);
            width: calc(100% - 0.1rem);
        }
    }
}`;

export default GlowHoverCard;