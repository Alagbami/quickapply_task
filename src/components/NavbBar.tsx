// import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import vector from "../assets/vector1.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="text-white px-6">
        <div className="container mx-auto flex justify-between items-center h-20">
          {/* Left Section: Logo */}
          <div className="flex items-center z-20">
            <img src={logo} alt="logo" className="w-48" />
          </div>

          {/* Middle Section: Navigation Links */}
          <div className="h-full w-60 hidden md:flex md:items-center md:justify-center object-fill relative">
            <ul className="z-10 flex items-center gap-5">
              <a href="#home" className="hover:text-yellow-400">
                Home
              </a>
              <a href="#pricing" className="hover:text-yellow-400">
                Pricing
              </a>
              <Link to="/" className="hover:text-yellow-400">
                FAQ
              </Link>
            </ul>

            <img src={vector} alt="" className="absolute h-20 -top-1" />
          </div>

          {/* Right Section: Start Free Trial Button */}
          <div className="hidden md:flex">
            <a
              href="#free-trial"
              className="bg-[#131D26] text-[#F6D155] px-6 py-4 rounded hover:bg-[#F6D155] hover:text-[#131D26]"
            >
              Start Free Trial &rarr;
            </a>
          </div>

          {/* Hamburger Menu */}
          <div
            onClick={toggleMenu}
            className="md:hidden relative h-6 w-6 flex justify-center items-center z-50"
          >
            <div className="w-3/4 h-0.5 bg-[#131D26] rounded-full absolute -translate-y-1.5" />
            <div className="w-3/4 h-0.5 bg-[#131D26] rounded-full absolute" />
            <div className="w-3/4 h-0.5 bg-[#131D26] rounded-full absolute translate-y-1.5" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isNavOpen && (
        <>
          <nav className="fixed top-0 left-0 w-full h-screen bg-white z-10">
            <ul className="flex flex-col items-center justify-center gap-8 pt-24">
              <a href="#home">Home</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </ul>
            <div className="w-full flex items-center justify-center pt-4">
              <a
                href="#free-trial"
                className="bg-[#131D26] text-[#F6D155] px-4 py-2 rounded hover:bg-[#F6D155] hover:text-[#131D26]"
              >
                Start Free Trial &rarr;
              </a>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default NavBar;
