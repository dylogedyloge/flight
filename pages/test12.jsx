import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  origin: "",
  destination: "",
  flightDate: "",
  flightClass: "",
  numOfPassengers: {
    adults: 1,
    children: 0,
    infants: 0,
  },
};

const validationSchema = Yup.object({
  origin: Yup.string().required("Required"),
  destination: Yup.string().required("Required"),
  flightDate: Yup.date().required("Required"),
  flightClass: Yup.string().required("Required"),
});

const MyForm = () => {
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
        // submit logic here
      }}
      validationSchema={validationSchema}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="max-w-md mx-auto">
          {/* Origin */}
          <div className="mb-4">
            <label
              htmlFor="origin"
              className="block text-gray-700 font-bold mb-2"
            >
              Origin
            </label>
            <Field
              as="select"
              id="origin"
              name="origin"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:${
                errors.origin && touched.origin
                  ? "border-red-500"
                  : "border-blue-500"
              } focus:bg-white focus:border-blue-500`}
            >
              <option value="">Select origin</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Houston">Houston</option>
            </Field>
            {errors.origin && touched.origin ? (
              <div className="text-red-500">{errors.origin}</div>
            ) : null}
          </div>

          {/* Destination */}
          <div className="mb-4">
            <label
              htmlFor="destination"
              className="block text-gray-700 font-bold mb-2"
            >
              Destination
            </label>
            <Field
              as="select"
              id="destination"
              name="destination"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:${
                errors.destination && touched.destination
                  ? "border-red-500"
                  : "border-blue-500"
              } focus:bg-white focus:border-blue-500`}
            >
              <option value="">Select destination</option>
              <option value="London">London</option>
              <option value="Paris">Paris</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Sydney">Sydney</option>
            </Field>
            {errors.destination && touched.destination ? (
              <div className="text-red-500">{errors.destination}</div>
            ) : null}
          </div>

          {/* Flight date */}
          <div className="mb-4">
            <label
              htmlFor="flightDate"
              className="block text-gray-700 font-bold mb-2"
            >
              Flight Date
            </label>
            <Field
              type="date"
              id="flightDate"
              name="flightDate"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:${
                errors.flightDate && touched.flightDate
                  ? "border-red-500"
                  : "border-blue-500"
              } focus:bg-white focus:border-blue-500`}
            />
            {errors.flightDate && touched.flightDate ? (
              <div className="text-red">{errors.flightDate}</div>
            ) : null}
          </div>

          {/* Flight class */}
          <div className="mb-4">
            <label
              htmlFor="flightClass"
              className="block text-gray-700 font-bold mb-2"
            >
              Flight Class
            </label>
            <Field
              as="select"
              id="flightClass"
              name="flightClass"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:${
                errors.flightClass && touched.flightClass
                  ? "border-red-500"
                  : "border-blue-500"
              } focus:bg-white focus:border-blue-500`}
            >
              <option value="">Select flight class</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First Class">First Class</option>
            </Field>
            {errors.flightClass && touched.flightClass ? (
              <div className="text-red-500">{errors.flightClass}</div>
            ) : null}
          </div>

          {/* Dropdowns for selecting number of passengers */}

          <div style={{ marginBottom: "10px" }}>
            <button
              type="button"
              onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
              className={`bg-blue-${
                showPassengerDropdown ? "200" : "300"
              } hover:bg-blue-${
                showPassengerDropdown ? "200" : "400"
              }  font-bold py-1 px-2 rounded`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              Number of Passengers
              {showPassengerDropdown ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 11.414l5.707-5.707a1 1 0 011.414 1.414l-6.364 6.364a1 1 0 01-1.414 0L2.879 6.121a1 1 0 011.414-1.414L10 11.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current"
                  viewBox="0 -2 20 24"
                >
                  <path d="M18,8 L18,10 L2,10 L2,8 L18,8 Z M18,4 L18,6 L2,6 L2,4 L18,4 Z M18,-2 L18,0 L2,0 L2,-2 L18,-2 Z"></path>
                </svg>
              )}
            </button>

            {showPassengerDropdown && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "5px",
                  padding: "5px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                {/* Adults */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Adults:
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                      type="button"
                      onClick={() =>
                        values.numOfPassengers.adults > 1 &&
                        setFieldValue(
                          "numOfPassengers.adults",
                          values.numOfPassengers.adults - 1
                        )
                      }
                      className={`bg-blue-${
                        values.numOfPassengers.adults > 1 ? "500" : "300"
                      } hover:bg-blue-${
                        values.numOfPassengers.adults > 1 ? "600" : "400"
                      } text-white font-bold py-1 px-2 rounded`}
                    >
                      -
                    </button>
                    <div>{values.numOfPassengers.adults}</div>
                    <button
                      type="button"
                      onClick={() =>
                        setFieldValue(
                          "numOfPassengers.adults",
                          values.numOfPassengers.adults + 1
                        )
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Children:
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                      type="button"
                      onClick={() =>
                        values.numOfPassengers.children > 0 &&
                        setFieldValue(
                          "numOfPassengers.children",
                          values.numOfPassengers.children - 1
                        )
                      }
                      className={`bg-blue-${
                        values.numOfPassengers.children > 0 ? "500" : "300"
                      } hover:bg-blue-${
                        values.numOfPassengers.children > 0 ? "600" : "400"
                      } text-white font-bold py-1 px-2 rounded`}
                    >
                      -
                    </button>
                    <div>{values.numOfPassengers.children}</div>
                    <button
                      type="button"
                      onClick={() =>
                        setFieldValue(
                          "numOfPassengers.children",
                          values.numOfPassengers.children + 1
                        )
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Infants */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Infants:
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                      type="button"
                      onClick={() =>
                        values.numOfPassengers.infants > 0 &&
                        setFieldValue(
                          "numOfPassengers.infants",
                          values.numOfPassengers.infants - 1
                        )
                      }
                      className={`bg-blue-${
                        values.numOfPassengers.infants > 0 ? "500" : "300"
                      } hover:bg-blue-${
                        values.numOfPassengers.infants > 0 ? "600" : "400"
                      } text-white font-bold py-1 px-2 rounded`}
                    >
                      -
                    </button>
                    <div>{values.numOfPassengers.infants}</div>
                    <button
                      type="button"
                      onClick={() =>
                        setFieldValue(
                          "numOfPassengers.infants",
                          values.numOfPassengers.infants + 1
                        )
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
