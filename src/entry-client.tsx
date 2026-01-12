import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./main";

ReactDOM.hydrateRoot(
  document.getElementById("root")!,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
