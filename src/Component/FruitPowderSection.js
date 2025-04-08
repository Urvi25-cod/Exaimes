import React from 'react';
import banana from "../image/banana.jpg";
import mango from "../image/mango.jpg";
import orange from "../image/orange.jpg";
import pineapple from "../image/pineapple.jpg";
import strawberry from "../image/strawberry.jpg";
import lemon  from "../image/lemon.jpg";
import tamarind from "../image/tamarind.jpg";
import AloeveraExtract from "../image/AloeveraExtract.jpg";
import Acerola from "../image/Acerola.jpg";
import AmlaFruit from "../image/AmlaFruit.jpg";
import AppleFruit from "../image/AppleFruit.jpg";
import ApricotFruit from "../image/ApricotFruit.jpg";
import BlackberryPowder from "../image/BlackberryPowder.jpg";
import BlackCurrant from "../image/BlackCurrant.png";
import BlueberryPowder from "../image/BlueberryPowder.jpg";
import CoconutWater from "../image/CoconutWater.jpg";
import CranberryPowder from "../image/CranberryPowder.jpg";
import CustardApple from "../image/CustardApple.jpg";
import DateFruit from "../image/DateFruit.jpg";
import FigFruit from "../image/FigFruit.jpg";
import GrapFruit from "../image/GrapFruit.jpg";
import GreenBanana from "../image/GreenBanana.jpg";
import GuavaFruit from "../image/GuavaFruit.jpg";
import LimeFruit from "../image/LimeFruit.jpg";
import LitchiFruit from "../image/LitchiFruit.jpg";
import  PapayaFruit from "../image/PapayaFruit.jpg";
import PineappleFruit from "../image/PineappleFruit.jpg";
import PomegranateFruit from "../image/PomegranateFruit.jpg";
import RaspberryFruit from "../image/RaspberryFruit.png";
import TartCherry from "../image/TartCherry.jpg";
import SweetCherry from "../image/SweetCherry.jpg";
import TamarindFruit from "../image/TamarindFruit.jpg";
import WatermelonFruit from "../image/WatermelonFruit.jpg";
// import SweetCherry from "../image/SweetCherry.jpg";




const FruitPowderSection = () => {
  
    const fruitData = [
        { name: 'Banana Powder', imageSrc:banana , bgColor: 'bg-yellow-200' },
        { name: 'Mango Powder', imageSrc:mango , bgColor: 'bg-orange-200' },
        { name: 'Orange Powder', imageSrc: orange, bgColor: 'bg-yellow-300' },
        { name: 'Pineapple Powder', imageSrc: pineapple, bgColor: 'bg-yellow-200' },
        { name: 'Strawberry  Powder', imageSrc: strawberry, bgColor: 'bg-yellow-300' },
        { name: 'Lemon Juice Powder', imageSrc:lemon , bgColor: 'bg-amber-200' },
        { name: 'Acerola Juice Powder', imageSrc:Acerola , bgColor: 'bg-amber-200' },
        { name: 'Aloevera Juice Extract', imageSrc:AloeveraExtract, bgColor: 'bg-amber-200' },
        { name: 'Amla Juice Powder', imageSrc:AmlaFruit , bgColor: 'bg-amber-200' },
        { name: 'Apple Juice Powder', imageSrc:AppleFruit , bgColor: 'bg-amber-200' },
        { name: 'Apricot Juice Powder', imageSrc:ApricotFruit , bgColor: 'bg-amber-200' },
        { name: 'Black Currant Juice Powder', imageSrc:BlackCurrant , bgColor: 'bg-amber-200' },
        { name: 'Blackberry Juice Powder', imageSrc:BlackberryPowder , bgColor: 'bg-amber-200' },
        {name:'Blueberry Juice Powder',imageSrc:BlueberryPowder , bgColor: 'bg-amber-200'},
        {name:'Coconut Water Powder',imageSrc:CoconutWater, bgColor: 'bg-amber-200'},
        {name:'Cranberry Juice Powder',imageSrc:CranberryPowder , bgColor: 'bg-amber-200'},
        {name:'Custard Apple Juice Powder',imageSrc:CustardApple , bgColor: 'bg-amber-200'},
        {name:'Date Juice Powder',imageSrc:DateFruit , bgColor: 'bg-amber-200'},
        {name:'Fig Juice Powder',imageSrc:FigFruit , bgColor: 'bg-amber-200'},
        {name:'Grape Juice Powder',imageSrc:GrapFruit , bgColor: 'bg-amber-200'},
        {name:'Green Juice Banana',imageSrc:GreenBanana , bgColor: 'bg-amber-200'},
        {name:'Guava Juice Powder',imageSrc:GuavaFruit, bgColor: 'bg-amber-200'},
        {name:'Lime Juice Powder',imageSrc:LimeFruit , bgColor: 'bg-amber-200'},
        {name:'Litchi Juice Powder',imageSrc:LitchiFruit , bgColor: 'bg-amber-200'},
        
        {name:'Papaya Juice Powder',imageSrc: PapayaFruit,bgColor: 'bg-amber-200'},
        {name:'Pineapple Juice Powder',imageSrc:PineappleFruit, bgColor: 'bg-amber-200'},
        {name:'Pomegranate Juice Powder',imageSrc:PomegranateFruit, bgColor: 'bg-amber-200'},
        {name:'Raspberry Juice Powder',imageSrc:RaspberryFruit , bgColor: 'bg-amber-200'},
        {name:'Sour/Tart Cherry Powder',imageSrc:TartCherry , bgColor: 'bg-amber-200'},
        {name:'Sweet Cherry Powder',imageSrc:SweetCherry , bgColor: 'bg-amber-200'},
        {name:'Tamarind Juice Powder',imageSrc:TamarindFruit , bgColor: 'bg-amber-200'},
        {name:'Watermelon Juice Powder',imageSrc:WatermelonFruit , bgColor: 'bg-amber-200'},

      

      ];
  return (
    <div className="container mx-auto py-8">
      {/* <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Fruit Powder</h2> */}
      {/* <button
            // onClick={handleManyMoreClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Many More
          </button> */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {fruitData.map((fruit, index) => (
            <div key={index} className={`rounded-lg shadow-md overflow-hidden flex flex-col items-center ${fruit.bgColor}`}>
              <img src={fruit.imageSrc} alt={fruit.name} className="w-full h-48 object-cover" />
              
              <div className="bg-lime-300 text-center py-2 px-4 font-semibold text-gray-800 w-full">
                {fruit.name}
              </div>
              
            </div>

        ))}
          
      </div>
    </div>
  );
};

export default FruitPowderSection;
