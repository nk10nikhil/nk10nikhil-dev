import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  TrendingUp,
  Award,
  Heart,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  const reviews = [
    {
      id: 1,
      name: "Rohit Malhotra",
      position: "CEO",
      company: "Oggy Travels",
      location: "Gurgaon, Haryana",
      rating: 5,
      review:
        "WeBuilt_U completely revamped our digital presence. The travel booking platform they developed boosted our customer engagement by 250%. Their event campaigns also brought in huge traction during the holiday season. Highly professional and creative!",
      image: "review1.jpg",
      category: "travel",
      projectType: "Travel Platform Development & Marketing",
      result: "250% increase in engagement",
      date: "December 2024",
      videoTestimonial: true,
      logo: "oggy.png",
    },
    {
      id: 2,
      name: "Neha Verma",
      position: "Head of Marketing",
      company: "Cornitos",
      location: "Delhi, NCR",
      rating: 5,
      review:
        "The influencer campaigns and event activations executed by WeBuilt_U were phenomenal! Our product launch gained massive buzz across social media, adding 70K+ new followers and doubling our sales in just 2 months.",
      image: "review2.jpg",
      category: "fmcg",
      projectType: "Influencer & Event Marketing",
      result: "Doubled sales in 2 months",
      date: "January 2025",
      logo: "cornitos.png",
    },
    {
      id: 3,
      name: "Aman Kapoor",
      position: "Founder",
      company: "Internshala",
      location: "Gurgaon, Haryana",
      rating: 5,
      review:
        "WeBuilt_U helped us scale our student engagement campaigns nationwide. Their web solutions and event outreach programs resulted in a record-breaking 1M+ student registrations. Their strategy was innovative and impactful.",
      image: "review3.jpg",
      category: "edtech",
      projectType: "Nationwide Engagement Campaign",
      result: "10k+ student registrations",
      date: "February 2025",
      logo: "internshala.png",
    },
    {
      id: 4,
      name: "Simran Reddy",
      position: "Brand Manager",
      company: "Skippi Ice Pops",
      location: "Hyderabad, Telangana",
      rating: 5,
      review:
        "WeBuilt_U organized a fun-filled brand activation event across 10 cities. From kids to families, the engagement was amazing! Our brand visibility skyrocketed and retail partners reported a 300% rise in demand.",
      image: "review4.jpg",
      category: "fmcg",
      projectType: "Multi-City Brand Activation",
      result: "30% rise in product demand",
      date: "March 2025",
      featured: true,
      logo: "skippi.png",
    },
    {
      id: 5,
      name: "Rajat Sharma",
      position: "Co-founder",
      company: "Zomato Events",
      location: "Noida, Uttar Pradesh ",
      rating: 5,
      review:
        "Their event tech solutions were game-changing for us! WeBuilt_U built a seamless event ticketing and QR-based entry system that handled 20K+ participants without glitches. Their expertise in tech + events is unmatched.",
      image: "review5.jpg",
      category: "foodtech",
      projectType: "Event Tech & Ticketing System",
      result: "2K+ participants handled",
      date: "April 2025",
      logo: "zomato.png",
    },
    {
      id: 6,
      name: "Ankita Bose",
      position: "Creative Director",
      company: "Nykaa",
      location: "Mumbai, Maharashtra",
      rating: 5,
      review:
        "From digital campaigns to premium event launches, WeBuilt_U executed everything perfectly. Their strategy drove a 600% surge in online sales during festive season and established us as a trendsetter in the beauty industry.",
      image: "review6.jpg",
      category: "beauty",
      projectType: "Digital + Event Campaign",
      result: "60% festive sales growth",
      date: "May 2025",
      logo: "nykaa.png",
    },
  ];

  const categories = [
    { id: "all", name: "All Reviews", count: reviews.length },
    {
      id: "travel",
      name: "Travel",
      count: reviews.filter((r) => r.category === "travel").length,
    },
    {
      id: "fmcg",
      name: "FMCG",
      count: reviews.filter((r) => r.category === "fmcg").length,
    },
    {
      id: "edtech",
      name: "EdTech",
      count: reviews.filter((r) => r.category === "edtech").length,
    },
    {
      id: "foodtech",
      name: "FoodTech",
      count: reviews.filter((r) => r.category === "foodtech").length,
    },
    {
      id: "beauty",
      name: "Beauty",
      count: reviews.filter((r) => r.category === "beauty").length,
    },
  ];

  const filteredReviews =
    activeFilter === "all"
      ? reviews
      : reviews.filter((review) => review.category === activeFilter);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % filteredReviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredReviews.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredReviews.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-16 md:pt-24 overflow-hidden bg-gradient-to-b from-black via-marketing-950/50 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-marketing-500/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-marketing-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          >
            <Star className="w-4 h-4 text-marketing-400/20" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-marketing-500/20 to-marketing-600/20 rounded-full text-white font-medium text-sm mb-8 border border-marketing-500/30 backdrop-blur-sm">
            <Heart className="w-5 h-5 mr-3 text-marketing-400" />
            Client Testimonials
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-400 to-marketing-600">
              Clients Say
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Real stories from real clients who transformed their businesses with
            WeBuilt_U. Discover how we've helped brands achieve exceptional
            growth and success.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:flex flex-wrap justify-center gap-3 mb-12 hidden"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => {
                setActiveFilter(category.id);
                setCurrentSlide(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border backdrop-blur-sm ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-marketing-500 to-marketing-600 text-white border-marketing-500"
                  : "bg-white/5 text-white/80 border-white/20 hover:bg-white/10 hover:border-marketing-500/50"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">
                ({category.count})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Review Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeFilter}-${currentSlide}`}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Review Content */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img
                              src={filteredReviews[currentSlide]?.image}
                              alt={filteredReviews[currentSlide]?.name}
                              className="w-16 h-16 rounded-full object-cover border-2 border-marketing-500/30"
                            />
                            {filteredReviews[currentSlide]?.featured && (
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                                <Award className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              {filteredReviews[currentSlide]?.name}
                            </h3>
                            <p className="text-marketing-300 font-medium">
                              {filteredReviews[currentSlide]?.position}
                            </p>
                            <p className="text-white/60 text-sm">
                              {filteredReviews[currentSlide]?.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <Quote className="w-8 h-8 text-marketing-500/30" />
                          {/* Rating */}
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${
                                  i <
                                  (filteredReviews[currentSlide]?.rating || 0)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed italic">
                          {filteredReviews[currentSlide]?.review}
                        </p>
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <div className="text-marketing-300 text-sm font-medium mb-1">
                            Project Type
                          </div>
                          <div className="text-white font-semibold">
                            {filteredReviews[currentSlide]?.projectType}
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                          <div className="text-marketing-300 text-sm font-medium mb-1">
                            Key Result
                          </div>
                          <div className="text-white font-semibold">
                            {filteredReviews[currentSlide]?.result}
                          </div>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {filteredReviews[currentSlide]?.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {filteredReviews[currentSlide]?.date}
                        </div>
                      </div>
                    </div>

                    {/* Side Panel */}
                    {/* Side Panel */}
                    <div className="space-y-6 hidden md:block">
                      {/* Company Logo/Info */}
                      <div className="bg-gradient-to-br from-marketing-500/10 to-marketing-600/10 rounded-2xl p-6 border border-marketing-500/20 text-center">
                        <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 p-3 shadow-lg">
                          <img
                            src={`/${filteredReviews[currentSlide]?.logo}`}
                            alt={`${filteredReviews[currentSlide]?.company} logo`}
                            className="w-full h-full object-contain max-w-full max-h-full"
                            onError={(e) => {
                              // Fallback to letter if logo fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              const fallback =
                                target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = "flex";
                            }}
                          />
                          {/* Fallback letter display */}
                          <div
                            className="w-full h-full bg-gradient-to-r from-marketing-500 to-marketing-600 rounded-lg flex items-center justify-center"
                            style={{ display: "none" }}
                          >
                            <span className="text-white font-bold text-2xl">
                              {filteredReviews[currentSlide]?.company.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <h4 className="text-white font-bold mb-2">
                          {filteredReviews[currentSlide]?.company}
                        </h4>
                        <p className="text-white/70 text-sm capitalize">
                          {filteredReviews[currentSlide]?.category} Industry
                        </p>
                      </div>

                      {/* CTA */}
                      <Button className="w-full bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 group">
                        View Case Study
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:border-marketing-500/50 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 hover:border-marketing-500/50 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {filteredReviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-8 h-3 bg-gradient-to-r from-marketing-500 to-marketing-600"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-marketing-500/10 to-marketing-600/10 rounded-3xl p-8 md:p-12 border border-marketing-500/20 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's create an extraordinary experience for your brand. Start
              your transformation journey with WeBuilt_U today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection)
                    contactSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                className="border-marketing-500/30 text-marketing-300 hover:bg-marketing-500/10 hover:border-marketing-500/50 px-8 py-4 rounded-xl transition-all duration-300"
              >
                View All Case Studies
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
