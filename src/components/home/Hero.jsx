import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-full h-[649px] bg-[url('/images/plane.jpg')] bg-no-repeat bg-cover rounded- relative">
      {/* Heading Section */}
      <div className="absolute left-8 md:left-20 lg:left-36 top-10 md:top-32 lg:top-44 flex flex-col items-center gap-6 px-4">
        <div className="text-center text-white space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-4xl  ">
     Empowering Remarkable Talent for Worldwide Opportunities
          </h2>
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-normal font-inter uppercase mt-1">
          Explore & Experience
          </h1>
        </div>
        <p className="text-sm md:text-lg lg:text-xl font-semibold font-montserrat text-white">
        Exclusive packages tailored to your journey
        </p>
      </div>

      {/* Explore Service Button */}
     <Link to={"/services"}>
     <div className="absolute left-1/2 transform -translate-x-1/2    top-[300px] md:top-[392px] flex items-center gap-2 px-4 py-3 md:px-5 md:py-4 rounded-lg border border-white cursor-pointer">
        <span className="text-sm md:text-base font-semibold font-inter text-white ">
          Explore Services
        </span>
        <img src="/images/arrow-right.svg" alt="" />
      </div>
     </Link>

      {/* Discover More Button
      <button className="absolute left-1/2 transform -translate-x-1/2 md:left-[25%] lg:left-[480px] md:transform-none top-[250px] md:top-[377px] px-4 py-3 md:px-5 md:py-4 bg-primary-green rounded-lg flex justify-center items-center text-white text-sm md:text-base font-semibold font-inter">
        Discover More
      </button> */}
    </div>
  );
};

export default HeroSection;
