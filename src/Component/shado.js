import React from "react";

const Shado = () => {
  const data = [
    { shade: "bg-blue-400", name: "Basic Blue 140", ciNumber: "743516" },
    { shade: "bg-purple-600", name: "Basic Violet 1", ciNumber: "42535" },
    { shade: "bg-pink-500", name: "Basic Violet 10", ciNumber: "45170" },
    { shade: "bg-purple-900", name: "Basic Violet 14", ciNumber: "42555" },
    { shade: "bg-orange-500", name: "Basic Orange 2", ciNumber: "44045" },
    { shade: "bg-orange-600", name: "Basic Orange 22", ciNumber: "48040" },
    { shade: "bg-red-700", name: "Basic Red 18:1", ciNumber: "-" },
    { shade: "bg-yellow-400", name: "Basic Yellow 2", ciNumber: "42600" },
    { shade: "bg-brown-700", name: "Basic Brown 1", ciNumber: "21000" },
  ];

  return (
    // <div className="p-4">
    //   <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Select</th>
              <th className="px-4 py-2 text-left">Shade</th>
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">CI-Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-4 py-2">
                  <div className={`w-6 h-6 rounded ${item.shade}`}></div>
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.ciNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
    //   </div>
    // </div>
  );
};

export default Shado;
