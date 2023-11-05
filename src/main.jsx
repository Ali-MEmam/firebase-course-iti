import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SecondUserProvider } from "./config/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SecondUserProvider>
      <App />
    </SecondUserProvider>
  </React.StrictMode>
);
