"use client";
import React, { useEffect, useState } from "react";

/**
 * Reusable TeamCarousel component
 * @param {Array} members - Array of { name, role, img } objects
 * @param {string} buttonLink - Floating button link
 * @param {string} buttonImg - Floating button image
 */
export default function TeamCarousel({
  members = [],
  buttonLink = "https://gopichakradhar.me",
  buttonImg = "https://ik.imagekit.io/gopichakradhar/assets/super.jpg?updatedAt=1748004690247",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const total = members.length || 0;

  const updateCarousel = (newIndex: number) => {
    if (animating || total === 0) return;
    setAnimating(true);
    setCurrentIndex((newIndex + total) % total);
    setTimeout(() => setAnimating(false), 800);
  };

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp") updateCarousel(currentIndex - 1);
    if (e.key === "ArrowDown") updateCarousel(currentIndex + 1);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  // Scroll indicator
  useEffect(() => {
    const indicator = document.createElement("div");
    indicator.className = "scroll-indicator";
    indicator.innerHTML = "scroll";
    document.body.appendChild(indicator);
    setTimeout(() => indicator.remove(), 5000);
  }, []);

  const handleSwipe = (() => {
    let startY = 0;
    return {
      start: (e: React.TouchEvent) => (startY = e.touches[0].clientY),
      end: (e: React.TouchEvent) => {
        const diff = startY - e.changedTouches[0].clientY;
        if (Math.abs(diff) > 50)
          updateCarousel(diff > 0 ? currentIndex + 1 : currentIndex - 1);
      },
    };
  })();

  const getCardClass = (i: number) => {
    const offset = (i - currentIndex + total) % total;
    if (offset === 0) return "center";
    if (offset === 1) return "down-1";
    if (offset === 2) return "down-2";
    if (offset === total - 1) return "up-1";
    if (offset === total - 2) return "up-2";
    return "hidden";
  };

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        .main-container { display: flex; width: 100%; max-width: 1200px; height: 80vh; margin: auto; align-items: center; justify-content: center; gap: 60px; }
        .carousel-section, .controls-section { flex: 1; display: flex; justify-content: center; align-items: center; flex-direction: column; }
        .carousel-container { position: relative; width: 100%; max-width: 500px; height: 70vh; perspective: 1000px; }
        .carousel-track { width: 450px; height: 100%; position: relative; transform-style: preserve-3d; transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); margin: auto; }
        .card { position: absolute; width: 400px; height: 225px; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.15); transition: all 0.8s cubic-bezier(0.25,0.46,0.45,0.94); cursor: pointer; background:white; }
        .card img { width: 100%; height: 100%; object-fit: cover; transition: all 0.8s cubic-bezier(0.25,0.46,0.45,0.94); }
        .card.center { transform: scale(1.1); z-index: 10; }
        .card.up-1 { transform: translateY(-150px) scale(0.9) translateZ(-100px); opacity:0.9; z-index:5; pointer-events: auto; }
        .card.up-2 { transform: translateY(-300px) scale(0.8) translateZ(-300px); opacity:0.7; z-index:1; pointer-events: auto; }
        .card.down-1 { transform: translateY(150px) scale(0.9) translateZ(-100px); opacity:0.9; z-index:5; pointer-events: auto; }
        .card.down-2 { transform: translateY(300px) scale(0.8) translateZ(-300px); opacity:0.7; z-index:1; pointer-events: auto; }
        .card.hidden { opacity:0; pointer-events:none; }
        .card:hover:not(.center) { transform: scale(0.95); }
        .card.up-1:hover { transform: translateY(-150px) scale(0.95) translateZ(-100px); }
        .card.up-2:hover { transform: translateY(-300px) scale(0.85) translateZ(-300px); }
        .card.down-1:hover { transform: translateY(150px) scale(0.95) translateZ(-100px); }
        .card.down-2:hover { transform: translateY(300px) scale(0.85) translateZ(-300px); }
        .member-info { text-align: center; transition: all 0.5s ease-out; }
        .member-name { color: rgb(8,42,123); font-size: 2rem; font-weight: 700; position: relative; display: inline-block; margin-bottom: 8px; }
        .member-name::before,.member-name::after { content:""; position:absolute; top:100%; width:80px; height:2px; background:rgb(8,42,123); }
        .member-name::before{left:-100px;} .member-name::after{right:-100px;}
        .member-role { color:#848696; font-size:1.2rem; text-transform:uppercase; letter-spacing:0.1em; opacity:0.8; }
        .dots { display:flex; justify-content:center; gap:10px; margin-top:30px; }
        .dot { width:12px; height:12px; border-radius:50%; background:rgba(8,42,123,0.2); cursor:pointer; transition:all 0.3s ease; }
        .dot.active { background:rgb(8,42,123); transform:scale(1.2); }
        .nav-controls { display:flex; gap:30px; justify-content:center; }
        .nav-arrow { background:transparent; border:none; cursor:pointer; width:80px; height:80px; border-radius:50%; display:flex; justify-content:center; align-items:center; transition:all 0.3s ease; }
        .nav-arrow img { width:60px; height:60px; }
        .nav-arrow:hover { transform:scale(1.2); }
        #super-btn { position:fixed; right:32px; bottom:32px; width:56px; height:56px; border-radius:18px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,0.18); transition:0.2s; }
        #super-btn:hover { transform:scale(1.07); box-shadow:0 4px 24px rgba(0,0,0,0.28); }
        #super-btn img { width:100%; height:100%; object-fit:cover; border-radius:16px; }
        .scroll-indicator { position:fixed; bottom:30px; right:30px; background:rgba(8,42,123,0.8); color:#fff; padding:8px 16px; border-radius:20px; font-size:0.8rem; z-index:1000; animation:scrollFadeOut 5s ease-in-out forwards; }
        @keyframes scrollFadeOut{0%{opacity:0;transform:scale(0.8);}10%,90%{opacity:1;transform:scale(1);}100%{opacity:0;transform:scale(0.8);} }
        @media(max-width:768px){ .main-container{flex-direction:column; gap:20px;height:auto;} .card{width:320px;height:180px;} .carousel-track{width:350px;} .nav-controls{display:none;} }
      `}</style>

      <div
        className="main-container"
        onTouchStart={handleSwipe.start}
        onTouchEnd={handleSwipe.end}
      >
        <div className="carousel-section">
          <div className="carousel-container">
            <div className="carousel-track">
              {members.map((m, i) => (
                <div
                  key={i}
                  className={`card ${getCardClass(i)}`}
                  onClick={() => {
                    // Calculate the shortest path to reach the clicked card
                    const offset = (i - currentIndex + total) % total;
                    const reverseOffset = (currentIndex - i + total) % total;

                    // Choose the direction with fewer steps
                    if (offset <= reverseOffset) {
                      updateCarousel(currentIndex + offset);
                    } else {
                      updateCarousel(currentIndex - reverseOffset);
                    }
                  }}
                >
                  <img src={m.img} alt={m.name} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="controls-section">
          <div className="nav-controls">
            <button
              className="nav-arrow"
              onClick={() => updateCarousel(currentIndex - 1)}
            >
              <img
                src="https://ik.imagekit.io/gopichakradhar/icons/top.png?updatedAt=1754290522765"
                alt="Up"
              />
            </button>
            <button
              className="nav-arrow"
              onClick={() => updateCarousel(currentIndex + 1)}
            >
              <img
                src="https://ik.imagekit.io/gopichakradhar/icons/down.png?updatedAt=1754290523249"
                alt="Down"
              />
            </button>
          </div>

          {total > 0 && (
            <div className="member-info">
              <h2 className="member-name">{members[currentIndex].name}</h2>
              <p className="member-role">{members[currentIndex].role}</p>
            </div>
          )}

          <div className="dots">
            {members.map((_, i) => (
              <div
                key={i}
                className={`dot ${currentIndex === i ? "active" : ""}`}
                onClick={() => updateCarousel(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <a href={buttonLink} target="_blank" id="super-btn" title="Visit">
        <img src={buttonImg} alt="Super" />
      </a>
    </>
  );
}



// {
  /* <section className="container mx-0 px-0 py-8 md:py-16 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-center justify-center mx-auto"
          >
            <Sparkles className="w-4 h-4 text-cyber-blue" />
            <span className="text-sm font-semibold text-gray-200">
              WHY CHOOSE ME
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            Why Choose Me
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            I offer a unique blend of creativity, technical expertise, and a
            commitment to delivering exceptional results that exceed
            expectations.
          </p>
          <TeamCarousel members={members} />
        </motion.div>
      </section> */
// }


  // const members = [
  //   {
  //     name: "Luffy",
  //     role: "Founder",
  //     img: "https://ik.imagekit.io/gopichakradhar/luffy/o1.jpeg",
  //   },
  //   {
  //     name: "Monkey D. Luffy",
  //     role: "Creative Director",
  //     img: "https://ik.imagekit.io/gopichakradhar/luffy/o2.jpeg",
  //   },
  //   {
  //     name: "Lucy",
  //     role: "UX Designer",
  //     img: "https://ik.imagekit.io/gopichakradhar/luffy/o3.jpeg",
  //   },
  //   {
  //     name: "Luffy kun",
  //     role: "Marketing Manager",
  //     img: "https://ik.imagekit.io/gopichakradhar/luffy/o5.jpeg",
  //   },
  // ];