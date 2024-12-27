import React from "react";
import Hero from "../../components/jobs/Hero";
import BrowseByCategory from "../../components/jobs/BrowseByCategory";
import TopCompanies from "../../components/jobs/TopCompany";
import Testimonials from "../../components/jobs/TestimonialsFromCustomer";
import BannerSection from "../../components/jobs/Banner";
import { jobData } from "../../data/jobData";
import categories from "../../data/browseByCategory";
import companies from "../../data/Companies";
import testimonials from "../../data/testimonialsFromCustomers";

const Jobs = () => {
  return (
    <div className="flex flex-col ">
      {/* <section>
        <Hero data={jobData} />
      </section> */}

      <section className="">
        <BrowseByCategory categories={categories} />
      </section>

      <section>
        <TopCompanies companies={companies} />
      </section>

      <section className="bg-primary-web">
        <Testimonials testimonials={testimonials} />
      </section>

      <section className="px-4 md:px-8 lg:px-10 xl:px-20 py-20">
        <BannerSection />
      </section>
    </div>
  );
};

export default Jobs;
