import React from "react";

const AboutUsTitle = () => {
  return (
    <div className="w-[522px] h-[322px] flex flex-col justify-start items-start gap-4">
      {/* Title Section */}
      <div className="w-full h-[152px] flex flex-col justify-start items-start gap-3">
        <div className="w-full flex justify-start items-start gap-2.5">
          <h2 className="text-[#e12127] text-[28px] font-semibold font-['Inter'] capitalize">
            About us
          </h2>
        </div>
        <div className="w-full flex justify-start items-center gap-2.5">
          <h3 className="text-[#158448] text-[44px] font-semibold font-['Inter']">
            Company Profile (Headline)
          </h3>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full flex justify-center items-center gap-2.5 mt-6">
        <p className="text-black/80 text-lg font-semibold font-['Inter']">
          Pulvinar auctor nisl, volutpat turpis enim id. Pulvinar auctor nisl,
          volutpat turpis enim id. Pulvinar auctor nisl, volutpat turpis enim
          id. Pulvinar auctor nisl, volutpat turpis enim id. Pulvinar auctor
          nisl, volutpat turpis enim id. Pulvinar auctor nisl, volutpat turpis
          enim id. Pulvinar auctor nisl, volutpat turpis enim id. Pulvinar
          auctor nisl, volutpat turpis enim id. Pulvinar auctor nisl, volutpat
          turpis enim id.
        </p>
      </div>
    </div>
  );
};

export default AboutUsTitle;
