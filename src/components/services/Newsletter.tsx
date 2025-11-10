import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, Mail, Globe, Users, Zap } from "lucide-react";
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
      const size = Math.min(containerWidth, containerHeight, 280);

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
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();

            // Draw pulse effect
            const time = Date.now() / 1000;
            const pulseRadius = 8 + Math.sin(time * 2 + index) * 3;
            ctx.strokeStyle = `hsla(32, 95%, 60%, ${0.5 - pulseRadius / 20})`;
            ctx.lineWidth = 1.5;
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

    // Create morphing shapes with marketing theme colors
    for (let i = 0; i < 12; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 25 + 15,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: ["square", "triangle", "circle"][
          Math.floor(Math.random() * 3)
        ] as any,
        color: ["hsl(32, 95%, 44%)", "hsl(32, 95%, 60%)", "hsl(32, 95%, 30%)"][
          Math.floor(Math.random() * 3)
        ],
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const drawShape = (shape: (typeof shapes)[0]) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.fillStyle = shape.color;
      ctx.globalAlpha = 0.08;

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

        // Wrap around edges
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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Simulate subscription
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
    <section className="py-10 md:py-16 relative overflow-hidden bg-black/20">
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
          <div className="inline-block mb-4 px-4 py-2 border border-white/20 rounded-full font-medium text-white/90 backdrop-blur-sm bg-white/10 text-sm">
            Stay Connected
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
            Join Our Newsletter
          </h2>
          <p className="text-white/80 text-lg">
            Get the latest insights and updates delivered to your inbox
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
            <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden border border-white/10 shadow-2xl">
              {/* Animated sparkles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute hidden lg:block"
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${8 + i * 8}%`,
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-marketing-400/40" />
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
                      <span className="bg-gradient-to-r from-marketing-400 to-marketing-500 bg-clip-text text-transparent">
                        Ahead
                      </span>{" "}
                      of the Curve
                    </h3>
                    <p className="text-base md:text-lg text-white/70 leading-relaxed">
                      Get exclusive insights, industry trends, and early access
                      to our latest marketing innovations delivered straight to
                      your inbox.
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
                            <span className="text-marketing-300 font-semibold text-sm md:text-base">
                              Thank you! 🎉
                            </span>
                          </motion.div>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubscribed}
                        className="bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white border-0 group px-6 md:px-8 py-3 md:py-4 transition-all duration-300 rounded-xl whitespace-nowrap"
                      >
                        <span className="mr-2">Subscribe</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.form>

                  {/* Features */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
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
                        icon: Mail,
                        title: "No Spam Promise",
                        desc: "Quality over quantity",
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -3 }}
                        className="text-center lg:text-left bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-marketing-500/30 transition-all duration-300"
                      >
                        <div className="w-8 h-8 mx-auto lg:mx-0 mb-2 bg-gradient-to-r from-marketing-500 to-marketing-600 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-semibold mb-1 text-white text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-white/60">{feature.desc}</p>
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
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <canvas
                      ref={globeCanvasRef}
                      className="w-full h-full"
                      style={{
                        filter: "drop-shadow(0 0 25px hsla(32, 95%, 44%, 0.4))",
                      }}
                    />

                    {/* Globe overlay content */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="text-center bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                        <Globe className="w-6 h-6 text-marketing-400 mx-auto mb-2" />
                        <div className="text-marketing-300 text-sm font-medium">
                          Global Reach
                        </div>
                        <div className="text-white/60 text-xs">
                          50+ Countries
                        </div>
                      </div>
                    </div>

                    {/* Floating stats */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-marketing-500 to-marketing-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      10K+ Subscribers
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                      24/7 Updates
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {[
              { value: "10K+", label: "Subscribers" },
              { value: "50+", label: "Countries" },
              { value: "98%", label: "Open Rate" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-marketing-500/30 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-marketing-400 to-marketing-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
