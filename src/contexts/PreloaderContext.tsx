import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

interface PreloaderContextType {
  progress: number;
  isLoading: boolean;
  resourcesLoaded: number;
  totalResources: number;
  addResource: () => void;
  markResourceLoaded: () => void;
  setLoading: (loading: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(
  undefined
);

export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within PreloaderProvider");
  }
  return context;
};

interface PreloaderProviderProps {
  children: React.ReactNode;
}

export const PreloaderProvider: React.FC<PreloaderProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(0);
  const [totalResources, setTotalResources] = useState(0);
  const [progress, setProgress] = useState(0);

  const addResource = useCallback(() => {
    setTotalResources((prev) => prev + 1);
  }, []);

  const markResourceLoaded = useCallback(() => {
    setResourcesLoaded((prev) => {
      const newLoaded = prev + 1;
      return newLoaded;
    });
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    setIsLoading(loading);
  }, []);

  // Calculate progress percentage
  useEffect(() => {
    if (totalResources > 0) {
      const newProgress = Math.min(
        (resourcesLoaded / totalResources) * 100,
        100
      );
      setProgress(newProgress);

      // Auto-complete loading when all resources are loaded
      if (newProgress >= 100) {
        setTimeout(() => {
          setIsLoading(false);
        }, 300); // Small delay for smooth transition
      }
    }
  }, [resourcesLoaded, totalResources]);

  // Initialize with minimum resources
  useEffect(() => {
    // Count initial critical resources
    const criticalImages = [
      "/profile.png",
      "/images/ideas.svg",
      "/images/concepts.svg",
      "/images/designs.svg",
      "/images/code.svg",
    ];

    setTotalResources(criticalImages.length + 3); // Images + JS bundles estimate
  }, []);

  const value: PreloaderContextType = {
    progress,
    isLoading,
    resourcesLoaded,
    totalResources,
    addResource,
    markResourceLoaded,
    setLoading,
  };

  return (
    <PreloaderContext.Provider value={value}>
      {children}
    </PreloaderContext.Provider>
  );
};
