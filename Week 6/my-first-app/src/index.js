/*  
  Notes:
    the index.js -> rendering our javascript and html files
    ES6 version -> New version for require/import (to acquire versions)
    "react-dom/client" -> is a way to access the modern ReactDOM API, which allows use to work with the react-dom client for rendering React applications.
    React.StrictMode -> allows us to easily detect bugs in our codes.
*/

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
