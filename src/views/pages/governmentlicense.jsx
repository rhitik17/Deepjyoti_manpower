import React from "react";
import license1 from "/public/license1.png";
import license2 from "/public/license2.png";
import license3 from "/public/license3.png";

const GovernmentLicense = () => {
  const licenses = [
    { id: 1, image: license1, title: "License 1" },
    { id: 2, image: license2, title: "License 2" },
    { id: 3, image: license3, title: "License 3" },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary-purple mb-8">
          Government Licenses
        </h1>
        <p className="text-center font-semibold text-gray-600 mb-10 max-w-3xl mx-auto">
          We are proud to hold the necessary government approvals to ensure a seamless and compliant recruitment process. Below are our valid licenses that reflect our credibility and commitment to quality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {licenses.map(({ id, image, title }) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-1000"
            >
              <img
                src={image}
                alt={title}
                className="w-full  object-cover"
              />
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernmentLicense;
