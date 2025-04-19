
export interface ServiceTag {
  id: string;
  name: string;
}

export interface Section {
  id: string;
  number: string;
  title: string;
  description: string;
  serviceTags: ServiceTag[];
  image: string;
}

export const sections: Section[] = [
  {
    id: "design-animation",
    number: "01",
    title: "Design & Animation",
    description: "I will help you create a clear, consistent brand identity that connects with your audience. Whether you're building a new brand or refreshing an old one.",
    serviceTags: [
      { id: "branding", name: "Branding" },
      { id: "rebranding", name: "Rebranding" },
      { id: "logo-design", name: "Logo Design" },
      { id: "brand-guidelines", name: "Brand Guidelines" },
      { id: "wireframing", name: "Wireframing" },
      { id: "user-research", name: "User Research & Testing" },
      { id: "rapid-prototyping", name: "Rapid prototyping" },
      { id: "ux-ui-design", name: "UX/UI Design" },
      { id: "custom-animations", name: "Custom Animations" }
    ],
    image: "/sections/designandanimation.png"
  },
  {
    id: "web-development",
    number: "02",
    title: "Web Development",
    description: "I build modern, responsive websites and web applications that are fast, secure, and easy to manage. I also use the latest technologies to create solutions that solve your business problems.",
    serviceTags: [
      { id: "responsive-websites", name: "Responsive Websites" },
      { id: "ecommerce", name: "E-commerce Solutions" },
      { id: "cms", name: "Content Management Systems" },
      { id: "web-applications", name: "Web Applications" },
      { id: "progressive-web-apps", name: "Progressive Web Apps" },
      { id: "api-integration", name: "API Integration" }
    ],
    image: "/sections/webdevelopment.png"
  },
  {
    id: "custom-software",
    number: "03",
    title: "Software Development",
    description: "I develop custom software solutions tailored to your specific business needs. From concept to deployment, I ensure that your software is scalable, secure, and user-friendly.",
    serviceTags: [
      { id: "custom-solutions", name: "Custom Solutions" },
      { id: "enterprise-software", name: "Enterprise Software" },
      { id: "saas-development", name: "SaaS Development" },
      { id: "system-integration", name: "System Integration" },
      { id: "database-design", name: "Database Design" },
      { id: "automation", name: "Process Automation" }
    ],
    image: "/sections/customsoftware.png"
  },
  {
    id: "mobile-development",
    number: "04",
    title: "Mobile Development",
    description: "I create native and cross-platform mobile applications that provide exceptional user experiences across all devices. My mobile solutions help you connect with your customers wherever they are.",
    serviceTags: [
      { id: "ios-development", name: "iOS Development" },
      { id: "android-development", name: "Android Development" },
      { id: "cross-platform", name: "Cross-platform Solutions" },
      { id: "mobile-ui-ux", name: "Mobile UI/UX Design" },
      { id: "app-maintenance", name: "App Maintenance & Support" },
      { id: "app-store-optimization", name: "App Store Optimization" }
    ],
    image: "/sections/mobiledevelopment.png"
  },
  {
    id: "maintenance-support",
    number: "05",
    title: "Maintenance & Support",
    description: "I provide ongoing maintenance and support services to ensure your digital products continue to perform at their best. I am always ready to help you solve problems and implement improvements.",
    serviceTags: [
      { id: "24-7-support", name: "24/7 Technical Support" },
      { id: "bug-fixing", name: "Bug Fixing" },
      { id: "performance-optimization", name: "Performance Optimization" },
      { id: "security-updates", name: "Security Updates" },
      { id: "content-updates", name: "Content Updates" },
      { id: "feature-enhancements", name: "Feature Enhancements" }
    ],
    image: "/sections/maintenanceandsupport.png"
  },
  {
    id: "quality-assurance",
    number: "06",
    title: "Quality Assurance",
    description: "I ensure that your digital products meet the highest quality standards. My QA services include manual and automated testing, performance testing, and security testing to ensure your product is reliable and user-friendly.",
    serviceTags: [
      { id: "manual-testing", name: "Manual Testing" },
      { id: "automated-testing", name: "Automated Testing" },
      { id: "performance-testing", name: "Performance Testing" },
      { id: "security-testing", name: "Security Testing" },
      { id: "usability-testing", name: "Usability Testing" },
      { id: "regression-testing", name: "Regression Testing" }
    ],
    image: "/sections/qualityassurance.png"
  },
  {
    id: "other-services",
    number: "07",
    title: "Other Services",
    description: "I offer a range of additional services to support your digital strategy. From digital marketing to content creation, I can help you achieve your business goals with comprehensive solutions.",
    serviceTags: [
      { id: "digital-marketing", name: "Digital Marketing" },
      { id: "seo", name: "Search Engine Optimization" },
      { id: "content-creation", name: "Content Creation" },
      { id: "analytics", name: "Analytics & Reporting" },
      { id: "consulting", name: "Digital Consulting" },
      { id: "training", name: "Training & Workshops" }
    ],
    image: "/sections/otherservices.png"
  }
];
