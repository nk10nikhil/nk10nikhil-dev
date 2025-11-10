import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const sections = ["home", "services", "about", "reviews", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "About", href: "#about", id: "about" },
    { name: "Reviews", href: "#reviews", id: "reviews" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setIsOpen(false);

    // Check if we're on a service page (not the main page)
    if (location.pathname !== "/") {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);

    // If on a service page, navigate to home
    if (location.pathname !== "/") {
      navigate("/");
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      // Already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-2 px-0 ${
        scrolled ? "bg-white/10 backdrop-blur-lg shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl tracking-tight transition-all hover:scale-105 cursor-pointer"
        >
          <img
            src="/logo.jpg"
            className="w-7 h-7 rounded-full"
            alt="WeBuilt_U Logo"
          />
          <span>
            WeBuilt
            <span className="text-marketing-500">_U</span>
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href, item.id);
              }}
              className={`relative font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 cursor-pointer ${
                activeSection === item.id && location.pathname === "/"
                  ? "text-marketing-400 bg-white/5"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {item.name}
              {activeSection === item.id && location.pathname === "/" && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-marketing-500 rounded-full"></span>
              )}
            </a>
          ))}

          <a
            href="#newsletter"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#newsletter", "newsletter");
            }}
            className="bg-gradient-to-r from-marketing-500 to-marketing-600 hover:from-marketing-600 hover:to-marketing-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto py-4 px-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href, item.id);
              }}
              className={`text-left font-medium py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
                activeSection === item.id && location.pathname === "/"
                  ? "text-marketing-400 bg-white/10"
                  : "text-white hover:text-marketing-400 hover:bg-white/5"
              }`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="#newsletter"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#newsletter", "newsletter");
            }}
            className="bg-gradient-to-r from-marketing-500 to-marketing-600 text-white text-center py-3 px-4 rounded-lg font-medium mt-4 transition-all duration-300 hover:from-marketing-600 hover:to-marketing-700 cursor-pointer"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
