import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./main";
import { reportWebVitals } from "./utils/performance";
import {
  addResourceHints,
  preloadCriticalResources,
} from "./utils/resource-hints";

// Add resource hints before hydration
addResourceHints();
preloadCriticalResources();

ReactDOM.hydrateRoot(
  document.getElementById("root")!,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Monitor web vitals for performance tracking
reportWebVitals();
