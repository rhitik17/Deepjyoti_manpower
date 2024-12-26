import React from "react";
import Hero from "../../components/jobs/Hero";
import Logos from "../../components/jobs/Logos";
import BrowseByCategory from "../../components/jobs/BrowseByCategory";
import TopCompanies from "../../components/jobs/TopCompany";
import Testimonials from "../../components/jobs/TestimonialsFromCustomer";
import BannerSection from "../../components/jobs/Banner";
import { jobData } from "../../data/jobData";

const Jobs = () => {

const { recent_jobs, categories, top_companies, testimonials} = jobData;
  return (
    <div className="flex flex-col ">
      <section>
        <Hero data={jobData} />
      </section>

      <section className="pt-10">
        <Logos />
      </section>

    

      <section className="">
        <BrowseByCategory categories={categories} />
      </section>

      <section>
        <TopCompanies companies={top_companies} />
      </section>

      <section>
        <Testimonials testimonials={testimonials} />
      </section>

      <section className="px-4 md:px-8 lg:px-10 xl:px-20 py-20">
        <BannerSection />
      </section>
    </div>
  );
};

export default Jobs;
