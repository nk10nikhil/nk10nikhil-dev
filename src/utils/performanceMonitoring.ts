/**
 * Performance monitoring utilities
 */

export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  tti?: number; // Time to Interactive
}
/**
 * Get Core Web Vitals
 */
export const getCoreWebVitals = (): Promise<PerformanceMetrics> => {
  return new Promise((resolve) => {
    const metrics: PerformanceMetrics = {};

    // First Contentful Paint
    const paintEntries = performance.getEntriesByType("paint");
    const fcpEntry = paintEntries.find(
      (entry) => entry.name === "first-contentful-paint"
    );
    if (fcpEntry) {
      metrics.fcp = fcpEntry.startTime;
    }

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metrics.ttfb =
        navigationEntry.responseStart - navigationEntry.requestStart;
    }

    // Largest Contentful Paint (requires PerformanceObserver)
    if ("PerformanceObserver" in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          metrics.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({
          type: "largest-contentful-paint",
          buffered: true,
        });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
            if ((entry as any).processingStart) {
              metrics.fid = (entry as any).processingStart - entry.startTime;
            }
          });
        });
        fidObserver.observe({ type: "first-input", buffered: true });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: PerformanceEntry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          });
          metrics.cls = clsValue;
        });
        clsObserver.observe({ type: "layout-shift", buffered: true });
      } catch (e) {
        console.warn("PerformanceObserver not fully supported", e);
      }
    }

    // Return metrics after a delay to capture most values
    setTimeout(() => {
      resolve(metrics);
    }, 3000);
  });
};

/**
 * Log performance metrics to console
 */
export const logPerformanceMetrics = async () => {
  const metrics = await getCoreWebVitals();

  console.group("⚡ Performance Metrics");
  if (metrics.fcp) {
    console.log(`First Contentful Paint: ${Math.round(metrics.fcp)}ms`);
  }
  if (metrics.lcp) {
    console.log(`Largest Contentful Paint: ${Math.round(metrics.lcp)}ms`);
  }
  if (metrics.fid) {
    console.log(`First Input Delay: ${Math.round(metrics.fid)}ms`);
  }
  if (metrics.cls) {
    console.log(`Cumulative Layout Shift: ${metrics.cls.toFixed(3)}`);
  }
  if (metrics.ttfb) {
    console.log(`Time to First Byte: ${Math.round(metrics.ttfb)}ms`);
  }
  console.groupEnd();

  return metrics;
};

/**
 * Get bundle size information
 */
export const getBundleSize = (): number => {
  let totalSize = 0;

  if (performance.getEntriesByType) {
    const resources = performance.getEntriesByType(
      "resource"
    ) as PerformanceResourceTiming[];
    resources.forEach((resource) => {
      if (resource.transferSize) {
        totalSize += resource.transferSize;
      }
    });
  }

  return totalSize;
};

/**
 * Get page load time
 */
export const getPageLoadTime = (): number => {
  const navigationEntry = performance.getEntriesByType(
    "navigation"
  )[0] as PerformanceNavigationTiming;
  if (navigationEntry) {
    return navigationEntry.loadEventEnd - navigationEntry.fetchStart;
  }
  return 0;
};

/**
 * Monitor long tasks
 */
export const monitorLongTasks = (callback: (duration: number) => void) => {
  if ("PerformanceObserver" in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          callback(entry.duration);
        });
      });
      observer.observe({ type: "longtask", buffered: true });
      return observer;
    } catch (e) {
      console.warn("Long task monitoring not supported", e);
    }
  }
  return null;
};

/**
 * Create performance report
 */
export const createPerformanceReport = async () => {
  const metrics = await getCoreWebVitals();
  const bundleSize = getBundleSize();
  const loadTime = getPageLoadTime();

  const report = {
    timestamp: new Date().toISOString(),
    metrics,
    bundleSize: `${(bundleSize / 1024).toFixed(2)} KB`,
    loadTime: `${Math.round(loadTime)}ms`,
    userAgent: navigator.userAgent,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    connection: (navigator as any).connection?.effectiveType || "unknown",
  };

  console.table(report);
  return report;
};
