import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";
import BlurBackground from "@/components/elements/BlurBackground";
import FloatingObjects from "@/components/elements/FloatingObjects";
import P5Background from "@/components/elements/P5Background";
import SkillsSection from "@/components/section/SkillsSection";
import DigitalLamp from "@/components/ReactUI/universeio/DigitalLamp";
import { OrbitingCirclesDemo } from "@/components/elements/OrbitingCirclesDemo";
import ParallaxScroll from "@/components/elements/ParallaxScroll";
import TechStack from "@/components/section/TechStack";
import LinkedCircularSkills from "@/components/elements/LinkedCircularSkills";
import BackgroundHero from "@/components/section/BackgrounHero";
import { CheckCircle2 } from "lucide-react";
import ScrollingSections from "@/components/section/ScrollableSection";
import LogoScroll from "@/components/elements/LogoScroll";
import { MarqueeDemo } from "@/components/elements/MarqueeDemo";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slideRef = useRef(null);

  const handleNext = () => {
    const slide = slideRef.current;
    const items = slide.querySelectorAll(".item");
    slide.appendChild(items[0]);
  };

  const handlePrev = () => {
    const slide = slideRef.current;
    const items = slide.querySelectorAll(".item");
    slide.prepend(items[items.length - 1]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-transparent min-h-screen relative"
    >
      {/* Background Elements */}
      <BlurBackground />

      {/* Content */}
      <Navbar />
      <main className="pb-10">
        <section className="container mx-0 px-0 md:px-0 mb-0 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <BackgroundHero />

            <LogoScroll />

            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-black/50 blur-xl opacity-70"></div>
              <div className="relative glass-card rounded-xl p-10 backdrop-blur-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                  Why Choose Me?
                </h2>
                <p className="text-white/80 text-lg  leading-relaxed">
                  We blend technical expertise with strategic thinking to
                  deliver solutions that drive real business value. Our approach
                  is collaborative, transparent, and focused on long-term
                  success.
                </p>
                <ScrollingSections />
              </div>
            </div>

            {/* Image Slider */}
            <div className="mt-16">
              <div>
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                />

                {/* Outer Box */}
                <div className="skills-image-slider box flex justify-center">
                  <div className="container">
                    <div className="slide" ref={slideRef}>
                      {/* Slide Items */}
                      <div
                        className="item"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/aisaas.png')",
                        }}
                      >
                        <div className="content">
                          <div className="name">AI Solutions</div>
                          <div className="description">
                            Advanced AI-powered applications with natural
                            language processing and machine learning
                            capabilities
                          </div>
                          <button>View Projects</button>
                        </div>
                      </div>

                      <div
                        className="item"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/payment.png')",
                        }}
                      >
                        <div className="content">
                          <div className="name">FinTech</div>
                          <div className="description">
                            Secure payment processing systems with real-time
                            transaction monitoring and fraud detection
                          </div>
                          <button>View Projects</button>
                        </div>
                      </div>

                      <div
                        className="item"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/social_media.png')",
                        }}
                      >
                        <div className="content">
                          <div className="name">Social Platforms</div>
                          <div className="description">
                            Feature-rich social media applications with
                            real-time messaging and content sharing
                          </div>
                          <button>View Projects</button>
                        </div>
                      </div>

                      <div
                        className="item"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/data_protection_cloud.png')",
                        }}
                      >
                        <div className="content">
                          <div className="name">Cloud Solutions</div>
                          <div className="description">
                            Scalable cloud infrastructure with robust data
                            protection and disaster recovery systems
                          </div>
                          <button>View Projects</button>
                        </div>
                      </div>

                      <div
                        className="item"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/dataautomation.png')",
                        }}
                      >
                        <div className="content">
                          <div className="name">Automation</div>
                          <div className="description">
                            Intelligent data automation systems that streamline
                            workflows and increase operational efficiency
                          </div>
                          <button>View Projects</button>
                        </div>
                      </div>

                      <div
                        className="item"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/projects/blog.png')",
                        }}
                      >
                        <div className="content">
                          <div className="name">Content Platforms</div>
                          <div className="description">
                            Modern content management systems with SEO
                            optimization and analytics integration
                          </div>
                          <button>View Projects</button>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="button ">
                      <button className="prev " onClick={handlePrev}>
                        <i className="fa-solid  fa-arrow-left"></i>
                      </button>
                      <button className="next" onClick={handleNext}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Styles - with proper scoping and isolation */}
                <style>{`
        /* Scope all selectors to specific classes to prevent style leakage */
        .skills-image-slider .box,
        .skills-image-slider .container,
        .skills-image-slider .slide,
        .skills-image-slider .item,
        .skills-image-slider .content,
        .skills-image-slider .button {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          text-decoration: none;
        }

        /* Only apply these styles to elements within the slider */
        .skills-image-slider .box {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 500px;
          background: transparent;
          padding: 20px;
          margin: 40px 0;
          width: 100%;
        }

        .skills-image-slider .container {
          position: relative;
          max-width: 1000px;
          width: 100%;
          height: 400px;
          background: rgba(20, 20, 30, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border-radius: 15px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skills-image-slider .slide {
          position: relative;
          height: 100%;
          width: 100%;
        }

        .skills-image-slider .slide .item {
          width: 200px;
          height: 300px;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          border-radius: 20px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
          background-position: center;
          background-size: cover;
          display: inline-block;
          transition: 0.5s;
        }

        .skills-image-slider .slide .item:nth-child(1),
        .skills-image-slider .slide .item:nth-child(2) {
          top: 0;
          left: 0;
          transform: translate(0, 0);
          border-radius: 0;
          width: 100%;
          height: 100%;
        }

        .skills-image-slider .slide .item:nth-child(2) .content {
          display: block;
        }

        .skills-image-slider .slide .item:nth-child(3) {
          left: 50%;
        }

        .skills-image-slider .slide .item:nth-child(4) {
          left: calc(50% + 220px);
        }

        .skills-image-slider .slide .item:nth-child(5) {
          left: calc(50% + 440px);
        }

        .skills-image-slider .slide .item:nth-child(n + 6) {
          left: calc(50% + 440px);
          overflow: hidden;
        }

        .skills-image-slider .item .content {
          position: absolute;
          top: 50%;
          left: 20px;
          width: 300px;
          text-align: left;
          color: #eee;
          transform: translate(0, -50%);
          font-family: system-ui;
          display: none;
        }

        .skills-image-slider .content .name {
          font-size: 40px;
          text-transform: uppercase;
          font-weight: bold;
          opacity: 0;
          animation: sliderAnimate 1s ease-in-out 1 forwards;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .skills-image-slider .content .description {
          margin-top: 10px;
          margin-bottom: 20px;
          opacity: 0;
          animation: sliderAnimate 1s ease-in-out 0.3s 1 forwards;          
        }

        .skills-image-slider .content button {
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          opacity: 0;
          animation: sliderAnimate 1s ease-in-out 0.6s 1 forwards;
          background: linear-gradient(to right, #9333ea, #6366f1);
          color: white;
          border-radius: 6px;
          font-weight: 600;
          transition: transform 0.2s;
        }
        
        .skills-image-slider .content button:hover {
          transform: scale(1.05);
        }

        /* Rename animation to avoid conflicts */
        @keyframes sliderAnimate {
          from {
            opacity: 0;
            transform: translate(0, 100px);
            filter: blur(33px);
          }
          to {
            opacity: 1;
            transform: translate(0);
            filter: blur(0);
          }
        }

        .skills-image-slider .button {
          width: 100%;
          text-align: center;
          position: absolute;
          bottom: 20px;
        }

        .skills-image-slider .button button {
          width: 40px;
          height: 35px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          margin: 0 5px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          transition: 0.3s;
        }

        .skills-image-slider .button button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.1);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .skills-image-slider .container {
            height: 350px;
          }
          
          .skills-image-slider .content .name {
            font-size: 30px;
          }
          
          .skills-image-slider .content .description {
            font-size: 14px;
          }
        }
                                `}</style>
              </div>
            </div>

            {/* Api Integration */}
            <section className="container mx-auto py-16 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="relative mx-auto max-w-md rounded-xl overflow-hidden border border-purple-700/30 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-purple-600/20 pointer-events-none"></div>
                    <img
                      src="/sections/api4.png"
                      width={400}
                      height={400}
                      alt="API Integrations"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 bg-purple-900/30 rounded-full px-4 py-1 mb-6 border border-purple-700/30">
                    <span className="text-xs text-purple-300">
                      INTEGRATIONS
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    APIs and Integrations
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Easily connect with over 100 tools and services to enhance
                    your workflow and extend functionality.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      </div>
                      <span className="text-sm">Google Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      </div>
                      <span className="text-sm">Stripe Payments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      </div>
                      <span className="text-sm">Mailchimp</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-purple-500" />
                      </div>
                      <span className="text-sm">Zapier</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* {Testimonials} */}
            <section className="container mx-auto pt-8 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-purple-900/30 rounded-full px-4 py-1 mb-6 border border-purple-700/30">
                  <span className="text-xs text-purple-300">TESTIMONIALS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What my customers say
                </h2>
              </div>
              <MarqueeDemo />
            </section>
          </motion.div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Services;
