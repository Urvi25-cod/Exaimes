
import React, { useState } from "react";
import back2 from "../image/back2.jpg";


import pac1 from "../image/pac1.webp";
import pac2 from "../image/pac2.webp";
import pac3 from "../image/pac3.webp";
import pac4 from "../image/pac4.webp";
import pac5 from "../image/pac5.webp";
import pac6 from "../image/pac6.webp";
import pac7 from "../image/pac7.webp";
import pac8 from "../image/pac8.webp";
import pac9 from "../image/pac9.webp";
import pac10 from "../image/pac10.webp";
import pac11 from "../image/pac11.webp";
import pac12 from "../image/pac12.webp";
import pac13 from "../image/pac13.webp";
import pac14 from "../image/pac14.webp";
import pac15 from "../image/pac15.webp";
import pac16 from "../image/pac16.webp";
import pac17 from "../image/pac17.webp";
import pac18 from "../image/pac18.webp";
import pac19 from "../image/pac19.webp";
import pac20 from "../image/pac20.webp";
import pac22 from "../image/pac22.webp";
import pac23 from "../image/pac23.webp";
import pac24 from "../image/pac24.webp";
import pac25 from "../image/pac25.webp";


import bo1 from "../image/bo1.jpg";
import bo2 from "../image/bo2.jpg";
import bo3 from "../image/bo3.jpg";
import bo4 from "../image/bo4.jpg";
import bo5 from "../image/bo5.jpg";
import bo6 from "../image/bo6.jpg";
import bo7 from "../image/bo7.jpg";
import bo8 from "../image/bo8.jpg";


import demo from "../image/demo.png";

import ne1 from "../image/ne1.webp";
import ne2 from "../image/ne2.webp";
import ne3 from "../image/ne3.webp";
import ne4 from "../image/ne4.webp";
import ne5 from "../image/ne5.webp";
import ne6 from "../image/ne6.webp";

const pulsesImages = [
    { name: "Mailer Boxes", src: pac1 },
    { name: "Kraft Shipping Boxes", src:  pac2},
    { name: "White Shipping Boxes", src: pac3},
    { name: "Folding Cartons", src: pac4},
    { name: "Packing Tapes", src: pac5},
    { name: "Cardboard Sheets", src: pac6},
    { name: "Colour Shipping Boxes", src: pac7},
    { name: "Honeycomb Paper Bubble", src: pac8},
    { name: "Mailing Tubes", src: pac9},
    { name: "Carry Bags", src: pac10},
    { name: "Shredded Tissue", src: pac11},
    { name: "Bubble Roll Wrap", src: pac12},
    { name: "Courier Bags", src: pac13},
    { name: "PrePrinted Mailers", src: pac14},
    { name: "Coloured Mailer Boxes", src: pac15},
    { name: "Stretch Film", src: pac16},
    { name: "Corrugated Rolls", src: pac17},
    { name: "EPE Foam Rolls", src: pac18},
    { name: "Padded Envelopes", src: pac19},
    { name: "Bubble Bags", src: pac20},
    { name: "Foam Pouch", src: pac22},
    { name: "Kraft Paper Rolls", src: pac23},
    { name: "Rigid Mailers", src: pac24},
    { name: "Colour Papers", src: pac25},

];

const SpicesImages = [
    { name: "Flexo ink", src: demo}

];

const SpicesImages1 = [
    { name: "Gravure ink", src: demo}
];

const SpicesImages2 = [
    { name: "Digital printing ink", src: demo}
];
const SpicesImages3 = [
    { name: "Solvent based ink", src: demo}
];

const SpicesImages4 = [
    { name: "Offset ink", src: demo}
];

const Bottleimages =[
    {name:"Bottles", src:bo1},
    {name:"Cosmetic Packaging", src:bo2},
    {name:"Pharma Packaging", src:bo3},
    {name:"Food Packaging", src:bo4},
    {name:"Caps & Closures", src:bo5},
    {name:"Pumps & Sprayers", src:bo6},
    {name:"Home Care Packaging", src:bo7},
    {name:"Miniature Toiletries Bottles", src:bo8},
    
    
]
const Necklace =[

    {name:"",src:ne1},
    {name:"",src:ne2},
    {name:"",src:ne3},
    {name:"",src:ne4},
    {name:"",src:ne5},
    {name:"",src:ne6},
]
const Special = () => {
    const [selectedCategory, setSelectedCategory] = useState("Packagingbox");

    const sections = {
        "Imitation jwellery": {
            title: "Imitation jwellery",
            description: "",
            images: Necklace // Store the component itself
        },
        "Packagingbox": {
            title: "Packaging box",
            description: "India today is a major exporter of various food and agricultural products. Among these, we have seen exponential growth in the pulses export from India in the past few years",
            images: pulsesImages
        },
       "Bottle & caps":{
        title:"Bottle & caps",
        description : "",
        images: Bottleimages,
       },
        "Flexo ink": {
            title: "Flexo ink",
            // description: "Flexo ink",
            images: SpicesImages
        },
        "Gravure ink": {
            title: "Gravure ink",
            // description: "Gravure ink",
            images: SpicesImages1
        },
        "Digital printing ink": {
            title: " Digital printing ink",
            // description: "Digital printing ink",
            images: SpicesImages2
        },
        "Solvent based ink":{
            title: "Solvent based ink",
            // description: "Solvent based ink",
            images: SpicesImages3
        },
        "Offset ink":{
            title:"Offset ink",
            // description:"Offset ink",
            images:SpicesImages4
        }
    };

    const currentSection = sections[selectedCategory];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${back2})` }}>
                <h1 className="text-white text-4xl font-bold">MISCELLANEOUS PRODUCTS</h1>
            </div>

            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Side - Categories */}
                    <div className="w-full md:w-1/4 bg-white shadow-md rounded-md p-4">
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
                        {/* {selectedCategory === "Imitationjwellery" ? ( */}
                            {/* currentSection.images // Render the component if the category matches */}
                        {/* ) : ( */}
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
                                    // </div>
                                ))}
                            </div>
                          
                        {/* )} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Special;

