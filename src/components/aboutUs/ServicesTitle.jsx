import React from 'react'

const ServicesTitle = () => {
  return (
    <div className=" w-full flex flex-col justify-start items-start ">
      {/* Title Section */}
      <div className="w-full flex flex-col justify-start items-start">
        <div className="w-full flex justify-start items-start gap-2.5">
          <h2 className="text-[#e12127] text-[28px] font-semibold font-['Inter'] capitalize">
            Services Offered
          </h2>
        </div>
        <div className="w-full flex justify-start items-center gap-2.5">
          <h3 className="text-[#158448] text-[44px] font-semibold font-['Inter']">
            Our Services
          </h3>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full flex justify-center items-center ">
        <p className="text-black/80 text-lg font-semibold font-['Inter']">
          Pulvinar auctor nisl, volutpat turpis enim id. Pulvinar auctor nisl,
          volutpat turpis enim id. Pulvinar auctor nisl, volutpat turpis enim
          id. Pulvinar auctor nisl, volutpat turpis enim id. Pulvinar auctor
          nisl, volutpat turpis enim id. Pulvinar auctor nisl, volutpat turpis
          enim id. Pulvinar auctor nisl, volutpat turpis enim id. Pulvinar
          auctor nisl, volutpat turpis enim id. Pulvinar auctor nisl, volutpat
          turpis enim id.
        </p>
      </div>
    </div>
  )
}

export default ServicesTitle