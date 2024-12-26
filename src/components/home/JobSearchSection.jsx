import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const JobSearchSection = () => {
  return (
    <div className="w-full h-auto px-5 py-6 bg-white rounded-2xl shadow-lg flex flex-col items-start gap-4 md:px-7 md:py-7">
      {/* Container for Job Search Inputs */}
      <div className="w-full flex flex-col md:flex-row items-center gap-5 lg:gap-10">
        {/* Job Search Input */}
        <div className="w-full md:w-[670px]">
          <span className="text-neutral-black font-medium font-inter pl-4">
            Job Search
          </span>
          <div className="w-full h-12 flex items-center gap-x-4 px-4 rounded-full border border-neutral-lightGray">
            <IoLocationOutline className="w-6 h-6 text-primary-green" />
            <input
              type="text"
              placeholder="Job Search"
              className="w-full text-base font-medium outline-none"
            />
          </div>
        </div>

        {/* City, Country Input */}
        <div className="w-full md:w-[275px]">
          <span className="text-neutral-black font-medium font-inter pl-4">
            City, Country
          </span>
          <div className="w-full h-12 flex items-center gap-x-4 px-4 rounded-full border border-neutral-lightGray">
            <IoLocationOutline className="w-6 h-6 text-primary-green" />
            <input
              type="text"
              placeholder="Bali, Indonesia"
              className="w-full text-base font-medium outline-none"
            />
          </div>
        </div>

        {/* Search Button */}
        <button className="w-full h-14 md:w-[74px] md:h-[74px] bg-primary-web rounded-lg flex justify-center items-center">
          <img src="/images/search.svg" alt="Search Icon" />
        </button>
      </div>

      {/* Bottom Border Line */}
      <div className="w-20 md:w-32 border-2 border-primary-web" />
    </div>
  );
};

export default JobSearchSection;
