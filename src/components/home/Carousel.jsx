import React from 'react'

const Carousel = ({jobs}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: jobs.length < 4 ? jobs.length : 4,
        centerMode: false,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: jobs.length < 2 ? jobs.length : 3,
              slidesToScroll: 1,
              infinite: jobs.length > 1,
            },
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: jobs.length < 2 ? jobs.length : 2,
              slidesToScroll: 1,
              infinite: jobs.length > 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: jobs.length > 1,
              arrows: false,
            },
          },
        ],
      };
      if (jobs.length < 2) {
        settings.slidesToShow = 1;
        settings.infinite = false;
        settings.arrows = false;
      }
    
  return (
    <div
    className={`w-full  bg-gray-200 md:px-8 py-6 bg-gray-200/95 rounded ${
      jobs.length === 1 ? "flex justify-center w-full" : ""
    }`}
  >
    <div
      className={`${
        jobs.length === 1
          ? "w-full md:w-1/2 lg:w-1/3 flex justify-center"
          : "w-full"
      }`}
    >
      <Slider {...settings} className=" w-full">
        {jobs.map((job) => (
          <div
            key={job.id}
            onClick={() => handleJobCardClick(job)}
            className="helloooooo px-2 "
          >
            {/* <Link to={`/jobs/${job.id}`}> */}
            <JobCard job={job} />
            {/* </Link> */}
          </div>
        ))}
      </Slider>
    </div>
  </div>
  )
}

export default Carousel