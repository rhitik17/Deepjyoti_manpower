import React from "react";

const Hero = ({data}) => {
  return (
    <div className="w-full flex flex-col items-center gap-10 py-10 px-4">
      {/* Hero Text Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
          Find Your Dream Job Today!
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-2">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>
      </div>

    

     
    </div>
  );
};

export default Hero;
