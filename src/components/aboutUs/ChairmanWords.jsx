import React from "react";

const ChairmanWords = ({ image, quote, name, title }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-center max-md:space-y-10 gap-10">
      <div className="md:w-3/12 lg:w-4/12 flex items-center">
        <img className="rounded-lg" src={image} alt="Placeholder" />
      </div>

      <div className="md:w-9/12 lg:w-8/12 flex flex-col justify-start items-start gap-8">
        <div className="flex flex-col w-full justify-start items-center gap-12">
          <div className="text-white text-xl lg:text-2xl font-semibold">
            {quote}
          </div>
        </div>
        <div className="w-full h-0.5 bg-white"></div>
        <div className="flex flex-col justify-start gap-1">
          <div className="text-white text-2xl font-semibold font-['Inter']">
            {name}
          </div>
          <div className="text-white text-xl font-semibold font-['Inter']">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanWords;
