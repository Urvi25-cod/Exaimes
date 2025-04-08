import React from "react";

const flavours = [
  "Acai Berry", "Almond", "Almond Butter", "Amaretto", "Anise", "Apple",
  "Apple, Honeycrisp", "Apricot", "Banana", "Bacon", "Barrel Age",
  "Bavarian Cream", "Bellini", "Berry Cola", "Birch Beer", "Biscotti",
  "Black Licorice", "Black Cherry", "Black Currant", "Black Walnut",
  "Blackberry", "Blue Moon", "Blue Raspberry", "Blueberry", "Bitters",
  // Add more flavors here...
];

const groupFlavoursByLetter = (flavourList) => {
  const grouped = {};
  flavourList.forEach((flavour) => {
    const firstLetter = flavour[0].toUpperCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push(flavour);
  });
  return grouped;
};

const FlavoursSection = () => {
  const groupedFlavours = groupFlavoursByLetter(flavours);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-center text-4xl font-bold mb-6">Flavours</h1>
      <p className="text-center text-gray-600 mb-8">
        We have a variety of flavorings and continue to create more daily. Looking for a specific flavor or combination? We can create any custom flavor.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.keys(groupedFlavours).map((letter) => (
          <div key={letter} className="space-y-2">
            <h2 className="text-lg font-bold text-gray-800">{letter}</h2>
            <ul className="space-y-1">
              {groupedFlavours[letter].map((flavour, index) => (
                <li key={index} className="text-gray-700">
                  {flavour}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavoursSection;
