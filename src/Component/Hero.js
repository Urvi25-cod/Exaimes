import React from 'react';
import pac1 from "../image/pac1.webp";

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${pac1})` }}> {/* Replace 'your-image.jpg' */}
            <div className="absolute bg-[#045CA6B2]  bg-opacity-[-0]"></div> {/* Dark blue overlay */}

            <div className="container mx-auto text-center relative z-10">
                {/* Navigation Links */}
                <div className="absolute top-4 right-4 flex items-center space-x-6">
                    <a href="#" className="text-white hover:text-gray-200">Tracking</a>
                    <a href="#" className="text-white hover:text-gray-200">Feedback</a>
                    <a href="#" className="text-white hover:text-gray-200">Request quote</a>
                </div>

                {/* Main Text */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                    END-TO-END
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-8">
                    PROJECT LOGISTIC
                </h2>

                {/* Input Field */}
                <div className="relative max-w-md mx-auto">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
                        <svg className="w-5 h-5 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="block w-full p-4 pl-10 text-sm text-white bg-blue-700 border border-blue-500 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter B/L Container or Booking Number"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
