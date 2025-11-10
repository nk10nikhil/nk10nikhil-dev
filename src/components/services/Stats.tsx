import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Calendar, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Stats = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Calendar,
      value: 6,
      label: 'Events Organized',
      description: 'Successful events across industries',
      suffix: '+'
    },
    {
      icon: Users,
      value: 10,
      label: 'Audience Reached',
      description: 'Through strategic campaigns',
      suffix: 'K+'
    },
    {
      icon: Award,
      value: 2,
      label: 'Industry Awards',
      description: 'For exceptional marketing',
      suffix: '+'
    },
    {
      icon: BarChart,
      value: 95,
      label: 'Client Retention',
      description: 'Long-term partnerships',
      suffix: '%'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CountUpNumber = ({
    value,
    suffix = "",
  }: {
    value: number;
    suffix?: string;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsInView) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [statsInView, value]);

    return (
      <span className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
        {count}
        {suffix}
      </span>
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 600;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    const mouse = { x: 0, y: 0 };

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          particle.vx += dx * 0.00003;
          particle.vy += dy * 0.00003;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Connect nearby particles
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = otherParticle.x - particle.x;
          const dy = otherParticle.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${
              0.1 * (1 - distance / 80)
            })`;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative py-16 px-0 md:px-4 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] text-white overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={statsRef}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
                Industry Leaders
              </span>
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our track record speaks for itself. Here's what we've achieved
              together with our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.1,
                  ease: "easeOut",
                }}
                className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105"
              >
                {/* Mobile Layout - Icon and Number in one line */}
                <div className="flex md:hidden items-center justify-center gap-3 mb-4">
                  <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <stat.icon className="h-6 w-6 text-marketing-400" />
                  </div>
                  <div>
                    <CountUpNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                </div>

                {/* Desktop Layout - Icon above number */}
                <div className="hidden md:block">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full inline-flex items-center justify-center mb-4 mx-auto group-hover:bg-white/20 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-marketing-400" />
                  </div>
                  <div className="mb-2">
                    <CountUpNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                </div>

                <div className="text-xl font-medium text-white/90 mb-1 group-hover:text-white transition-colors">
                  {stat.label}
                </div>

                <div className="text-sm text-white/70 group-hover:text-white/80 transition-colors">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Star className="w-6 h-6 text-primary-accent fill-primary-accent/20" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative Line */}
          <div className="mt-12 flex justify-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="h-0.5 bg-gradient-to-r from-marketing-600 to-marketing-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;