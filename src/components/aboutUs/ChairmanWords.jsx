import React from "react";

const ChairmanWords = ({ data }) => {
  return (
    <div className="w-full h-auto self-center flex flex-col lg:flex-row justify-center md:justify-start items-center max-md:space-y-10 gap-4 lg:gap-10 py-8 xl:py-16">
      <div className="w-full  md:w-3/12 lg:w-4/12  md:h-[350px] flex items-center justify-center">
        {/* Full-height image */}
        <img
          className="rounded-lg  w-full md:w-[300px] object-fit"
          src={data?.image}
          alt="Placeholder"
        />
      </div>

      <div className="w-full md:w-9/12 lg:w-8/12 flex flex-col justify-start items-start gap-8">
        <div className="flex flex-col w-full justify-start items-center gap-12">
          <div className="text-white text-md lg:text-xl font-semibold">
            <p className="pb-2 ">{data?.greeting}</p>
            {data?.quote?.map((text, index) => (
              <div key={index} className={`${index === 0 ? "pt-0" : "pt-4"}`}>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-0.5 bg-white"></div>

        <div className="w-full  flex flex-col lg:flex-row justify-between gap-3 lg:items-center">
          <div className=" flex flex-col justify-start gap-1">
            <div className="text-primary-yellow text-2xl font-semibold ">
              {data?.name}
            </div>
            <div className="text-white text-lg font-semibold font-['Inter']">
              {data?.title}
            </div>
          </div>

          {/* phone */}
          <div className=" flex flex-col gap-1">
            {data?.phone.WhatsApp && (
              <span className=" flex gap-2 font-semibold lg:text-lg text-white">
                WhatsApp:{" "}
                <h3 className="  font-semibold text-primary-yellow flex-wrap">
                  {data?.phone.WhatsApp}
                </h3>
              </span>
            )}

            {data?.phone.Botim && (
              <span className=" flex gap-2 font-semibold lg:text-lg text-white">
                Botim:
                <h3 className="  font-semibold text-primary-yellow">
                  {data?.phone.Botim}
                </h3>
              </span>
            )}

            {data?.phone.IMO && (
              <span className=" flex gap-2 font-semibold lg:text-lg text-white">
                IMO:
                <h3 className="  font-semibold text-primary-yellow">
                  {data?.phone.IMO}
                </h3>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanWords;
