import React from "react";

const ServicesCard = () => {
  return (
    <div className="w-[333px] h-[283px] p-6 bg-white rounded-[21.71px] shadow flex justify-center items-center">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-2 h-24">
          <div className="w-14 h-14 p-3 bg-[#8fc4a8] rounded-full flex items-center justify-center"></div>
          <div className="flex justify-start items-center">
            <div className="text-primary-green text-2xl font-semibold ">
              Consulting
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-black text-base font-semibold ">
            Personalized consulting for individuals seeking careers abroad and
            companies needing high-caliber human resources. Lorem ipsum dolor
            sit amet,
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
