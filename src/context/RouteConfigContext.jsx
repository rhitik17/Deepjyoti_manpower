import React, { createContext, useContext } from "react";

// Define routes to exclude Navbar/Footer
const excludedRoutesConfig = {
  noNavbar: ["/signup",
    "/login",
    "/forgot-password",
    "/check-mail",
    "/reset-password",
    "/new-password",
    "/verify-otp",],
    
  noFooter: [
    "/signup",
    "/login",
    "/forgot-password",
    "/check-mail",
    "/reset-password",
    "/new-password",
    "/verify-otp",
   
  ],
};

// Create the context
const RouteConfigContext = createContext();

// Provider component
export const RouteConfigProvider = ({ children }) => {
  return (
    <RouteConfigContext.Provider value={excludedRoutesConfig}>
      {children}
    </RouteConfigContext.Provider>
  );
};

// Custom hook to access the context
export const useRouteConfig = () => {
  return useContext(RouteConfigContext);
};
