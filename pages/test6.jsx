import React, { useState } from "react";

function PassengerInput() {
  const [passengerCount, setPassengerCount] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const handlePassengerChange = (event) => {
    const { name, value } = event.target;
    setPassengerCount({
      ...passengerCount,
      [name]: parseInt(value),
    });
  };

  const handlePassengerIncrement = (event) => {
    const { name } = event.target;
    setPassengerCount({
      ...passengerCount,
      [name]: passengerCount[name] + 1,
    });
  };

  const handlePassengerDecrement = (event) => {
    const { name } = event.target;
    setPassengerCount({
      ...passengerCount,
      [name]: passengerCount[name] > 0 ? passengerCount[name] - 1 : 0,
    });
  };

  return (
    <div>
      <label htmlFor="passengerInput">Passengers:</label>
      <input
        type="text"
        id="passengerInput"
        value={`${passengerCount.adults} Adults, ${passengerCount.children} Children, ${passengerCount.infants} Infants`}
        readOnly
      />
      <div>
        <button type="button" name="adults" onClick={handlePassengerIncrement}>
          +
        </button>
        <button type="button" name="adults" onClick={handlePassengerDecrement}>
          -
        </button>
        <label htmlFor="adultsInput">Adults:</label>
      </div>
      <div>
        <button
          type="button"
          name="children"
          onClick={handlePassengerIncrement}
        >
          +
        </button>
        <button
          type="button"
          name="children"
          onClick={handlePassengerDecrement}
        >
          -
        </button>
        <label htmlFor="childrenInput">Children:</label>
      </div>
      <div>
        <button type="button" name="infants" onClick={handlePassengerIncrement}>
          +
        </button>
        <button type="button" name="infants" onClick={handlePassengerDecrement}>
          -
        </button>
        <label htmlFor="infantsInput">Infants:</label>
      </div>
    </div>
  );
}
export default PassengerInput;
