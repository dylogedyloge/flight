import React, { useState } from "react";

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="relative">
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
      />
      {selectedDate && (
        <button
          type="button"
          className="absolute top-0 right-0 px-2 py-1 rounded-md bg-red-500 text-white font-bold"
          onClick={() => setSelectedDate(null)}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default DatePicker;
