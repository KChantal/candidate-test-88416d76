import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./shared/routes";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { sharedStore } from "./shared/store";
import { NavigationListener } from "./shared/components/NavigationListener";

// Create a root-level div to provide proper styling context
const dashboardRoot = document.getElementById("dashboard-root");

createRoot(dashboardRoot!).render(
  <Provider store={sharedStore}>
    <BrowserRouter>
      <NavigationListener />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  </Provider>
);
