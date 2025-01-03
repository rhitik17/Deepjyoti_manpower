import AboutUs from "./views/pages/aboutUs";
import Advertisement from "./views/pages/advertisement";
import CompanyProfile from "./views/pages/companyProfile";
import ContactUs from "./views/pages/contactUs";
import Home from "./views/pages/home";
import Jobs from "./views/pages/jobs";
import RecruitmentProcess from "./views/pages/recruitmentProcess";
import Services from "./views/pages/services";

const routeObjs = {
  Main: [
    { path: "/", component: Home },
    { path: "/about-us", component: AboutUs },
    { path: "/about-us/company-profile", component: CompanyProfile },

    { path: "/contact-us", component: ContactUs },
    { path: "/services", component: Services },

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
