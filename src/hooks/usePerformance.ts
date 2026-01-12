import { useEffect, useRef } from "react";

// Custom hook to detect if component is idle for lazy operations
export function useIdleCallback(callback: () => void, deps: any[] = []) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handle =
      "requestIdleCallback" in window
        ? (window as any).requestIdleCallback(callback, { timeout: 2000 })
        : setTimeout(callback, 1);

    return () => {
      if ("cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(handle);
      } else {
        clearTimeout(handle);
      }
    };
  }, deps);
}

// Hook to defer heavy operations until after paint
export function useDeferredMount(delay = 0) {
  const [mounted, setMounted] = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted.current = true;
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return mounted.current;
}

// Hook for lazy image loading
export function useLazyLoad(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
            }
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "50px" }
    );

    const images = ref.current.querySelectorAll("img[data-src]");
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, [ref]);
}
