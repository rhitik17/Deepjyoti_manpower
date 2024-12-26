import React from "react";

// TestimonialCard component for individual success story cards
const TestimonialCard = ({ image, name, position, testimonial }) => {
  return (
    <div className="w-full h-52 p-8 bg-white shadow-lg flex flex-col gap-6">
      <p className="text-gray-700 text-sm leading-snug">{testimonial}</p>
      <div className="flex items-center gap-5">
        <img className="w-14 h-14 rounded-full" src={image} alt={`${name}'s avatar`} />
        <div className="flex flex-col">
          <span className="text-gray-800 text-base font-semibold">{name}</span>
          <span className="text-gray-700 text-sm">{position}</span>
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
    <div className="w-full h-[578px] px-20 py-20 bg-green-700 flex justify-start items-center font-inter">
      <div className="w-full flex flex-col gap-12">
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-3 font-inter ">
            <h2 className="text-white text-2xl font-semibold">Success Stories</h2>
            <h3 className="text-white text-5xl font-semibold">Read the latest news from the world</h3>
          </div>
          <p className="text-white text-base font-normal max-w-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="relative w-full flex justify-between gap-8">
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
