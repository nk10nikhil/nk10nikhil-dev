import React from "react";
import {
  Search,
  Lightbulb,
  Palette,
  Rocket,
  BarChart3,
  Handshake,
} from "lucide-react";
import { Separator } from "./ui/separator";

const Methodology = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-white" />,
      title: "Strategic Discovery",
      description:
        "We dive deep into your brand ecosystem, conducting comprehensive research to understand your market position, audience behavior, and competitive landscape.",
      details: [
        "Brand audit & analysis",
        "Market research",
        "Audience profiling",
        "Competitor analysis",
        "Goals assessment",
        "Technology stack review",
      ],
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: "Strategic Planning",
      description:
        "Based on our findings, we craft a comprehensive roadmap that aligns with your business objectives and maximizes market opportunities.",
      details: [
        "Strategy development",
        "Channel selection",
        "Budget allocation",
        "Timeline planning",
        "KPI definition",
        "Risk assessment",
      ],
    },
    {
      icon: <Palette className="h-10 w-10 text-white" />,
      title: "Creative Development",
      description:
        "Our creative team brings your vision to life through compelling designs, engaging content, and innovative solutions that resonate with your audience.",
      details: [
        "Brand identity design",
        "Website development",
        "Content creation",
        "Visual assets",
        "Campaign materials",
        "User experience design",
      ],
    },
    {
      icon: <Rocket className="h-10 w-10 text-white" />,
      title: "Flawless Execution",
      description:
        "We implement your strategy with precision, managing every detail from event logistics to digital campaigns, ensuring seamless delivery.",
      details: [
        "Campaign launch",
        "Event management",
        "Influencer coordination",
        "Sponsor activation",
        "Quality assurance",
        "Real-time monitoring",
      ],
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-white" />,
      title: "Performance Analytics",
      description:
        "We continuously track, measure, and analyze performance across all channels, providing actionable insights for ongoing optimization.",
      details: [
        "Performance tracking",
        "ROI analysis",
        "Detailed reporting",
        "Data visualization",
        "Trend analysis",
        "Success metrics",
      ],
    },
    {
      icon: <Handshake className="h-10 w-10 text-white" />,
      title: "Long-term Partnership",
      description:
        "Beyond project completion, we maintain ongoing relationships, providing continuous support, strategy refinement, and growth opportunities.",
      details: [
        "Ongoing support",
        "Strategy optimization",
        "Relationship management",
        "Future planning",
        "Growth consulting",
        "Success partnership",
      ],
    },
  ];

  return (
    <section
      id="methodology"
      className="pt-10 md:pt-20 px-0 md:px-12 bg-black/20 relative overflow-hidden"
    >
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

      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-marketing-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -right-1/4 bottom-1/4 w-1/2 h-1/2 bg-marketing-700 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16 reveal-on-scroll">
          <div className="inline-block mb-4 px-4 py-2 border border-white/20 rounded-full font-medium text-white/90 backdrop-blur-sm bg-white/10 text-lg">
            Our Proven Methodology
          </div>
          <h2 className="text-3xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
            From Vision to Victory: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-marketing-800 to-marketing-600">
              Our Six-Step Success Formula
            </span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl">
            Every great success story begins with a proven process. Our
            systematic approach transforms ambitious visions into measurable
            achievements, ensuring consistent results across all your marketing
            initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 max-w-5xl mx-auto relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="reveal-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start mb-8 md:mb-12 relative group">
                <div className="mr-6 md:mr-8 relative z-10">
                  <div className="bg-gradient-to-br from-marketing-600 to-marketing-800 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-marketing-500/30 transition-all duration-300 group-hover:scale-110">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-marketing-400 to-marketing-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-20 md:top-24 left-1/2 w-px h-32 md:h-24 bg-gradient-to-b from-marketing-500 to-marketing-700 -translate-x-1/2 opacity-50"></div>
                  )}
                </div>

                <div className="flex-1 pt-2 group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-3 group-hover:text-marketing-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-4 grid-cols-2 md:grid-cols-3 gap-2 hidden md:grid">
                    {step.details.map((detail, detailIndex) => (
                      <span
                        key={detailIndex}
                        className="px-3 py-2 bg-gradient-to-r from-marketing-500/20 to-marketing-600/20 text-marketing-300 rounded-lg text-sm font-medium border border-marketing-500/30 hover:bg-marketing-500/30 transition-colors duration-200 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-marketing-400 rounded-full mr-2 flex-shrink-0"></div>
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 reveal-on-scroll hidden md:block">
          <div className="bg-gradient-to-r from-marketing-500/20 to-marketing-600/20 backdrop-blur-sm border border-marketing-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience Our Process?
            </h3>
            <p className="text-white/70 mb-6">
              Let's discuss how our proven methodology can transform your
              brand's success story.
            </p>
            <button
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
