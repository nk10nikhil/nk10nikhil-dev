"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { ScrollProgress } from "../elements/ScrollProgress";

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    "Nikhil Kumar",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Blockchain Developer",
    "Software Engineer",
    "Cloud Engineer",
    "Problem Solver",
  ];

  // Optimized text animation with useCallback
  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeoutId: NodeJS.Timeout;

    if (displayText.length < currentText.length) {
      timeoutId = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // Increased pause between texts
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, currentIndex]);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Memoized navigation links
  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  // Memoized social links
  const socialLinks = [
    {
      href: "https://github.com/nk10nikhil",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/nk10nikhil",
      icon: Linkedin,
      label: "LinkedIn",
    },
  ];

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 neo-blur border-b border-white/10"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="flex items-center space-x-2 min-w-0 flex-1 md:flex-none"
            aria-label="Home"
          >
            <div className="h-8 w-8 rounded-full bg-linear-to-br from-primary via-purple-500 to-indigo-400 flex items-center justify-center shrink-0">
              <img
                src="/profile.png"
                alt="Nikhil Kumar"
                className="h-7 w-7 rounded-full object-cover"
                loading="eager"
              />
            </div>
            <span className="font-bold text-lg truncate min-w-0">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 shrink-0">
            {links.map((link) => (
              <NavLink
                key={link.path}
                link={link}
                currentPath={location.pathname}
              />
            ))}

            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button key={social.href} className="h-10 w-10" asChild>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Contact Button */}
            <Button
              className="bg-linear-to-br from-primary via-purple-500 to-indigo-400 hover:bg-primary/90 transition-all duration-300"
              asChild
            >
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden shrink-0 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <MobileMenu
          isOpen={isOpen}
          links={links}
          socialLinks={socialLinks}
          currentPath={location.pathname}
        />
      </nav>

      <ScrollProgress />
    </>
  );
});

Navbar.displayName = "Navbar";

// Memoized NavLink component
const NavLink = memo(
  ({
    link,
    currentPath,
  }: {
    link: { name: string; path: string };
    currentPath: string;
  }) => {
    const isActive = currentPath === link.path;

    return (
      <Link
        to={link.path}
        className={`relative px-1 py-2 transition-colors hover:text-purple-500 min-w-0 ${
          isActive ? "text-gradient font-bold" : "text-foreground"
        }`}
      >
        {link.name}
        {isActive && (
          <motion.div
            layoutId="navbar-indicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

// Memoized MobileMenu component
const MobileMenu = memo(
  ({
    isOpen,
    links,
    socialLinks,
    currentPath,
  }: {
    isOpen: boolean;
    links: Array<{ name: string; path: string }>;
    socialLinks: Array<{ href: string; icon: any; label: string }>;
    currentPath: string;
  }) => {
    if (!isOpen) return null;

    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.2 }}
        className="md:hidden py-4 neo-blur border-b border-white/10 overflow-hidden"
      >
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-3 px-4 rounded-md transition-colors ${
                currentPath === link.path
                  ? "bg-primary/10 text-purple-500 font-medium"
                  : "text-foreground hover:bg-primary/5"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex space-x-2 py-2 px-4 justify-center">
            {socialLinks.map((social) => (
              <Button
                key={social.href}
                className="h-10 w-10 p-0 flex items-center justify-center"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          <div className="px-4 pb-2">
            <Button
              className="w-full bg-linear-to-br from-primary via-purple-500 to-indigo-400 hover:bg-primary/90 transition-all duration-300"
              asChild
            >
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }
);

MobileMenu.displayName = "MobileMenu";

export default Navbar;
