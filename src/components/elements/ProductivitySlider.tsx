"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { Link } from "react-router-dom";

type Project = {
  title: string;
  desc: string;
  bg: string;
  thumb: string;
};

const PROJECTS: Project[] = [
  {
    title: "Full Stack Development",
    desc: "End-to-end web application development with modern technologies",
    bg: "/services/service11.avif",
    thumb: "/services/service12.avif",
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces that users love",
    bg: "/services/service21.avif",
    thumb: "/services/service22.avif",
  },
  {
    title: "Mobile Development",
    desc: "Native and cross-platform mobile applications",
    bg: "/services/service31.avif",
    thumb: "/services/service32.avif",
  },
  {
    title: "Web3 & Blockchain",
    desc: "Decentralized applications and smart contracts",
    bg: "/services/service41.avif",
    thumb: "/services/service42.avif",
  },
  {
    title: "AI Integration",
    desc: "Intelligent features powered by machine learning",
    bg: "/services/service51.avif",
    thumb: "/services/service52.avif",
  },
  {
    title: "SEO & Performance",
    desc: "Optimize your digital presence for maximum impact",
    bg: "/services/service61.avif",
    thumb: "/services/service62.avif",
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable and secure cloud infrastructure",
    bg: "/services/service71.avif",
    thumb: "/services/service72.avif",
  },
  {
    title: "DevOps & CI/CD",
    desc: "Streamlined development and deployment pipelines",
    bg: "/services/service81.avif",
    thumb: "/services/service82.avif",
  },
];

export default function ProductivitySlider() {
  const projects = useMemo(() => PROJECTS, []);
  const [current, setCurrent] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const updateViewport = () => {
    setIsMobileView(window.matchMedia("(max-width: 767px)").matches);
  };

  const center = (index: number) => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !wrap || !card) return;

    if (isMobileView) {
      wrap.scrollTo({
        top: card.offsetTop - (wrap.clientHeight / 2 - card.clientHeight / 2),
        behavior: "smooth",
      });
      return;
    }

    wrap.scrollTo({
      left: card.offsetLeft - (wrap.clientWidth / 2 - card.clientWidth / 2),
      behavior: "smooth",
    });
  };

  const go = (step: number) => {
    setCurrent((prev) =>
      Math.min(Math.max(prev + step, 0), projects.length - 1),
    );
  };

  useEffect(() => {
    updateViewport();
    window.addEventListener("resize", updateViewport, { passive: true });
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    center(current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, isMobileView]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      go(1);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      go(-1);
    }
  };

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="ps-root w-full max-w-7xl mx-auto px-0 md:px-4 bg-transparent focus:outline-none"
      aria-label="Services slider"
    >
      <style>{`
        .ps-root {
          --ps-gap: 1.25rem;
          --ps-speed: 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          --ps-closed: 5rem;
          --ps-open: 30rem;
          --ps-accent: #ff6b35;
          font-family: Inter, sans-serif;
          color: #c5c7ce;
        }

        .ps-root * {
          box-sizing: border-box;
        }

        .ps-root .slider {
          max-width: 1400px;
          margin: 0 auto;
          overflow: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .ps-root .slider::-webkit-scrollbar {
          display: none;
        }

        .ps-root .track {
          display: flex;
          gap: var(--ps-gap);
          align-items: flex-start;
          justify-content: center;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          padding: 0 0 10px 0;
        }

        .ps-root .project-card {
          position: relative;
          flex: 0 0 var(--ps-closed);
          height: 26rem;
          border-radius: 1rem;
          overflow: hidden;
          cursor: pointer;
          scroll-snap-align: center;
          transition: flex-basis var(--ps-speed), transform var(--ps-speed);
          background: #0f1115;
        }

        .ps-root .project-card.active {
          flex-basis: var(--ps-open);
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.45);
        }

        .ps-root .project-card__bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.75) saturate(75%) blur(2px);
          transition: filter 0.3s, transform var(--ps-speed);
        }

        .ps-root .project-card:hover .project-card__bg {
          filter: brightness(0.9) saturate(100%) blur(2px);
          transform: scale(1.06);
        }

        .ps-root .project-card__content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.7rem;
          padding: 1rem;
          background: linear-gradient(transparent 40%, rgba(0, 0, 0, 0.85) 100%);
          z-index: 2;
        }

        .ps-root .project-card__title {
          color: #fff;
          font-weight: 700;
          font-size: 1.35rem;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }

        .ps-root .project-card__thumb,
        .ps-root .project-card__desc,
        .ps-root .project-card__btn {
          display: none;
        }

        .ps-root .project-card.active .project-card__content {
          flex-direction: row;
          align-items: center;
          padding: 1.2rem 2rem;
          gap: 1.1rem;
        }

        .ps-root .project-card.active .project-card__title {
          writing-mode: horizontal-tb;
          transform: none;
          font-size: 2.2rem;
          line-height: 1.1;
          margin-bottom: 0.7rem;
        }

        .ps-root .project-card.active .project-card__thumb,
        .ps-root .project-card.active .project-card__desc,
        .ps-root .project-card.active .project-card__btn {
          display: block;
        }

        .ps-root .project-card__thumb {
          width: 133px;
          height: 269px;
          border-radius: 0.45rem;
          object-fit: cover;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
          flex-shrink: 0;
        }

        .ps-root .project-card__desc {
          color: #ddd;
          font-size: 1rem;
          line-height: 1.4;
          max-width: 16rem;
          margin-bottom: 0.9rem;
        }

        .ps-root .project-card__btn {
          display: inline-block;
          padding: 0.55rem 1.3rem;
          border-radius: 9999px;
          background: var(--ps-accent);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .ps-root .project-card__btn:hover {
          background: #ff824f;
        }

        .ps-root .dots {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          padding: 20px 0;
        }

        .ps-root .dot {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .ps-root .dot.active {
          background: var(--ps-accent);
          transform: scale(1.2);
        }

        @media (max-width: 767px) {
          .ps-root {
            --ps-closed: 100%;
            --ps-open: 100%;
            --ps-gap: 0.8rem;
          }

          .ps-root .track {
            flex-direction: column;
            scroll-snap-type: y mandatory;
            gap: 0.8rem;
            padding: 0 0.5rem 20px;
          }

          .ps-root .project-card {
            width: 100%;
            max-width: 100%;
            min-height: 84px;
            height: auto;
            flex: 0 0 auto;
            scroll-snap-align: start;
          }

          .ps-root .project-card.active {
            min-height: 320px;
            transform: none;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          }

          .ps-root .project-card__content {
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            padding: 1rem;
            gap: 1rem;
          }

          .ps-root .project-card__title {
            writing-mode: horizontal-tb;
            transform: none;
            font-size: 1.2rem;
            margin-right: auto;
          }

          .ps-root .project-card__thumb,
          .ps-root .project-card__desc,
          .ps-root .project-card__btn {
            display: none;
          }

          .ps-root .project-card.active .project-card__content {
            align-items: flex-start;
            padding: 1.5rem;
          }

          .ps-root .project-card.active .project-card__title {
            font-size: 1.8rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }

          .ps-root .project-card.active .project-card__thumb {
            width: 150px;
            height: 267px;
            border-radius: 0.35rem;
            margin-bottom: 1rem;
          }

          .ps-root .project-card.active .project-card__desc {
            font-size: 0.95rem;
            max-width: 100%;
            margin-bottom: 1rem;
          }

          .ps-root .project-card.active .project-card__btn {
            width: 100%;
            text-align: center;
            padding: 0.7rem;
          }

          .ps-root .dots {
            display: none;
          }
        }
      `}</style>

      <div className="bg-transparent">
        <div className="slider" ref={wrapRef}>
          <div className="track" ref={trackRef}>
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`project-card ${current === i ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                onMouseEnter={() =>
                  window.matchMedia("(hover: hover)").matches && setCurrent(i)
                }
              >
                <img className="project-card__bg" src={p.bg} alt="" />
                <div className="project-card__content">
                  <img
                    className="project-card__thumb"
                    src={p.thumb}
                    alt={p.title}
                  />
                  <div>
                    <h3 className="project-card__title">{p.title}</h3>
                    <p className="project-card__desc">{p.desc}</p>
                    {current === i && (
                      <Link to="/contact" className="project-card__btn">
                        Contact Me
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {!isMobileView && (
          <div className="dots">
            {projects.map((p, i) => (
              <span
                key={`${p.title}-dot`}
                className={`dot ${current === i ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
