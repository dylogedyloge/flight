import React, { useState } from "react";

function FlightBooking() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <div>
      <label>
        Adults:
        <input
          type="number"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
        />
      </label>
      <label>
        Children:
        <input
          type="number"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
        />
      </label>
      <label>
        Infants:
        <input
          type="number"
          value={infants}
          onChange={(e) => setInfants(e.target.value)}
        />
      </label>
    </div>
  );
}

export default FlightBooking;
