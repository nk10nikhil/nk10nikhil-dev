import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Target,
  Users,
  Zap,
  ArrowRight,
  Play,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  Star,
  Globe2,
  Sparkles,
  Calendar,
  Heart,
  Trophy,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const tabs = [
    {
      id: "story",
      label: "Our Story",
      icon: <Star className="w-4 h-4" />,
    },
    {
      id: "mission",
      label: "Mission",
      icon: <Target className="w-4 h-4" />,
    },
    {
      id: "values",
      label: "Values",
      icon: <Award className="w-4 h-4" />,
    },
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Creative Excellence",
      description: "We push boundaries with innovative marketing solutions",
      gradient:
        "linear-gradient(135deg, hsl(32, 95%, 44%) 0%, hsl(32, 95%, 60%) 100%)",
      bgColor: "rgba(234, 88, 12, 0.1)",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Reliability",
      description: "Your brand's reputation is our top priority",
      gradient:
        "linear-gradient(135deg, hsl(32, 95%, 50%) 0%, hsl(32, 95%, 40%) 100%)",
      bgColor: "rgba(234, 88, 12, 0.1)",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Measurable Impact",
      description: "We deliver quantifiable marketing results",
      gradient:
        "linear-gradient(135deg, hsl(32, 95%, 44%) 0%, hsl(32, 95%, 55%) 100%)",
      bgColor: "rgba(234, 88, 12, 0.1)",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Client-Centric",
      description: "Your success is our passion and commitment",
      gradient:
        "linear-gradient(135deg, hsl(32, 95%, 45%) 0%, hsl(32, 95%, 50%) 100%)",
      bgColor: "rgba(234, 88, 12, 0.1)",
    },
  ];

  const teamMembers = [
    {
      name: "Ritesh Yadav",
      role: "Creative Director",
      image: "ritesh.jpg",
      expertise: "Brand Strategy, Creative Campaigns",
    },
    {
      name: "Nikhil Kumar",
      role: "Event Manager",
      image: "nikhil.jpg",
      expertise: "Event Planning, Project Management",
    },
    {
      name: "Sahil",
      role: "Social Media Strategist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      expertise: "Digital Marketing, Content Strategy",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Our Journey</h3>
            <p className="text-white/80 leading-relaxed text-base">
              Founded in 2024, WeBuilt_U Agency has rapidly grown into a leading
              marketing and event management firm. Our journey began with a
              passion for creating unforgettable brand experiences, and today we
              pride ourselves on delivering innovative solutions that drive real
              results for our clients.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-marketing-500/20 to-marketing-600/10 p-5 rounded-xl border border-marketing-500/30 backdrop-blur-sm">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600 mb-1">
                  2024
                </div>
                <div className="text-sm text-marketing-600">Agency Founded</div>
              </div>
              <div className="bg-gradient-to-br from-marketing-500/20 to-marketing-600/10 p-5 rounded-xl border border-marketing-500/30 backdrop-blur-sm">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600 mb-1">
                  2025
                </div>
                <div className="text-sm text-marketing-600">10+ Events</div>
              </div>
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
            <p className="text-white/80 leading-relaxed text-base">
              To empower brands through exceptional event organization and
              strategic social media promotion, creating meaningful connections
              between businesses and their audiences while driving measurable
              growth and brand recognition.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "Create memorable brand experiences",
                "Drive engagement through events",
                "Build lasting client relationships",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-marketing-500/20 border border-marketing-500/30"
                >
                  <CheckCircle className="w-5 h-5 text-marketing-600" />
                  <span className="text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Our Values</h3>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="p-5 bg-gradient-to-br from-marketing-500/10 to-marketing-600/5 rounded-xl border border-marketing-500/20 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-marketing-500/40"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-marketing-500 to-marketing-600 flex items-center justify-center text-white mb-4 shadow-lg">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-2 text-base">
                    {value.title}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Meet Our Team
            </h3>
            <div className="flex flex-col gap-4">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-5 bg-gradient-to-r from-marketing-500/10 to-marketing-600/5 rounded-xl border border-marketing-500/20 backdrop-blur-sm transition-all duration-300 hover:border-marketing-500/40"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-marketing-500/40"
                  />
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-marketing-600 mb-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-white/60">{member.expertise}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative py-4 md:py-6 overflow-hidden bg-black/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-marketing-500/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-marketing-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 font-medium text-sm mb-6 border border-white/20 backdrop-blur-sm"
          >
            <Globe2 className="w-4 h-4 mr-2" />
            About WeBuilt_U Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
              Brands
            </span>{" "}
            that Matter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            We're not just marketers—we're brand builders, event specialists,
            and digital strategists creating memorable experiences that elevate
            your business to new heights.
          </motion.p>
        </div>

        {/* Enhanced Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Enhanced Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-marketing-500/30 to-marketing-600/20 border border-marketing-500/30 shadow-2xl">
                <img
                  src="/logo.jpg"
                  alt="Our team organizing events"
                  className="w-full h-full object-cover"
                />
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center border-none cursor-pointer shadow-xl transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-marketing-600 ml-1" />
                    </motion.button>
                  </div>
                )}
              </div>

              {/* Enhanced Floating Achievement Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-black/90 backdrop-blur-xl shadow-2xl rounded-2xl p-5 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-marketing-500 to-marketing-600 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">
                      10+ Events
                    </div>
                    <div className="text-sm text-marketing-600">
                      Successfully Organized
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Right Side - Tabbed Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {/* Enhanced Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab, idx) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl border-none cursor-pointer font-medium transition-all duration-300 backdrop-blur-sm ${
                    activeTab === idx
                      ? "bg-gradient-to-r from-marketing-500 to-marketing-600 text-white shadow-lg"
                      : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">{renderTabContent()}</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
