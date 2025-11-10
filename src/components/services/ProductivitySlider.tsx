"use client";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductivitySlider() {
  const projects = [
    {
      title: "Full Stack Development",
      desc: "End-to-end web application development with modern technologies",
      bg: "/services/service11.jpeg",
      thumb: "/services/service12.jpeg",
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interfaces that users love",
      bg: "/services/service21.jpeg",
      thumb: "/services/service22.jpeg",
    },
    {
      title: "Mobile Development",
      desc: "Native and cross-platform mobile applications",
      bg: "/services/service31.jpeg",
      thumb: "/services/service32.jpeg",
    },
    {
      title: "Web3 & Blockchain",
      desc: "Decentralized applications and smart contracts",
      bg: "/services/service41.jpeg",
      thumb: "/services/service42.jpeg",
    },
    {
      title: "AI Integration",
      desc: "Intelligent features powered by machine learning",
      bg: "/services/service51.jpeg",
      thumb: "/services/service52.jpeg",
    },
    {
      title: "SEO & Performance",
      desc: "Optimize your digital presence for maximum impact",
      bg: "/services/service61.jpeg",
      thumb: "/services/service62.jpeg",
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable and secure cloud infrastructure",
      bg: "/services/service71.jpeg",
      thumb: "/services/service72.jpeg",
    },
    {
      title: "DevOps & CI/CD",
      desc: "Streamlined development and deployment pipelines",
      bg: "/services/service81.jpeg",
      thumb: "/services/service82.jpeg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const wrapRef = useRef(null);

  const isMobile = () => window.matchMedia("(max-width:767px)").matches;

  const center = (i) => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    const card = track?.children[i];
    if (!card || !wrap) return;
    const axis = isMobile() ? "top" : "left";
    const size = isMobile() ? "clientHeight" : "clientWidth";
    const start = isMobile() ? card.offsetTop : card.offsetLeft;
    wrap.scrollTo({
      [axis]: start - (wrap[size] / 2 - card[size] / 2),
      behavior: "smooth",
    });
  };

  const go = (step) => {
    setCurrent((prev) =>
      Math.min(Math.max(prev + step, 0), projects.length - 1)
    );
  };

  useEffect(() => {
    center(current);
  }, [current]);

  useEffect(() => {
    const handleKey = (e) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-0 md:px-4 bg-transparent">
      <style>{`
        :root {
          --gap: 1.25rem;
          --speed: 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          --closed: 5rem;
          --open: 30rem;
          --accent: #ff6b35;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: Inter, sans-serif;
          background: #07090d;
          color: #c5c7ce;
        }
        section {
          font-family: Inter, sans-serif;
          background: #07090d;
          color: #c5c7ce;
        }
        .head {
          max-width: 1400px;
          margin: auto;
          padding: 70px 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
        }
        .head h2 {
          font: 400 1.5rem/1.2 Inter, sans-serif;
          color: #fff;
        }
        @media (min-width: 1024px) {
          .head h2 {
            font-size: 2.25rem;
          }
        }
        .nav-btn {
          width: 2.5rem;
          height: 2.5rem;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s;
        }
        .nav-btn:hover {
          background: var(--accent);
        }
        .nav-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }

        .slider {
          max-width: 1400px;
          margin: auto;
          overflow: hidden;
        }

        .controls {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
        }
        .track {
          display: flex;
          gap: var(--gap);
          align-items: flex-start;
          justify-content: center;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          padding-bottom: 40px;
        }
        .track::-webkit-scrollbar {
          display: none;
        }

        .project-card {
          position: relative;
          flex: 0 0 var(--closed);
          height: 26rem;
          border-radius: 1rem;
          overflow: hidden;
          cursor: pointer;
          transition: flex-basis var(--speed), transform var(--speed);
        }
        .project-card.active {
          flex-basis: var(--open);
          transform: translateY(-0px);
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.45);
        }
        .project-card__bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.75) saturate(75%) blur(2px);
          transition: filter 0.3s, transform var(--speed);
        }
        .project-card:hover .project-card__bg {
          filter: brightness(0.9) saturate(100%) blur(2px);
          transform: scale(1.06);
        }

        .project-card__content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.7rem;
          background: linear-gradient(transparent 40%, rgba(0, 0, 0, 0.85) 100%);
          z-index: 2;
        }
        .project-card__title {
          color: #fff;
          font-weight: 700;
          font-size: 1.35rem;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        .project-card__thumb,
        .project-card__desc,
        .project-card__btn {
          display: none;
        }

        .project-card.active .project-card__content {
          flex-direction: row;
          align-items: center;
          padding: 1.2rem 2rem;
          gap: 1.1rem;
        }
        .project-card.active .project-card__title {
          writing-mode: horizontal-tb;
          transform: none;
          font-size: 2.4rem;
        }
        .project-card.active .project-card__thumb,
        .project-card.active .project-card__desc,
        .project-card.active .project-card__btn {
          display: block;
        }

        .project-card__thumb {
          width: 133px;
          height: 269px;
          border-radius: 0.45rem;
          object-fit: cover;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        }
        .project-card__desc {
          color: #ddd;
          font-size: 1rem;
          line-height: 1.4;
          max-width: 16rem;
        }
        .project-card__btn {
          padding: 0.55rem 1.3rem;
          border: none;
          border-radius: 9999px;
          background: var(--accent);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
        }
        .project-card__btn:hover {
          background: #ff824f;
        }

        .dots {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          padding: 20px 0;
        }
        .dot {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          cursor: pointer;
          transition: 0.3s;
        }
        .dot.active {
          background: var(--accent);
          transform: scale(1.2);
        }

        @media (max-width: 767px) {
  :root {
    --closed: 100%;
    --open: 100%;
    --gap: 0.8rem;
  }

  .head {
    padding: 30px 15px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .slider {
    padding: 0; /* Remove padding for full width */
  }

  .track {
    flex-direction: column;
    scroll-snap-type: y mandatory;
    gap: 0.8rem;
    padding: 0 0.5rem 20px; /* Reduce horizontal padding */
  }

  .project-card {
    height: auto;
    min-height: 80px;
    flex: 0 0 auto;
    width: calc(100vw - 1rem); /* Full width minus minimal margin */
    max-width: 100%;
    scroll-snap-align: start;
  }

  .project-card.active {
    min-height: 320px; /* Increased from 300px */
    transform: none;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .project-card__content {
    flex-direction: row;
    justify-content: flex-start;
    padding: 1rem;
    align-items: center;
    gap: 1rem;
  }

  .project-card__title {
    writing-mode: horizontal-tb;
    transform: none;
    font-size: 1.2rem;
    margin-right: auto;
  }

  .project-card__thumb,
  .project-card__desc,
  .project-card__btn {
    display: none;
  }

  .project-card.active .project-card__content {
    align-items: flex-start;
    padding: 1.5rem;
  }

  .project-card.active .project-card__title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }

  .project-card.active .project-card__thumb {
    width: 150px;
    height: 267px;
    border-radius: 0.35rem;
    margin-bottom: 1rem;
  }

  .project-card.active .project-card__desc {
    font-size: 0.95rem;
    max-width: 100%;
    margin-bottom: 1rem;
  }

  .project-card.active .project-card__btn {
    align-self: center;
    width: 100%;
    text-align: center;
    padding: 0.7rem;
  }

  .dots {
    display: none;
  }

  .controls {
    width: 100%;
    justify-content: space-between;
    padding: 0 0.5rem 20px; /* Reduced from 15px to 0.5rem */
  }

  .nav-btn {
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
  }

  /* Remove the duplicate mobile styles */
  .slider-wrap {
    padding: 0; /* Changed from 1rem 0.5rem */
  }
  .card {
    width: 100%; /* Changed from 100vw */
    max-width: none; /* Removed max-width constraint */
    min-height: 300px;
  }
  .card-img {
    height: 140px;
  }
  .head h2 {
    font-size: 1.25rem;
    padding: 0 0.5rem; /* Reduced from 1rem */
  }
}
      `}</style>

      <section className="bg-transparent">
        <div className="slider" ref={wrapRef}>
          <div className="track" ref={trackRef}>
            {projects.map((p, i) => (
              <article
                key={i}
                className={`project-card ${current === i ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                onMouseEnter={() =>
                  matchMedia("(hover:hover)").matches && setCurrent(i)
                }
              >
                <img className="project-card__bg" src={p.bg} alt="" />
                <div className="project-card__content">
                  <img className="project-card__thumb" src={p.thumb} alt="" />
                  <div>
                    <h3 className="project-card__title">{p.title}</h3>
                    <p className="project-card__desc">{p.desc}</p>
                    <Link to="/contact">
                      <button className="project-card__btn max-w-[130px] mt-0 md:mt-5">
                        Contact Me
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {!isMobile() && (
          <div className="dots">
            {projects.map((_, i) => (
              <span
                key={i}
                className={`dot ${current === i ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              ></span>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
