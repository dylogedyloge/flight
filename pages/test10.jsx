import { useState } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { useFormik } from "formik";
import * as yup from "yup";

const PassengersInputSchema = yup.object().shape({
  adults: yup.number().min(1),
  children: yup.number().min(0),
  infants: yup.number().min(0),
});

function PassengerInput() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    validationSchema: PassengersInputSchema,
    onSubmit: (values) => {
      console.log(values);
    },
    touched: {
      // initialize touched object with the same keys as initialValues object
      adults: false,
      children: false,
      infants: false,
    },
  });

  //   const [guests, setGuests] = useState({
  //     adults: 1,
  //     children: 0,
  //     infants: 0,
  //   });

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePassengersChange = (type, operation) => {
    const newValues = { ...formik.values };
    if (operation === "add") {
      newValues[type]++;
    } else if (operation === "subtract" && newValues[type] > 0) {
      newValues[type]--;
    }
    formik.setValues(newValues);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="passengers">Number of Passengers</label>
      <div className="input input-bordered" onClick={handleDropdownToggle}>
        <span>{`${formik.values.adults} Adults, ${formik.values.children} Children, ${formik.values.infants} Infants`}</span>
      </div>
      {isDropdownOpen && (
        <div className="dropdown">
          <div className="flex">
            <span>Adults</span>
            <div className="flex items-center">
              <HiMinusCircle
                onClick={() => handlePassengersChange("adults", "subtract")}
              />
              <span>{formik.values.adults}</span>
              <HiPlusCircle
                onClick={() => handlePassengersChange("adults", "add")}
              />
            </div>
            {formik.touched.adults && formik.errors.adults && (
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
                  <span>{formik.errors.adults}</span>
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
              <span>{formik.values.children}</span>
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
              <span>{formik.values.infants}</span>
              <HiPlusCircle
                onClick={() => handlePassengersChange("infants", "add")}
              />
            </div>
          </div>
        </div>
      )}
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}

export default PassengerInput;
