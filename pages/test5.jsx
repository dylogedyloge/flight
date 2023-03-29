import Image from "next/image";
import React, { useState } from "react";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { FcPrint } from "react-icons/fc";
import ReactPaginate from "react-paginate";
import Datepicker from "react-tailwindcss-datepicker";
import data from "../public/dummyData/passengerData";

const Table = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const data = [
    { name: "John", age: 25, gender: "Male", location: "USA" },
    { name: "Jane", age: 30, gender: "Female", location: "Canada" },
    { name: "Mike", age: 35, gender: "Male", location: "Australia" },
    { name: "Emily", age: 28, gender: "Female", location: "France" },
  ];

  const handleRowClick = (index) => {
    if (selectedRow === index) {
      setSelectedRow(null);
    } else {
      setSelectedRow(index);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Gender</th>
            <th className="px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr
                className="cursor-pointer hover:bg-gray-200"
                onClick={() => handleRowClick(index)}
              >
                <td className="border px-4 py-2">{row.name}</td>
                <td className="border px-4 py-2">{row.age}</td>
                <td className="border px-4 py-2">{row.gender}</td>
                <td className="border px-4 py-2">{row.location}</td>
              </tr>
              {selectedRow === index && (
                <tr>
                  <td colSpan="4" className="border px-4 py-2">
                    {selectedRow !== null && (
                      <div>
                        <div className="card w-full bg-base-100 shadow-xl">
                          <div className="card-body">
                            <h2 className="card-title place-content-center">
                              Flight Details
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 ">
                              <div className=" h-full w-full p-10">
                                <div className="flex  justify-between">
                                  <div className="text-sm font-bold">
                                    {data[selectedRow].departure_time}
                                    {/* Departure Time: 11:35 PM */}
                                  </div>
                                  <div className="text-sm opacity-70">
                                    {data[selectedRow].departure_time}
                                  </div>
                                </div>

                                <div className="flex items-center ">
                                  <div className="my-10">
                                    <div className="flex items-baseline  ">
                                      <div className="font-bold">
                                        {data[selectedRow].origin_city}(
                                        {data[selectedRow].origin_airport})
                                      </div>
                                      <GiAirplaneDeparture className="text-4xl text-blue-600" />
                                    </div>

                                    <div class=" border-l-2 border-stone-500 border-dotted h-52 "></div>
                                    <div className="flex items-baseline ">
                                      <GiAirplaneArrival className="text-4xl text-red-600" />
                                      <div className="font-bold">
                                        {data[selectedRow].destination_city}(
                                        {data[selectedRow].destination_airport})
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <Image
                                      src={data[selectedRow].airline_logo}
                                      width="400"
                                      height="20"
                                      className="my-2 -mx-24 "
                                    />
                                  </div>
                                </div>
                                <div className="flex  justify-between">
                                  <div className="text-sm font-bold">
                                    {data[selectedRow].arrival_time}
                                  </div>
                                  <div className="text-sm opacity-70">
                                    {data[selectedRow].arrival_date}
                                  </div>
                                </div>
                              </div>
                              <div className="grid place-content-center  h-full w-full">
                                <div className="stats stats-vertical shadow">
                                  <div className="stat">
                                    <div className="stat-title">Airline</div>
                                    <div className="stat-value text-sm">
                                      {data[selectedRow].airline}
                                    </div>
                                  </div>

                                  <div className="stat">
                                    <div className="stat-title">
                                      Airplane Model
                                    </div>
                                    <div className="stat-value text-sm">
                                      {data[selectedRow].airplane_model}
                                    </div>
                                  </div>

                                  <div className="stat">
                                    <div className="stat-title">
                                      Allowed Cargo
                                    </div>
                                    <div className="stat-value text-sm">
                                      {data[selectedRow].allowed_cargo}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="grid place-content-center h-full w-full">
                                <div className="stats stats-vertical shadow">
                                  <div className="stat">
                                    <div className="stat-title">
                                      Flight Number
                                    </div>
                                    <div className="stat-value text-sm">
                                      {data[selectedRow].flight_number}
                                    </div>
                                  </div>

                                  <div className="stat">
                                    <div className="stat-title">
                                      Flight Duration
                                    </div>
                                    <div className="stat-value text-sm">
                                      {data[selectedRow].flight_duration}
                                    </div>
                                  </div>

                                  <div className="stat">
                                    <div className="stat-title">Rate Class</div>
                                    <div className="stat-value text-sm">
                                      {data[selectedRow].rate_class}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow-xl my-10">
                          <h2 className="card-title place-content-center">
                            Passenger Details
                          </h2>
                          <div className="card-body">
                            <table className="table w-full">
                              <thead>
                                <tr>
                                  <th className="p-4">Name</th>
                                  <th className="p-4">Age Range</th>
                                  <th className="p-4">National ID</th>
                                  <th className="p-4">Passport Number</th>
                                  <th className="p-4">Ticket Number</th>
                                  <th className="p-4">Reference Number</th>
                                  <th className="p-4">Price</th>
                                  <th className="p-4">Operation</th>
                                  <th className="p-4">Print</th>
                                  <th className="p-4">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="p-4">
                                    {data[selectedRow].name}&nbsp;
                                    {data[selectedRow].last_name}
                                  </td>
                                  <td className="p-4">
                                    {data[selectedRow].age_range}
                                  </td>
                                  <td className="p-4">
                                    {data[selectedRow].national_id}
                                  </td>
                                  <td className="p-4">
                                    {data[selectedRow].passport_number}
                                  </td>
                                  <td className="p-4">
                                    {data[selectedRow].ticket_number}
                                  </td>
                                  <td className="p-4">
                                    {data[selectedRow].reference_number}
                                  </td>
                                  <td className="p-4">
                                    {data[selectedRow].contract_price}
                                  </td>
                                  <td className="p-4">
                                    {data[selectedRow].operation}
                                  </td>
                                  <td className="p-4">
                                    <FcPrint className="text-3xl cursor-pointer" />
                                  </td>
                                  <td className="p-4">
                                    {data[selectedRow].status}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
