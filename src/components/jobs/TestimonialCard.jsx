import React from "react";

const TestimonialCard = ({ title, description, name, imageUrl }) => {
  return (
    <div className="w-full h-auto p-8 bg-white/90 rounded-2xl shadow-md border-2 flex flex-col justify-between items-start">
      <div className="flex flex-col justify-start items-start gap-6">
        <div className="text-black text-2xl font-semibold font-['Inter']">{title}</div>
        <div className="w-full text-black text-base font-normal font-['Inter'] leading-normal">{description}</div>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <img className="w-16 h-16 rounded-3xl" src={imageUrl} alt={name} />
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="text-black text-base font-semibold font-['Inter']">{name}</div>
          <div className="text-black/60 text-base font-normal font-['Inter']">Happy Client</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
