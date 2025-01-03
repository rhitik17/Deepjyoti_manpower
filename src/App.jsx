import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { distinctRoutes } from "./routes";
import PageNotFound from "./views/404";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./scrollToTop";
import {
  RouteConfigProvider,
  useRouteConfig,
} from "./context/RouteConfigContext";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import Query Client

const queryClient = new QueryClient(); // Initialize Query Client

function App() {
  return (
    <QueryClientProvider client={queryClient}> {/* Wrap your app */}
  
        <BrowserRouter>
          <RouteConfigProvider>
            <ScrollToTop />
            <Routes>
              <Route element={<Layout />}>
                {distinctRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </RouteConfigProvider>
        </BrowserRouter>
    
    </QueryClientProvider>
  );
}

function Layout() {
  const location = useLocation();
  const { noNavbar, noFooter } = useRouteConfig();

  const isRouteExcluded = (routes) =>
    routes.some((route) =>
      new RegExp(`^${route.replace("*", ".*")}$`).test(location.pathname)
    );

  const shouldRenderNavbar = !isRouteExcluded(noNavbar);
  const shouldRenderFooter = !isRouteExcluded(noFooter);

  return (
    <div className="flex-1 min-w-screen min-h-screen max-w-[2000px] mx-auto font-roboto">
      {shouldRenderNavbar && <Navbar />}
      <main>
        <Outlet />
      </main>
      {shouldRenderFooter && <Footer />}
    </div>
  );
}

export default App;
