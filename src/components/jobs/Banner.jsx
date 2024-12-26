import React from "react";

const BannerSection = () => {
  return (
    <div className="w-full h-[500px] bg-black rounded-2xl overflow-hidden relative">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover blur-sm"
        src="/images/plane.jpg"
        alt="Background"
      />
      
      {/* Content Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start gap-6 p-10">
        <h2 className="text-white text-5xl font-bold ">
          Create A Better <br /> Future For Yourself
        </h2>
        <p className="text-white/80 text-base font-normal  w-96">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. 
          Blandit a massa elementum id scelerisque rhoncus. 
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
