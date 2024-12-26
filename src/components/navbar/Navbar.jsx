import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Contactbar from "./Contactbar";
import { LuSearch } from "react-icons/lu";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); 
  const navigate = useNavigate();

 // Access the config data from context


  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to check if the current path matches the link
  const isActive = (path) => location.pathname === path ? "text-primary-purple   " : "text-primary-web";




  return (
    <>
      <Contactbar/>

      {/* Navbar */}
      <section
        className={`flex justify-between items-center px-5 lg:px-20 py-4 shadow sticky top-0 left-0 right-0 z-10  ${
          isScrolled ? "bg-white" : "bg-transparent"
        } transition-all ease-in-out duration-300`}
      >
        {/* Logo */}
        <div className="w-8/12 md:w-4/12 lg:w-3/12">
          <img src="/images/deepjyoti_logo.png" alt="Logo" className="w-full " />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-x-4 lg:gap-x-6 font-semibold  font-inter">
          <li>
            <Link to={"/"} className={isActive("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about-us"} className={isActive("/about-us")}>
              About Us
            </Link>
          </li>
          <li>
            <Link to={"/jobs"} className={isActive("/jobs")}>
              Job portal
            </Link>
          </li>
          
          {/* <li>
            <Link to={"/we-provide"} className={isActive("/we-provide")}>
              We Provide
            </Link>
          </li> */}
          <li>
            <Link to={"/services"} className={isActive("/services")}>
              Services
            </Link>
          </li>
          {/* <li>
            <Link to={"/about-nepal"} className={isActive("/about-nepal")}>
              About Nepal
            </Link>
          </li> */}
          <li>
            <Link to="/contact-us" className={isActive("/contact-us")}>
              Contact
            </Link>
          </li>
        </ul>

        {/*  Hamburger Menu */}
        <div className="flex items-center gap-x-4">
          

          {/* Hamburger Menu Icon for Mobile */}
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
        <div className=" sticky top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className=" flex flex-col items-start p-5 gap-y-4 text-neutral-blue font-semibold font-inter">
            <li>
              <Link to={"/"} onClick={() => setIsMenuOpen(false)} className={isActive("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/jobs"} onClick={() => setIsMenuOpen(false)} className={isActive("/jobs")}>
                Job portal
              </Link>
            </li>
            <li>
              <Link to={"/about-us"} onClick={() => setIsMenuOpen(false)} className={isActive("/about-us")}>
                About Us
              </Link>
            </li>
         
            <li>
              <Link to={"/we-provide"} onClick={() => setIsMenuOpen(false)} className={isActive("/we-provide")}>
                We Provide
              </Link>
            </li>
            {/* <li>
              <Link to={"/advertisements"} onClick={() => setIsMenuOpen(false)} className={isActive("/advertisements")}>
                Advertisements
              </Link>
            </li> */}
            {/* <li>
              <Link to={"/about-nepal"} onClick={() => setIsMenuOpen(false)} className={isActive("/about-nepal")}>
                About Nepal
              </Link>
            </li> */}
            <li>
              <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className={isActive("/contact-us")}>
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
