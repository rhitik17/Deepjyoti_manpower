import React from "react";

const ExecutiveSummary = () => {
  return (
    <div className="w-full  px-4 md:px-8 lg:px-10 xl:px-20 py-8   bg-primary-green rounded-tr-[100px] md:rounded-tr-[182px] rounded-bl-[100px] md:rounded-bl-[182px] flex flex-col items-start gap-2.5 bg-cover">
      {/* Main Content Wrapper */}
      <div className=" flex flex-col items-center py-10">
        {/* Header Section */}
        <div className=" flex justify-center items-center gap-2.5">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-['Inter']">
            Executive Summary
          </h2>
        </div>

        {/* Content Sections */}
        <div className="w-full  flex flex-col items-start gap-16 px-4 md:px-8 lg:px-10 xl:px-20 py-8 xl:pt-20">
          {/* Section 1 */}
          {/* <div className=" flex items-center gap-2.5">
            <p className="text-white text-lg font-semibold font-['Inter']">
              DeepJyoti Manpower Service Pvt. Ltd. is Nepal's renowned and
              reputed business solutions agency. Among the numerous manpower
              recruiting agencies in Nepal, we stand out with our experience and
              ability to select the right candidates for the right roles abroad
              at the right time.
            </p>
          </div> */}

          {/* Section 2 */}
          <div className=" flex items-center gap-2.5">
            <p className="text-white text-lg font-semibold font-['Inter'] grow">
            Deepjyoti Manpower Service is the leading & highly recommended
              manpower agency of Nepal, under license no. is 1136/073/074.
              Deepjyoti Manpower Service is committed to provide a reliable &
              most trusted recruitment service to the employers.
            </p>
          </div>

          {/* Section 3 */}
          <div className=" flex items-center gap-2.5">
            <p className="text-white text-lg font-semibold font-['Inter'] grow">
              We have been
              supplying various categories of manpower in Saudi Arabia,
              Malaysia, U.A.E., Qatar, Kuwait, Bahrain, and other government
              authorized countries from the establishment. We are supplying
              workers in various countries of different job category according
              to the personal caliber. Our customers are highly satisfied with
              our professional services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
