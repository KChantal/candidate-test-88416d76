import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NavigationApp } from "./navigation/NavigationApp";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { sharedStore } from "./shared/store";

// Ensure the navigation-root has the proper class for styling
const navigationRoot = document.getElementById("navigation-root");

createRoot(navigationRoot!).render(
  <Provider store={sharedStore}>
    <BrowserRouter>
      <NavigationApp />
    </BrowserRouter>
  </Provider>
);
