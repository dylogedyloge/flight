import React, { useState } from "react";

const data = [
  {
    name: "John Doe",
    sex: "Male",
    passportNumber: "ABC123",
  },
  {
    name: "Jane Smith",
    sex: "Female",
    passportNumber: "XYZ456",
  },
  {
    name: "Bob Johnson",
    sex: "Male",
    passportNumber: "DEF789",
  },
];

const PassportCheck = () => {
  const [passportNumber, setPassportNumber] = useState("");
  const [matchedData, setMatchedData] = useState(null);
  const [showCheckButton, setShowCheckButton] = useState(true);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [error, setError] = useState("");

  const handleCheck = () => {
    if (passportNumber.length > 6 || !/^\d+$/.test(passportNumber)) {
      setError("Invalid passport number");
      return;
    }

    const matched = data.find((d) => d.passportNumber === passportNumber);
    if (matched) {
      setMatchedData(matched);
      setShowCheckButton(false);
      setShowSubmitButton(false);
      setError("");
    } else {
      setMatchedData(null);
      setShowCheckButton(false);
      setShowSubmitButton(true);
      setError("");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSexChange = (e) => {
    setSex(e.target.value);
  };

  const handleSubmit = () => {
    const newData = { passportNumber, name, sex };
    data.push(newData);
    setMatchedData(newData);
    setShowCheckButton(false);
    setShowSubmitButton(false);
    setError("");
  };

  return (
    <div>
      <label htmlFor="passport-number">Passport Number:</label>
      <input
        type="text"
        id="passport-number"
        value={passportNumber}
        onChange={(e) => setPassportNumber(e.target.value)}
      />
      {showCheckButton && <button onClick={handleCheck}>Check</button>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {!showCheckButton && matchedData && (
        <>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={matchedData.name} readOnly />
          </div>
          <div>
            <label htmlFor="sex">Sex:</label>
            <input type="text" id="sex" value={matchedData.sex} readOnly />
          </div>
        </>
      )}
      {!showCheckButton && !matchedData && showSubmitButton && (
        <>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="sex">Sex:</label>
            <input
              type="text"
              id="sex"
              value={sex}
              onChange={handleSexChange}
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
};

export default PassportCheck;
