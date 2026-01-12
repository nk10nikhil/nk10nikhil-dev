import { useEffect } from "react";

export function usePrefetch() {
  useEffect(() => {
    // Prefetch critical routes after initial load
    const prefetchRoutes = ["/projects", "/about", "/services", "/contact"];

    const prefetch = () => {
      prefetchRoutes.forEach((route) => {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = route;
        link.as = "document";
        document.head.appendChild(link);
      });
    };

    // Prefetch after page is idle
    if ("requestIdleCallback" in window) {
      requestIdleCallback(prefetch);
    } else {
      setTimeout(prefetch, 2000);
    }
  }, []);
}
