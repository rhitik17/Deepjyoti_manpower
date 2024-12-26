import React from "react";

const ProfessionalSupportCard = ({ title, description, index }) => {
  return (
    <div className="relative w-[590px] min-h-[151px] px-6 py-6 bg-white shadow-md border border-black/10 flex flex-col items-start gap-2">
      {/* Circle with Number */}
      <div className="absolute top-[-20px] left-[-20px] w-14 h-14 flex items-center justify-center rounded-full bg-white  border border-black/10">
        <span className="text-4xl  font-inter text-primary-green">{index + 1}</span>
      </div>

      <div className="w-full flex flex-col items-start gap-1">
        {/* Title */}
        <div className="flex w-full justify-center items-center gap-2">
          <h2 className="flex-grow text-neutral-black text-3xl font-medium font-inter">{title}</h2>
        </div>

        {/* Description */}
        <div className="flex w-full justify-center items-center gap-2">
          <p className="flex-grow text-neutral-black text-xl font-normal font-inter leading-7">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSupportCard;
