
import CircularProfile from "@/components/elements/CircularProfile";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Temp = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">

          <div>
            <p className="flex flex-col space-y-8 items-center">
              <CircularProfile />
              <div className="flex space-x-3 mt-6">
                <a
                  href="https://github.com/nk10nikhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-7 w-7" />
                </a>
                <a
                  href="https://twitter.com/nk10nikhil_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-7 w-7" />
                </a>
                <a
                  href="https://linkedin.com/in/nk10nikhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-7 w-7" />
                </a>
                <a
                  href="mailto:nk10nikhil@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-7 w-7" />
                </a>
              </div>
            </p>
          </div>

          <div className="ml-20 hidden md:block">
            <h3 className="font-semibold text-lg  mb-4">Navigation</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>nk10nikhil@gmail.com</p>
              <p>+91 7777048666</p>
              <p>Galgotias College of Engineering and Technology, Greater Noida</p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} nk10nikhil. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-muted-foreground">

            <Link to="/temp" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/temp" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Temp;
