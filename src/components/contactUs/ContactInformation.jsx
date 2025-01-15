import React from "react";
import { configData as config } from "../../data/configData";

const ContactInformation = () => {
  return (
    <div className="w-full lg:h-[560px] rounded-xl flex flex-col items-start  space-y-10 bg-primary-web px-4 lg:px-16 py-12 ">
      <div>
        <div className=" text-white text-2xl font-bold  leading-[38.40px] tracking-wide">
          Contact Information
        </div>
        <div className="  text-white/60 text-base font-medium  leading-relaxed tracking-tight">
          Fill up the form and our Team will get back to you within 24 hours.
        </div>
      </div>
      <div>
      <div className=" text-white text-base font-medium ">
          {config?.emails[0]}
        </div>
        <div className=" text-white text-base font-medium ">
          {config?.emails[1]}
        </div>
      </div>
      <div>
      <div className=" text-white text-base font-normal ">
          {config?.phone_numbers[0]}
        </div>
        <div className=" text-white text-base font-normal ">
          {config?.phone_numbers[1]}
        </div>
        <div className=" text-white text-base font-medium ">
          {config?.address}
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
