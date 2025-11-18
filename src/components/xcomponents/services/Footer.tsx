import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  Globe,
  Heart,
  Star,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const globeCanvasRef = useRef<HTMLCanvasElement>(null);

  const locations = [
    { name: "Mumbai", lat: 19.076, lng: 72.8777 },
    { name: "Delhi", lat: 28.7041, lng: 77.1025 },
    { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
    { name: "Chennai", lat: 13.0827, lng: 80.2707 },
    { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
    { name: "New York", lat: 40.7128, lng: -74.006 },
    { name: "London", lat: 51.5074, lng: -0.1278 },
    { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
    { name: "Sydney", lat: -33.8688, lng: 151.2093 },
    { name: "Paris", lat: 48.8566, lng: 2.3522 },
    { name: "Berlin", lat: 52.52, lng: 13.405 },
    { name: "Madrid", lat: 40.4168, lng: -3.7038 },
    { name: "Rome", lat: 41.9028, lng: 12.4964 },
    { name: "Cairo", lat: 30.0444, lng: 31.2357 },
    { name: "Hong Kong", lat: 22.3273, lng: 114.1739 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { name: "Dubai", lat: 25.2048, lng: 55.2708 },
    { name: "Paris", lat: 48.8566, lng: 2.3522 },
    { name: "Berlin", lat: 52.52, lng: 13.405 },
    { name: "Madrid", lat: 40.4168, lng: -3.7038 },
    { name: "Rome", lat: 41.9028, lng: 12.4964 },
    { name: "Cairo", lat: 30.0444, lng: 31.2357 },
    { name: "Cape Town", lat: -33.9249, lng: 18.4241 },
    { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
    { name: "Buenos Aires", lat: -34.6037, lng: -58.3816 },
    { name: "Mexico City", lat: 19.4326, lng: -99.1332 },
    { name: "Vancouver", lat: 49.2827, lng: -123.1207 },
    { name: "Moscow", lat: 55.7558, lng: 37.6173 },
    { name: "Beijing", lat: 39.9042, lng: 116.4074 },
    { name: "Seoul", lat: 37.5665, lng: 126.978 },
    { name: "Jakarta", lat: -6.2088, lng: 106.8456 },
    { name: "Cairo", lat: 30.0444, lng: 31.2357 },
    { name: "Nairobi", lat: -1.2921, lng: 36.8219 },
    { name: "Ankara", lat: 39.9334, lng: 32.8597 },
    { name: "Wellington", lat: -41.2865, lng: 174.7762 },
    { name: "Santiago", lat: -33.4489, lng: -70.6693 },
    { name: "Lima", lat: -12.0464, lng: -77.0428 },
    { name: "Oslo", lat: 59.9139, lng: 10.7522 },
    { name: "Stockholm", lat: 59.3293, lng: 18.0686 },
  ];

  // Globe effect for newsletter section
  useEffect(() => {
    const canvas = globeCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const containerElement = canvas.parentElement;
      if (!containerElement) return;

      const containerWidth = containerElement.offsetWidth;
      const containerHeight = containerElement.offsetHeight;
      const size = Math.min(containerWidth, containerHeight, 200);

      canvas.width = size;
      canvas.height = size;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    let animationId: number;

    const animate = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = canvas.width * 0.35;

      let rotation = 0;

      const latLngTo3D = (lat: number, lng: number, r: number) => {
        const phi = ((90 - lat) * Math.PI) / 180;
        const theta = ((lng + 180) * Math.PI) / 180;

        return {
          x: r * Math.sin(phi) * Math.cos(theta),
          y: r * Math.cos(phi),
          z: r * Math.sin(phi) * Math.sin(theta),
        };
      };

      const rotateY = (
        point: { x: number; y: number; z: number },
        angle: number
      ) => {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        return {
          x: point.x * cos - point.z * sin,
          y: point.y,
          z: point.x * sin + point.z * cos,
        };
      };

      const drawGlobe = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw globe outline
        ctx.strokeStyle = "hsl(32, 95%, 44%)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Draw latitude lines
        ctx.strokeStyle = "hsla(32, 95%, 44%, 0.3)";
        ctx.lineWidth = 1;
        for (let lat = -60; lat <= 60; lat += 30) {
          ctx.beginPath();
          const y = centerY - (lat / 90) * radius;
          const r = Math.sqrt(
            radius * radius - Math.pow((lat / 90) * radius, 2)
          );
          ctx.ellipse(centerX, y, r, r * 0.3, 0, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Draw longitude lines
        for (let lng = 0; lng < 360; lng += 30) {
          ctx.beginPath();
          for (let lat = -90; lat <= 90; lat += 5) {
            const point3D = latLngTo3D(lat, lng, radius);
            const rotated = rotateY(point3D, rotation);

            if (rotated.z > 0) {
              const x = centerX + rotated.x;
              const y = centerY - rotated.y;

              if (lat === -90) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
          }
          ctx.stroke();
        }

        // Draw location points
        locations.forEach((location, index) => {
          const point3D = latLngTo3D(location.lat, location.lng, radius);
          const rotated = rotateY(point3D, rotation);

          if (rotated.z > 0) {
            const x = centerX + rotated.x;
            const y = centerY - rotated.y;

            // Draw point
            ctx.fillStyle = "hsl(32, 95%, 60%)";
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();

            // Draw pulse effect
            const time = Date.now() / 1000;
            const pulseRadius = 6 + Math.sin(time * 2 + index) * 2;
            ctx.strokeStyle = `hsla(32, 95%, 60%, ${0.5 - pulseRadius / 15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(x, y, pulseRadius, 0, Math.PI * 2);
            ctx.stroke();

            // Draw connection lines to center
            ctx.strokeStyle = "hsla(32, 95%, 44%, 0.2)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();
          }
        });

        rotation += 0.005;
        animationId = requestAnimationFrame(drawGlobe);
      };

      drawGlobe();
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-marketing-950 via-black to-marketing-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-marketing-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-marketing-600/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 pt-16 pb-8 px-5 md:px-12">
        <div className="mx-auto">
          {/* Enhanced Newsletter Section with Globe Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative bg-gradient-to-br from-marketing-500/20 via-marketing-400/10 to-marketing-600/20 p-[2px] rounded-3xl"
            >
              <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/10 shadow-2xl">
                {/* Animated sparkles */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${5 + (i % 5) * 22.5}%`,
                      top: `${5 + Math.floor(i / 5) * 30}%`,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.7, 0.2],
                    }}
                    transition={{
                      duration: 3 + i * 0.3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.2,
                    }}
                  >
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-marketing-400/40" />
                  </motion.div>
                ))}
                {/* Additional floating sparkles for better coverage */}
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={`float-${i}`}
                    className="absolute hidden lg:block"
                    style={{
                      left: `${10 + i * 8 + (i % 2 === 0 ? 5 : -5)}%`,
                      top: `${15 + (i % 3) * 25 + (i % 2 === 0 ? 8 : -8)}%`,
                    }}
                    animate={{
                      rotate: -360,
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.1, 0.5, 0.1],
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 4 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  >
                    <Sparkles className="w-2 h-2 md:w-3 md:h-3 text-marketing-300/30" />
                  </motion.div>
                ))}

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left Content */}
                  <div className="text-center lg:text-left space-y-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-marketing-500/20 rounded-full border border-marketing-500/30 mb-6">
                        <Mail className="w-4 h-4 text-marketing-400" />
                        <span className="text-sm font-medium text-marketing-300">
                          Stay Connected
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                        Want to Stay Ahead of the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-400 to-marketing-600">
                          Curve?
                        </span>
                      </h3>

                      <p className="text-white/70 text-lg leading-relaxed">
                        Join 1000+ brands who trust us to create exceptional
                        experiences. Get exclusive insights, industry trends,
                        and project updates.
                      </p>
                    </motion.div>

                    {/* Newsletter Form */}
                    <motion.form
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      onSubmit={handleNewsletterSubmit}
                      className="space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-marketing-400" />
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/10 border-white/20 focus:border-marketing-500 focus:ring-marketing-500/20 text-white placeholder:text-white/50 pl-12 pr-4 py-3 text-base rounded-xl backdrop-blur-sm"
                            disabled={isSubscribed}
                            required
                          />
                          {isSubscribed && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute inset-0 flex items-center justify-center bg-marketing-500/20 backdrop-blur-sm rounded-xl"
                            >
                              <span className="text-marketing-300 font-semibold">
                                <Star className="w-4 h-4 inline mr-2" />
                                Subscribed! 🎉
                              </span>
                            </motion.div>
                          )}
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubscribed}
                          className="bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                        >
                          <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                          Subscribe
                        </Button>
                      </div>
                    </motion.form>

                    {/* Features */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="grid grid-cols-3 gap-2 sm:gap-4 pt-4"
                    >
                      {[
                        {
                          icon: Zap,
                          title: "Weekly Insights",
                          desc: "Marketing analysis & trends",
                        },
                        {
                          icon: Users,
                          title: "Exclusive Content",
                          desc: "Early access & previews",
                        },
                        {
                          icon: Heart,
                          title: "No Spam Promise",
                          desc: "Quality over quantity",
                        },
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -3 }}
                          className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-2 sm:p-4 border border-white/10 hover:border-marketing-500/30 transition-all duration-300"
                        >
                          <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 bg-gradient-to-r from-marketing-500 to-marketing-600 rounded-lg flex items-center justify-center">
                            <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </div>
                          <h4 className="font-semibold mb-1 text-white text-xs sm:text-sm">
                            {feature.title}
                          </h4>
                          <p className="text-xs sm:text-xs text-white/60 leading-tight">
                            {feature.desc}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Right Globe */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex items-center justify-center"
                  >
                    <div className="relative w-48 h-48 md:w-80 md:h-80">
                      <canvas
                        ref={globeCanvasRef}
                        className="w-full h-full"
                        style={{
                          filter:
                            "drop-shadow(0 0 20px hsla(32, 95%, 44%, 0.4))",
                        }}
                      />

                      {/* Globe overlay content */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center bg-black/20 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                          <Globe className="w-5 h-5 text-marketing-400 mx-auto mb-1" />
                          <div className="text-marketing-300 text-sm font-medium">
                            Global Update
                          </div>
                          <div className="text-white/60 text-xs">
                            25+ Sources
                          </div>
                        </div>
                      </div>

                      {/* Floating stats */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-marketing-500 to-marketing-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        1K+ Subscribers
                      </div>
                      <div className="absolute -bottom-2 -left-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full border border-white/20">
                        Weekly Updates
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb -4 md:mb-16">
            {/* Company Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <a
                href="https://webuiltu.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6 group"
              >
                <div className="text-2xl font-bold flex items-center">
                  <img
                    src="/logo.jpg"
                    alt="WeBuilt_U Logo"
                    className="h-12 w-12 rounded-xl mr-3 border-2 border-marketing-500/30 group-hover:border-marketing-500/60 transition-all duration-300"
                  />
                  <div>
                    <span className="text-white group-hover:text-marketing-400 transition-colors">
                      WeBuilt_U
                    </span>
                    <br />
                    <span className="text-marketing-400 text-lg">Agency</span>
                  </div>
                </div>
              </a>

              <p className="text-white/70 mb-6 leading-relaxed">
                A premier marketing agency specializing in premium event
                organization, cutting-edge web development, strategic brand
                building, and comprehensive digital marketing solutions.
              </p>

              <div className="flex items-center gap-2 text-sm text-marketing-400 mb-4">
                <Heart className="w-4 h-4 fill-current" />
                <span>Trusted by 100+ brands nationwide</span>
              </div>

              {/* Enhanced Social Icons */}
              <div className="flex space-x-3">
                {[
                  {
                    href: "https://facebook.com/webuiltu",
                    icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                    title: "Facebook",
                  },
                  {
                    href: "https://instagram.com/webuilt_u",
                    icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                    title: "Instagram",
                  },
                  {
                    href: "https://twitter.com/webuiltu",
                    icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                    title: "Twitter",
                  },
                  {
                    href: "https://linkedin.com/company/webuiltu",
                    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.867 0-2.153 1.459-2.153 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.381-1.559 2.841-1.559 3.037 0 3.6 2.001 3.6 4.601v5.591z",
                    title: "LinkedIn",
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-marketing-500/20 to-marketing-600/20 p-3 rounded-xl hover:from-marketing-500 hover:to-marketing-600 transition-all duration-300 border border-marketing-500/30 hover:border-marketing-500 group"
                    title={`Visit our ${social.title} page`}
                  >
                    <svg
                      className="h-5 w-5 text-marketing-300 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d={social.icon}
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:pl-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-marketing-400" />
                Our Services
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    name: "Premium Event Organization",
                    href: "/services/events",
                  },
                  {
                    name: "Website Development",
                    href: "/services/web-development",
                  },
                  { name: "Brand Development", href: "/services/branding" },
                  {
                    name: "Sponsorship Management",
                    href: "/services/sponsorship",
                  },
                  {
                    name: "Influencer Marketing",
                    href: "/services/influencer",
                  },
                  {
                    name: "Digital Marketing Solutions",
                    href: "/services/digital-marketing",
                  },
                ].map((service, idx) => (
                  <li key={idx}>
                    <a
                      href={service.href}
                      className="text-white/70 hover:text-marketing-400 transition-colors flex items-center group"
                    >
                      <div className="w-1.5 h-1.5 bg-marketing-400 rounded-full mr-3 group-hover:scale-125 transition-transform" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden md:block md:pl-8"
            >
              <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-marketing-400" />
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "About Us", href: "#about" },
                  { name: "Our Portfolio", href: "#portfolio" },
                  { name: "Success Stories", href: "#testimonials" },
                  { name: "Our Methodology", href: "#methodology" },
                  { name: "Career Opportunities", href: "#careers" },
                  { name: "Contact Us", href: "#contact" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-marketing-400 transition-colors flex items-center group"
                    >
                      <div className="w-1.5 h-1.5 bg-marketing-400 rounded-full mr-3 group-hover:scale-125 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                <Phone className="w-5 h-5 mr-2 text-marketing-400" />
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-white/70 group">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 text-marketing-400 group-hover:text-marketing-300 transition-colors flex-shrink-0" />
                  <div>
                    <div className="font-medium text-white/90">
                      Headquarters
                    </div>
                    <div>Greater Noida, Uttar Pradesh</div>
                    <div className="text-sm text-white/60">India</div>
                  </div>
                </li>
                <li>
                  <a
                    href="tel:+916307422563"
                    className="flex items-center text-white/70 hover:text-marketing-400 transition-colors group"
                  >
                    <Phone className="h-5 w-5 mr-3 text-marketing-400 group-hover:text-marketing-300 transition-colors flex-shrink-0" />
                    <div>
                      <div className="font-medium">Call Us</div>
                      <div>+91 6307422563</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:webuiltu@gmail.com"
                    className="flex items-center text-white/70 hover:text-marketing-400 transition-colors group"
                  >
                    <Mail className="h-5 w-5 mr-3 text-marketing-400 group-hover:text-marketing-300 transition-colors flex-shrink-0" />
                    <div>
                      <div className="font-medium">Email Us</div>
                      <div>webuiltu@gmail.com</div>
                    </div>
                  </a>
                </li>
              </ul>

              {/* Quick CTA */}
              <div className="mt-6 p-4 bg-gradient-to-r from-marketing-500/20 to-marketing-600/20 rounded-xl border border-marketing-500/30">
                <div className="text-sm font-medium text-white mb-2">
                  Ready to Start?
                </div>
                <Button
                  onClick={() => {
                    const section = document.getElementById("contact");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white text-sm py-2 rounded-lg transition-all duration-300"
                >
                  Get Free Consultation
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-marketing-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm mb-2">
                &copy; {new Date().getFullYear()} WeBuilt_U Agency. All rights
                reserved.
              </p>
              <p className="text-white/40 text-xs">
                Crafting exceptional brand experiences since 2024
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-white/50 hover:text-marketing-400 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-marketing-500/50"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
