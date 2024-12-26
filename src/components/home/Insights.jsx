import React from "react";

const Insights = () => {
  const data = [
    { value: "2500", label: "Satisfied Customers" },
    { value: "640", label: "Projects Completed" },
    { value: "12", label: "Satisfaction Rate" },
    { value: "1024", label: "Years Experience" },
  ];

  return (
    <div className="w-full bg-primary-green py-14 px-4 md:px-8 lg:px-10 xl:px-20 flex justify-center">
      <div className=" w-full px-20 flex flex-wrap gap-6 justify-between items-center ">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="text-white text-5xl font-semibold ">
              {item.value}
            </div>
            <div className="text-white text-sm font-medium  uppercase">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
