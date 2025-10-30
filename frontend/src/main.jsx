import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Import your main component
import "./index.css"; // (optional) global styles

// Attach the React app to <div id="root"> in index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
