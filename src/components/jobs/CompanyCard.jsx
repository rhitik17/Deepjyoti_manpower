import React from 'react';

const CompanyCard = ({ name,icon, description, openJobs }) => {
  return (
    <div className=" h-96 py-12 bg-white rounded-2xl shadow border-4 flex-col justify-between items-center inline-flex">
      <div className="flex-col justify-center items-center gap-5 flex">
        <div className="w-14 h-14 p-1.5 bg-black rounded-lg shadow justify-center items-center gap-2.5 inline-flex text-white">
        {icon && React.createElement(icon, { className: 'text-white text-3xl' })}
        </div>
        <div className="text-black text-2xl font-semibold font-['Inter']">{name}</div>
      </div>
      <div className="w-56 h-16 text-center text-black/80 text-base font-normal font-['Inter'] leading-normal">
        {description}
      </div>
      <div className="px-3 py-2 bg-teal-600/10 rounded-xl flex-col justify-start items-start gap-2.5 flex">
        <div className="text-teal-600 text-base font-normal font-['Inter']">{openJobs} open jobs</div>
      </div>
    </div>
  );
};

export default CompanyCard;
