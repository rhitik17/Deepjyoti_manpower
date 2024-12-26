import React from "react";
import ContactInformation from "../../components/contactUs/ContactInformation";
import ContactForm from "../../components/contactUs/ContactForm";
import FAQ from "../../components/contactUs/FAQ";

const ContactUs = () => {
  return (
    <section className="px-4 md:px-8 lg:px-10 xl:px-20 py-8 xl:py-20">
      {/* title section */}
      <div className="flex flex-col items-center gap-2.5">
        <h1 className="text-center text-neutral-900 text-4xl sm:text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>
        <p className="text-center text-black/70 text-base sm:text-lg md:text-xl font-bold">
          You can contact us sending your details.
        </p>
      </div>

      {/* contact form section */}
      <div className="  flex flex-col lg:flex-row  lg:space-x-8 xl:space-x-12 max-lg:space-y-10 items-center md:px-6 lg:px-10 xl:px-12 py-12 bg-white rounded-[40px] shadow-lg">
        <div className="w-full lg:w-5/12 ">
          <ContactInformation />
        </div>
        <div className="w-full lg:w-7/12 xl:w-8/12">
          <ContactForm />
        </div>
      </div>

      {/* Faq section */}
      <div className="pt-16">
        <FAQ/>
      </div>
    </section>
  );
};

export default ContactUs;
