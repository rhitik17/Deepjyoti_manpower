import React from "react";
import { Link } from "react-router-dom";
import RedTitleTextCard from "../common/RedTitleTextCard";

const AboutCard = () => {
  return (
    <div className="w-full  flex flex-col  justify-center items-center lg:justify-start lg:items-start gap-10">
    <RedTitleTextCard 
    title={"About"}
    headline={"DeepJyoti manpower Service"}
    description="It is a long established fact that a reader will be distracted by the redable content of a page"
    />

      {/* Button Section */}
      <Link to={"/about-us"}>
        <div className="w-44 h-12 bg-primary-web flex items-center justify-center rounded-full cursor-pointer">
          <span className="text-primary-yellow text-xl font-bold font-roboto">
            Explore
          </span>
        </div>
      </Link>
    </div>
  );
};

export default AboutCard;
