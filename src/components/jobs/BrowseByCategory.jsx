import React from 'react';
// import categories from '../../data/browseByCategory';

const BrowseByCategory = ({categories}) => {
 

  return (
    <div className="w-full px-4 md:px-8 lg:px-10 xl:px-20 pt-14 pb-28 bg-secondary-teal/10 flex-col justify-start items-center gap-14 inline-flex">
      <div className="flex-col justify-start items-center gap-10 flex">
        <div className="text-center text-black text-5xl font-bold  ">
          Browse by Category
        </div>
        <div className="max-w-4xl text-black text-base font-normal  ">
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit
          a massa elementum id scelerisque rhoncus. 
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className=" h-72 bg-white rounded-2xl shadow border-4 flex-col justify-center items-center gap-10 inline-flex"
          >
            <div className="w-10 h-10 justify-center items-center inline-flex text-2xl">
              {category.image}
            </div>
            <div className="text-black text-2xl font-bold  ">
              {category.name}
            </div>
            <div className="px-3 py-2 bg-[#309689]/10 rounded-lg flex-col justify-start items-start gap-2.5 flex">
              <div className="text-[#309689] text-base font-normal ">
                {category.jobs_count} jobs
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
