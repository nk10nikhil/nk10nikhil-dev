import { useEffect } from "react";
import { usePreloader } from "@/contexts/PreloaderContext";

interface PreloadOptions {
  criticalImages?: string[];
  fonts?: string[];
  scripts?: string[];
}

export const usePreloadResources = (options: PreloadOptions = {}) => {
  const { addResource, markResourceLoaded } = usePreloader();

  useEffect(() => {
    const {
      criticalImages = [
        "/profile.png",
        "/images/ideas.svg",
        "/images/concepts.svg",
        "/images/designs.svg",
        "/images/code.svg",
      ],
      fonts = [],
      scripts = [],
    } = options;

    // Preload critical images
    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        addResource();
        const img = new Image();

        img.onload = () => {
          markResourceLoaded();
          resolve();
        };

        img.onerror = () => {
          markResourceLoaded(); // Still mark as loaded to not block
          reject(new Error(`Failed to load image: ${src}`));
        };

        img.src = src;
      });
    };

    // Preload fonts
    const preloadFont = (fontUrl: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        addResource();
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "font";
        link.type = "font/woff2";
        link.crossOrigin = "anonymous";
        link.href = fontUrl;

        link.onload = () => {
          markResourceLoaded();
          resolve();
        };

        link.onerror = () => {
          markResourceLoaded();
          reject(new Error(`Failed to load font: ${fontUrl}`));
        };

        document.head.appendChild(link);
      });
    };

    // Preload scripts
    const preloadScript = (scriptUrl: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        addResource();
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "script";
        link.href = scriptUrl;

        link.onload = () => {
          markResourceLoaded();
          resolve();
        };

        link.onerror = () => {
          markResourceLoaded();
          reject(new Error(`Failed to load script: ${scriptUrl}`));
        };

        document.head.appendChild(link);
      });
    };

    // Execute preloading
    const preloadAll = async () => {
      try {
        await Promise.all([
          ...criticalImages.map(preloadImage),
          ...fonts.map(preloadFont),
          ...scripts.map(preloadScript),
        ]);
      } catch (error) {
        console.warn("Some resources failed to preload:", error);
      }
    };

    preloadAll();
  }, [addResource, markResourceLoaded]);
};
