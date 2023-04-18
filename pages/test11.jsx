import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import NumberOfPassengersForm from "../components/NumberOfPassengersForm";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

const ReservationForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      origin: "",
      destination: "",
      flightDate: "",
      flightClass: "",
      numOfPassengers: {
        adults: 1,
        children: 0,
        infants: 0,
      },
    },
    validationSchema: Yup.object().shape({
      origin: Yup.string().required("Please select your origin airport"),
      destination: Yup.string().required(
        "Please select your destination airport"
      ),
      flightDate: Yup.date().required("Please select your flight date"),
      flightClass: Yup.string().required("Please select your flight class"),
      numOfPassengers: Yup.object().shape({
        adults: Yup.number().min(1),
        children: Yup.number().min(0),
        infants: Yup.number().min(0),
      }),
    }),
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    },
  });
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePassengersChange = (type, operation) => {
    const newValues = { ...formik.numOfPassengers.values };
    if (operation === "add") {
      newValues[type]++;
    } else if (operation === "subtract" && newValues[type] > 0) {
      newValues[type]--;
    }
    formik.numOfPassengers.setValues(newValues);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="origin">Origin Airport</label>
        <select
          id="origin"
          name="origin"
          value={formik.values.origin}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select an origin airport</option>
          <option value="LAX">Los Angeles (LAX)</option>
          <option value="JFK">New York (JFK)</option>
          <option value="SFO">San Francisco (SFO)</option>
        </select>
        {formik.touched.origin && formik.errors.origin && (
          <div>{formik.errors.origin}</div>
        )}
      </div>

      <div>
        <label htmlFor="destination">Destination Airport</label>
        <select
          id="destination"
          name="destination"
          value={formik.values.destination}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select a destination airport</option>
          <option value="LAX">Los Angeles (LAX)</option>
          <option value="JFK">New York (JFK)</option>
          <option value="SFO">San Francisco (SFO)</option>
        </select>
        {formik.touched.destination && formik.errors.destination && (
          <div>{formik.errors.destination}</div>
        )}
      </div>

      <div>
        <label htmlFor="flightDate">Flight Date</label>
        <input
          type="date"
          id="flightDate"
          name="flightDate"
          value={formik.values.flightDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.flightDate && formik.errors.flightDate && (
          <div>{formik.errors.flightDate}</div>
        )}
      </div>

      <div>
        <label htmlFor="flightClass">Flight Class</label>
        <select
          id="flightClass"
          name="flightClass"
          value={formik.values.flightClass}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select a flight class</option>
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="firstClass">First Class</option>
        </select>
        {formik.touched.flightClass && formik.errors.flightClass && (
          <div>{formik.errors.flightClass}</div>
        )}
        <label htmlFor="passengers">Number of Passengers</label>
        <div className="input input-bordered" onClick={handleDropdownToggle}>
          <span>{`${formik.values.numOfPassengers.adults} Adults, ${formik.values.numOfPassengers.children} Children, ${formik.values.numOfPassengers.infants} Infants`}</span>
        </div>
        {isDropdownOpen && (
          <div className="dropdown">
            <div className="flex">
              <span>Adults</span>
              <div className="flex items-center">
                <HiMinusCircle
                  onClick={() => handlePassengersChange("adults", "subtract")}
                />
                <span>{formik.values.numOfPassengers.adults}</span>
                <HiPlusCircle
                  onClick={() => handlePassengersChange("adults", "add")}
                />
              </div>
              {formik.touched.numOfPassengersadults &&
                formik.errors.numOfPassengers.adults && (
                  <div className="alert alert-error shadow-lg">
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
                      <span>{formik.errors.numOfPassengers.adults}</span>
                    </div>
                  </div>
                )}
            </div>
            <div className="flex">
              <span>Children</span>
              <div className="flex items-center">
                <HiMinusCircle
                  onClick={() => handlePassengersChange("children", "subtract")}
                />
                <span>{formik.values.numOfPassengers.children}</span>
                <HiPlusCircle
                  onClick={() => handlePassengersChange("children", "add")}
                />
              </div>
            </div>
            <div className="flex">
              <span>Infants</span>
              <div className="flex items-center">
                <HiMinusCircle
                  onClick={() => handlePassengersChange("infants", "subtract")}
                />
                <span>{formik.values.numOfPassengers.infants}</span>
                <HiPlusCircle
                  onClick={() => handlePassengersChange("infants", "add")}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReservationForm;
