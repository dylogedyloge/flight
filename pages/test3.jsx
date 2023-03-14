import React, { useState } from "react";

const flightsData = [
  {
    id: 1,
    origin: "New York",
    destination: "Los Angeles",
    price: 250,
    date: "2022-04-15",
  },
  {
    id: 2,
    origin: "Chicago",
    destination: "San Francisco",
    price: 350,
    date: "2022-05-01",
  },
  {
    id: 3,
    origin: "Boston",
    destination: "Miami",
    price: 200,
    date: "2022-06-10",
  },
  {
    id: 4,
    origin: "Seattle",
    destination: "Denver",
    price: 150,
    date: "2022-07-22",
  },
];

const FlightList = () => {
  const [sortBy, setSortBy] = useState("price");

  const sortFlights = (a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  };

  const sortedFlights = [...flightsData].sort(sortFlights);

  return (
    <div>
      <label
        htmlFor="sort-select"
        className="block mb-2 font-medium text-gray-700"
      >
        Sort By:
      </label>
      <select
        id="sort-select"
        className="block w-full px-4 py-2 mb-4 text-gray-700 bg-white border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="price">Price</option>
        <option value="date">Date</option>
      </select>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-3 font-medium text-left text-gray-600 uppercase bg-gray-100 border border-gray-300">
              Origin
            </th>
            <th className="p-3 font-medium text-left text-gray-600 uppercase bg-gray-100 border border-gray-300">
              Destination
            </th>
            <th className="p-3 font-medium text-left text-gray-600 uppercase bg-gray-100 border border-gray-300">
              Price
            </th>
            <th className="p-3 font-medium text-left text-gray-600 uppercase bg-gray-100 border border-gray-300">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedFlights.map((flight) => (
            <tr key={flight.id} className="border-t">
              <td className="p-3 text-left text-gray-800 border border-gray-300">
                {flight.origin}
              </td>
              <td className="p-3 text-left text-gray-800 border border-gray-300">
                {flight.destination}
              </td>
              <td className="p-3 text-left text-gray-800 border border-gray-300">{`$${flight.price}`}</td>
              <td className="p-3 text-left text-gray-800 border border-gray-300">
                {flight.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightList;
