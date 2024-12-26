import React from "react";
import { Link } from "react-router-dom";
import { configData as config } from "../../data/configData";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-web pt-16 px-8 lg:px-20">
      <div className="grid max-md:gap-y-14 md:grid-cols-2 lg:grid-cols-4 md:gap-20 ">
        {/* Left Section - Logo and Description */}
        <div className="flex flex-col items-start gap-4 max-w-xs">
          <img
            src="/images/deepjyoti_logo.png"
            alt="Logo"
            className="w-full bg-white  self-center"
          />
          <p className="text-white text-lg font-normal text-justify font-Dm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
            laoreet.
          </p>
          <p className=" text-white text-lg font-medium font-['DM Sans']">
            Social Media
          </p>

          <ul className="flex items-center gap-x-4">
            <li className="flex items-center justify-center rounded-full bg-[url('/images/social-icons/social-icons-white-bg.svg')] bg-no-repeat bg-cover p-2">
              <a
                href={config.social_links?.instagram_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social-icons/instagram.svg" alt="Instagram" />
              </a>
            </li>
            <li className="flex items-center justify-center rounded-full bg-[url('/images/social-icons/social-icons-white-bg.svg')] bg-no-repeat bg-cover p-2">
              <a
                href={config.social_links?.whatsapp_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social-icons/whatsapp.svg" alt="WhatsApp" />
              </a>
            </li>
            <li className="flex items-center justify-center rounded-full bg-[url('/images/social-icons/social-icons-white-bg.svg')] bg-no-repeat bg-cover p-2">
              <a
                href={config.social_links?.facebook_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/social-icons/facebook.svg" alt="Facebook" />
              </a>
            </li>
          </ul>
        </div>

        {/* Center Section - Navigation Links */}

        <div className="flex flex-col gap-4 md:gap-6">
          <h4 className="text-white text-xl font-medium uppercase font-inter">
            Explore
          </h4>
          <ul className="text-white text-base font-normal font-dm-sans leading-7 space-y-3">
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>Team Members</li>
           
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <h4 className="text-white text-xl font-medium uppercase font-inter">
            Links
          </h4>
          <ul className="text-white text-base font-normal font-dm-sans leading-7 space-y-3">
           
            <li>
              <Link to="/recruitment-process">How It Works</Link>
            </li>
            <li>My Cart</li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
           
          </ul>
        </div>

        {/* Right Section - Contact Information */}
        <div className="flex flex-col gap-4 md:gap-6 items-start ">
          <h4 className="text-white text-xl font-medium uppercase font-inter">
            Contact Us
          </h4>
          <div className="text-white font-helvetica space-y-4">
            <p className="text-base flex gap-x-2">
              {" "}
              <img src="/images/location.svg" alt="" />
              {config.address ? config.address : "    Samakhusi-29, Kathmandu"}
            </p>
            <p className="text-base flex gap-x-2">
              {" "}
              <img src="/images/mail.svg" alt="" />
              {config.emails ? config.emails[0] : " info@alnooroverseas.com"}
            </p>
            <p className="text-base flex gap-x-2">
              {" "}
              <img src="/images/phone.svg" alt="" />
              {config.phone_numbers ? config.phone_numbers[0] : "9806605866"}
            </p>
          </div>

          {/* Google Map */}

          {config?.google_maps_link && (
            <iframe
              src={config.google_maps_link}
              title="Google Map"
              className="w-full h-32 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      </div>

      {/* Footer Divider and Copyright */}
      <div className="border-t border-gray-300/90 mt-8" />
      <div className="h-20 gap-1  justify-center items-center flex text-center text-white text-sm font-normal font-sans">
        <img src="/images/copyright.svg" alt="" />{" "}
        <p>Copyright.2022.All.Rights.Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
