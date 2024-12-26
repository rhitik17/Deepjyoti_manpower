import React from "react";
import CompanyCard from "./CompanyCard";
// import companies from '../../data/Companies';

const TopCompanies = (companies) => {
  return (
    <div className="w-full pt-8 lg:pt-14 pb-14 lg:pb-28 px-4 md:px-8 lg:px-10 xl:px-20 bg-secondary-teal/10 flex-col justify-start items-center gap-14 inline-flex">
      <div className="flex-col justify-start items-center gap-10 flex">
        <div className="text-center text-black text-5xl font-bold ">
          Top Company
        </div>
        <div className="text-center text-black text-base font-normal ">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit
          a massa elementum
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {companies.companies.map((company) => (
          <CompanyCard
            key={company.id}
            name={company.name}
            icon={company.logo}
            description={company.description}
            // openJobs={company.openJobs}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;
