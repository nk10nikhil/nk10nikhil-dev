import { useState, useEffect, useRef } from "react";
import { Section } from "@/utils/data/sections";
import { ChevronRight } from "lucide-react";

interface SectionComponentProps {
    section: Section;
    isActive: boolean;
}

const SectionComponent = ({ section, isActive }: SectionComponentProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            id={section.id}
            className={`py-8 transition-all duration-500 ease-in-out border-b border-gray-100 dark:border-gray-800
                ${isActive ? "section-active" : ""}
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="flex items-center space-x-4">
                <span className={`section-tag ${isActive ? "text-primary" : "text-gray-400 dark:text-gray-600"}`}>{section.number}</span>
                <h2 className="section-title">{section.title}</h2>
            </div>

            <div className="section-service-tags mt-4">
                {section.serviceTags.map((tag) => (
                    <button key={tag.id} className="service-tag">{tag.name}</button>
                ))}
            </div>

            <div className="section-description">
                <p className="text-gray-600 dark:text-gray-300">{section.description}</p>
                {isActive && (
                    <button className="learn-more-btn mt-4 group bg-gradient-to-br from-primary via-purple-500 to-indigo-400 hover:bg-primary/90">
                        LEARN MORE
                        <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SectionComponent;
