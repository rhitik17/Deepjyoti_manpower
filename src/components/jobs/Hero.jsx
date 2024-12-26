import React from "react";

const Hero = ({data}) => {
  return (
    <div className="w-full flex flex-col items-center gap-10 py-10 px-4">
      {/* Hero Text Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
          Find Your Dream Job Today!
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-2">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>
      </div>

      {/* Search Bar Section */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 p-5 rounded-2xl border-2 border-primary-web">
        <input
          type="text"
          placeholder="Job Title or Company"
          className="w-full lg:w-auto flex-1 text-base text-gray-700 placeholder-gray-400 focus:outline-none px-4 py-2 rounded-md border border-gray-300"
        />
        <select className="w-full lg:w-auto flex-1 text-base text-gray-700 focus:outline-none px-4 py-2 rounded-md border border-gray-300">
          <option value="">Select Location</option>
          {["New York", "California", "Texas", "Florida", "Remote"].map(
            (location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            )
          )}
        </select>
        <select className="w-full lg:w-auto flex-1 text-base text-gray-700 focus:outline-none px-4 py-2 rounded-md border border-gray-300">
          <option value="">Select Category</option>
          {[
            "Software Development",
            "Marketing",
            "Design",
            "Finance",
            "Healthcare",
          ].map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className="w-full md:w-auto bg-primary-web text-white px-6 py-2 rounded-lg hover:bg-slate-700">
          Search Job
        </button>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl mt-10">
        {/* Jobs Stat */}
        <div className="flex items-center gap-4 w-48">
          <div className="bg-primary-web p-4 rounded-full">
            <span className="text-white text-2xl">📄</span>
          </div>
          <div>
            <h3 className="text-xl text-primary-web font-bold">{data?.jobs_count}</h3>
            <p className="text-gray-600">Jobs</p>
          </div>
        </div>

        {/* Candidates Stat */}
        <div className="flex items-center gap-4 w-48">
          <div className="bg-primary-web p-4 rounded-full">
            <span className="text-white text-2xl">👤</span>
          </div>
          <div>
            <h3 className="text-xl text-primary-web font-bold">{data?.applications_count}</h3>
            <p className="text-gray-600">Candidates</p>
          </div>
        </div>

        {/* Companies Stat */}
        <div className="flex items-center gap-4 w-48">
          <div className="bg-primary-web p-4 rounded-full">
            <span className="text-white text-2xl">🏢</span>
          </div>
          <div>
            <h3 className="text-xl text-primary-web font-bold">{data.companies_count}</h3>
            <p className="text-gray-600">Companies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
