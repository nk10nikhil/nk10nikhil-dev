/**
 * Register service worker for offline support and caching
 */

export async function registerServiceWorker(): Promise<
  ServiceWorkerRegistration | undefined
> {
  if ("serviceWorker" in navigator && import.meta.env.PROD) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js",
        {
          scope: "/",
        }
      );

      console.log(
        "Service Worker registered successfully:",
        registration.scope
      );

      // Handle updates
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;

        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // New service worker available
              console.log("New content available, please refresh.");

              // Optionally, you can show a notification to the user
              if (window.confirm("New version available! Reload to update?")) {
                newWorker.postMessage({ type: "SKIP_WAITING" });
                window.location.reload();
              }
            }
          });
        }
      });
      // Handle controller change
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });

      return registration;
    } catch (error) {
      console.error("Service Worker registration failed:", error);
      return undefined;
    }
  }
  return undefined;
}

export async function unregisterServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.unregister();
      console.log("Service Worker unregistered successfully");
    } catch (error) {
      console.error("Service Worker unregistration failed:", error);
    }
  }
}
