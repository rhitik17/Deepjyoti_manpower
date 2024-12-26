import React from 'react'

const RecruitmentProcess = () => {
  return (
    <div className='py-8 xl:py-16 relative space-y-20'>

        {/* heading */}
        <div className="px-4 md:px-8 lg:px-10 xl:px-20">
          <h3 className="text-primary-green text-2xl md:text-4xl lg:text-5xl font-semibold  ">
            Recruitment Process
          </h3>
        </div>

        {/* content */}
        <div className='flex flex-col items-center max-md:px-10'>
            <img src="/images/recruitmentProcess/process1.svg" alt="" />

            <img src="/images/recruitmentProcess/process2.svg" alt="" />

            <img src="/images/recruitmentProcess/process3.svg" alt="" />

        </div>

        <div className=' hidden md:flex absolute left-0 top-[5%]  transform -rotate-45'>
            <img src="/images/rope.svg" alt="" className='' />
        </div>

        <div className=' hidden md:flex absolute right-0 top-[10%]  transform rotate-90'>
            <img src="/images/rope.svg" alt="" className='' />
        </div>
    </div>
  )
}

export default RecruitmentProcess