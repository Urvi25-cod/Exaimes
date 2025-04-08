import React from "react";
import caramel from "../image/caramel.png"

const Caramel = () => {
  return (
    <>
      <div className="mb-2 relative">
        {/* Image */}
        <img
          src={caramel}
          alt="Caramel"
          className="float-right w-1/3 justify-end mb-4"
        />

        {/* Main Text */}
        <p className="text-gray-700 mb-6">
          Caramel colors are among the most widely used food ingredients, which
          work as an emulsifying agent as well as a colorant. They are one of
          the most versatile and stable colors. The unique properties of this
          color make it a preferred choice in many of today's food products.
          Our years of experience in this industry has made us capable to guide
          our clients in selecting the correct caramel color for their
          formulation.
        </p>

        {/* Color Range */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            &gt;&gt; Color Range
          </h2>
          <p className="text-gray-700">
            In the global market, we are known for our superior quality caramel
            color that gives comprehensive range of end colors to ones foods.
            The color which we provide range from light yellow to reddish brown
            and to the darkest brown. Though we provide these colors, but the
            result always depends on the usage level of the caramel color.
          </p>
        </div>

        {/* Storage */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            &gt;&gt; Storage
          </h2>
          <p className="text-gray-700">
            One of the most important features of the caramel color is that it
            is easy to handle and store because of its inherent chemical
            properties. The chemical composition of the caramel color is such
            that it retains its microbiological stability for longer periods
            provided it is stored in proper packings.
          </p>
        </div>

        {/* Cost Effectiveness */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            &gt;&gt; Cost Effectiveness
          </h2>
          <p className="text-gray-700">
            Being the most versatile food ingredients and colorants, caramel
            colors are considered to be the most economical alternatives as
            compared to almost any other natural or artificial color and
            additives for the food & beverages industry. Because of its low
            application levels, it is cost benefit also.
          </p>
        </div>

        {/* Our Caramel Product Range */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            &gt;&gt; Our Caramel Product Range
          </h2>
          <ul className="list-none pl-4 text-gray-700">
            <li>(1) Liquid Burnt Sugar</li>
            <li>(2) Plain Caramel / Caramel Type - 1/ Caustic Caramel / E150a</li>
            <li>(3) Caramel Type - II / Sulphite Caramel / E150b</li>
            <li>(4) Caramel Type - III / Ammonia Caramel / E150c</li>
            <li>(5) Caramel Type - IV / Ammonia Sulphite Caramel / E150d</li>
            <li>(6) Caramel Type - IV Double Strength / E150d - DS</li>
          </ul>
        </div>

        {/* Burnt Sugar Syrup */}
        <br />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Burnt Sugar Syrup:
        </h2>
        <p className="text-gray-700">
          Burnt sugar is a light to dark brown liquid or powder obtained from
          the controlled heating of sugars used primarily for flavoring and/or
          sweetening with incidental colour. Consumers in many regions continue
          to demand natural foods. In response, food and beverage manufacturers
          are formulating with simple, clean label options - including "Burnt
          Sugar" and "Colour: Plain Caramel."
        </p>
        <p className="text-gray-700">
          Applications include baked goods, breakfast cereals, dessert toppings,
          sauces, seasonings, coffee drinks, confectionery products, and pet
          foods.
        </p>

        {/* Caramel Colour Type */}
        <br />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Caramel Colour Type - I/ Plain Caramel Colour :
        </h2>
        <p className="text-gray-700 mb-4">Class I (or Plain) Caramel Colour has a few different benefits:</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>No sulfites</li>
          <li>No ammonium compounds</li>
          <li>Not stable pH (&lt; 3.0)</li>
          <li>Colloidal charge: slightly negative</li>
          <li>Uses: high proof alcohol (&lt; 70 %)</li>
        </ul>
      </div>
    </>
  );
};

export default Caramel;
