import React, { useState } from "react";
import backs2 from "../image/backs2.jpeg";
import FruitPowderSection from "./FruitPowderSection";



import b1 from "../image/b1.jpg";
import b2 from "../image/b2.jpg";
import b3 from "../image/b3.jpg";
import b4 from "../image/b4.jpg";
import b5 from "../image/b5.jpg";
import b6 from "../image/b6.jpg";
import b7 from "../image/b7.jpg";
import b8 from "../image/b8.jpg";
import b9 from "../image/b9.jpg";
import b10 from "../image/b10.jpg";
import b11 from "../image/b11.jpg";
import b12 from "../image/b12.jpg";
import b13 from "../image/b13.jpg";
import b14 from "../image/b14.jpg";
import b15 from "../image/b15.jpg";
import b16 from "../image/b16.jpg";
import b17 from "../image/b17.jpg";
import b18 from "../image/b18.jpg";


import s1 from "../image/s1.jpg";
import s2 from "../image/s2.jpg";
import s3 from "../image/s3.jpg";
import s4 from "../image/s4.jpg";
import s5 from "../image/s5.jpg";
import s6 from "../image/s6.jpg";
import s7 from "../image/s7.jpg";
import s8 from "../image/s8.jpg";
import s9 from "../image/s9.jpg";
import s10 from "../image/s10.jpg";
import s11 from "../image/s11.jpg";
import s12 from "../image/s12.jpg";
import s13 from "../image/s13.jpg";
import s14 from "../image/s14.jpg";
import s15 from "../image/s15.jpg";
import s16 from "../image/s16.jpg";
import s17 from "../image/s17.jpg";
import s18 from "../image/s18.jpg";
import s19 from "../image/s19.jpg";
import s20 from "../image/s20.jpg";
import s21 from "../image/s21.jpg";
import s22 from "../image/s22.png";


const pulsesImages = [
    { name: "Chickpeas / Garbanzo Beans", src: b1 },
    { name: "Peas", src: b2 },
    { name: "Kidney beans", src: b3 },
    { name: "Soya bean", src: b4},
    { name: "Pigeon pea/Arhar/Tur", src: b5},
    { name: "Black-eyed beans / Cowpea", src: b6},
    { name: "Horse gram", src: b7},
    { name: "Puffed rice", src: b8},
    { name: "Masoor Dal / Red Lentil", src: b9},
    { name: "Green gram / Mung bean", src: b10},
    { name: "Black gram", src: b11},
    { name: "Chana Dal", src: b12},
    { name: "Beaten rice", src: b13},
    { name: "Field beans", src: b14},
    { name: "Urad Dal Split", src: b15},
    { name: "Turkish gram / Moth bean", src: b16},
    { name: "Whole Masoor", src: b17},
    { name: " Urad Dal Gota", src: b18},
];

const SpicesImages = [
    { name: "Turmeric", src: s1 },
    { name: "Ginger", src: s2 },
    { name: "Star Anise", src: s3 },
    { name: "Cinnamon", src: s4},
    { name: "Asafoetida", src: s5},
    { name: "Nutmeg", src: s6},
    { name: "Cumin", src: s7},
    { name: "Black Pepper", src: s8},
    { name: "Garlic", src: s9},
    { name: "Clove", src: s10},
    { name: "Mustard seeds", src: s11},
    { name: "Bay-leaf", src: s12},
    { name: "Chili-pepper", src: s13},
    { name: "Coriander", src: s14},
    { name: "Saffron", src: s15},
    { name: "Carom Seeds / Thyme", src: s16},
    { name: "Mace", src: s17},
    { name: "Poppy seed", src: s18},
    { name: "Green Cardamom", src: s19},
    { name: "Peppercorns", src: s20},
    { name: "Brown Cardamom", src: s21},
    { name: "Green chili pepper", src: s22}
];

const Food = () => {
    const [selectedCategory, setSelectedCategory] = useState("Spices");

    const sections = {
        "fruits & vegetable powder": {
            title: "fruits & vegetable powder",
            description: "",
            component: <FruitPowderSection/> // Store the component itself
        },
        Pulsesnuts: {
            title: "Pulses & nuts",
            description: "India today is a major exporter of various food and agricultural products. Among these, we have seen exponential growth in the pulses export from India in the past few years",
            images: pulsesImages
        },
        Spices: {
            title: "Spices",
            description: "Spices are one of the most important ingredients in Indian dishes. Indian Spices have been popular across the world for their unique flavor, aroma, and beautiful texture.",
            images: SpicesImages
        }
    };

    const currentSection = sections[selectedCategory];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${backs2})` }}>
                <h1 className="text-white text-4xl font-bold">FOOD INGREDIENTS</h1>
            </div>

            <div className="container mx-auto py-8 px-4 ">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Side - Categories */}
                    
                    <div className="w-full md:w-1/4 bg-white shadow-md rounded-md p-4 ">
                        <h3 className="text-lg font-bold mb-4 text-center">Categories</h3>
                        <ul className="space-y-3">
                            {Object.keys(sections).map((category) => (
                                <li
                                    key={category}
                                    className={`p-3 rounded-md cursor-pointer text-center font-medium ${
                                        selectedCategory === category
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-100 hover:bg-blue-100"
                                    }`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side - Product Grid */}
                    <div className="w-full md:w-3/4 max-h-[700px] overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">{currentSection.title}</h2>
                        <p className="mb-4">{currentSection.description}</p>

                        {/* Conditionally render based on category */}
                        {selectedCategory === "fruits & vegetable powder" ? (
                            currentSection.component // Render the component if the category matches
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {currentSection.images.map((product, index) => (
                                    // <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
                                    <div className="flex flex-col items-center justify-center">
                                        <img
                                            src={product.src}
                                            alt={product.name}
                                            className="w-full h-37 object-cover rounded-t-md"
                                        />
                                        <div className="p-3 w-full">
                                            <h3 className="text-sm font-semibold text-gray-700 text-center">{product.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;
