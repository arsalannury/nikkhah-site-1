import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RTL from "./Components/MUI/RTL";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RTL>
    <App />
  </RTL>
);
