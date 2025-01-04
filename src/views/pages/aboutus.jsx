import React from "react";
import AboutUsTitle from "../../components/aboutUs/AboutUsTitle";
import CompanyHighlights from "../../components/aboutUs/ExecutiveSummary";
import Button from "../../components/Button";
import ServicesCard from "../../components/aboutUs/ServicesCard";
import ServicesTitle from "../../components/aboutUs/ServicesTitle";
import ChairmanWords from "../../components/aboutUs/Carousel";
import { useNavigate } from "react-router-dom";
import RedTitleTextCard from "../../components/common/RedTitleTextCard";
import ExecutiveSummary from "../../components/aboutUs/ExecutiveSummary";
import MissionVisionServiceCard from "../../components/aboutUs/MissionVisionServiceCard";
import Icons from "../../icons";
import FAQ from "../../components/contactUs/FAQ";
import MissionComponent from "../../components/aboutUs/OurMission";
import MissionComponent from "../../components/aboutUs/OurMission";
import Carousel from "../../components/aboutUs/Carousel";
import Slider from "../../components/aboutUs/Carousel";

const AboutUs = () => {
  const { TargetIcon, EyeIcon } = Icons;

  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact-us");
  };
  return (
    <section className="w-full flex flex-col  ">
      {/* title and image section */}
      <div className="w-full px-4 lg:px-20 pt-10 md:pt-20 xl:pt-10 ">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-5/12 xl:w-6/12 mb-8 lg:mb-8 xl:mb-0">
            {/* <AboutUsTitle /> */}
            <RedTitleTextCard
              title="About us"
              headline="Company Profile (Headline)"
              description="We specialize in connecting exceptional talent with outstanding companies. Founded on the belief that the right people are the most valuable asset to any organization, we work diligently to bridge the gap between skilled professionals and organizations seeking to grow and thrive. We train our staff intensively ourselves because that is the best way to ensure that our methods are adhered to and our standards maintained, and we reward our staff with a profit share scheme rather than with individual commission."
            />
          </div>

          <div className="lg:w-7/12 xl:w-6/12 relative hidden md:flex items-end justify-end  pr-1 w-full md:w-auto">
            {/* Background Circle */}
            <div className="absolute w-[643px] h-[604px] bg-primary-purple/60 rounded-full top-32 right-0 md:right-[20] md:w-[500px] md:h-[500px] sm:w-[350px] sm:h-[350px]" />
            {/* Image */}
            <img
              src="/images/women.svg"
              alt="Business Woman"
              className="relative z-8 pr-2  "
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* executive summary */}
      <div className="w-full relative z-8 flex flex-col items-center ">
        <ExecutiveSummary />
      </div>

      <div className="w-full  h-[10px] md:h-[40px] lg:h-[50px]"></div>
      {/* contact Us */}
      <div className="w-full flex items-center justify-center">
        <Button
          label={
            <>
              Contact Us{" "}
              <img
                src={`/images/arrow-right.svg`}
                alt="Right Arrow"
                className="ml-2 w-4 h-4 inline"
              />
            </>
          }
          variant="primary"
          size="large"
          rounded="full"
          text="extraLarge"
          onClick={handleContactClick}
        />
      </div>

      {/* company services */}
      {/* <div className="relative  w-full flex py-36 px-20 justify-between items-center space-x-20">
        <div className=" flex space-x-8">
          <div className="mt-20 space-y-10">
            <ServicesCard />
            <ServicesCard />
          </div>
          <div className=" space-y-10">
            <ServicesCard />
            <ServicesCard />
          </div>
        </div>
        <div className=" absolute -z-10 top-10 -left-20 w-[756.09px] h-[705.04px] bg-[#8fc4a8] rounded-full "></div>
        <div className="">
          <ServicesTitle />
        </div>
      </div> */}

      {/* mission vision and service card section */}
      <div className="py-10">
        <MissionComponent />
      </div>

      <div className="flex justify-center flex-wrap gap-10 px-4 md:px-8 lg:px-10 xl:px-20 py-8 xl:py-20">
        <MissionVisionServiceCard
          icon={TargetIcon}
          title="Mission"
          description="Growing one of the strongest competitors in the Egyptian and Gulf markets and changing business modes by providing quality services."
          onClick={() => console.log("Card clicked!")}
        />

        <MissionVisionServiceCard
          icon={EyeIcon}
          title="Vision"
          description="Providing superior professional quality through an experienced staff to meet the actual needs of our client’s business in Egypt and the Gulf region."
          onClick={() => console.log("Card clicked!")}
        />
      </div>

      {/* Chairman's statement */}
      <div className="bg-primary-green px-4 md:px-8 lg:px-10 xl:px-20 py-8 xl:py-20">
        {/* <ChairmanWords /> */}
        <Slider/>
      </div>

      <div className="h-96"></div>
    </section>
  );
};

export default AboutUs;
