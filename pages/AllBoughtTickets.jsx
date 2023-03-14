import Image from "next/image";
import React, { useState } from "react";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { FcPrint } from "react-icons/fc";
import ReactPaginate from "react-paginate";
import Datepicker from "react-tailwindcss-datepicker";
import data from "../public/dummyData/passengerData";

const AllBoughtTickets = ({ dir }) => {
  const [selectedFilter, setSelectedFilter] = useState("date");
  const [searchPhrase, setSearchPhrase] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchPhrase(event.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const filterData = (data) => {
    let filteredData = data;

    if (searchPhrase !== "") {
      filteredData = filteredData.filter((item) =>
        item[selectedFilter]
          .toString()
          .toLowerCase()
          .includes(searchPhrase.toLowerCase())
      );
    }

    if (selectedFilter === "date" && startDate && endDate) {
      filteredData = filteredData.filter((item) => {
        const date = new Date(item.date);
        return startDate <= date && date <= endDate;
      });
    }

    return filteredData;
  };

  const filteredData = filterData(data);

  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 5;

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * PER_PAGE;
  const currentPageData = filteredData.slice(offset, offset + PER_PAGE);

  return (
    <div dir={dir}>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 m-14">
        <div className=" input-group grid grid-cols-2 col-span-2">
          <input
            type="text"
            placeholder="Type here..."
            className="input input-bordered w-full "
            value={searchPhrase}
            onChange={handleSearchChange}
          />
          <select
            className="select select-bordered w-full max-w-xs"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option disabled selected>
              Based on...
            </option>
            <option value="date">Date</option>
            <option value="reference_number">Reference Number</option>
            <option value="contract_number">Contract Number</option>
            <option value="name">Name</option>
            <option value="passport_number">Passport Number</option>
            <option value="national_id">National ID</option>
            <option value="airline">Airline</option>
            <option value="flight_number">Flight Number</option>
            <option value="destination_city">Destionation</option>
            <option value="origin_city">Origin</option>
          </select>
        </div>
        {selectedFilter === "date" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  w-full col-span-3 ">
            <div className="form-control w-full ">
              <Datepicker
                placeholder="Start Date"
                selected={startDate}
                onChange={handleStartDateChange}
                useRange={false}
                asSingle={true}
                value={startDate}
                inputClassName="input input-bordered "
              />
            </div>
            <div className="form-control w-full ">
              <Datepicker
                placeholder="End Date"
                selected={endDate}
                onChange={handleEndDateChange}
                useRange={false}
                asSingle={true}
                value={endDate}
                inputClassName="input input-bordered "
              />
            </div>
          </div>
        )}

        {/* <button className="btn btn-warning btn-block ">Search</button> */}
      </div>
      <div className="overflow-x-auto h-screen m-14 ">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="p-4 bg-base-300 ">Name</th>
              <th className="p-4 bg-base-300">Username</th>
              <th className="p-4 bg-base-300">Contract Number</th>
              <th className="p-4 bg-base-300">Registry Date</th>
              <th className="p-4 bg-base-300">Date</th>
              <th className="p-4 bg-base-300">Contract Price</th>
              <th className="p-4 bg-base-300">Contract Name</th>
              <th className="p-4 bg-base-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((item, index) => (
              <tr
                key={offset + index}
                onClick={() => handleRowClick(offset + index)}
                className="cursor-pointer"
              >
                <td className="p-4">
                  {item.name}&nbsp;{item.last_name}
                </td>
                <td className="p-4">{item.user_name}</td>
                <td className="p-4">{item.contract_number}</td>
                <td className="p-4">{item.registry_date}</td>
                <td className="p-4">{item.date}</td>
                <td className="p-4">{item.contract_price}</td>
                <td className="p-4">{item.contract_name}</td>
                <td className="p-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={<button className="btn btn-outline">Previous</button>}
          nextLabel={<button className="btn btn-outline">Next</button>}
          breakLabel={"..."}
          pageCount={Math.ceil(filteredData.length / PER_PAGE)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
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
                        <div className="stat-title">Airplane Model</div>
                        <div className="stat-value text-sm">
                          {data[selectedRow].airplane_model}
                        </div>
                      </div>

                      <div className="stat">
                        <div className="stat-title">Allowed Cargo</div>
                        <div className="stat-value text-sm">
                          {data[selectedRow].allowed_cargo}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid place-content-center h-full w-full">
                    <div className="stats stats-vertical shadow">
                      <div className="stat">
                        <div className="stat-title">Flight Number</div>
                        <div className="stat-value text-sm">
                          {data[selectedRow].flight_number}
                        </div>
                      </div>

                      <div className="stat">
                        <div className="stat-title">Flight Duration</div>
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
                      <td className="p-4">{data[selectedRow].age_range}</td>
                      <td className="p-4">{data[selectedRow].national_id}</td>
                      <td className="p-4">
                        {data[selectedRow].passport_number}
                      </td>
                      <td className="p-4">{data[selectedRow].ticket_number}</td>
                      <td className="p-4">
                        {data[selectedRow].reference_number}
                      </td>
                      <td className="p-4">
                        {data[selectedRow].contract_price}
                      </td>
                      <td className="p-4">{data[selectedRow].operation}</td>
                      <td className="p-4">
                        <FcPrint className="text-3xl cursor-pointer" />
                      </td>
                      <td className="p-4">{data[selectedRow].status}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBoughtTickets;
