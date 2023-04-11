import { useState } from "react";
import { FormattedMessage } from "react-intl";
import Datepicker from "react-tailwindcss-datepicker";

// dummy data
const data = [
  {
    name: "Amir",
    lastName: "Najafi",
    nationality: "Iran",
    sex: "Male",
    birthDate: "1982-01-26",
    passportExpiryDate: "1992-01-26",

    passportNumber: "123456",
  },
  {
    name: "Ali",
    lastName: "Ayati",
    nationality: "Oman",
    sex: "Female",
    birthDate: "1988-08-09",
    passportExpiryDate: "1999-01-26",
    passportNumber: "111111",
  },
  {
    name: "Javad",
    lastName: "Blouri",
    nationality: "Iraq",
    sex: "Male",
    birthDate: "1990-09-09",
    passportExpiryDate: "2000-01-01",
    passportNumber: "222222",
  },
];

const PassengersInformationForm = ({ dir }) => {
  // search database for matching passport number
  const [matchedData, setMatchedData] = useState(null);
  // const [showCheckButton, setShowCheckButton] = useState(true);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [passportNumber, setPassportNumber] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [passportExpiryDate, setPassportExpiryDate] = useState("");
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
      // setShowCheckButton(false);
      setShowSubmitButton(false);
      setError("");
    } else {
      setMatchedData(null);
      // setShowCheckButton(false);
      setShowSubmitButton(true);
      setError("");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handlePassportExpiryDateChange = (e) => {
    setPassportExpiryDate(e.target.value);
  };

  const handleSexChange = (e) => {
    setSex(e.target.value);
  };

  const handleSubmit = () => {
    const newData = {
      passportNumber,
      name,
      lastName,
      nationality,
      birthDate,
      passportExpiryDate,
      sex,
    };
    data.push(newData);
    setMatchedData(newData);
    setShowCheckButton(false);
    setShowSubmitButton(false);
    setError("");
  };

  const [passportExpiryDateValue, setPassportExpiryDateValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handlePassportExpiryDateValueChange = (newPassportExpiryDateValue) => {
    console.log("passportExpiryDateValue:", passportExpiryDateValue);
    setPassportExpiryDateValue(newPassportExpiryDateValue);
  };

  const [birthDateValue, setBirthDateValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleBirthDateValueChange = (newBirthDateValue) => {
    console.log("birthDateValue:", birthDateValue);
    setBirthDateValue(newBirthDateValue);
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl p-8 " dir={dir}>
      <h2 className="card-title">Passengers Information</h2>
      {/* <form className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8"> */}
      <div className=" w-98  ">
        <label className="label">
          <span className="label-text font-bold">Passport Number</span>
        </label>
        <input
          type="text"
          placeholder="Passport Number"
          className="input input-bordered w-full mb-6 "
          value={passportNumber}
          onChange={(e) => setPassportNumber(e.target.value)}
        />
      </div>

      <button className="btn mb-6" onClick={handleCheck}>
        Check
      </button>

      {error && (
        <div className="alert alert-error shadow-lg my-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}

      {matchedData && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
                id="name"
                value={matchedData.name}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="lastName" className="label">
                <span className="label-text font-bold">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
                id="lastName"
                value={matchedData.lastName}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="nationality" className="label">
                <span className="label-text font-bold">Nationality</span>
              </label>
              <input
                type="text"
                placeholder="Nationality"
                className="input input-bordered w-full max-w-xs"
                id="nationality"
                value={matchedData.nationality}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="sex" className="label">
                <span className="label-text font-bold">Sex</span>
              </label>
              <input
                type="text"
                placeholder="Sex"
                className="input input-bordered w-full max-w-xs"
                id="sex"
                value={matchedData.sex}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="passportExpiryDate" className="label">
                <span className="label-text font-bold">
                  Passport Expiry Date
                </span>
              </label>
              <input
                type="text"
                placeholder="Passport Expiry Date"
                className="input input-bordered w-full max-w-xs"
                id="passportExpiryDate"
                value={matchedData.passportExpiryDate}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="birthDate" className="label">
                <span className="label-text font-bold">Birth Date</span>
              </label>
              <input
                type="text"
                placeholder="Birth Date"
                className="input input-bordered w-full max-w-xs"
                id="birthDate"
                value={matchedData.birthDate}
                readOnly
              />
            </div>
          </div>
          <button
            className="btn btn-warning col-span-2 mt-6"
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </>
      )}
      {!matchedData && showSubmitButton && (
        <div>
          <div className="alert alert-info shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>
                Your data doesn't exist our database, Please fill in this form!
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                id="name"
                className="input input-bordered w-full max-w-xs"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="label">
                <span className="label-text font-bold">Last Name</span>
              </label>
              <input
                type="text"
                id="lastName"
                className="input input-bordered w-full max-w-xs"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div>
              <label htmlFor="nationality" className="label">
                <span className="label-text font-bold">Nationality</span>
              </label>
              <input
                type="text"
                id="nationality"
                className="input input-bordered w-full max-w-xs"
                value={nationality}
                onChange={handleNationalityChange}
              />
            </div>
            <div>
              <label htmlFor="sex" className="label">
                <span className="label-text font-bold">Sex</span>
              </label>
              <input
                type="text"
                id="sex"
                className="input input-bordered w-full max-w-xs"
                value={sex}
                onChange={handleSexChange}
              />
            </div>

            <div>
              <label htmlFor="passportExpiryDate" className="label">
                <span className="label-text font-bold">
                  Passport Expiry Date
                </span>
              </label>
              <Datepicker
                useRange={false}
                asSingle={true}
                value={passportExpiryDateValue}
                onChange={handlePassportExpiryDateValueChange}
                inputClassName="input input-bordered rounded-none w-full max-w-xs "
              />
            </div>
            <div>
              <label htmlFor="birthDate" className="label">
                <span className="label-text font-bold">Birth Date</span>
              </label>
              <Datepicker
                useRange={false}
                asSingle={true}
                value={birthDateValue}
                onChange={handleBirthDateValueChange}
                inputClassName="input input-bordered rounded-none w-full max-w-xs "
              />
            </div>
          </div>
          <button className="btn btn-block mt-6" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default PassengersInformationForm;
