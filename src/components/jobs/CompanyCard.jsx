import React from 'react';

const CompanyCard = ({ name,icon, description, openJobs }) => {
  return (
    <div className=" min-h-96  bg-white rounded-2xl shadow border-4  border-primary-web/40 text-primary-web flex-col justify-center items-center gap-10 inline-flex cursor-pointer hover:scale-110 hover:bg-primary-web hover:text-primary-yellow transition-all ease-in-out duration-800 group">
      <div className="flex-col justify-center items-center gap-5 flex">
        <div className="w-14 h-14 p-1.5 bg-black rounded-lg shadow justify-center items-center gap-2.5 inline-flex text-white">
        {icon && React.createElement(icon, { className: 'text-white text-3xl' })}
        </div>
        <div className="text-black group-hover:text-primary-yellow text-2xl font-semibold font-['Inter']">{name}</div>
      </div>
      <div className="w-56 h-16 text-center text-black/80 group-hover:text-white text-base font-normal font-['Inter'] leading-normal">
        {description}
      </div>
      <div className="px-3 py-2 bg-teal-600/10 group-hover:bg-white rounded-xl flex-col justify-start items-start gap-2.5 flex">
        <div className="text-primary-purple text-base font-normal font-['Inter']">{openJobs} open jobs</div>
      </div>
    </div>
  );
};

export default CompanyCard;
