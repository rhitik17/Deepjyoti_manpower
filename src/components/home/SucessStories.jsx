import React from "react";

// TestimonialCard component for individual success story cards
const TestimonialCard = ({ image, name, position, testimonial }) => {
  return (
    <div className="w-full min-h-52 p-8 bg-primary-web shadow-lg flex flex-col gap-6 rounded">
      <p className="text-white text-sm leading-snug">{testimonial}</p>
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
      position: "Marketing Coordinator",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    },
    {
      image: "/images/plane.jpg",
      name: "Cody Fisher",
      position: "President of Sales",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    },
    {
      image: "/images/plane.jpg",
      name: "Robert Fox",
      position: "Web Designer",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
    },
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-10 xl:px-20 py-20 bg-white flex justify-start items-center font-inter">
      <div className="w-full flex flex-col gap-12">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col justify-center items-center ">
            <h2 className="text-primary-web  text-5xl font-semibold">Success Stories</h2>
           
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
