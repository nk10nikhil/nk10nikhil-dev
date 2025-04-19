import { useState, useEffect, useRef } from "react";
import { sections } from "@/utils/data/sections";
import SectionComponent from "./SectionComponent";

interface ScrollableSectionProps {
    className?: string;
}

const ScrollableSection = ({ className }: ScrollableSectionProps) => {
    const [activeSection, setActiveSection] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sectionElements = containerRef.current?.querySelectorAll(
            '[id^="design-"], [id^="web-"], [id^="custom-"], [id^="mobile-"], [id^="maintenance-"], [id^="quality-"], [id^="other-"]'
        );

        if (!sectionElements) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(sectionElements).indexOf(entry.target);
                        setActiveSection(index); // Update as soon as section appears
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        sectionElements.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // Parallax Effect for Images
    useEffect(() => {
        const handleParallax = () => {
            if (!imagesRef.current) return;
            imagesRef.current.style.transform = `translateY(${window.scrollY * 0.1}px)`;
        };

        window.addEventListener("scroll", handleParallax);
        return () => window.removeEventListener("scroll", handleParallax);
    }, []);

    return (
        <div className={`min-h-screen bg-white text-gray-900 dark:bg-gray-900/10 dark:text-white ${className || ""}`}>
            <div className="container mx-auto max-w-7xl px-4 pt-5">
                <div className="flex flex-col lg:flex-row">
                    {/* Left - Sections */}
                    <div ref={containerRef} className="w-full lg:w-1/2 lg:pr-8">
                        {sections.map((section, index) => (
                            <SectionComponent
                                key={section.id}
                                section={section}
                                isActive={index === activeSection}
                            />
                        ))}
                    </div>

                    {/* Right - Images */}
                    <div className="hidden lg:flex lg:w-1/2 sticky top-32 h-[600px]">
                        <div ref={imagesRef} className="image-container w-full floating-animation">
                            {sections.map((section, index) => (
                                <div
                                    key={section.id}
                                    className={`section-image ${index === activeSection ? 'active' : ''}`}
                                    aria-hidden={index !== activeSection}
                                >
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-auto object-contain rounded-lg shadow-lg transition-all duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollableSection;
