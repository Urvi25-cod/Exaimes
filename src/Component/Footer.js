import React from "react";
import logo22 from "../image/logo22.png";
import {Link} from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
          <Link to={'/'}><img
              src={logo22} // Replace with your actual logo path
              alt="Logo"
              className="h-12 w-auto"
            /></Link>
            
          </div>
        </div>

        {/* Sitemap Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
          <ul className="space-y-2">
            <li>
            <Link to="/"  className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-blue-500">About Us</Link>
          </li>
          <li>  
            <Link to="/ContactUs" className="hover:text-blue-500">Contact Us</Link>
          </li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            <li>
              <a href="" className="hover:text-blue-500">Privacy Policy</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-500">Terms & Conditions</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-500">Shipping Policy</a>
            </li>
            <li>
              <a href="" className="hover:text-blue-500">Refund Policy</a>
            </li>
            <li></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <p className="text-gray-400">
            G–1/704, royal industries, Laskana– Kholvad Road, Kholvad, Surat–394190.
          </p>
          <p className="mt-2 text-gray-400">
            Mobile: +91 9274429689
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            {/* Facebook Icon */}
            <a
              href=""
             
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition duration-200"
            >
              <FaFacebookF size={20} />
            </a>

            {/* YouTube Icon */}
            <a
              href=""
            
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition duration-200"
            >
              <FaYoutube size={20} />
            </a>

            {/* Instagram Icon */}
            <a
              href=""
              
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition duration-200"
            >   
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-gray-900 py-4 text-center text-sm text-gray-400">
        POLARIS EXIM © 2025
      </div>
    </footer>
  );
};

export default Footer;
