import React from "react";
import { DataProvider } from "./Hooks/DataContext.jsx";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
        <App />
  </React.StrictMode>
  </BrowserRouter>

);
