

import AboutUs from "./views/pages/AboutUs";
import Advertisement from "./views/pages/Advertisement";
import ContactUs from "./views/pages/ContactUs";
import Home from "./views/pages/Home";
import Jobs from "./views/pages/Jobs";
import RecruitmentProcess from "./views/pages/RecruitmentProcess";
import Services from "./views/pages/Services";
import WeProvide from "./views/pages/WeProvide";

const routeObjs = {

  Main: [


    { path: "/", component: Home },
    { path: "/about-us", component: AboutUs },
    { path: "/contact-us", component: ContactUs },
    { path: "/services", component: Services },
    { path: "/we-provide", component: WeProvide },
    { path: "/recruitment-process", component: RecruitmentProcess },
    { path: "/advertisements", component: Advertisement },



    { path: "/jobs", component: Jobs },
   

  ],
};

const routes = {
  Auth: [],
  Main: [],
};

for (const [key, value] of Object.entries(routeObjs)) {
  for (const route of value) {
    routes[key].push(route.path);
  }
}

const allRoutes = Object.values(routeObjs).flat();

const distinctRoutes = allRoutes.reduce((acc, current) => {
  if (!acc.find((route) => route.path === current.path)) {
    acc.push(current);
  }
  return acc;
}, []);

export default routes;
export { distinctRoutes };
