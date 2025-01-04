

import AboutUs from "./views/pages/aboutus.jsx";
import Advertisement from "./views/pages/advertisement.jsx";
import CompanyProfile from "./views/pages/companyProfile.jsx";
import ContactUs from "./views/pages/contactus.jsx";
import GovernmentLicense from "./views/pages/governmentlicense.jsx";
import Home from "./views/pages/home.jsx";
import Jobs from "./views/pages/jobs.jsx";
import RecruitmentProcess from "./views/pages/recruitmentprocess.jsx";
import Services from "./views/pages/services.jsx";

const routeObjs = {
  Main: [
    { path: "/", component: Home },
    { path: "/about-us", component: AboutUs },
    { path: "/about-us/company-profile", component: CompanyProfile },
    { path: "/about-us/government-license", component: GovernmentLicense },


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
