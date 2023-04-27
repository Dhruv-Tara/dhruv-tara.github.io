import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

var defaultTitle = document.title;
document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    document.title = " You left the tab!";
  } else {
    document.title = defaultTitle;
  }
});