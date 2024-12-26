import React from "react";

import { configData as config } from "../../data/configData";

const Contactbar = () => {
  return (
    <section className="w-full bg-primary-web flex flex-col lg:flex-row justify-between items-center px-4 sm:px-10 lg:px-20 py-2">
      {/* Contact Info */}
      <ul className="flex flex-col sm:flex-row text-white text-sm sm:text-base gap-y-2 sm:gap-y-0 gap-x-3 sm:gap-x-5 font-geologica">
        <li className="flex gap-x-1 items-center">
          <img
            src="/images/phone.svg"
            alt="Phone"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          {config?.phone_numbers?.[0] || "+977-1-4383094"}
        </li>
        <li className="flex gap-x-1 items-center">
          <img
            src="/images/mail.svg"
            alt="Email"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          {config?.emails?.[0] || "info@alnooroverseas.com"}
        </li>
        <li className="flex gap-x-1 items-center">
          <img
            src="/images/location.svg"
            alt="Location"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          {config?.address || "Samakhusi, Kathmandu"}
        </li>
      </ul>

      {/* Social Icons */}

      {/* Social Icons */}
      <ul className="flex items-center gap-x-3 mt-3 lg:mt-0">
        <li>
          <a
            href={config.social_links?.facebook_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/social-icons/facebook.svg"
              alt="Facebook"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </a>
        </li>
        <li>
          <a
            href={config.social_links?.instagram_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/social-icons/instagram.svg"
              alt="Instagram"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </a>
        </li>
        <li>
          <a
            href={config.social_links?.twitter_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/social-icons/twitter.svg"
              alt="Twitter"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </a>
        </li>
        {/* Uncomment and modify this section if you want to add Google Plus */}
        {/* <li>
    <a
      href={config.social_links?.google_plus_link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/social-icons/google_plus.svg"
        alt="Google Plus"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    </a>
  </li> */}
      </ul>
    </section>
  );
};

export default Contactbar;
