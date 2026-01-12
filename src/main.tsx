// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "@/App.tsx";
// import "@/index.css";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./App";
import "./index.css";

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
