import React from 'react'

const RedTitleTextCard = ({title, headline, description}) => {
  return (
    <div className=" flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4">
      {/* Title Section */}
      <div className="w-full  flex flex-col lg:justify-start lg:items-start justify-center items-center gap-3">
        <div className="w-full flex justify-start max-lg:justify-center items-start gap-2.5">
          <h2 className="text-primary-purple text-3xl font-semibold   ">
            {title}
          </h2>
        </div>
        <div className="w-full flex lg:justify-start justify-center items-center lg:items-center gap-2.5">
          <h3 className="text-primary-green max-lg:text-center text-2xl md:text-4xl lg:text-5xl font-semibold  ">
            {headline}
          </h3>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full flex justify-start items- gap-2.5 ">
        <p className="text-black/80 md:text-lg max-lg:text-center font-semibold  ">
          {description}
        </p>
      </div>
    </div>
  )
}

export default RedTitleTextCard