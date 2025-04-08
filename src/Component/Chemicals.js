import React, { useState } from "react";
import lol from "../image/lol.png";

// Import fragrance images
import f1 from "../image/f1.webp";
import f2 from "../image/f2.webp";
import f3 from "../image/f3.webp";
import f4 from "../image/f4.webp";
import f5 from "../image/f5.webp";
import f6 from "../image/f6.webp";
import f7 from "../image/f7.webp";
import f8 from "../image/f8.webp";

import f10 from "../image/f10.webp";
import f11 from "../image/f11.webp";
import f13 from "../image/f13.webp";
import f14 from "../image/f14.webp";
import f15 from "../image/f15.webp";

import Oli from "./Oli";

// Fragrances data
const Fragrances = [
    { name: "Agarbatti (Incense Sticks)", src: f1 },
    { name: "Dhoop", src: f2 },
    { name: "Detergent Powder", src: f3 },
    { name: "Detergent Cake", src: f4 },
    { name: "Shampoo", src: f5 },
    { name: "Hair Oil ", src: f6 },
    { name: "Cream", src: f7 },
    { name: "Talcum", src: f8 },
    { name: "Toilet Soap", src: f10 },
    { name: "Hand Wash", src: f11 },
    { name: "Attar", src: f13 },
    { name: "Fine Fragrances", src: f14 },
    { name: "Room Aroma Oil", src: f15 },
];

// Flavour list data
const flavourList = [
    "Acai Berry", "Almond", "Almond Butter", "Amaretto", "Anise", "Apple",
  "Apple, Honeycrisp", "Apricot", "Banana", "Bacon", "Barrel Age",
  "Bavarian Cream", "Bellini", "Berry Cola", "Birch Beer", "Biscotti",
  "Black Licorice", "Black Cherry", "Black Currant", "Black Walnut",
  "Blackberry", "Blue Moon", "Blue Raspberry", "Blueberry", "Bitters",
    "Bourbon",
    "Bubble Gum",
    "Butter",
    "Butter Almond",
    "Butter Milk",
    "Butter Pecan",
    "Butter Rum",
    "Butter Toffee",
    "Butterscotch",
       " Cake Batter",
    "Candy Bar – Snickers",
    "Candy Apple",
    "Candy Corn",
    "Cannoli",
    "Cantaloupe",
    "Caramel",
    "Carmel Apple",
    "Caramel Cream",
    "Carrot Cake",
    "Champagne",
    "Cheesecake",
    "Cherry",
    "Cherry Blossom",
    "Cherry Cola",
    "Cherry Cream Spice",
    "Chocolate",
    "Chocolate Cake",
    "Chocolate Mint",
    "Churro",
    "Cinnamon",
    "Cinnamon Roll",
    "Coconut",
    "Coffee",
    "Cola",
    "Cookie Dough",
    "Cotton Candy",
    "Cranberry",
    "Cream Soda",
    "Crème Brulee",
    "Creme de Menthe",
    "Cucumber",
       " Dill Pickle",
       " Doughnut",
       " Elderberry",
       " Egg Nog",
       " Eucalyptus",
       " Flan",
       " Fenugreek",
       " Fruity Cereal",
       " Fruit Punch",
       " Fuzzy Navel",
       "German Chocolate Cake",
                "Ginger Ale",
                "Ginger Beer",
                "Ginger Lime",
                "Gingerbread",
                "Gingersnap",
               " Grand Mariner",
                "Graham Cracker",
                "Grape",
                "Grapefruit",
                "Grape Soda",
               " Hazelnut",
                "Honey",
                "Horchata",
                "Huckleberry",
                "Irish Cream",
                "Irish Whiskey",
                "Jalapeño",
                "Kettle Corn",
                "Key Lime",
                "Kiddy Cocktail",
                "King Cake  ",
                "Kiwi",
                "Kumquat",
                "Lemon",
                "Lemon Bar",
                "Lemon Custard",
                "Lemon Lime",
                "Lemon Meringue Pie",
                "Lemon Peel",
                "Lemon Zest",
                "Lemonade",
                "Lime",
                "Long Island Tea",
                "Macadamia Nut",
                "Malted Milk",
                "Mango",
                "Mango Orange Pineapple",
                "Mango Pineapple",
                "Maple",
                "Maple Praline",
                "Margarita",
                "Marshmallow",
                "Melon",
                "Melon Kiwi",
                "Meyer Lemon",
                "Mint",
                "Mixed Berry",
                "Mocha",
                "Mocha Irish Cream",
                "Mojito",
                "Moscow Mule",
                "Mulled Cider",
                "Mulled Wine",
                "Mulling Spices",
                "Nutmeg",
                "Orange",
                "Orange Brandy",
                "Orange Cream",
                "Orange Mandarin",
                "Orange Mango",
                "Orange Peel",
                "Orange Pineapple",
                "Orange Zest",
               " Pancake",
               " Papaya",
                "Passion Fruit",
               " Paw Paw",
                "Peach",
                "Peaches & Cream",
                "Peanut",
                "Pear",
              "Pecan",
              "  Pecan Roll",
              "  Peppermint",
              "  Pina Colada",
              "  Pineapple",
              "  Pink Lemonade",
              "  Pistachio",
              "  Plantation Punch",
              "  Plum",
              "  Pomegranate",
              "  Prickly Pear",
              "  Pumpkin",
              "  Pumpkin Pie",
                "Punch",
                "Quinine",
                "Raspberry",
                "Raspberry Ginger Ale",
                "Red, White and Blue Popsicle",
                "Red Velvet Cake",
                "Rock and Rye",
                "Rose Hips",
                "Root Beer",
                "Rum",
               " Sassafras",
                "Smoke",
               " Snickerdoodle Cookie",
                "Sour",
               " Spice",
               " Spearmint",
               " Sponge Cake & Cream – Twinkies",
               " Spruce",
                "Strawberry",
               " Strawberry Banana",
               " Strawberry – Pink Starburst",
                "Strawberry Kiwi",
              "  S’Mores",
                "Tangerine",
                "Tart Lemon",
                "Tequila",
                "Toasted Coconut",
                "Toffee",
                "Tonic",
                "Tropical Punch",
                "Tutti Frutti",
                "Vanilla",
                "Vanilla Cream",
                "Watermelon",
                "White Chocolate",
                "Whipped Cream",
                "Wild Cherry Cream",
                "Wintergreen",
                "Yerba Mate",
               "Yuzu",





    // ... (other flavours)
];

const Chemicals = () => {
    const [selectedCategory, setSelectedCategory] = useState("Flavours");

    const sections = {
        "Essential&Oli": {
            title: "Essential&Oli",
            description: "Essential and flavour oils description.",
            component: <Oli/>,
        },
        Flavours: {
            title: "Flavours",
            description:
                "Flavours enhance taste and aroma in food and beverages, providing unique sensory experiences.",
            flavours: flavourList,
        },
        Fragrances: {
            title: "Fragrances",
            description:
                "The fragrance of a product often defines its uniqueness.",
            fragrances: Fragrances,
        },
    };

    const currentSection = sections[selectedCategory];

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header Section */}
            <div
                className="bg-cover bg-center h-64 flex items-center justify-center"
                style={{ backgroundImage: `url(${lol})` }}
            >
                <h1 className="text-white text-4xl font-bold">
                    ESSENTIAL OIL & FLAVOURS
                </h1>
            </div>

            {/* Main Content */}
            <div className="container mx-auto py-8 px-4">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Sidebar - Categories */}
                    <div className="w-full md:w-1/4 bg-white shadow-md rounded-md p-4">
                        <h3 className="text-lg font-bold mb-4 text-center">
                            Categories
                        </h3>
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

                    {/* Right Content Section */}
                    <div className="w-full md:w-3/4 max-h-[700px] overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-pink-300 ">
                        <h2 className="text-2xl font-bold mb-4">
                            {currentSection.title}
                        </h2>
                        <p className="mb-4">{currentSection.description}</p>

                        {/* Conditional Rendering for Sections */}
                        {selectedCategory === "Essential&Oli" ? (
                            currentSection.component
                        ) : selectedCategory === "Fragrances" ? (
                            // Render Fragrances Section with Images
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {currentSection.fragrances.map((fragrance, index) => (
                                    <div
                                        key={index}
                                        className="rounded-md shadow-md overflow-hidden"
                                    >
                                        <img
                                            src={fragrance.src}
                                            alt={fragrance.name}
                                            className="w-full h-40 object-cover"
                                        />
                                        <p className="text-center text-gray-700 font-semibold mt-2">
                                            {fragrance.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Render Flavours Section as a List
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {currentSection.flavours.map((flavour, index) => (
                                    <div
                                        key={index}
                                        className="rounded-md shadow-md p-4 flex items-center justify-center h-20 bg-gray-300"
                                    >
                                        <p className="text-center text-gray-700 font-semibold">
                                            {flavour}
                                        </p>
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

export default Chemicals;
