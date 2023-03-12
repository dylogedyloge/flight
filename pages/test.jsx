import React, { useState } from "react";

const SearchableData = () => {
  const data = [
    {
      field1: "Apple",
      field2: "Red",
      field3: "A juicy fruit",
    },
    {
      field1: "Banana",
      field2: "Yellow",
      field3: "A sweet fruit",
    },
    {
      field1: "Orange",
      field2: "Orange",
      field3: "A citrus fruit",
    },
    {
      field1: "Grape",
      field2: "Purple",
      field3: "A small, sweet fruit",
    },
    {
      field1: "Pineapple",
      field2: "Brown",
      field3: "A tropical fruit with spiky skin",
    },
  ];

  // const [searchQuery, setSearchQuery] = useState("");
  const [searchField1, setSearchField1] = useState("");
  // const [searchField2, setSearchField2] = useState("");

  const filteredData = data.filter((item) => {
    return item.field1.toLowerCase().includes(searchField1.toLowerCase());
    //  &&
    // item.field2.toLowerCase().includes(searchField2.toLowerCase()) &&
    // item.field3.toLowerCase().includes(searchQuery.toLowerCase())
  });

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex flex-wrap gap-4">
        <div className="w-full md:w-1/2">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="searchField1"
          >
            Search Field 1:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="searchField1"
            value={searchField1}
            onChange={(e) => setSearchField1(e.target.value)}
          />
        </div>
        {/* <div className="w-full md:w-1/2">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="searchField2"
          >
            Search Field 2:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="searchField2"
            value={searchField2}
            onChange={(e) => setSearchField2(e.target.value)}
          />
        </div> */}
        {/* <div className="w-full">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="searchQuery"
          >
            Search Filed 3:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="searchQuery"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div> */}
      </div>
      <table className="table-auto h-56">
        <thead>
          <tr>
            <th className="px-4 py-2">Field 1</th>
            <th className="px-4 py-2">Field 2</th>
            <th className="px-4 py-2">Field 3</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.field1}</td>
              <td className="border px-4 py-2">{item.field2}</td>
              <td className="border px-4 py-2">{item.field3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchableData;
