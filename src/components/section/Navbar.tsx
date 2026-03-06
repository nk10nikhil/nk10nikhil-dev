import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { ScrollProgress } from "@/components/elements/ScrollProgress";

const NAV_TEXTS = [
  "Nikhil Kumar",
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Blockchain Developer",
  "Software Engineer",
  "Cloud Engineer",
  "Problem Solver",
] as const;

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  // { name: "Contact", path: "/contact" },
] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reduceRuntimeMotion, setReduceRuntimeMotion] = useState(false);

  const scrolledRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const links = useMemo(() => NAV_LINKS, []);

  useEffect(() => {
    const connection = (navigator as any).connection as
      | {
          saveData?: boolean;
          effectiveType?: string;
        }
      | undefined;

    const saveData = connection?.saveData === true;
    const slowNetwork = /2g|slow-2g/.test(connection?.effectiveType ?? "");
    const lowCoreDevice = (navigator.hardwareConcurrency ?? 8) <= 4;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    setReduceRuntimeMotion(
      reducedMotion || saveData || slowNetwork || lowCoreDevice,
    );
  }, []);

  useEffect(() => {
    if (reduceRuntimeMotion) {
      setDisplayText(NAV_TEXTS[0]);
      return;
    }

    const currentText = NAV_TEXTS[currentIndex] ?? "";
    let timeoutId: number;

    if (displayText.length < currentText.length) {
      timeoutId = window.setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeoutId = window.setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prev) => (prev + 1) % NAV_TEXTS.length);
      }, 700);
    }

    return () => window.clearTimeout(timeoutId);
  }, [displayText, currentIndex, reduceRuntimeMotion]);

  useEffect(() => {
    const evaluate = () => {
      rafRef.current = null;
      const next = window.scrollY > 10;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setScrolled(next);
      }
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(evaluate);
    };

    // Initialize without waiting for first scroll.
    evaluate();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 rounded-lg ${
        scrolled
          ? "py-2 neo-blur border-b border-white/10"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary via-purple-500 to-indigo-400 animate-glow flex items-center justify-center">
            <img
              src="/profile.png"
              alt="Nikhil Kumar"
              className="h-7 w-7 rounded-full"
            />
          </div>
          <span className="font-bold text-lg">{displayText}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-1 py-2 transition-colors hover:text-purple-500 ${
                location.pathname === link.path
                  ? "text-gradient font-bold"
                  : "text-foreground"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
          <div className="flex space-x-2">
            <Button size="icon" variant="ghost" asChild>
              <a
                href="https://github.com/nk10nikhil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a
                href="https://linkedin.com/in/nk10nikhil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <Button className="bg-gradient-to-br from-primary via-purple-500 to-indigo-400 animate-glow hover:bg-primary/90">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={handleToggle}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden py-4 neo-blur border-b border-white/10"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 px-4 rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-purple-500 font-medium"
                    : "text-foreground hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-2 py-2 px-4">
              <Button size="icon" variant="ghost" asChild>
                <a
                  href="https://github.com/nk10nikhil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a
                  href="https://linkedin.com/in/nk10nikhil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="px-4 pb-2">
              <Button className="w-full bg-gradient-to-br from-primary via-purple-500 to-indigo-400 animate-glow hover:bg-primary/90">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
      <ScrollProgress />
    </nav>
  );
};

export default React.memo(Navbar);
