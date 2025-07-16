import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/elements/ThemeProvider";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Temp from "./pages/Temp";
import BackToTopButton from "./components/elements/BackToTopButton";
import Loader from "./components/elements/Loader";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [transitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    // Initial loading period
    const timer = setTimeout(() => {
      // Mark content as ready to be shown (but still behind loader)
      setContentReady(true);

      // Start transitioning out the loader after content is ready
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }, 2000); // 2 seconds initial loading time

    return () => clearTimeout(timer);
  }, []);

  // Handle the final transition completion
  const handleTransitionEnd = () => {
    setTransitionComplete(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" forcedTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Sonner />

          {/* Always render the content, but initially with opacity 0 */}
          <div style={{
            opacity: contentReady ? 1 : 0,
            transition: "opacity 0.5s ease-in",
            position: "relative",
            zIndex: 1
          }}>
            <BrowserRouter>
              {transitionComplete && <BackToTopButton />}
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/temp" element={<Temp />} />
              </Routes>
            </BrowserRouter>
          </div>

          {/* Loader that fades out */}
          {!transitionComplete && (
            <Loader isLoading={loading} onTransitionEnd={handleTransitionEnd} />
          )}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
