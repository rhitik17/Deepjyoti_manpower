import React from "react";
import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight } from "../../utils";

const MissionComponent = () => {
 

  return (
    <div className="w-full p-6 md:p-10 lg:p-16 rounded-lg shadow-lg space-y-12 font-medium">
      {/* Mission Section */}
      <motion.div
        className="w-full space-y-6 flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideFromLeft}
      >
        <h2 className="text-primary-purple text-4xl font-bold font-roboto text-center">
          Our Mission
        </h2>
        <p className="text-black text-xl text-center">
          “DELIVERING EXCELLENCE TO INDIVIDUALS, BUSINESS, AND COMMUNITIES.”
        </p>
        <p className="text-black text-lg text-center leading-relaxed lg:w-6/12">
          Our mission statement reflects our commitment to offering the highest
          quality service to our clients, candidates, and all the other
          stakeholders we work with. It demonstrates how we continually strive
          to go above and beyond to provide exceptional service.
        </p>
      </motion.div>

      <hr className="border-t border-primary-purple opacity-50" />

      {/* Guarantee Section */}
      <div className="w-full space-y-6 flex flex-col justify-center items-center">
        <h3 className="text-primary-purple text-3xl font-semibold font-roboto text-center">
          Our Guarantee
        </h3>
        <p className="text-black text-lg text-center leading-relaxed lg:w-6/12">
          We undertake to repatriate at our own expense if any candidate
          deployed by DEEPJYOTI MANPOWER SERVICE is found professionally or
          medically unfit or refuses to work as specified by the company within
          a probationary period of 90 days from the date of their deployment.
        </p>
      </div>

      <hr className="border-t border-primary-purple opacity-50" />

      {/* Vision Section */}
      <motion.div
        className="w-full space-y-6 flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={slideFromRight}
      >
        <h3 className="text-primary-purple text-3xl font-semibold font-roboto text-center">
          Our Vision
        </h3>
        <p className="text-black text-xl text-center lg:w-6/12">
          “TO DELIVER WORLD-CLASS PROFESSIONAL RECRUITMENT SOLUTIONS TO
          EMPLOYERS & JOB SEEKERS IN EVERY RANGE OF DISCIPLINE.”
        </p>
      </motion.div>
    </div>
  );
};

export default MissionComponent;
