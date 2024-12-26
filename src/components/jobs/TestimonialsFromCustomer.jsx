import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../../data/testimonialsFromCustomers";


const Testimonials = ({testimonials}) => {
  return (
    <div className="w-full pt-14 pb-28 px-4 md:px-8 lg:px-10 xl:px-20 bg-slate-100 flex flex-col justify-center items-center gap-14">
      <div className="flex flex-col justify-start items-center gap-10">
        <div className="text-center text-black text-5xl font-semibold font-['Inter']">
          Testimonials from Our Customers
        </div>
        <div className="max-w-3xl  text-black text-base font-normal font-['Inter']">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit
          a massa elementum id
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {testimonials?.length > 0 ? (
       <>
         {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            title={testimonial.title}
            description={testimonial.description}
            name={testimonial.name}
            imageUrl={testimonial.imageUrl}
          />
        ))}
       </>
       ):(
        <p>No testimonials found.</p>
       )}
      </div>
    </div>
  );
};

export default Testimonials;
