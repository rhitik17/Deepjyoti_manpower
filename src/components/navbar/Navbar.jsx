import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Contactbar from "./Contactbar";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path ? "text-primary-purple" : "text-primary-web";

  return (
    <>
      <Contactbar />

      {/* Navbar */}
      <section
        className={`flex justify-between items-center px-5 lg:px-20 py-2 shadow sticky top-0 left-0 right-0 z-10 ${
          isScrolled ? "bg-white" : "bg-transparent"
        } transition-all ease-in-out duration-300`}
      >
        {/* Logo */}
        <div className="w-8/12 md:w-4/12 lg:w-3/12">
          <img src="/images/deepjyoti_logo.png" alt="Logo" className="w-full" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-x-4 lg:gap-x-6 font-semibold font-inter relative">
          <li>
            <Link to={"/"} className={isActive("/")}>
              Home
            </Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link to={"/about-us"} className={isActive("/about-us")}>
              About Us
            </Link>
            {isDropdownOpen && (
              <ul className="absolute left-0 bg-white shadow-lg rounded-md p-2 w-48">
                <li>
                  <Link
                    to={"/about-us/company-profile"}
                    className="block px-4 py-2 text-neutral-blue hover:text-primary-purple"
                  >
                    Company Profile
                  </Link>

                  <li>
                  <Link
                    to={"/about-us/company-profile"}
                    className="block px-4 py-2 text-neutral-blue hover:text-primary-purple"
                  >
                    Company Profile
                  </Link>
                </li>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to={"/jobs"} className={isActive("/jobs")}>
              Job portal
            </Link>
          </li>
          <li>
            <Link to={"/services"} className={isActive("/services")}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className={isActive("/contact-us")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="flex items-center gap-x-4">
          <button
            className="w-10 h-10 bg-primary-web text-neutral-white rounded justify-center items-center inline-flex md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </section>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className=" md:hidden sticky top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col items-start p-5 gap-y-4 text-neutral-blue font-semibold font-inter">
            <li>
              <Link
                to={"/"}
                onClick={() => setIsMenuOpen(false)}
                className={isActive("/")}
              >
                Home
              </Link>
            </li>
            <li className="w-full pr-10">
              <button
                onClick={() =>
                  setIsMobileDropdownOpen(!isMobileDropdownOpen)
                }
                className=" flex gap-x-4 items-center justify-between w-full text-left"
              >
                About Us
                {isMobileDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isMobileDropdownOpen && (
                <ul className="pl-4 mt-2 ">
                  <li>
                    <Link
                      to={"/about-us"}
                      onClick={() => setIsMenuOpen(false)}
                      className={isActive("/about-us")}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/about-us/company-profile"}
                      onClick={() => setIsMenuOpen(false)}
                      className={isActive("/about-us/company-profile")}
                    >
                      Company Profile
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to={"/jobs"}
                onClick={() => setIsMenuOpen(false)}
                className={isActive("/jobs")}
              >
                Job portal
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                onClick={() => setIsMenuOpen(false)}
                className={isActive("/services")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={() => setIsMenuOpen(false)}
                className={isActive("/contact-us")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
