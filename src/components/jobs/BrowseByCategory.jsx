import React from "react";
import JobCategoryCard from "./JobCategoryCard";
import { div } from "framer-motion/client";

const BrowseByCategory = ({ categories }) => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-10 xl:px-20 py-16 bg-secondary-teal/10 flex-col justify-start items-center gap-14 inline-flex">
      <div className="flex-col justify-center items-center text-center gap-10 flex">
        <div className="text-center text-black text-5xl font-bold">
          Job Categories
        </div>
        <div className="max-w-4xl text-black text-base font-normal">
          Explore a wide range of job categories tailored to match your skills
          and aspirations. From technical roles to creative opportunities, find
          the perfect fit for your career goals.
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="w-full flex flex-col ">
            <JobCategoryCard
              category={category}
              key={category.id}
              icon={category.icon}
              name={category.name}
              jobs={category.jobs}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
