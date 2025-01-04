import React from "react";
import { Link } from "react-router-dom";
import { slideFromRight } from "../../utils";
import {motion} from "framer-motion"

const AboutCard = () => {
  return (

    <motion.div
    className="w-full  flex flex-col justify-start items-start gap-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    variants={slideFromRight}
  >
 
      <div className="w-full flex flex-col items-end gap-2">
        {/* Title Section */}
        <div className="w-full flex flex-col items-start gap-3">
          <div className="text-primary-purple text-2xl font-bold font-inter">
            About
          </div>
          <div className="text-primary-green text-4xl font-bold font-roboto">
            DeepJyoti Manpower Service
          </div>
        </div>

        {/* Description Section */}
        <p className="w-full text-[#333333] text-lg font-normal font-roboto text-justify">
          It is a long established fact that a reader will be
          <br />
          distracted by the readable content of a page.
        </p>
      </div>

      {/* Button Section */}
      <Link to={"/about-us"}>
        <div className="w-44 h-12 bg-primary-web flex items-center justify-center rounded-full cursor-pointer">
          <span className="text-primary-yellow text-xl font-bold font-roboto">
            Explore
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default AboutCard;
