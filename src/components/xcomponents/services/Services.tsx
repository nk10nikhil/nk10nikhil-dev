import React from "react";
import {
  Calendar,
  Globe,
  Award,
  Handshake,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Calendar,
      title: "Premium Event Organization",
      description:
        "Transform your vision into unforgettable experiences. We orchestrate world-class events that captivate audiences and drive meaningful connections.",
      features: [
        "Corporate Galas",
        "Product Launch Spectacles",
        "Trade Show Exhibitions",
        "Award Ceremonies",
        "Conference Management",
        "Intimate Networking Events",
      ],
      bgImage: "/service2.jpg",
      link: "/services/event-organization",
    },
    {
      icon: Globe,
      title: "Cutting-Edge Website Development",
      description:
        "Craft digital masterpieces that convert visitors into customers. Our websites combine stunning design with powerful functionality.",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "Custom Web Applications",
        "SEO-Optimized Architecture",
        "Performance Analytics",
        "Mobile-First Development",
      ],
      bgImage: "/service1.jpg",
      link: "/services/website-development",
    },
    {
      icon: Award,
      title: "Strategic Brand Development",
      description:
        "Build iconic brands that dominate markets. We create distinctive identities that resonate deeply with your target audience.",
      features: [
        "Brand Strategy & Positioning",
        "Logo & Visual Identity",
        "Brand Messaging Framework",
        "Brand Guidelines",
        "Market Differentiation",
        "Brand Experience Design",
      ],
      bgImage: "/service3.jpg",
      link: "/services/brand-development",
    },
    {
      icon: Handshake,
      title: "Elite Sponsorship Management",
      description:
        "Unlock premium partnership opportunities. We connect brands with high-value sponsors for mutually beneficial collaborations.",
      features: [
        "Sponsor Acquisition",
        "Partnership Negotiation",
        "Sponsor Activation",
        "ROI Maximization",
        "Relationship Management",
        "Performance Tracking",
      ],
      bgImage: "/service4.jpg",
      link: "/services/sponsorship-management",
    },
    {
      icon: Users,
      title: "Influencer Marketing Collaboration",
      description:
        "Amplify your reach through authentic partnerships. We connect you with influential voices that drive engagement and conversions.",
      features: [
        "Influencer Discovery",
        "Campaign Strategy",
        "Content Collaboration",
        "Performance Analytics",
        "Audience Insights",
        "Long-term Partnerships",
      ],
      bgImage: "/service5.jpg",
      link: "/services/influencer-marketing",
    },
    {
      icon: Star,
      title: "360° Tech Solutions",
      description:
        "Empower your brand with comprehensive digital strategies. From SEO to social media, we deliver end-to-end solutions that drive growth.",
      features: [
        "Graphic Design",
        "App Development",
        "UI/UX Design",
        "Analytics & Reporting",
        "Tech Support",
        "Data Security",
      ],
      bgImage: "/service6.jpg",
      link: "/services/marketing-solutions",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleServiceClick = (link) => {
    navigate(link);
  };

  return (
    <section
      id="services"
      className="py-10 md:py-20 px-0 md:px-12 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-marketing-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-marketing-700 rounded-full filter blur-3xl"></div>
      </div>

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
        <div className="text-center max-w-4xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-6 px-4 py-2 border border-white/20 rounded-full font-medium text-white/90 backdrop-blur-sm bg-white/10 text-lg">
            Our Premium Services
          </div>
          <h2 className="text-3xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
            Elevating Brands Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
              Exceptional Experiences
            </span>
          </h2>
          <p className="text-white/80 text-lg md:py-6">
            From memorable events to powerful digital presence, we deliver
            comprehensive solutions that transform your brand vision into
            market-leading success stories.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div
                className="h-full relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/15 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-marketing-500/20"
                onClick={() => handleServiceClick(service.link)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                  }}
                ></div>

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="p-8 relative z-10">
                  {/* Icon and Title - Responsive Layout */}
                  <div className="mb-6 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-marketing-600 to-marketing-800 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-marketing-500/30 transition-all duration-300">
                        <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>

                    {/* Title - Only visible on mobile in the flex layout */}
                    <h3 className="text-lg md:hidden font-semibold group-hover:text-marketing-400 transition-colors text-white flex-1">
                      {service.title}
                    </h3>
                  </div>

                  {/* Title - Desktop layout */}
                  <h3 className="hidden md:block text-xl font-semibold mb-3 group-hover:text-marketing-400 transition-colors text-white">
                    {service.title}
                  </h3>

                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-white/60"
                      >
                        <CheckCircle className="h-3 w-3 mr-3 text-marketing-300" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More */}
                  <div className="flex items-center text-marketing-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Explore Service
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
