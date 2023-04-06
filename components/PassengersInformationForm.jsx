import { useState } from "react";
import { FormattedMessage } from "react-intl";
import Datepicker from "react-tailwindcss-datepicker";

const PassengersInformationForm = ({ dir }) => {
  // search database for matching passport number
  const data = [
    { name: "Amir", sex: "Man", passportNumber: "123456" },
    { name: "Sarah", sex: "Woman", passportNumber: "654321" },
    { name: "John", sex: "Man", passportNumber: "987654" },
  ];
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl p-8 " dir={dir}>
      <h2 className="card-title">Passengers Information</h2>
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8">
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text font-bold">Passport Number</span>
          </label>
          <input
            type="text"
            placeholder="Passport Number"
            className="input input-bordered  w-full max-w-xs "
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">Family Name</span>
          </label>
          <input
            type="text"
            placeholder="Family Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">Nationality</span>
          </label>
          <select className="select select-bordered ">
            <option>Iran</option>
            <option>Iraq</option>
            <option>Oman</option>
            <option>Syria</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold ">National Id</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">Sex</span>
          </label>
          <select className="select select-bordered ">
            <option>Man</option>
            <option>Woman</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label font-bold">Birth Date</label>
          <Datepicker
            useRange={false}
            asSingle={true}
            value={value}
            onChange={handleValueChange}
            inputClassName="input input-bordered rounded-none w-full max-w-xs "
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label font-bold">Passport Expiry Date</label>
          <Datepicker
            useRange={false}
            asSingle={true}
            value={value}
            onChange={handleValueChange}
            inputClassName="input input-bordered rounded-none w-full max-w-xs "
          />
        </div>
      </form>
    </div>
  );
};

export default PassengersInformationForm;
