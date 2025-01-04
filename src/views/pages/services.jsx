import React from "react";
import ServiceCard from "../../components/services/ServiceCard";
import serviceCardData from "../../data/servicesData";

const Services = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-10 xl:px-20 py-8 xl:py-20">
      {/* title */}
      <div className="w-full  flex flex-col justify-start items-start gap-3">
        <div className="w-full flex justify-start items-start gap-2.5">
          <h2 className="text-primary-purple text-3xl font-semibold   ">
            Services Offered
          </h2>
        </div>
        <div className="w-full flex justify-start items-center gap-2.5">
          <h3 className="text-primary-green text-2xl md:text-4xl lg:text-5xl font-semibold  ">
            Our Services
          </h3>
        </div>
      </div>

      {/* services card area */}
      <div className="py-16 space-y-32">
      {serviceCardData.map((data, index) => (
        <ServiceCard
          key={index}
          index={index + 1} 
          imageSrc={data.imageSrc}
          category={data.category}
          paragraph1={data.paragraph1}
          paragraph2={data.paragraph2}
        />
      ))}
      </div>
    </div>
  );
};

export default Services;
