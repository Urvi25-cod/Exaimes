import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo22 from "../image/logo22.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isDropdownOpen) setIsDropdownOpen(false);
  };

  const handleCategoryClick = (path) => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    navigate(path);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full relative">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs md:text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center text-center">
        <div>GST Number: 25APAPM1234Z1Z4</div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex items-center space-x-1">
            <span role="img" aria-label="phone">
              📞
            </span>
            <span>+91 93138 84963</span>
          </div>
          <div className="flex items-center space-x-1 mt-1 md:mt-0">
            <span role="img" aria-label="email">
              ✉️
            </span>
            <span>hetals5297@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md w-full">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={'/'}><img src={logo22} alt="Logo" className="h-12 w-auto" /></Link>
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Navigation Links */}
          <ul
            className={`${isMenuOpen ? "block" : "hidden"
              } md:flex md:space-x-6 font-medium absolute md:relative top-full left-0 bg-white md:bg-transparent shadow-md md:shadow-none w-full md:w-auto h-screen md:h-auto z-50 transition-all duration-300 ease-in-out transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
              } md:translate-y-0`}
          >
            <li className="hover:text-blue-500 p-4 md:p-0">
              <a href="/" className="pb-1">
                Home
              </a>
            </li>

            {/* Products Dropdown Menu */}
            <li
              className="hover:text-blue-500 relative cursor-pointer flex items-center p-4 md:p-0"
              onClick={toggleDropdown}
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                  }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>

              {/* Products Dropdown List */}
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 bg-white shadow-md mt-2 rounded-md text-sm z-10 w-[200px]">
                  <li
                    onClick={() => handleCategoryClick("/DyesColors")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Dyes & Pigments
                  </li>
                  <li
                    onClick={() => handleCategoryClick("/Food")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Food Ingredients
                  </li>
                  <li
                    onClick={() => handleCategoryClick("/Chemicals")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Essential Oil & Flavours
                  </li>
                  <li
                    onClick={() => handleCategoryClick("/Special")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Miscellaneous Products
                  </li>
                </ul>
              )}

            </li>

            <li className="hover:text-blue-500 p-4 md:p-0">
              <a href="/About">About Us</a>
            </li>

            <li className="hover:text-blue-500 p-4 md:p-0">
              <a href="/ContactUS">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
