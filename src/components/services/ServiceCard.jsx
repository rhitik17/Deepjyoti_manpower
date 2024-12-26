import React from "react";

const ServiceCard = ({
  index,
  imageSrc,
  paragraph1,
  paragraph2,
  category,
}) => {
  return (
    <div className="w-full flex  justify-between  ">
      {/* Conditional rendering based on index */}
      <div className={` flex gap-x-16 max-lg:items-center ${index % 2 === 1 ? 'flex-col lg:flex-row ' : 'flex-col lg:flex-row-reverse'}`}>
        {/* Image Section */}
        <img
          className="w-[587px] h-[403px] object-cover rounded-2xl"
          src={imageSrc}
          alt="Service"
        />

        {/* Text Section */}
        <div className="p-6 space-y-4">
          {/* Heading */}
          <div className="flex gap-2 items-center text-primary-purple text-xl font-semibold ">
            <span>{index}.</span>
            <div>{category}</div>
          </div>

          {/* Paragraphs */}
          <div className="text-neutral-700 text-base font-normal leading-loose tracking-tight">
            {paragraph1}
            <br />
            {paragraph2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
