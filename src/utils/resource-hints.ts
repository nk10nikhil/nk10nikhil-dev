// Resource hints for faster DNS and connection
export function addResourceHints() {
  if (typeof document === "undefined") return;

  const hints = [
    // Preconnect to external domains
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    // DNS prefetch for other domains
    { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
    { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
  ];

  hints.forEach(({ rel, href, crossOrigin }) => {
    if (!document.querySelector(`link[rel="${rel}"][href="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = rel;
      link.href = href;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
    }
  });
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof document === "undefined") return;

  // Add preload for critical fonts
  const fontPreload = document.createElement("link");
  fontPreload.rel = "preload";
  fontPreload.as = "font";
  fontPreload.type = "font/woff2";
  fontPreload.crossOrigin = "anonymous";
  fontPreload.href =
    "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2";

  if (!document.querySelector(`link[href="${fontPreload.href}"]`)) {
    document.head.appendChild(fontPreload);
  }
}
