import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const NavigationListener = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavEvent = (event: CustomEvent<{ path: string }>) => {
      navigate(event.detail.path);
    };

    window.addEventListener("navigation-change", handleNavEvent as EventListener);
    return () => window.removeEventListener("navigation-change", handleNavEvent as EventListener);
  }, [navigate]);

  return null;
};
