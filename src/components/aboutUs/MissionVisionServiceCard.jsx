import React from "react";

const MissionVisionServiceCard = ({
  icon: Icon,
  title = "Mission",
  description,
  bgColor = "bg-primary-web",
  textColor = "text-green-700",
  onClick,
}) => {
  return (
    <div
      className="w-96 h-96 bg-white rounded-3xl shadow flex flex-col items-center p-6 gap-4 cursor-pointer hover:bg-primary-web/10"
      onClick={onClick}
    >
      {/* Icon and Title */}
      <div className="flex flex-col items-center gap-4">
        <div className={`w-16 h-16 px-3.5 py-4 ${bgColor} rounded-sm`}>
          {Icon && <Icon className="text-white text-3xl" />}
        </div>
        <h2
          className={`text-center ${textColor} text-3xl sm:text-4xl md:text-5xl font-semibold`}
        >
          {title}
        </h2>
      </div>
      {/* Description */}
      <p className="text-center text-primary-web text-sm sm:text-base md:text-lg font-semibold">
        {description ||
          "Growing one of the strongest competitors in the Egyptian and Gulf markets and changing business modes by providing quality services."}
      </p>
    </div>
  );
};

export default MissionVisionServiceCard;
