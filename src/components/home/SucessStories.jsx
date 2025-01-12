import React from "react";

// TestimonialCard component for individual success story cards
const TestimonialCard = ({ image, name, position, testimonial }) => {
  return (
    <div className="w-full min-h-52 p-8 bg-primary-web shadow-lg flex flex-col gap-6 rounded">
      <p className="text-white text-normal ">{testimonial}</p>
      <div className="flex items-center gap-5">
        <img className="w-14 h-14 rounded-full" src={image} alt={`${name}'s avatar`} />
        <div className="flex flex-col">
          <span className="text-white text-base font-semibold">{name}</span>
          <span className="text-gray-100 text-sm">{position}</span>
        </div>
      </div>
    </div>
  );
};


const SuccessStories = () => {
  const testimonials = [
    {
      image: "/images/plane.jpg",
      name: "Jerome Bell",
      position: "Operations Manager",
      testimonial: "Manpower Service Pvt. Ltd. provided us with a skilled workforce in record time. Their professionalism and commitment to quality are unmatched in the industry."
    },
    {
      image: "/images/plane.jpg",
      name: "Cody Fisher",
      position: "HR Manager",
      testimonial: "Thanks to Manpower Service Pvt. Ltd., we were able to streamline our recruitment process and onboard experienced professionals who perfectly fit our requirements."
    },
    {
      image: "/images/plane.jpg",
      name: "Robert Fox",
      position: "Project Supervisor",
      testimonial: "The team at Manpower Service Pvt. Ltd. ensured we had the right talent for our project. Their dedication and efficiency made all the difference in achieving our goals."
    },
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-10 xl:px-20 py-20 bg-white flex justify-center lg:justify-start items-center font-inter">
      <div className="w-full flex flex-col gap-8 lg:gap-12">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col justify-center max-lg:text-center items-center ">
            <h2 className="text-primary-web  text-3xl md:text-4xl lg:text-5xl font-semibold">Success Stories</h2>
           
          </div>
          
        </div>
        <div className="relative w-full flex max-lg:flex-col justify-between gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              position={testimonial.position}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
