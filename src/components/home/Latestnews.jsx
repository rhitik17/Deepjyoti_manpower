import React from "react";

const LatestNews = () => {
  return (
    <div className="w-full bg-white mx-auto py-12 px-4 md:px-8 lg:px-10 xl:px-20">
      {/* Main Content */}
      <div className="flex flex-col gap-12">
        {/* Title Section */}
        <div className="text-start space-y-4">
          <h2 className="text-primary-red text-2xl font-bold font-inter">
            Latest News
          </h2>
          <h3 className="text-primary-green text-4xl md:text-5xl font-bold font-inter">
            Read the latest news from the world
          </h3>
          <p className="text-neutral-black text-lg font-normal font-inter leading-relaxed">
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum has been the industry's standard.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-end space-x-4">
          <button className="text-black text-sm font-medium">PREV</button>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-0.5 bg-gray-400"></div>
            <div className="w-5 h-0.5 bg-black"></div>
          </div>
          <button className="text-gray-400 text-sm font-medium">NEXT</button>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="col-span-1  pb-4 flex flex-col border border-black/20 rounded-lg shadow-md overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-[294.69px] bg-neutral-lightGray">
                <img
                  src="/images/plane.jpg"
                  alt="News Thumbnail"
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Card Bottom Section */}
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-center text-sm text-neutral-lightGray font-medium font-inter">
                  <span>Creative Design</span>
                  <span>20/08/2020</span>
                </div>
                <h4 className="text-neutral-darkGray text-lg font-medium font-inter">
                  It is a long established fact that a reader will be distracted
                </h4>
                <p className="text-neutral-lightGray text-sm font-normal font-inter">
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority h....
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default LatestNews;
