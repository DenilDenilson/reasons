import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DreamPage from "./dreamPage";
import "./index.css";
import MainDreams from "./MainDreams";
import MainQuote from "./MainQuote";
import MainReasons from "./MainReasons";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DreamPage />}>
        <Route index element={<MainDreams />} />
        <Route path="/reasons" element={<MainReasons />} />
        <Route path="/quotes" element={<MainQuote />} />
      </Route>
    </Routes>
  </BrowserRouter>

  //</React.StrictMode>,
);
