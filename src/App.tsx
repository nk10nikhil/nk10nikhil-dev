import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/elements/ThemeProvider";
import { useState, useEffect, lazy, Suspense } from "react";
import BackToTopButton from "./components/elements/BackToTopButton";
import Loader from "./components/elements/Loader";

// Eager load the main page for instant access
import Index from "./pages/Index";

// Lazy load secondary pages (loaded after initial render)
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Preload all lazy components after initial render
const preloadComponents = () => {
  import("./pages/Projects");
  import("./pages/About");
  import("./pages/Contact");
  import("./pages/Services");
  import("./pages/NotFound");
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [transitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    // Initial loading period
    const contentTimer = setTimeout(() => {
      setContentReady(true);

      // Start transitioning out the loader after content is ready
      const loaderTimer = setTimeout(() => {
        setLoading(false);
      }, 300);

      return () => clearTimeout(loaderTimer);
    }, 1500);

    return () => clearTimeout(contentTimer);
  }, []);

  // Preload lazy components after initial load
  useEffect(() => {
    if (contentReady) {
      // Wait a bit for initial page to settle, then preload other pages
      const preloadTimer = setTimeout(() => {
        preloadComponents();
      }, 1000);

      return () => clearTimeout(preloadTimer);
    }
  }, [contentReady]);

  const handleTransitionEnd = () => {
    setTransitionComplete(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" forcedTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <div
            className="relative z-[1]"
            style={{
              opacity: contentReady ? 1 : 0,
              transition: "opacity 0.5s ease-in",
            }}
          >
            <BrowserRouter>
              {transitionComplete && <BackToTopButton />}
              <Suspense
                fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </div>

          {!transitionComplete && (
            <Loader isLoading={loading} onTransitionEnd={handleTransitionEnd} />
          )}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
