import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Sparkles,
  Mail,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeCanvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const locations = [
    { name: "New York", lat: 40.7128, lng: -74.006 },
    { name: "London", lat: 51.5074, lng: -0.1278 },
    { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
    { name: "Sydney", lat: -33.8688, lng: 151.2093 },
    { name: "Dubai", lat: 25.2048, lng: 55.2708 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { name: "Mumbai", lat: 19.076, lng: 72.8777 },
    { name: "Toronto", lat: 43.6532, lng: -79.3832 },
  ];

  // Globe effect
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
      const size = Math.min(containerWidth, containerHeight, 320);

      canvas.width = size;
      canvas.height = size;
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    let animationId: number;
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
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = canvas.width * 0.38;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw globe outline with gradient
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.5,
        centerX,
        centerY,
        radius
      );
      gradient.addColorStop(0, "hsla(32, 95%, 50%, 0.1)");
      gradient.addColorStop(1, "hsla(32, 95%, 44%, 0.3)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "hsl(32, 95%, 44%)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw latitude lines
      ctx.strokeStyle = "hsla(32, 95%, 44%, 0.25)";
      ctx.lineWidth = 1;
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        const y = centerY - (lat / 90) * radius;
        const r = Math.sqrt(radius * radius - Math.pow((lat / 90) * radius, 2));
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

      // Draw location points with enhanced effects
      locations.forEach((location, index) => {
        const point3D = latLngTo3D(location.lat, location.lng, radius);
        const rotated = rotateY(point3D, rotation);

        if (rotated.z > 0) {
          const x = centerX + rotated.x;
          const y = centerY - rotated.y;
          const depth = (rotated.z / radius + 1) / 2;

          // Draw glow
          const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, 12);
          glowGradient.addColorStop(0, "hsla(32, 95%, 60%, 0.6)");
          glowGradient.addColorStop(1, "hsla(32, 95%, 60%, 0)");
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(x, y, 12, 0, Math.PI * 2);
          ctx.fill();

          // Draw point
          ctx.fillStyle = `hsla(32, 95%, ${60 + depth * 20}%, ${
            0.8 + depth * 0.2
          })`;
          ctx.beginPath();
          ctx.arc(x, y, 4 * depth, 0, Math.PI * 2);
          ctx.fill();

          // Draw pulse effect
          const time = Date.now() / 1000;
          const pulseRadius = 8 + Math.sin(time * 2 + index) * 4;
          ctx.strokeStyle = `hsla(32, 95%, 60%, ${
            (0.6 - pulseRadius / 25) * depth
          })`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x, y, pulseRadius, 0, Math.PI * 2);
          ctx.stroke();

          // Draw connection lines to center
          ctx.strokeStyle = `hsla(32, 95%, 44%, ${0.15 * depth})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      });

      rotation += 0.003;
      animationId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Background animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvas();

    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      type: "square" | "triangle" | "circle";
      color: string;
      vx: number;
      vy: number;
    }> = [];

    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 15,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: ["square", "triangle", "circle"][
          Math.floor(Math.random() * 3)
        ] as any,
        color: [
          "hsl(32, 95%, 44%)",
          "hsl(32, 95%, 60%)",
          "hsl(32, 95%, 30%)",
          "hsl(270, 95%, 50%)",
        ][Math.floor(Math.random() * 4)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    const drawShape = (shape: (typeof shapes)[0]) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.fillStyle = shape.color;
      ctx.globalAlpha = 0.06;

      switch (shape.type) {
        case "square":
          ctx.fillRect(
            -shape.size / 2,
            -shape.size / 2,
            shape.size,
            shape.size
          );
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.closePath();
          ctx.fill();
          break;
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
      }

      ctx.restore();
    };

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        shape.rotation += shape.rotationSpeed;
        shape.x += shape.vx;
        shape.y += shape.vy;

        if (shape.x < -50) shape.x = canvas.width + 50;
        if (shape.x > canvas.width + 50) shape.x = -50;
        if (shape.y < -50) shape.y = canvas.height + 50;
        if (shape.y > canvas.height + 50) shape.y = -50;

        drawShape(shape);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      updateCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribed(true);
    toast({
      title: "Successfully subscribed! 🎉",
      description: "Welcome to our newsletter community",
    });

    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-black/20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-marketing-500/10 border border-marketing-500/20 mb-6"
          >
            <Mail className="w-4 h-4 text-marketing-400" />
            <span className="text-sm text-marketing-300 font-medium">
              Stay Connected
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-marketing-200 to-white">
              Join Our Newsletter
            </span>
          </h2>

          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Get exclusive insights, latest updates, and industry trends
            delivered straight to your inbox
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main CTA Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative bg-gradient-to-br from-marketing-500/20 via-marketing-400/10 to-marketing-600/20 p-[2px] rounded-3xl"
          >
            <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 lg:p-14 relative overflow-hidden border border-white/10 shadow-2xl">
              {/* Animated sparkles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute hidden lg:block"
                  style={{
                    left: `${10 + i * 11}%`,
                    top: `${5 + i * 10}%`,
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-marketing-400/30" />
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
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
                      Stay{" "}
                      <span className="bg-gradient-to-r from-marketing-400 to-marketing-500 bg-clip-text text-gradient">
                        Ahead
                      </span>{" "}
                      of the Curve
                    </h3>
                    <p className="text-base md:text-lg text-white/70 leading-relaxed">
                      Get exclusive development insights, tech trends, code
                      tips, and early access to new projects delivered to your
                      inbox weekly.
                    </p>
                  </motion.div>

                  {/* Newsletter Form */}
                  <motion.form
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    onSubmit={handleSubscribe}
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
                          className="bg-white/10 border-white/20 focus:border-marketing-500 focus:ring-marketing-500/20 text-white placeholder:text-white/50 pl-12 pr-4 py-3 md:py-4 text-base rounded-xl backdrop-blur-sm"
                          disabled={isSubscribed}
                        />
                        {isSubscribed && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center bg-marketing-500/20 backdrop-blur-sm rounded-xl"
                          >
                            <span className="text-marketing-300 font-semibold text-sm md:text-base flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              Thank you! 🎉
                            </span>
                          </motion.div>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubscribed}
                        className="bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white border-0 group px-6 md:px-8 py-3 md:py-4 transition-all duration-300 rounded-xl whitespace-nowrap shadow-lg shadow-marketing-500/30"
                      >
                        <span className="mr-2">Subscribe</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    <p className="text-xs text-white/40 text-center sm:text-left">
                      No spam, unsubscribe anytime. We respect your privacy.
                    </p>
                  </motion.form>
                </div>

                {/* Right Globe */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative flex items-center justify-center"
                >
                  <div className="relative w-64 h-64 md:w-64 md:h-64 lg:w-64 lg:h-64">
                    <canvas
                      ref={globeCanvasRef}
                      className="w-full h-full"
                      style={{
                        filter: "drop-shadow(0 0 30px hsla(32, 95%, 44%, 0.5))",
                      }}
                    />

                    {/* Globe overlay content */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div className="text-center bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl">
                        <Globe className="w-6 h-6 text-marketing-400 mx-auto mb-2" />
                        <div className="text-marketing-300 text-sm font-bold">
                          Global Reach
                        </div>
                        <div className="text-white/70 text-xs">
                          50+ Countries
                        </div>
                      </div>
                    </motion.div>

                    {/* Floating stats */}
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="absolute -top-4 -right-4 bg-gradient-to-r from-marketing-500 to-marketing-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                    >
                      10K+ Subscribers
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20"
                    >
                      Weekly Updates
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
