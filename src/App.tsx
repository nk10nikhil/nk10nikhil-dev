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
  // Start preloading in background
  setTimeout(() => {
    import("./pages/Projects");
    import("./pages/About");
    import("./pages/Contact");
    import("./pages/Services");
  }, 100);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Lightweight fallback loader
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [transitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    // Reduced initial loading period for faster First Contentful Paint
    const contentTimer = setTimeout(() => {
      setContentReady(true);

      // Start transitioning out the loader after content is ready
      const loaderTimer = setTimeout(() => {
        setLoading(false);
      }, 200);

      return () => clearTimeout(loaderTimer);
    }, 1200); // Reduced from 1500ms

    return () => clearTimeout(contentTimer);
  }, []);

  // Preload lazy components during loader display
  useEffect(() => {
    // Start preloading as soon as component mounts
    const preloadTimer = setTimeout(() => {
      preloadComponents();
    }, 500); // Start preloading while loader is still showing

    return () => clearTimeout(preloadTimer);
  }, []);

  const handleTransitionEnd = () => {
    setTransitionComplete(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" forcedTheme="dark">
        <TooltipProvider delayDuration={300}>
          <Toaster />
          <Sonner />

          <div
            className="relative z-[1]"
            style={{
              opacity: contentReady ? 1 : 0,
              transition: "opacity 0.4s ease-in",
            }}
          >
            <BrowserRouter>
              {transitionComplete && <BackToTopButton />}
              <Suspense fallback={<PageLoader />}>
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
