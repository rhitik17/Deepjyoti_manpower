import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const JobSearchSection = () => {
  return (
    <div className="w-full max-w-[1174px] h-36 px-7 py-7 bg-white rounded-2xl shadow-lg flex flex-col items-start gap-2.5">
      {/* Container for Job Search Inputs */}
      <div className="flex flex-col items-center gap-5">
        <div className="flex justify-center items-center gap-10">
          {/* Job Search Input */}
          <div className=" w-[670px]">
            <span className="  text-neutral-black  font-medium font-inter pl-4">
              Job Search
            </span>

            <div className="w-full h-12 flex items-center gap-x-4 px-4 rounded-full border border-neutral-lightGray">
            <IoLocationOutline className="w-6 h-6 text-primary-green" />
              <input
                type="text"
                placeholder="Job Search"
                className="w-10/12 text-base font-medium outline-none"
              />
            </div>
          </div>

          {/* City, Country Input */}
          <div className=" w-[275px]">
            <span className="   text-neutral-black  font-medium font-inter pl-4">
              City, Country
            </span>
            <div className="w-full h-12 flex items-center gap-x-4 px-4 rounded-full border border-neutral-lightGray">
            <IoLocationOutline className="w-6 h-6 text-primary-green" />
              <input
                type="text"
                placeholder=" Bali, Indonesia"
                className=" text-base font-medium outline-none"
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="w-[74px] h-[74px] bg-primary-web rounded-lg flex justify-center items-center">
            <img src="/images/search.svg" alt="" />
          </button>
        </div>

        {/* Bottom Border Line */}
      </div>
      <div className="w-32 border-2 border-primary-web " />
    </div>
  );
};

export default JobSearchSection;
