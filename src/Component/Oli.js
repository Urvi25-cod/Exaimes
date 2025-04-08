
import React, { useState } from "react";
// import back3 from "../image/back3.jpg";
// import img1 from "../image/img1.svg"; // This will be the image on the left
import oo1 from "../image/oo1.jpg";
import oo2 from "../image/oo2.jpg"; // Replace with actual image
import oo3 from "../image/oo3.jpg"; // Replace with actual image
import oo4 from "../image/oo4.jpg"; // Replace with actual image
import oo5 from "../image/oo5.jpg"; // Replace with actual image

const Oli = () => {
  const [selectedCategory, setSelectedCategory] = useState("Essential Oils");

  
  const categories = [
    { name: "Essential Oils", image: oo2 },
    { name: "Carrier Oils", image:oo3  },
    { name: "Massage Oils", image: oo4 },
    { name: "Fragrance Oils", image: oo5 },
  ];

  const sections = {
    "Essential Oils": {
      title: "Essential Oils",
      description1: "Lavender Essential Oil",
      description2: "Tea Tree Essential Oil",
      description3: "Rosemary Essential Oil",
      description4: "Peppermint Essential Oil",
    },
    "Carrier Oils": {
      title: "Carrier Oils",
      description1: "Sweet Almond Oil",
      description2: "Argan Oil",
      description3: "Golden Jojoba Oil",
      description4: "Virgin Coconut Oil",
    },
    "Massage Oils": {
      title: "Massage Oils",
      description1: "Sweet Almond Oil",
      description2: "Argan Oil",
      description3: "Golden Jojoba Oil",
      description4: "Virgin Coconut Oil",
    },
    "Fragrance Oils": {
      title: "Fragrance Oils",
      description1: "Royal Rose Fragrance Oil",
      description2: "Lavender Fragrance Oil",
      description3: "Jasmine Fragrance Oil",
      description4: "Sandalwood Fragrance Oil",
    },
  };

  const currentSection = sections[selectedCategory];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <div
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: `url(${back3})` }}
      >
        <h1 className="text-white text-4xl font-bold">
          CHEMICALS & ADDITIVES
        </h1>
      </div> */}

      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Image */}
          <div className="lg:w-1/2 rounded-lg">
            <img
              src={oo1} // Use the imported image
              alt="Oils"
              className="w-50 h-50 object-cover"
            />
          </div>

          {/* Right Section - Product Range */}
          <div className="lg:w-1/2 p-6">
          <div className=""></div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              OUR PRODUCT RANGE
            </h2>
            <p className="text-gray-700 mb-6">
              We offer 100+ Essential Oils, 50+ Carrier Oils, and 150+
              Fragrance Oils so that you can choose the best suitable natural
              oil for yourself or for your business.
            </p>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="bg-gray-50 rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition duration-300"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className="flex items-center mb-2">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-12 h-12 rounded-full object-cover mr-3"
  
  />
                    <h3 className="text-lg font-semibold text-gray-800">
                      {category.name}
                    </h3>
                  </div>
                  <ul>
                    <li>
                      <span className="text-green-500">&lt;&lt;</span>{" "}
                      {sections[category.name].description1}
                    </li>
                    <li>
                      <span className="text-green-500">&lt;&lt;</span>{" "}
                      {sections[category.name].description2}
                    </li>
                    <li>
                      <span className="text-green-500">&lt;&lt;</span>{" "}
                      {sections[category.name].description3}
                    </li>
                    <li>
                      <span className="text-green-500">&lt;&lt;</span>{" "}
                      {sections[category.name].description4}
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            {/* Choose Product Button */}
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oli;

