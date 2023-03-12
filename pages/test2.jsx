import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const data = [
  { id: 1, name: "John", age: 25, birthdate: new Date("1996-01-01") },
  { id: 2, name: "Jane", age: 30, birthdate: new Date("1991-05-15") },
  { id: 3, name: "Bob", age: 45, birthdate: new Date("1976-08-20") },
  { id: 4, name: "Alice", age: 22, birthdate: new Date("1999-04-03") },
];

const Table = () => {
  const [selectedFilter, setSelectedFilter] = useState("name");
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
    // const [fromDateValue, setFromDateValue] = useState({
    //   startDate: null,
    //   endDate: null,
    // });
    // const handleFromDateValueChange = (newFromDateValue) => {
    //   setFromDateValue(newFromDateValue);
    // };
    // const [toDateValue, setToDateValue] = useState({
    //   startDate: null,
    //   endDate: null,
    // });
    // const handleToDateValueChange = (newToDateValue) => {
    //   setToDateValue(newToDateValue);
    // };
    let filteredData = data;

    if (searchPhrase !== "") {
      filteredData = filteredData.filter((item) =>
        item[selectedFilter]
          .toString()
          .toLowerCase()
          .includes(searchPhrase.toLowerCase())
      );
    }

    if (selectedFilter === "birthdate" && startDate && endDate) {
      filteredData = filteredData.filter((item) => {
        const birthdate = new Date(item.birthdate);
        return startDate <= birthdate && birthdate <= endDate;
      });
    }

    return filteredData;
  };

  const filteredData = filterData(data);

  return (
    <div>
      <div className="mb-4">
        <label className="mr-2">Filter by:</label>
        <select value={selectedFilter} onChange={handleFilterChange}>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="birthdate">Birthdate</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="mr-2">Search:</label>
        <input type="text" value={searchPhrase} onChange={handleSearchChange} />
      </div>
      {selectedFilter === "birthdate" && (
        <div className="mb-4">
          <label className="mr-2">Start Date:</label>
          <Datepicker
            selected={startDate}
            onChange={handleStartDateChange}
            useRange={false}
            asSingle={true}
            value={startDate}
            inputClassName="input input-bordered "
          />
          <label className="mx-2">End Date:</label>
          <Datepicker
            selected={endDate}
            onChange={handleEndDateChange}
            useRange={false}
            asSingle={true}
            value={endDate}
            inputClassName="input input-bordered "
          />
        </div>
      )}
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 w-1/2">Name</th>
            <th className="px-4 py-2 w-1/4">Age</th>
            <th className="px-4 py-2 w-1/4">Birth Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.age}</td>
              <td className="px-4 py-2">
                {item.birthdate.toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
