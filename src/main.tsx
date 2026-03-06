import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./App";
import { RuntimeProfileProvider } from "./hooks/useRuntimeProfile";
import "./index.css";

export function App() {
  return (
    <RuntimeProfileProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RuntimeProfileProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
