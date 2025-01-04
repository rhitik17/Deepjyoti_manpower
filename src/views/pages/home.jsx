import React from "react";
import HeroSection from "../../components/home/Hero";
import JobSearchSection from "../../components/home/JobSearchSection";
import ProfessionalSupportCard from "../../components/home/SupportCard";
import AboutCard from "../../components/home/AboutCard";
import LatestNews from "../../components/home/Latestnews";
import SucessStories from "../../components/home/SucessStories";
import Insights from "../../components/home/Insights";
import TrustedPartners from "../../components/home/TrustedPartners";
import { motion } from "framer-motion";
import { slideFromLeft,  } from "../../utils";

const Home = () => {
  const supports = [
    {
      title: "Professional Support",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
    },
    {
      title: "Technical Support",
      description:
        "Our technical support team is available 24/7 to assist you with any issues.",
    },
    {
      title: "Customer Support",
      description:
        "We provide comprehensive customer support to ensure your satisfaction.",
    },
  ];



  return (
    <>
      <section className="py-8">
        <div className="px-4 md:px-8 lg:px-10 xl:px-20  flex flex-col items-center">
          {/* hero-section with job search */}
          <div className=" mb-20 w-full relative  ">
            <HeroSection />
            {/* <div className="w-11/12 absolute bottom-[-25%] md:bottom-[-10%] left-1/2 transform -translate-x-1/2  flex items-center justify-center">
              <JobSearchSection />
            </div> */}
          </div>

          {/* Professional card and about card */}

          <div className="w-full mt-8 py-24 flex max-lg:flex-col items-center justify-between gap-24 ">
            <motion.div
              className="lg:w-8/12 space-y-20 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideFromLeft}
            >
             
                {supports.map((support, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      index % 2 === 1 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <ProfessionalSupportCard
                      index={index}
                      title={support.title}
                      description={support.description}
                    />
                  </div>
                ))}
            
            </motion.div>
          
              <div
                  
                    initial="hidden"
                   
                  >
              <AboutCard />
            </div>
          </div>
        </div>

        {/* insights
          <div>
            <Insights />
          </div> */}
        {/* latest news cards */}
        {/* <div className="w-full flex">
            <LatestNews />
          </div> */}

        <div className="pt-2">
          <SucessStories />
        </div>

        {/* partners */}
        <div className="py-20">
          <TrustedPartners />
        </div>
      </section>
    </>
  );
};

export default Home;
