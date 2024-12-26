import React from "react";

const ExecutiveSummary = () => {
  return (
    <div className="w-full  px-4 md:px-8 lg:px-10 xl:px-20 py-8 xl:py-20  bg-primary-green rounded-tr-[100px] md:rounded-tr-[182px] rounded-bl-[100px] md:rounded-bl-[182px] flex flex-col items-start gap-2.5 bg-cover">
      {/* Main Content Wrapper */}
      <div className=" flex flex-col items-center gap-20 py-10">
        {/* Header Section */}
        <div className=" flex justify-center items-center gap-2.5">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-['Inter']">
            Executive Summary
          </h2>
        </div>

        {/* Content Sections */}
        <div className="w-full min-h-[529px] flex flex-col items-start gap-16 px-4 md:px-8 lg:px-10 xl:px-20 py-8 xl:py-20">
          {/* Section 1 */}
          <div className=" flex items-center gap-2.5">
            <p className="text-white text-lg font-semibold font-['Inter']">
              DeepJyoti Manpower Service Pvt. Ltd. is Nepal's renowned and reputed
              business solutions agency. Among the numerous manpower recruiting
              agencies in Nepal, we stand out with our experience and ability to
              select the right candidates for the right roles abroad at the
              right time.
            </p>
          </div>

          {/* Section 2 */}
          <div className=" flex items-center gap-2.5">
            <p className="text-white text-lg font-semibold font-['Inter'] grow">
              The globalization has made the people and the world market so
              close by which distance has been omitted. So, overseas job has
              highly attracted to the Nepalese workers. On this stage, we make
              the strong bridge to the overseas companies and the Nepalese
              workers in the most effective and reliable way.
            </p>
          </div>

          {/* Section 3 */}
          <div className=" flex items-center gap-2.5">
            <p className="text-white text-lg font-semibold font-['Inter'] grow">
              Al-Noor Overseas, as on broadly selected staffs of expertise
              knowledge and intellectual circle who devote their time and effort
              to produce the best that initiates to gain the objective with the
              best service to the clients which we take as the ultimate goal
              towards the eternal success.
           
              We are always oriented to make the employee get the best
              opportunity in the related field that one deserves according to
              inherent talent merge with the skill.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
