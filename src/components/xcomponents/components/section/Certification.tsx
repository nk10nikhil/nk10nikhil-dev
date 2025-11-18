

import { useCallback, useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  Sparkles,
} from "lucide-react";

type Cert = {
  id: string;
  title: string;
  institute: string;
  date: string;
  desc: string;
  img: string;
  url?: string;
  skills?: string[];
};

// Memoized certification data to prevent re-creation
const certifications: Cert[] = [
  {
    id: "1",
    title: "IT Service Management",
    institute: "SkillFront",
    date: "Oct 2025",
    desc: "The ISO 20000 Foundation - IT Service Certification from SkillFront demonstrates a comprehensive understanding of IT service management principles, project management methodologies, and regulatory compliance.",
    img: "/certificates/cert1.jpeg",
    url: "https://skillfront.com/certificate/02475660968055",
    skills: [
      "IT Service Management",
      "Project Management",
      "Quality of Service",
      "Problem Management",
    ],
  },
  {
    id: "5",
    title: "Agile Scrum Master",
    institute: "Agile Enterprise Coach, London",
    date: "Jul 2025",
    desc: "The Agile Scrum Master certification validates advanced knowledge in agile methodologies, Scrum framework, and software development life cycle.",
    img: "/certificates/cert5.jpeg",
    url: "https://agilecoach.co.uk/certificate/1004190",
    skills: ["Agile Methodologies", "Scrum", "Software Development", "SDLC"],
  },
  // ... (keep other certifications but shorten descriptions for performance)
];

const Certification = memo(() => {
  const [showDetail, setShowDetail] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const carouselRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Preload images for better performance
  useEffect(() => {
    certifications.forEach((cert) => {
      const img = new Image();
      img.src = cert.img;
      img.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(cert.img));
      };
    });
  }, []);

  const showSlider = useCallback(
    (type: "next" | "prev") => {
      if (isTransitioning || !listRef.current) return;

      const items =
        listRef.current.querySelectorAll<HTMLDivElement>(".cert-item");
      if (!items.length) return;

      setIsTransitioning(true);

      // Use requestAnimationFrame for smoother transitions
      requestAnimationFrame(() => {
        if (type === "next") {
          listRef.current?.appendChild(items[0]);
        } else {
          listRef.current?.prepend(items[items.length - 1]);
        }

        setTimeout(() => {
          setIsTransitioning(false);
        }, 400); // Reduced from 500ms for faster transitions
      });
    },
    [isTransitioning]
  );

  const hasMultipleCerts = certifications.length > 1;

  useEffect(() => {
    if (showDetail || !hasMultipleCerts) return;

    const interval = setInterval(() => {
      showSlider("next");
    }, 3000); // Increased interval for better UX

    return () => clearInterval(interval);
  }, [showDetail, hasMultipleCerts]);

  const handleSeeMore = useCallback(() => {
    setShowDetail(true);
  }, []);

  const handleBack = useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <section className="relative pt-8 md:pt-16 overflow-hidden">
      {/* Optimized background - removed heavy gradient */}
      <div className="absolute inset-0 bg-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-gray-200">
              Licenses & Credentials
            </span>
            <Sparkles className="w-4 h-4 text-pink-400" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Industry-recognized certifications and achievements
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className={`cert-carousel relative min-h-[500px] md:h-[500px] mt-[-100px] md:mt-[-80px] ${
          showDetail ? "show-detail" : ""
        }`}
      >
        {/* Simplified background blob */}
        <div className="cert-blob absolute top-1/2 left-1/2 w-[400px] h-[200px] bg-purple-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 transition-all duration-700"></div>

        <div
          ref={listRef}
          className="cert-list absolute w-[90%] max-w-[1000px] h-[80%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {certifications.map((cert, index) => (
            <CertItem
              key={cert.id}
              cert={cert}
              index={index}
              showDetail={showDetail}
              onSeeMore={handleSeeMore}
              loadedImages={loadedImages}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="arrows absolute bottom-4 md:bottom-6 w-[90%] max-w-[1000px] left-1/2 -translate-x-1/2 flex justify-between items-center">
          <NavButton
            direction="prev"
            onClick={() => showSlider("prev")}
            disabled={isTransitioning}
          />

          <BackButton showDetail={showDetail} onClick={handleBack} />

          <NavButton
            direction="next"
            onClick={() => showSlider("next")}
            disabled={isTransitioning}
          />
        </div>
      </div>

      <style>{`
        .cert-carousel {
          position: relative;
          transform: translateZ(0);
          will-change: transform;
        }

        .cert-item {
          position: absolute;
          left: 0;
          width: 70%;
          height: 100%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .cert-image {
          position: absolute;
          top: 30%;
          right: -80px;
          transform: translateY(-50%);
          width: 45%;
          border-radius: 1rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(168, 85, 247, 0.2);
          transition: all 0.4s ease;
          transform: translateZ(0);
        }

        /* Position items with hardware acceleration */
        .cert-list .cert-item:nth-child(1) {
          transform: translateX(-100%) translateY(-5%) scale(1.5);
          filter: blur(20px);
          opacity: 0;
          pointer-events: none;
        }

        .cert-list .cert-item:nth-child(2) {
          transform: translateX(0);
          filter: blur(0);
          opacity: 1;
          z-index: 10;
        }

        .cert-list .cert-item:nth-child(3) {
          transform: translate(50%, 10%) scale(0.8);
          filter: blur(8px);
          opacity: 0.7;
        }

        .cert-list .cert-item:nth-child(4) {
          transform: translate(90%, 20%) scale(0.5);
          filter: blur(15px);
          opacity: 0.3;
        }

        .cert-list .cert-item:nth-child(n + 5) {
          opacity: 0;
          pointer-events: none;
        }

        /* Content visibility */
        .introduce, .detail {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.3s ease;
          pointer-events: none;
          opacity: 0;
        }

        .introduce {
          width: 350px;
          padding-right: 2rem;
        }

        .detail {
          right: 0;
          width: 45%;
          text-align: right;
        }

        .cert-list .cert-item:nth-child(2) .introduce {
          opacity: 1;
          pointer-events: auto;
        }

        /* Detail view states */
        .cert-carousel.show-detail .cert-item:nth-child(2) .introduce {
          opacity: 0;
          pointer-events: none;
        }

        .cert-carousel.show-detail .cert-item:nth-child(2) .cert-image {
          right: calc(55% - 40px);
          width: 35%;
        }

        .cert-carousel.show-detail .cert-item:nth-child(2) .detail {
          opacity: 1;
          pointer-events: auto;
        }

        .cert-carousel.show-detail .cert-item:nth-child(3),
        .cert-carousel.show-detail .cert-item:nth-child(4) {
          transform: translateX(100%);
          opacity: 0;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .cert-carousel {
            min-height: 400px;
            margin-top: -60px;
          }

          .cert-list {
            height: 85%;
          }

          .cert-item {
            width: 90%;
          }

          .cert-image {
            width: 80%;
            right: 0;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          }

          .introduce, .detail {
            width: 100%;
            text-align: center;
            padding: 0 1rem;
          }

          .cert-carousel.show-detail .cert-item:nth-child(2) .cert-image {
            width: 60%;
            right: auto;
            left: 50%;
            transform: translateX(-50%) translateY(-30%);
          }

          .cert-carousel.show-detail .cert-item:nth-child(2) .detail {
            top: 60%;
            width: 100%;
            text-align: center;
          }
        }

        /* Performance optimizations */
        .cert-item * {
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .cert-image {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
      `}</style>
    </section>
  );
});

// Memoized sub-components for better performance
const CertItem = memo(
  ({
    cert,
    index,
    showDetail,
    onSeeMore,
    loadedImages,
  }: {
    cert: Cert;
    index: number;
    showDetail: boolean;
    onSeeMore: () => void;
    loadedImages: Set<string>;
  }) => (
    <div className="cert-item" style={{ zIndex: 10 - index }}>
      <motion.img
        src={cert.img}
        alt={cert.title}
        className="cert-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: loadedImages.has(cert.img) ? 1 : 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        loading="lazy"
      />

      <div className="introduce">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-purple-400 font-semibold mb-2 hidden md:block"
        >
          {cert.institute}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
        >
          {cert.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-sm mb-4 line-clamp-3"
        >
          {cert.desc}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={onSeeMore}
          className="group px-5 py-2 border-b-2 border-purple-500 bg-transparent font-bold tracking-wider text-white hover:bg-purple-500/10 transition-all duration-300 hidden md:flex items-center gap-2"
        >
          SEE MORE
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <div className="detail">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent"
        >
          {cert.title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-purple-400 font-semibold mb-3"
        >
          {cert.institute} • {cert.date}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-400 text-sm mb-4 max-h-20 overflow-y-auto"
        >
          {cert.desc}
        </motion.p>

        {cert.skills && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-purple-500/30 pt-3 mb-4"
          >
            <div className="flex flex-wrap gap-2 justify-end">
              {cert.skills.slice(0, 4).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {cert.url && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 justify-end"
          >
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded hover:shadow-lg transition-all text-sm"
            >
              VIEW CERTIFICATE
            </a>
          </motion.div>
        )}
      </div>
    </div>
  )
);

const NavButton = memo(
  ({
    direction,
    onClick,
    disabled,
  }: {
    direction: "prev" | "next";
    onClick: () => void;
    disabled: boolean;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-10 h-10 rounded-full border border-purple-500/50 bg-purple-900/30 backdrop-blur-sm text-white hover:bg-purple-500/30 transition-all disabled:opacity-50 flex items-center justify-center"
    >
      {direction === "prev" ? (
        <ChevronLeft className="w-5 h-5" />
      ) : (
        <ChevronRight className="w-5 h-5" />
      )}
    </button>
  )
);

const BackButton = memo(
  ({ showDetail, onClick }: { showDetail: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`px-6 py-2 border-b-2 border-purple-500 bg-transparent font-bold tracking-wider text-white hover:bg-purple-500/10 transition-all ${
        showDetail ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="flex items-center gap-2">
        <X className="w-4 h-4" />
        BACK
      </span>
    </button>
  )
);

Certification.displayName = "Certification";
export default Certification;
