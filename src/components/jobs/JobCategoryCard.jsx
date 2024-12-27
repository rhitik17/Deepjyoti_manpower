import React from "react";

const JobCategoryCard = ({ icon, name, jobs }) => {
  return (
    <div className="h-72 bg-primary-web rounded-2xl shadow border-4  border-primary-web/40 text-white flex-col justify-center items-center gap-10 inline-flex cursor-pointer hover:scale-110 hover:bg-primary-web hover:text-primary-yellow transition-all ease-in-out duration-800 group">
      <div className="w-10 h-10 justify-center items-center inline-flex text-2xl">
        {icon}
      </div>
      <div className="text-2xl font-bold">{name}</div>
      <div className="px-3 py-2 bg-white group-hover:bg-white rounded-lg flex-col justify-start items-start gap-2.5 flex transition-all duration-300 ease-in-out">
        <div className="text-primary-purple text-base font-normal">
          {jobs} jobs
        </div>
      </div>
    </div>
  );
};

export default JobCategoryCard;
